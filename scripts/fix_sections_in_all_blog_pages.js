const fs = require("fs");
const path = require("path");

const blogAppDir = path.join(__dirname, "../src/app/blog");
const subdirs = fs.readdirSync(blogAppDir);

let count = 0;

subdirs.forEach(subdir => {
  const pagePath = path.join(blogAppDir, subdir, "page.tsx");
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, "utf-8");

    // Remove any duplicate or orphaned 'const sections =' declarations
    // Now inject clean sections definition inside default export function
    const funcMatch = content.match(/export default async function [A-Za-z0-9_]+\(\{\s*searchParams\s*\}:/);

    if (funcMatch) {
      const funcIndex = content.indexOf(funcMatch[0]);
      const bodyStartIndex = content.indexOf("{", funcIndex);
      
      const targetStr = `const locale = resolvedSearchParams.locale ?? "en";`;
      const localeIndex = content.indexOf(targetStr, bodyStartIndex);

      if (localeIndex !== -1) {
        // Check if sections is already declared after localeIndex
        const nextReturnIndex = content.indexOf("return (", localeIndex);
        const snippetBetween = content.slice(localeIndex, nextReturnIndex);

        if (!snippetBetween.includes("const sections =")) {
          const injectCode = `\n  const localeData = getBlogDataByLocale("${subdir}", locale);\n  const sections = localeData && localeData.length > 0 ? localeData : articleSections;\n`;
          content = content.slice(0, localeIndex + targetStr.length) + injectCode + content.slice(localeIndex + targetStr.length);
          fs.writeFileSync(pagePath, content, "utf-8");
          count++;
          console.log(`Injected sections definition in ${subdir}`);
        }
      }
    }
  }
});

console.log(`Successfully updated ${count} blog page components!`);
