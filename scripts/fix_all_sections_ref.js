const fs = require("fs");
const path = require("path");

const blogDir = path.join(__dirname, "../src/app/blog");
const folders = fs.readdirSync(blogDir);

let fixedCount = 0;

folders.forEach((folder) => {
  const pagePath = path.join(blogDir, folder, "page.tsx");
  if (!fs.existsSync(pagePath)) return;

  let content = fs.readFileSync(pagePath, "utf-8");

  // Check if file uses DynamicArticle
  if (content.includes("<DynamicArticle")) {
    // Determine default sections array name in file
    let fallbackName = "articleSections";
    if (content.includes("const articleSectionsEn =") || content.includes("let articleSectionsEn =")) {
      fallbackName = "articleSectionsEn";
    } else if (content.includes("const articleSections =") || content.includes("let articleSections =")) {
      fallbackName = "articleSections";
    }

    // Ensure import is present
    if (!content.includes('from "@/utils/getBlogData"')) {
      content = `import { getBlogDataByLocale } from "@/utils/getBlogData";\n` + content;
    }

    // Replace or insert sections declaration
    const componentMatch = content.match(/export default async function\s+\w+\s*\([^)]*\)\s*\{/);
    if (componentMatch) {
      // Remove old broken sections/localeData declarations inside component
      content = content.replace(/const\s+localeData\s*=\s*getBlogDataByLocale\([^)]+\);\s*/g, "");
      content = content.replace(/const\s+sections\s*=\s*[\s\S]*?;/g, "");

      const newDeclarations = `\n  const localeData = getBlogDataByLocale("${folder}", locale);\n  const sections = localeData && localeData.length > 0 ? localeData : ${fallbackName};\n`;

      // Insert right after const locale = ...
      if (content.includes('const locale = resolvedSearchParams.locale ?? "en";')) {
        content = content.replace(
          'const locale = resolvedSearchParams.locale ?? "en";',
          `const locale = resolvedSearchParams.locale ?? "en";${newDeclarations}`
        );
      } else if (content.includes('const locale = params.locale')) {
        content = content.replace(
          'const locale = params.locale',
          `const locale = params.locale${newDeclarations}`
        );
      }
    }

    fs.writeFileSync(pagePath, content, "utf-8");
    fixedCount++;
  }
});

console.log(`Successfully verified and fixed sections references in ${fixedCount} blog pages!`);
