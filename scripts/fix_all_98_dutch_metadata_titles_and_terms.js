const fs = require("fs");
const path = require("path");

const blogAppDir = path.join(__dirname, "../src/app/blog");
const nlDataDir = path.join(__dirname, "../src/data/blogs/nl");
const blogsNlJsonPath = path.join(__dirname, "../src/data/blogs.data.nl.json");

async function translateTextToDutch(text) {
  if (!text || typeof text !== "string" || !text.trim()) return text;
  const url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=nl&dt=t&q=" + encodeURIComponent(text);
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
  const subdirs = fs.readdirSync(blogAppDir);
  console.log(`Fixing Dutch metadata titles across ${subdirs.length} blog pages...`);

  let updatedMetadataCount = 0;

  for (const subdir of subdirs) {
    const pagePath = path.join(blogAppDir, subdir, "page.tsx");
    if (fs.existsSync(pagePath)) {
      let content = fs.readFileSync(pagePath, "utf-8");

      // Check if metadataNl has a raw slug or English title
      const metaNlMatch = content.match(/export const metadataNl: Metadata = \{\s*title: "([^"]+)",/);
      if (metaNlMatch) {
        const currentTitle = metaNlMatch[1];
        if (currentTitle.includes("-") || /^[a-z0-9-]+$/.test(currentTitle) || /^[A-Z0-9\s-]+$/.test(currentTitle)) {
          // Translate metadataFr title or slug into clean Dutch
          const frTitleMatch = content.match(/export const metadataFr: Metadata = \{\s*title: "([^"]+)",/);
          const enTitleMatch = content.match(/export const metadataEn: Metadata = \{\s*title: "([^"]+)",/);
          
          const sourceText = frTitleMatch ? frTitleMatch[1] : (enTitleMatch ? enTitleMatch[1] : subdir.replace(/-/g, " "));
          const dutchTitle = await translateTextToDutch(sourceText);

          content = content.replace(
            `title: "${currentTitle}",`,
            `title: "${dutchTitle.replace(/"/g, '\\"')}",`
          ).replace(
            `description: "${currentTitle} - Aurelia Royale",`,
            `description: "${dutchTitle.replace(/"/g, '\\"')} - Aurelia Royale",`
          );

          fs.writeFileSync(pagePath, content, "utf-8");
          updatedMetadataCount++;
          console.log(`[NL META FIXED] ${subdir} -> ${dutchTitle}`);
        }
      }
    }
  }

  // Also update blogs.data.nl.json with clean titles
  if (fs.existsSync(blogsNlJsonPath)) {
    const cards = JSON.parse(fs.readFileSync(blogsNlJsonPath, "utf-8"));
    for (const card of cards) {
      if (card.title.includes("-") || /^[a-z0-9-]+$/.test(card.title)) {
        card.title = await translateTextToDutch(card.slug.replace(/-/g, " "));
      }
    }
    fs.writeFileSync(blogsNlJsonPath, JSON.stringify(cards, null, 2), "utf-8");
  }

  // Refine specific terms across all Dutch JSON files in src/data/blogs/nl/*.json
  const nlFiles = fs.readdirSync(nlDataDir).filter(f => f.endsWith(".json"));
  let jsonRefinedCount = 0;

  nlFiles.forEach(file => {
    const jsonPath = path.join(nlDataDir, file);
    let raw = fs.readFileSync(jsonPath, "utf-8");

    raw = raw.replace(/\blay-outlay-outs\b/gi, "ontwerpen en afmetingen")
             .replace(/\blay-out-lay-outs\b/gi, "ontwerpen en afmetingen")
             .replace(/\bMelee-handelsformaten\b/gi, "Melee-diamanten")
             .replace(/\bFrames centreren\b/gi, "Halo's omlijsten de centrale steen")
             .replace(/\bLeestekens\b/gi, "Accentstenen")
             .replace(/\bmontagevergrendelingen\b/gi, "zettingen")
             .replace(/\bMaak niet schoon met ultrasoon geluid\b/gi, "Gebruik geen ultrasone reiniger")
             .replace(/\bziehoe\b/gi, "zie hoe")
             .replace(/\bopde\b/gi, "op de")
             .replace(/\bofNeem\b/gi, "of neem")
             .replace(/\bopAurelia\b/gi, "op Aurelia");

    fs.writeFileSync(jsonPath, raw, "utf-8");
    jsonRefinedCount++;
  });

  console.log(`Finished perfecting Dutch metadata and JSON terminology across all files!`);
}

main();
