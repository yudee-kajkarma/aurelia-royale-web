const fs = require("fs");
const path = require("path");

const blogAppDir = path.join(__dirname, "../src/app/blog");
const subdirs = fs.readdirSync(blogAppDir);

let fixedCount = 0;

subdirs.forEach(subdir => {
  const pagePath = path.join(blogAppDir, subdir, "page.tsx");
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, "utf-8");

    // Check if sections is used in return but not defined in Page function
    if (content.includes("sections={sections}") && !content.includes("const sections =")) {
      const injectCode = `  const localeData = getBlogDataByLocale("${subdir}", locale);\n  const sections = localeData && localeData.length > 0 ? localeData : articleSections;\n\n`;

      if (content.includes("const schema =")) {
        const schemaIndex = content.indexOf("\n", content.indexOf("const schema ="));
        content = content.slice(0, schemaIndex + 1) + injectCode + content.slice(schemaIndex + 1);
      } else if (content.includes("return (")) {
        const returnIndex = content.indexOf("return (");
        content = content.slice(0, returnIndex) + injectCode + content.slice(returnIndex);
      }

      fs.writeFileSync(pagePath, content, "utf-8");
      fixedCount++;
      console.log(`Fixed missing sections in: ${subdir}`);
    }
  }
});

console.log(`Total blog page components fixed: ${fixedCount}`);
