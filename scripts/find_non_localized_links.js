const fs = require("fs");
const path = require("path");

const rootDir = path.join(__dirname, "../src");

function walk(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walk(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const files = walk(rootDir);
const results = [];

for (const file of files) {
  if (!file.endsWith(".tsx") && !file.endsWith(".ts")) continue;
  const content = fs.readFileSync(file, "utf-8");
  
  // Use regex to find all <Link ... href={...} or href="..."
  // but check if they use localizeHref
  const linkMatches = content.match(/<Link\b[^>]*>/g);
  if (!linkMatches) continue;
  
  for (const link of linkMatches) {
    const hrefMatch = link.match(/href=(?:"([^"]*)"|{([^}]*)})/);
    if (hrefMatch) {
      const hrefValue = hrefMatch[1] || hrefMatch[2];
      // Skip if it's external link or if it uses localizeHref
      if (hrefValue.startsWith("http") || hrefValue.startsWith("mailto:") || hrefValue.startsWith("tel:")) continue;
      if (hrefValue.includes("localizeHref")) continue;
      
      results.push({
        file: file.replace(path.join(__dirname, ".."), ""),
        linkTag: link,
        hrefValue: hrefValue
      });
    }
  }
}

console.log(JSON.stringify(results, null, 2));
