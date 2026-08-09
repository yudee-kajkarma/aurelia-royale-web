const fs = require("fs");
const path = require("path");

const appDir = path.join(__dirname, "../src/app");

function walk(dir, files = []) {
  const list = fs.readdirSync(dir);
  for (const item of list) {
    const p = path.join(dir, item);
    if (fs.statSync(p).isDirectory()) {
      walk(p, files);
    } else if (item === "page.tsx") {
      files.push(p);
    }
  }
  return files;
}

const pages = walk(appDir);

pages.forEach(page => {
  const content = fs.readFileSync(page, "utf-8");
  const relPath = path.relative(appDir, page);
  
  // Find lines containing "locale" or "searchParams"
  const lines = content.split("\n");
  const matches = [];
  lines.forEach((line, idx) => {
    if (line.includes("locale") || line.includes("searchParams")) {
      matches.push(`  L${idx + 1}: ${line.trim()}`);
    }
  });
  
  if (matches.length > 0) {
    console.log(`Page: ${relPath}`);
    console.log(matches.slice(0, 10).join("\n"));
    console.log("-----------------------------------");
  }
});
