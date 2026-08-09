const fs = require("fs");
const path = require("path");

const deDir = path.join(__dirname, "../src/data/blogs/de");
const sparklingPath = path.join(deDir, "keep-lab-grown-diamond-jewellery-sparkling.json");
const deCardsPath = path.join(__dirname, "../src/data/blogs.data.de.json");
const pagePath = path.join(__dirname, "../src/app/blog/keep-lab-grown-diamond-jewellery-sparkling/page.tsx");

// 1. Fix hrefs in all German JSON datasets to use /de/ instead of /nl/
const files = fs.readdirSync(deDir).filter(f => f.endsWith(".json"));
files.forEach(file => {
  const p = path.join(deDir, file);
  let content = fs.readFileSync(p, "utf-8");
  if (content.includes("/nl/blog/")) {
    content = content.replace(/\/nl\/blog\//g, "/de/blog/");
    fs.writeFileSync(p, content, "utf-8");
  }
});
console.log("Fixed internal link prefixes to /de/blog/ across all German JSON files!");

// 2. Refine keep-lab-grown-diamond-jewellery-sparkling.json
if (fs.existsSync(sparklingPath)) {
  let json = JSON.parse(fs.readFileSync(sparklingPath, "utf-8"));

  json.forEach(sec => {
    // Fix headings
    if (sec.heading === "Was „prickelnd“ eigentlich bedeutet") {
      sec.heading = "Was „Funkeln“ wirklich bedeutet";
    }
    if (sec.heading === "Geben Sie Glitzer pro Schmuckkategorie an") {
      sec.heading = "Glanztipps für jede Schmuckkategorie";
    }
    if (sec.heading === "Wenn Langeweile professionelles Urteilsvermögen erfordert") {
      sec.heading = "Wann Mattheit eine professionelle Begutachtung erfordert";
    }

    if (Array.isArray(sec.content)) {
      sec.content.forEach(b => {
        // Fix callout type
        if (b.type === "aufbieten, ausrufen, zurufen") {
          b.type = "callout";
        }

        // Fix table rows
        if (b.type === "table" && Array.isArray(b.rows)) {
          b.rows = b.rows.map(row => row.map(cell => {
            if (cell === "Bewerben Sie sich zuerst; Vor dem Schmuck trocknen lassen") {
              return "Creme/Lotion zuerst auftragen; vor dem Schmuck trocknen lassen";
            }
            return cell;
          }));
        }

        // Fix bullet list items
        if (b.type === "bullet-list" && Array.isArray(b.items)) {
          b.items = b.items.map(item => {
            if (item === "Übung; Und" || item === "Übung") return "Sport treiben & Training;";
            return item;
          });
        }

        // Fix category labels
        if (b.type === "paragraph" && Array.isArray(b.parts)) {
          b.parts.forEach(part => {
            if (part.text === "der Ring:") part.text = "Ringe:";
            if (part.text === "Die Halskette mit Anhänger:") part.text = "Halsketten & Anhänger:";
            if (part.text === "nach jedem Tragen:") part.text = "Nach jedem Tragen:";
            if (part.text === "Wenn der Film herauskommt:") part.text = "Wenn sich ein Schmutzfilm bildet:";
          });
        }
      });
    }
  });

  fs.writeFileSync(sparklingPath, JSON.stringify(json, null, 2), "utf-8");
  console.log("Refined keep-lab-grown-diamond-jewellery-sparkling.json with fluent native German!");
}

// 3. Update title in blogs.data.de.json
if (fs.existsSync(deCardsPath)) {
  const cards = JSON.parse(fs.readFileSync(deCardsPath, "utf-8"));
  const updated = cards.map(c => {
    if (c.slug === "keep-lab-grown-diamond-jewellery-sparkling") {
      return {
        ...c,
        title: "So halten Sie Ihren im Labor gezüchteten Diamantschmuck glänzend"
      };
    }
    return c;
  });
  fs.writeFileSync(deCardsPath, JSON.stringify(updated, null, 2), "utf-8");
}

// 4. Update title in page.tsx metadataDe
if (fs.existsSync(pagePath)) {
  let content = fs.readFileSync(pagePath, "utf-8");
  if (content.includes("metadataDe")) {
    content = content.replace(
      /export const metadataDe: Metadata = \{[\s\S]*?\};/,
      `export const metadataDe: Metadata = {\n  title: "So halten Sie Ihren im Labor gezüchteten Diamantschmuck glänzend",\n  description: "So halten Sie Ihren im Labor gezüchteten Diamantschmuck glänzend - Aurelia Royale",\n  alternates: {\n    canonical: "https://www.aureliaroyale.com/de/blog/keep-lab-grown-diamond-jewellery-sparkling/",\n  },\n};`
    );
    fs.writeFileSync(pagePath, content, "utf-8");
  }
}

console.log("SUCCESSFULLY PERFECTED GERMAN TRANSLATIONS!");
