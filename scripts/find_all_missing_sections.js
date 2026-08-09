const fs = require("fs");
const path = require("path");

const blogDir = path.join(__dirname, "../src/app/blog");
const subdirs = fs.readdirSync(blogDir);

let missing = [];

subdirs.forEach((subdir) => {
  const pagePath = path.join(blogDir, subdir, "page.tsx");
  if (fs.existsSync(pagePath)) {
    const content = fs.readFileSync(pagePath, "utf-8");
    if (content.includes("<DynamicArticle sections={sections} />")) {
      // Find Page function body
      const fnIdx = content.indexOf("export default async function Page");
      if (fnIdx !== -1) {
        const body = content.slice(fnIdx);
        if (!body.includes("const sections")) {
          missing.push(subdir);
        }
      }
    }
  }
});

if (missing.length === 0) {
  console.log("SUCCESS! All blog pages properly define the `sections` variable inside Page().");
} else {
  console.log("MISSING SECTIONS IN:", missing);
}
