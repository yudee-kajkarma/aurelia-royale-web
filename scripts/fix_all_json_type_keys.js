const fs = require("fs");
const path = require("path");

const deDir = path.join(__dirname, "../src/data/blogs/de");
const nlDir = path.join(__dirname, "../src/data/blogs/nl");
const frDir = path.join(__dirname, "../src/data/blogs/fr");
const esDir = path.join(__dirname, "../src/data/blogs/es");

const typeMap = {
  "bild": "image",
  "image": "image",
  "absatz": "paragraph",
  "paragraph": "paragraph",
  "aufzählungsliste": "bullet-list",
  "bullet-list": "bullet-list",
  "bullet list": "bullet-list",
  "nummerierte liste": "numbered-list",
  "numbered-list": "numbered-list",
  "numbered list": "numbered-list",
  "tisch": "table",
  "tabelle": "table",
  "table": "table",
  "callout": "callout",
  "hervorhebung": "callout",
  "faq": "faq",
  "cta-banner": "cta-banner",
  "cta banner": "cta-banner",
  "cta-group": "cta-group",
  "cta group": "cta-group"
};

function fixTypes(obj) {
  if (Array.isArray(obj)) {
    return obj.map(fixTypes);
  }
  if (typeof obj === "object" && obj !== null) {
    const newObj = {};
    for (const key of Object.keys(obj)) {
      if (key === "type" && typeof obj[key] === "string") {
        const lower = obj[key].toLowerCase();
        newObj[key] = typeMap[lower] || obj[key];
      } else {
        newObj[key] = fixTypes(obj[key]);
      }
    }
    return newObj;
  }
  return obj;
}

function processDirectory(dir, langName) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir).filter(f => f.endsWith(".json"));
  console.log(`Fixing block type keys across ${files.length} ${langName} JSON datasets...`);

  let count = 0;
  files.forEach(file => {
    const jsonPath = path.join(dir, file);
    try {
      const data = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
      const fixedData = fixTypes(data);
      fs.writeFileSync(jsonPath, JSON.stringify(fixedData, null, 2), "utf-8");
      count++;
    } catch (e) {
      console.error(`Error fixing ${file} in ${langName}:`, e);
    }
  });

  console.log(`Successfully fixed type keys across ${count} ${langName} JSON files!`);
}

processDirectory(deDir, "German (de)");
processDirectory(nlDir, "Dutch (nl)");
processDirectory(frDir, "French (fr)");
processDirectory(esDir, "Spanish (es)");
