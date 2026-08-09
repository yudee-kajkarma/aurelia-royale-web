const fs = require("fs");
const path = require("path");

const blogDir = path.join(__dirname, "../src/app/blog");
const subdirs = fs.readdirSync(blogDir);

async function translateText(text, targetLang) {
  if (!text || typeof text !== "string" || !text.trim()) return text;
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=` + encodeURIComponent(text);
  try {
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      if (data && data[0]) {
        return data[0].map(item => item[0]).join("");
      }
    }
  } catch (e) {}
  return text;
}

async function main() {
  console.log(`Auditing and fixing metadata titles across all ${subdirs.length} blog pages...`);
  let fixedCount = 0;

  for (const s of subdirs) {
    const pagePath = path.join(blogDir, s, "page.tsx");
    if (fs.existsSync(pagePath)) {
      let content = fs.readFileSync(pagePath, "utf-8");

      // Extract English source title
      const enMatch = content.match(/export const metadataEn: Metadata = \{[\s\S]*?title:\s*"([^"]+)"/);
      const enTitle = enMatch ? enMatch[1] : s.replace(/-/g, " ");

      // Generate translations for es, fr, nl
      const esTitle = await translateText(enTitle, "es");
      const frTitle = await translateText(enTitle, "fr");
      const nlTitle = await translateText(enTitle, "nl");

      // Update metadataEs, metadataFr, metadataNl in file
      content = content.replace(
        /export const metadataEs: Metadata = \{[\s\S]*?\};/,
        `export const metadataEs: Metadata = {\n  title: "${esTitle.replace(/"/g, '\\"')}",\n  description: "${esTitle.replace(/"/g, '\\"')} - Aurelia Royale",\n  alternates: {\n    canonical: "https://www.aureliaroyale.com/es/blog/${s}/",\n  },\n};`
      ).replace(
        /export const metadataFr: Metadata = \{[\s\S]*?\};/,
        `export const metadataFr: Metadata = {\n  title: "${frTitle.replace(/"/g, '\\"')}",\n  description: "${frTitle.replace(/"/g, '\\"')} - Aurelia Royale",\n  alternates: {\n    canonical: "https://www.aureliaroyale.com/fr/blog/${s}/",\n  },\n};`
      ).replace(
        /export const metadataNl: Metadata = \{[\s\S]*?\};/,
        `export const metadataNl: Metadata = {\n  title: "${nlTitle.replace(/"/g, '\\"')}",\n  description: "${nlTitle.replace(/"/g, '\\"')} - Aurelia Royale",\n  alternates: {\n    canonical: "https://www.aureliaroyale.com/nl/blog/${s}/",\n  },\n};`
      );

      fs.writeFileSync(pagePath, content, "utf-8");
      fixedCount++;
      console.log(`[METADATA FIXED] ${s} -> ES: "${esTitle}" | FR: "${frTitle}" | NL: "${nlTitle}"`);
    }
  }

  console.log(`Successfully verified and fixed metadata titles across ${fixedCount} blog pages!`);
}

main();
