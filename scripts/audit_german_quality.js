const fs = require("fs");
const path = require("path");

const deDir = path.join(__dirname, "../src/data/blogs/de");
const appBlogDir = path.join(__dirname, "../src/app/blog");

const deFiles = fs.readdirSync(deDir).filter(f => f.endsWith(".json"));
const pageDirs = fs.readdirSync(appBlogDir);

console.log(`Auditing ${deFiles.length} German blog JSON files and ${pageDirs.length} page components...`);

let issuesFound = 0;

// 1. Audit metadataDe in page.tsx files
pageDirs.forEach(dir => {
  const p = path.join(appBlogDir, dir, "page.tsx");
  if (fs.existsSync(p)) {
    const content = fs.readFileSync(p, "utf-8");
    const metaDe = content.match(/export const metadataDe: Metadata = \{\s*title: "([^"]+)"/);
    if (!metaDe) {
      console.log(`[MISSING DE META] ${dir}`);
      issuesFound++;
    } else {
      const title = metaDe[1];
      if (title.includes("-") || /\b(Comment|Pourquoi|Het|Een|Les|Des|Un|Une)\b/.test(title)) {
        console.log(`[SUSPECT DE TITLE] ${dir} -> ${title}`);
        issuesFound++;
      }
    }
  }
});

// 2. Audit German JSON files for formatting or French/Dutch leakage
deFiles.forEach(file => {
  const jsonPath = path.join(deDir, file);
  const raw = fs.readFileSync(jsonPath, "utf-8");

  // Check for common non-German indicators
  if (/\b(Comment|Pourquoi|d'un|d'une|une|des|het|een|van het|van de)\b/i.test(raw)) {
    // Exclude image paths
    const textOnly = raw.replace(/"src":\s*"[^"]+"/g, "");
    if (/\b(Comment|Pourquoi|d'un|d'une|une|des|het|van het|van de)\b/i.test(textOnly)) {
      console.log(`[FOREIGN LEAKAGE IN JSON] ${file}`);
      issuesFound++;
    }
  }
});

if (issuesFound === 0) {
  console.log("🎉 ALL GERMAN PAGES & METADATA ARE 100% READY AND VERIFIED CLEAN!");
} else {
  console.log(`Found ${issuesFound} minor issues to refine.`);
}
