const fs = require("fs");
const path = require("path");

const blogDir = path.join(__dirname, "../src/app/blog");
const folders = fs.readdirSync(blogDir);

let fixedCount = 0;

folders.forEach((folder) => {
  const pagePath = path.join(blogDir, folder, "page.tsx");
  if (!fs.existsSync(pagePath)) return;

  let content = fs.readFileSync(pagePath, "utf-8");

  if (content.includes("<DynamicArticle sections={sections}") || content.includes("<DynamicArticle sections={sections}")) {
    const hasSectionsDef = content.includes("const sections =") || content.includes("let sections =");
    if (!hasSectionsDef) {
      let fallbackName = "articleSections";
      if (content.includes("const articleSectionsEn =") || content.includes("let articleSectionsEn =")) {
        fallbackName = "articleSectionsEn";
      } else if (content.includes("const articleSections =") || content.includes("let articleSections =")) {
        fallbackName = "articleSections";
      }

      if (!content.includes('from "@/utils/getBlogData"')) {
        content = `import { getBlogDataByLocale } from "@/utils/getBlogData";\n` + content;
      }

      const newDeclarations = `\n  const localeData = getBlogDataByLocale("${folder}", locale);\n  const sections = localeData && localeData.length > 0 ? localeData : ${fallbackName};\n`;

      if (content.includes('const locale = resolvedSearchParams.locale ?? "en";')) {
        content = content.replace(
          'const locale = resolvedSearchParams.locale ?? "en";',
          `const locale = resolvedSearchParams.locale ?? "en";${newDeclarations}`
        );
      } else if (content.includes('const locale = resolvedSearchParams.locale;')) {
        content = content.replace(
          'const locale = resolvedSearchParams.locale;',
          `const locale = resolvedSearchParams.locale;${newDeclarations}`
        );
      } else if (content.includes('const locale = params.locale')) {
        content = content.replace(
          'const locale = params.locale',
          `const locale = params.locale${newDeclarations}`
        );
      }

      fs.writeFileSync(pagePath, content, "utf-8");
      console.log(`Fixed missing sections definition in: ${folder}`);
      fixedCount++;
    }
  }
});

console.log(`Scan finished! Total fixed: ${fixedCount}`);
