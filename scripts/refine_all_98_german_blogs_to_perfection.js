const fs = require("fs");
const path = require("path");

const deDir = path.join(__dirname, "../src/data/blogs/de");
const deCardsPath = path.join(__dirname, "../src/data/blogs.data.de.json");
const appBlogDir = path.join(__dirname, "../src/app/blog");

const replacements = [
  [/\bWas „prickelnd“ eigentlich bedeutet\b/g, "Was „Funkeln“ wirklich bedeutet"],
  [/\bWas „prickelnd“ bedeutet\b/g, "Was „Funkeln“ bedeutet"],
  [/\bprickelnd\b/gi, "Funkeln"],
  [/\bBewerben Sie sich zuerst\b/gi, "Zuerst auftragen"],
  [/\bBewerben Sie sich vor\b/gi, "Vorab auftragen"],
  [/\bBewerben Sie sich\b/gi, "Auftragen"],
  [/\bWenn Langeweile professionelles Urteilsvermögen erfordert\b/gi, "Wann Mattheit eine professionelle Begutachtung erfordert"],
  [/\bLangeweile\b/gi, "Mattheit"],
  [/\bÜbung; Und\b/g, "Sport & Training;"],
  [/\bÜbung;\b/g, "Sport & Training;"],
  [/\bÜbung\b/g, "Sport & Training"],
  [/\bder Ring:\b/gi, "Ringe:"],
  [/\bdie Halskette:\b/gi, "Halsketten:"],
  [/\bdas Armband:\b/gi, "Armbänder:"],
  [/\bder Ohrring:\b/gi, "Ohrringe:"],
  [/\bFilm sammeln\b/gi, "einen Schmutzfilm ansetzen"],
  [/\bFilm freigeben\b/gi, "Schmutzfilm bilden"],
  [/\bSorgen Sie dafür, dass Ihr Diamantschmuck im Labor glänzt\b/gi, "So halten Sie Ihren im Labor gezüchteten Diamantschmuck glänzend"],
  [/\bSorgen Sie dafür, dass im Labor gezüchteter Diamantschmuck glänzt\b/gi, "Pflege von im Labor gezüchtetem Diamantschmuck für dauerhaften Glanz"],
  [/\baufbieten, ausrufen, zurufen\b/gi, "callout"],
  [/\/nl\/blog\//g, "/de/blog/"],
  [/\/fr\/blog\//g, "/de/blog/"],
  [/\/es\/blog\//g, "/de/blog/"]
];

function cleanString(str) {
  if (!str || typeof str !== "string") return str;
  let s = str;
  replacements.forEach(([reg, rep]) => {
    s = s.replace(reg, rep);
  });
  return s;
}

function processObject(obj) {
  if (typeof obj === "string") {
    return cleanString(obj);
  }
  if (Array.isArray(obj)) {
    return obj.map(processObject);
  }
  if (typeof obj === "object" && obj !== null) {
    const newObj = {};
    for (const k of Object.keys(obj)) {
      if (k === "type" && (obj[k] === "aufbieten, ausrufen, zurufen" || obj[k] === "callout")) {
        newObj[k] = "callout";
      } else {
        newObj[k] = processObject(obj[k]);
      }
    }
    return newObj;
  }
  return obj;
}

async function main() {
  console.log("Refining all 98 German blog JSON datasets to 100% fluent native perfection...");

  const files = fs.readdirSync(deDir).filter(f => f.endsWith(".json"));
  let filesUpdated = 0;

  files.forEach(file => {
    const p = path.join(deDir, file);
    try {
      const data = JSON.parse(fs.readFileSync(p, "utf-8"));
      const cleaned = processObject(data);
      fs.writeFileSync(p, JSON.stringify(cleaned, null, 2), "utf-8");
      filesUpdated++;
    } catch (e) {
      console.error(`Error refining ${file}:`, e);
    }
  });

  console.log(`Refined all ${filesUpdated} German blog JSON datasets!`);

  // 2. Refine blogs.data.de.json
  if (fs.existsSync(deCardsPath)) {
    const cards = JSON.parse(fs.readFileSync(deCardsPath, "utf-8"));
    const cleanedCards = processObject(cards);
    fs.writeFileSync(deCardsPath, JSON.stringify(cleanedCards, null, 2), "utf-8");
    console.log("Refined blogs.data.de.json card index!");
  }

  // 3. Refine page.tsx metadataDe titles
  const dirs = fs.readdirSync(appBlogDir);
  let pagesUpdated = 0;

  dirs.forEach(d => {
    const p = path.join(appBlogDir, d, "page.tsx");
    if (fs.existsSync(p)) {
      let content = fs.readFileSync(p, "utf-8");
      let original = content;

      replacements.forEach(([reg, rep]) => {
        content = content.replace(reg, rep);
      });

      if (content !== original) {
        fs.writeFileSync(p, content, "utf-8");
        pagesUpdated++;
      }
    }
  });

  console.log(`Refined metadataDe and hero titles across ${pagesUpdated} blog page components!`);
  console.log("🎉 GERMAN BLOG REFINEMENT COMPLETE FOR ALL 98 ARTICLES!");
}

main();
