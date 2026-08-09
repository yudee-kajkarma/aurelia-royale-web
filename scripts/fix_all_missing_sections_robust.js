const fs = require("fs");
const path = require("path");

const blogDir = path.join(__dirname, "../src/app/blog");
const subdirs = fs.readdirSync(blogDir);

let count = 0;

subdirs.forEach((subdir) => {
  const pagePath = path.join(blogDir, subdir, "page.tsx");
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, "utf-8");

    // Check if Page function body uses <DynamicArticle sections={sections} />
    if (content.includes("<DynamicArticle sections={sections} />")) {
      const pageFnIdx = content.indexOf("export default async function Page");
      if (pageFnIdx !== -1) {
        const pageBody = content.slice(pageFnIdx);
        if (!pageBody.includes("const sections =")) {
          // Find `const locale = resolvedSearchParams.locale ?? "en";`
          const target = `const locale = resolvedSearchParams.locale ?? "en";`;
          if (content.includes(target)) {
            const replacement = `${target}\n  const localeData = getBlogDataByLocale("${subdir}", locale);\n  const sections = localeData && localeData.length > 0 ? localeData : articleSections;`;
            content = content.replace(target, replacement);
            fs.writeFileSync(pagePath, content, "utf-8");
            count++;
          }
        }
      }
    }
  }
});

console.log(`Successfully fixed sections in ${count} blog page files!`);
