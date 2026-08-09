const fs = require("fs");
const path = require("path");

const blogAppDir = path.join(__dirname, "../src/app/blog");
const subdirs = fs.readdirSync(blogAppDir);

async function translateTextToGerman(text) {
  if (!text || typeof text !== "string" || !text.trim()) return text;
  const url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=de&dt=t&q=" + encodeURIComponent(text);
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
  console.log(`Injecting metadataDe and German hero headers across ${subdirs.length} blog pages...`);
  let count = 0;

  for (const s of subdirs) {
    const pagePath = path.join(blogAppDir, s, "page.tsx");
    if (fs.existsSync(pagePath)) {
      let content = fs.readFileSync(pagePath, "utf-8");

      // Check if metadataDe is already present
      if (!content.includes("export const metadataDe:")) {
        const enMatch = content.match(/export const metadataEn: Metadata = \{[\s\S]*?title:\s*"([^"]+)"/);
        const enTitle = enMatch ? enMatch[1] : s.replace(/-/g, " ");

        const germanTitle = await translateTextToGerman(enTitle);

        const metadataDeBlock = `export const metadataDe: Metadata = {\n  title: "${germanTitle.replace(/"/g, '\\"')}",\n  description: "${germanTitle.replace(/"/g, '\\"')} - Aurelia Royale",\n  alternates: {\n    canonical: "https://www.aureliaroyale.com/de/blog/${s}/",\n  },\n};\n\n`;

        // Inject metadataDe right before generateMetadata
        const genMetaIndex = content.indexOf("export async function generateMetadata");
        if (genMetaIndex !== -1) {
          content = content.slice(0, genMetaIndex) + metadataDeBlock + content.slice(genMetaIndex);
        }

        // Update generateMetadata body
        if (content.includes('if (locale === "nl") return metadataNl;')) {
          content = content.replace(
            'if (locale === "nl") return metadataNl;',
            'if (locale === "de") return metadataDe;\n  if (locale === "nl") return metadataNl;'
          );
        }

        // Update Hero header tags
        if (content.includes('{locale === "nl" ?') && !content.includes('{locale === "de" ?')) {
          content = content.replace(
            '{locale === "nl" ?',
            '{locale === "de" ? "Schmuckpflege und Wartung" : locale === "nl" ?'
          );

          content = content.replace(
            'locale === "nl" ? (typeof metadataNl.title === "string" ? metadataNl.title : "")',
            'locale === "de" ? (typeof metadataDe.title === "string" ? metadataDe.title : "") : locale === "nl" ? (typeof metadataNl.title === "string" ? metadataNl.title : "")'
          );

          content = content.replace(
            'locale === "nl" ? "Journaal • Gepubliceerd op 16 juli 2026"',
            'locale === "de" ? "Journal • Veröffentlicht am 16. Juli 2026" : locale === "nl" ? "Journaal • Gepubliceerd op 16 juli 2026"'
          );
        }

        fs.writeFileSync(pagePath, content, "utf-8");
        count++;
        console.log(`[DE METADATA INJECTED] ${s} -> ${germanTitle}`);
      }
    }
  }

  console.log(`Successfully injected metadataDe across ${count} blog page components!`);
}

main();
