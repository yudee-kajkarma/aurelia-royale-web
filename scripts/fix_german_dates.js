const fs = require("fs");
const path = require("path");

const deCardsPath = path.join(__dirname, "../src/data/blogs.data.de.json");
const appBlogDir = path.join(__dirname, "../src/app/blog");

const monthMap = {
  "janvier": "Januar", "january": "Januar", "januari": "Januar",
  "février": "Februar", "february": "Februar", "februari": "Februar",
  "mars": "März", "march": "März", "maart": "März",
  "avril": "April", "april": "April",
  "mai": "Mai", "may": "Mai",
  "juin": "Juni", "june": "Juni",
  "juillet": "Juli", "july": "Juli", "juli": "Juli",
  "août": "August", "august": "Augustus",
  "septembre": "September", "september": "September",
  "octobre": "Oktober", "october": "Oktober",
  "novembre": "November", "november": "November",
  "décembre": "Dezember", "december": "Dezember"
};

function formatGermanDate(str) {
  if (!str || typeof str !== "string") return str;
  let formatted = str;
  for (const [fr, de] of Object.entries(monthMap)) {
    const reg = new RegExp(`(\\d{1,2})\\s+${fr}\\s+(\\d{4})`, "gi");
    formatted = formatted.replace(reg, `$1. ${de} $2`);
  }
  return formatted;
}

// 1. Fix blogs.data.de.json
if (fs.existsSync(deCardsPath)) {
  const cards = JSON.parse(fs.readFileSync(deCardsPath, "utf-8"));
  let updatedCount = 0;
  const newCards = cards.map(c => {
    const newDate = formatGermanDate(c.date);
    if (newDate !== c.date) updatedCount++;
    return { ...c, date: newDate };
  });

  fs.writeFileSync(deCardsPath, JSON.stringify(newCards, null, 2), "utf-8");
  console.log(`Updated ${updatedCount} dates in blogs.data.de.json to 100% German format!`);
}

// 2. Fix page.tsx date strings for locale === "de"
const dirs = fs.readdirSync(appBlogDir);
let pagesCount = 0;

dirs.forEach(d => {
  const pagePath = path.join(appBlogDir, d, "page.tsx");
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, "utf-8");
    if (content.includes("16 juillet 2026")) {
      content = content.replace(/16 juillet 2026/g, "16. Juli 2026");
      fs.writeFileSync(pagePath, content, "utf-8");
      pagesCount++;
    }
  }
});

console.log(`Updated ${pagesCount} hero header dates in page.tsx components!`);
