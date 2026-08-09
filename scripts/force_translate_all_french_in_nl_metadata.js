const fs = require("fs");
const path = require("path");

const blogDir = path.join(__dirname, "../src/app/blog");
const nlDataDir = path.join(__dirname, "../src/data/blogs/nl");
const blogsNlJsonPath = path.join(__dirname, "../src/data/blogs.data.nl.json");

async function translateTextToDutch(text) {
  if (!text || typeof text !== "string" || !text.trim()) return text;
  const url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=nl&dt=t&q=" + encodeURIComponent(text);
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
  const subdirs = fs.readdirSync(blogDir);
  console.log(`Fixing all French titles in metadataNl across ${subdirs.length} blogs...`);

  let count = 0;

  for (const s of subdirs) {
    const p = path.join(blogDir, s, "page.tsx");
    if (fs.existsSync(p)) {
      let content = fs.readFileSync(p, "utf-8");
      const metaNlMatch = content.match(/export const metadataNl: Metadata = \{\s*title: "([^"]+)"/);
      const metaEnMatch = content.match(/export const metadataEn: Metadata = \{\s*title: "([^"]+)"/);

      if (metaNlMatch) {
        const currentNlTitle = metaNlMatch[1];
        // If current title contains French words or matches slug pattern
        if (/\b(Comment|Pourquoi|Que|Acheter|Avantages|Qu'est|Signification|Peut|Les|De)\b/.test(currentNlTitle) || currentNlTitle.includes("-")) {
          const enTitle = metaEnMatch ? metaEnMatch[1] : s.replace(/-/g, " ");
          const dutchTitle = await translateTextToDutch(enTitle);

          content = content.replace(
            `title: "${currentNlTitle}",`,
            `title: "${dutchTitle.replace(/"/g, '\\"')}",`
          ).replace(
            `description: "${currentNlTitle} - Aurelia Royale",`,
            `description: "${dutchTitle.replace(/"/g, '\\"')} - Aurelia Royale",`
          );

          fs.writeFileSync(p, content, "utf-8");
          count++;
          console.log(`[FIXED DUTCH TITLE] ${s} -> ${dutchTitle}`);
        }
      }
    }
  }

  console.log(`Fixed ${count} metadataNl titles!`);

  // Update blogs.data.nl.json with pure Dutch titles
  if (fs.existsSync(blogsNlJsonPath)) {
    const cards = JSON.parse(fs.readFileSync(blogsNlJsonPath, "utf-8"));
    for (const card of cards) {
      if (/\b(Comment|Pourquoi|Que|Acheter|Avantages|Qu'est|Signification|Peut|Les|De)\b/.test(card.title) || card.title.includes("-")) {
        card.title = await translateTextToDutch(card.slug.replace(/-/g, " "));
      }
    }
    fs.writeFileSync(blogsNlJsonPath, JSON.stringify(cards, null, 2), "utf-8");
    console.log("Updated blogs.data.nl.json with pure Dutch titles!");
  }

  // Refine specific terms across all Dutch JSON files
  const nlFiles = fs.readdirSync(nlDataDir).filter(f => f.endsWith(".json"));
  let jsonFixed = 0;

  nlFiles.forEach(file => {
    const jsonPath = path.join(nlDataDir, file);
    let raw = fs.readFileSync(jsonPath, "utf-8");

    raw = raw.replace(/\bberichten, ruggen en instellingen\b/gi, "oorbelstiften, sluitingen en zettingen")
             .replace(/\bKussens gepolijste oppervlakken\b/gi, "Beschermt gepolijste oppervlakken")
             .replace(/\bSchakelkettingen plat op lange paden\b/gi, "Leg kettingen plat neer zonder scherpe bochten")
             .replace(/\bRekening:\b/g, "Houd rekening met:")
             .replace(/\bDe box is schoon\b/gi, "Het doosje is schoon")
             .replace(/\bBeveilig uw souvenirs\b/gi, "Bescherm uw sieraden")
             // Fix missing spaces around links
             .replace(/\bophoe\b/gi, "op hoe")
             .replace(/\brapportbereikenwat\b/gi, "rapportbereiken wat")
             .replace(/\bopde\b/gi, "op de")
             .replace(/\bofNeem\b/gi, "of Neem");

    fs.writeFileSync(jsonPath, raw, "utf-8");
    jsonFixed++;
  });

  console.log(`Refined terminology across ${jsonFixed} Dutch JSON files!`);
}

main();
