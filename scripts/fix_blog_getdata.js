const fs = require("fs");
const path = require("path");

const blogDir = path.join(__dirname, "../src/app/blog");
const folders = fs.readdirSync(blogDir);

let fixedCount = 0;

folders.forEach((folder) => {
  const pagePath = path.join(blogDir, folder, "page.tsx");
  if (!fs.existsSync(pagePath)) return;

  let content = fs.readFileSync(pagePath, "utf-8");
  let modified = false;

  // 1. Ensure import from @/utils/getBlogData
  if (!content.includes('import { getBlogDataByLocale } from "@/utils/getBlogData";')) {
    content = content.replace(
      /import\s+\{\s*getBlogDataEs\s*\}\s+from\s+["']@\/utils\/getBlogDataEs["'];?/,
      'import { getBlogDataByLocale } from "@/utils/getBlogData";'
    );
    modified = true;
  }

  // 2. Replace any leftover getBlogDataEs(...) call
  if (content.includes("getBlogDataEs(")) {
    content = content.replace(
      /const\s+esData\s*=\s*locale\s*===\s*["']es["']\s*\?\s*getBlogDataEs\([^)]+\)\s*:\s*null;/g,
      `const localeData = getBlogDataByLocale("${folder}", locale);`
    );
    content = content.replace(/getBlogDataEs\([^)]+\)/g, `getBlogDataByLocale("${folder}", locale)`);
    modified = true;
  }

  // 3. Ensure localeData line exists
  if (!content.includes("const localeData =")) {
    content = content.replace(
      /const\s+sections\s*=\s*/,
      `const localeData = getBlogDataByLocale("${folder}", locale);\n  const sections = `
    );
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(pagePath, content, "utf-8");
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} blog pages with clean getBlogDataByLocale calls!`);
