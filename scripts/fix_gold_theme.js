const fs = require("fs");
const path = require("path");

const deDir = path.join(__dirname, "../src/data/blogs/de");
const files = fs.readdirSync(deDir).filter(f => f.endsWith(".json"));

let fixed = 0;
files.forEach(file => {
  const p = path.join(deDir, file);
  let content = fs.readFileSync(p, "utf-8");
  // Fix theme: "gold" -> "gold-border" (the DynamicArticle component expects "gold-border")
  // But avoid changing "gold-border" to "gold-border-border"
  if (content.includes('"theme": "gold"')) {
    content = content.replace(/"theme": "gold"/g, '"theme": "gold-border"');
    fs.writeFileSync(p, content, "utf-8");
    fixed++;
  }
});
console.log(`Fixed callout theme from "gold" to "gold-border" in ${fixed} files.`);
