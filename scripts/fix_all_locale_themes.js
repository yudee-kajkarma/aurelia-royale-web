const fs = require("fs");
const path = require("path");

const locales = ["fr", "nl", "es"];
const baseDir = path.join(__dirname, "../src/data/blogs");

// These are the translated theme values that should all be "gold-border"
const badThemes = [
  '"theme": "bordure dorée"',   // French
  '"theme": "gouden rand"',     // Dutch
  '"theme": "borde dorado"',    // Spanish
  '"theme": "borde de oro"',    // Spanish alternate
  '"theme": "goldener Rand"',   // German (should already be fixed)
  '"theme": "gold"',            // Simplified
];

let totalFixed = 0;

locales.forEach(locale => {
  const dir = path.join(baseDir, locale);
  if (!fs.existsSync(dir)) return;
  
  const files = fs.readdirSync(dir).filter(f => f.endsWith(".json"));
  let localeFixed = 0;
  
  files.forEach(file => {
    const p = path.join(dir, file);
    let content = fs.readFileSync(p, "utf-8");
    let original = content;
    
    badThemes.forEach(bad => {
      content = content.split(bad).join('"theme": "gold-border"');
    });
    
    if (content !== original) {
      fs.writeFileSync(p, content, "utf-8");
      localeFixed++;
    }
  });
  
  console.log(`${locale.toUpperCase()}: Fixed theme in ${localeFixed} files`);
  totalFixed += localeFixed;
});

console.log(`\nTotal: Fixed theme values in ${totalFixed} files across FR, NL, ES`);
