const fs = require("fs");
const path = require("path");

const blogDir = path.join(__dirname, "../src/app/blog");
const subdirs = fs.readdirSync(blogDir);

let fixedCount = 0;

subdirs.forEach((subdir) => {
  const pagePath = path.join(blogDir, subdir, "page.tsx");
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, "utf-8");

    // If page passes sections={sections} but does not define const sections
    if (content.includes("sections={sections}") && !content.includes("const sections =")) {
      console.log(`Fixing missing sections in ${subdir}/page.tsx`);

      // Match Page component function
      const pageFnRegex = /(export default async function Page\(\{ searchParams \}: \{ searchParams: Promise<\{ locale\?: string \}> \}\) \{[\s\S]*?const locale = resolvedSearchParams\.locale \?\? "en";)/;

      if (pageFnRegex.test(content)) {
        const replacement = `$1\n  const localeData = getBlogDataByLocale("${subdir}", locale);\n  const sections = localeData && localeData.length > 0 ? localeData : articleSections;`;
        content = content.replace(pageFnRegex, replacement);
        fs.writeFileSync(pagePath, content, "utf-8");
        fixedCount++;
      } else {
        console.error(`Could not match Page function regex in ${subdir}/page.tsx`);
      }
    }
  }
});

console.log(`Successfully checked all blog pages. Fixed ${fixedCount} files.`);
