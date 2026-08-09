const fs = require("fs");
const path = require("path");

const blogDir = path.join(__dirname, "../src/app/blog");
const folders = fs.readdirSync(blogDir);

let fixedCount = 0;

folders.forEach((folder) => {
  const pagePath = path.join(blogDir, folder, "page.tsx");
  if (!fs.existsSync(pagePath)) return;

  let content = fs.readFileSync(pagePath, "utf-8");

  // Check if articleSections is referenced but not declared
  const referencesArticleSections = content.includes("articleSections");
  const declaresArticleSections = content.includes("const articleSections =") || content.includes("let articleSections =");

  if (referencesArticleSections && !declaresArticleSections) {
    // Check if articleSectionsEn is declared
    if (content.includes("articleSectionsEn")) {
      content = content.replace(/articleSections/g, "articleSectionsEn");
    } else {
      // It's a static JSX page where localeData line was added by mistake
      content = content.replace(/const\s+localeData\s*=\s*getBlogDataByLocale\([^)]+\);\s*/g, "");
      content = content.replace(/const\s+sections\s*=\s*localeData\s*&&\s*localeData\.length\s*>\s*0\s*\?\s*localeData\s*:\s*articleSections;\s*/g, "");
    }
    fs.writeFileSync(pagePath, content, "utf-8");
    fixedCount++;
  }
});

console.log(`Cleaned up ${fixedCount} blog pages!`);
