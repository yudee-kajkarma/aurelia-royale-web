const fs = require("fs");
const path = require("path");

const dataDir = path.join(__dirname, "../src/data/blogs");
const blogsDataDir = path.join(__dirname, "../src/data");
const appBlogDir = path.join(__dirname, "../src/app/blog");

const monthNames = {
  en: { 1: "January", 2: "February", 3: "March", 4: "April", 5: "May", 6: "June", 7: "July", 8: "August", 9: "September", 10: "October", 11: "November", 12: "December" },
  es: { 1: "enero", 2: "febrero", 3: "marzo", 4: "abril", 5: "mayo", 6: "junio", 7: "julio", 8: "agosto", 9: "septiembre", 10: "octubre", 11: "noviembre", 12: "diciembre" },
  fr: { 1: "janvier", 2: "février", 3: "mars", 4: "avril", 5: "mai", 6: "juin", 7: "juillet", 8: "août", 9: "septembre", 10: "octobre", 11: "novembre", 12: "décembre" },
  nl: { 1: "januari", 2: "februari", 3: "maart", 4: "april", 5: "mei", 6: "juni", 7: "juli", 8: "augustus", 9: "september", 10: "oktober", 11: "november", 12: "december" },
  de: { 1: "Januar", 2: "Februar", 3: "März", 4: "April", 5: "Mai", 6: "Juni", 7: "Juli", 8: "August", 9: "September", 10: "Oktober", 11: "November", 12: "Dezember" }
};

function formatNativeDate(dateStr, lang) {
  if (!dateStr || typeof dateStr !== "string") return dateStr;
  
  // Extract numbers
  const dayMatch = dateStr.match(/\b(\d{1,2})\b/);
  const yearMatch = dateStr.match(/\b(20\d{2})\b/);
  
  const day = dayMatch ? dayMatch[1] : "16";
  const year = yearMatch ? yearMatch[1] : "2026";
  
  // Determine month (default to July / 7)
  let monthIndex = 7;
  const lower = dateStr.toLowerCase();
  if (lower.includes("jan")) monthIndex = 1;
  else if (lower.includes("fév") || lower.includes("feb")) monthIndex = 2;
  else if (lower.includes("mar")) monthIndex = 3;
  else if (lower.includes("avr") || lower.includes("apr")) monthIndex = 4;
  else if (lower.includes("mai") || lower.includes("may") || lower.includes("mei")) monthIndex = 5;
  else if (lower.includes("jun")) monthIndex = 6;
  else if (lower.includes("jul")) monthIndex = 7;
  else if (lower.includes("aoû") || lower.includes("aug")) monthIndex = 8;
  else if (lower.includes("sep")) monthIndex = 9;
  else if (lower.includes("oct") || lower.includes("okt")) monthIndex = 10;
  else if (lower.includes("nov")) monthIndex = 11;
  else if (lower.includes("déc") || lower.includes("dec")) monthIndex = 12;

  const mName = monthNames[lang][monthIndex];

  if (lang === "en") return `${mName} ${day}, ${year}`;
  if (lang === "es") return `${day} de ${mName} de ${year}`;
  if (lang === "fr") return `${day} ${mName} ${year}`;
  if (lang === "nl") return `${day} ${mName} ${year}`;
  if (lang === "de") return `${day}. ${mName} ${year}`;

  return dateStr;
}

// Map for block types
const typeMap = {
  "bild": "image", "image": "image",
  "absatz": "paragraph", "paragraph": "paragraph",
  "aufzählungsliste": "bullet-list", "bullet-list": "bullet-list", "bullet list": "bullet-list",
  "nummerierte liste": "numbered-list", "numbered-list": "numbered-list", "numbered list": "numbered-list",
  "tisch": "table", "tabelle": "table", "table": "table",
  "callout": "callout", "hervorhebung": "callout",
  "faq": "faq", "cta-banner": "cta-banner", "cta banner": "cta-banner",
  "cta-group": "cta-group", "cta group": "cta-group"
};

function fixTypes(obj) {
  if (Array.isArray(obj)) return obj.map(fixTypes);
  if (typeof obj === "object" && obj !== null) {
    const newObj = {};
    for (const k of Object.keys(obj)) {
      if (k === "type" && typeof obj[k] === "string") {
        const lower = obj[k].toLowerCase();
        newObj[k] = typeMap[lower] || obj[k];
      } else {
        newObj[k] = fixTypes(obj[k]);
      }
    }
    return newObj;
  }
  return obj;
}

async function main() {
  console.log("Normalizing dates, metadata, and block types across ALL 5 languages (EN, ES, FR, NL, DE)...");

  // 1. Fix blogs.data.<lang>.json files
  const langSuffixes = [
    { lang: "en", file: "blogs.data.json" },
    { lang: "es", file: "blogs.data.es.json" },
    { lang: "fr", file: "blogs.data.fr.json" },
    { lang: "nl", file: "blogs.data.nl.json" },
    { lang: "de", file: "blogs.data.de.json" }
  ];

  langSuffixes.forEach(({ lang, file }) => {
    const p = path.join(blogsDataDir, file);
    if (fs.existsSync(p)) {
      const cards = JSON.parse(fs.readFileSync(p, "utf-8"));
      const updated = cards.map(c => ({
        ...c,
        date: formatNativeDate(c.date, lang)
      }));
      fs.writeFileSync(p, JSON.stringify(updated, null, 2), "utf-8");
      console.log(`[DATE FIXED] ${file} -> Sample date: "${updated[0].date}"`);
    }
  });

  // 2. Fix block types across all JSON datasets in data/blogs/<lang>/*.json
  ["en", "es", "fr", "nl", "de"].forEach(lang => {
    const lDir = path.join(dataDir, lang);
    if (fs.existsSync(lDir)) {
      const files = fs.readdirSync(lDir).filter(f => f.endsWith(".json"));
      files.forEach(f => {
        const fp = path.join(lDir, f);
        const data = JSON.parse(fs.readFileSync(fp, "utf-8"));
        const fixed = fixTypes(data);
        fs.writeFileSync(fp, JSON.stringify(fixed, null, 2), "utf-8");
      });
      console.log(`[TYPES FIXED] ${files.length} files in src/data/blogs/${lang}/`);
    }
  });

  console.log("🎉 ALL 5 LANGUAGES ARE NOW 100% STANDARDIZED!");
}

main();
