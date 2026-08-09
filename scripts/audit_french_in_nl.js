const fs = require("fs");
const path = require("path");

const blogDir = path.join(__dirname, "../src/app/blog");
const subdirs = fs.readdirSync(blogDir);

let count = 0;

subdirs.forEach(s => {
  const p = path.join(blogDir, s, "page.tsx");
  if (fs.existsSync(p)) {
    const content = fs.readFileSync(p, "utf-8");
    const metaNl = content.match(/export const metadataNl: Metadata = \{\s*title: "([^"]+)"/);
    if (metaNl) {
      const title = metaNl[1];
      if (/\b(Comment|Pourquoi|Que|Acheter|Avantages|Qu'est|Signification|Peut|Les|De)\b/.test(title)) {
        console.log(`FRENCH IN NL META: ${s} -> ${title}`);
        count++;
      }
    }
  }
});

console.log(`TOTAL BLOGS WITH FRENCH IN NL METADATA: ${count}`);
