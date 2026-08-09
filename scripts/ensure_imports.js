const fs = require("fs");
const path = require("path");

const blogDir = path.join(__dirname, "../src/app/blog");
const folders = fs.readdirSync(blogDir);

let fixedCount = 0;

folders.forEach((folder) => {
  const pagePath = path.join(blogDir, folder, "page.tsx");
  if (!fs.existsSync(pagePath)) return;

  let content = fs.readFileSync(pagePath, "utf-8");

  const usesGetBlogData = content.includes("getBlogDataByLocale(");
  const hasImport = content.includes('from "@/utils/getBlogData"') || content.includes("from '@/utils/getBlogData'");

  if (usesGetBlogData && !hasImport) {
    // Add import at top
    content = `import { getBlogDataByLocale } from "@/utils/getBlogData";\n` + content;
    fs.writeFileSync(pagePath, content, "utf-8");
    fixedCount++;
  }
});

console.log(`Added missing imports to ${fixedCount} blog pages!`);
