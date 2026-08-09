const fs = require("fs");
const path = require("path");

const nlDir = path.join(__dirname, "../src/data/blogs/nl");
const files = fs.readdirSync(nlDir).filter(f => f.endsWith(".json"));

let frenchFiles = [];

files.forEach(f => {
  const content = fs.readFileSync(path.join(nlDir, f), "utf-8");
  // Exclude image paths from French check
  const textOnly = content.replace(/"src":\s*"[^"]+"/g, "");
  
  const frenchRegex = /\b(comment|pourquoi|lorsque|chaque|tous|toutes|autres|bijoux|diamants|votre|vos|notre|nos|qu'est-ce|l'achat|l'entretien|d'un|d'une|une|des|sont|cette|cet|ces)\b/i;
  
  if (frenchRegex.test(textOnly)) {
    const matches = textOnly.match(new RegExp(frenchRegex.source, "gi"));
    frenchFiles.push({ file: f, matches: matches.slice(0, 5) });
  }
});

console.log(`STRICT FRENCH DETECTED IN ${frenchFiles.length} FILES:`);
frenchFiles.forEach(item => console.log(` - ${item.file}: [${item.matches.join(", ")}]`));
