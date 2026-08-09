const fs = require("fs");
const path = require("path");

const frBlogsDir = path.join(__dirname, "../src/data/blogs/fr");
const files = fs.readdirSync(frBlogsDir).filter(f => f.endsWith(".json"));

const regexIndicators = [
  /¿/, /¡/, /\bjoya\b/i, /\bjoyas\b/i, /\bjoyería\b/i, /\bde diamantes\b/i, /\bde laboratorio\b/i, /\buna bague\b/i, /\bpor lo que\b/i, /\bpara que\b/i, /\bcon\b/i, /\bsin\b/i, /\bcomo\b/i, /\/es\//, /\/fr\/es\//
];

let issues = [];

files.forEach((file) => {
  const filePath = path.join(frBlogsDir, file);
  const content = fs.readFileSync(filePath, "utf-8");
  regexIndicators.forEach((rgx) => {
    if (rgx.test(content)) {
      issues.push({ file, indicator: rgx.toString() });
    }
  });
});

if (issues.length === 0) {
  console.log("SUCCESS! ZERO Spanish indicators or broken links remain across all 98 French blog JSON files!");
} else {
  console.log(`Found ${issues.length} issues:`, issues);
}
