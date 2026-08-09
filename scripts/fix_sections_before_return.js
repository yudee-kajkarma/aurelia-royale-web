const fs = require("fs");
const path = require("path");

const blogDir = path.join(__dirname, "../src/app/blog");
const subdirs = fs.readdirSync(blogDir);

let fixed = 0;

subdirs.forEach((subdir) => {
  const pagePath = path.join(blogDir, subdir, "page.tsx");
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, "utf-8");

    // Only target files that use <DynamicArticle sections={sections} />
    if (content.includes("<DynamicArticle sections={sections} />")) {
      const pageFnIdx = content.indexOf("export default async function Page");
      if (pageFnIdx !== -1) {
        const beforeFn = content.slice(0, pageFnIdx);
        const fnBody = content.slice(pageFnIdx);

        // Check if sections is ALREADY defined inside Page function
        if (!fnBody.includes("const sections =")) {
          // Find return ( inside Page()
          const returnIdx = fnBody.indexOf("return (");
          if (returnIdx !== -1) {
            const fnBeforeReturn = fnBody.slice(0, returnIdx);
            const fnAfterReturn = fnBody.slice(returnIdx);

            const injection = `const localeData = getBlogDataByLocale("${subdir}", locale);\n  const sections = localeData && localeData.length > 0 ? localeData : articleSections;\n\n  `;
            content = beforeFn + fnBeforeReturn + injection + fnAfterReturn;
            fs.writeFileSync(pagePath, content, "utf-8");
            fixed++;
          }
        }
      }
    }
  }
});

console.log(`Successfully injected sections definition before return statement in ${fixed} blog pages!`);
