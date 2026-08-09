const fs = require("fs");
const path = require("path");

const blogDir = path.join(__dirname, "../src/app/blog");
const subdirs = fs.readdirSync(blogDir);

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
  let count = 0;

  for (const s of subdirs) {
    const p = path.join(blogDir, s, "page.tsx");
    if (fs.existsSync(p)) {
      let content = fs.readFileSync(p, "utf-8");

      // Locate metadataNl block
      const nlStart = content.indexOf("export const metadataNl");
      if (nlStart !== -1) {
        const nlEnd = content.indexOf("};", nlStart);
        const nlBlock = content.slice(nlStart, nlEnd + 2);

        // Check if nlBlock contains French words
        if (/\b(Comment|Pourquoi|Que|Acheter|Avantages|Qu'est|Signification|Peut|Les|De)\b/.test(nlBlock)) {
          // Extract metadataEn title
          const enMatch = content.match(/export const metadataEn: Metadata = \{[\s\S]*?title:\s*"([^"]+)"/);
          const enTitle = enMatch ? enMatch[1] : s.replace(/-/g, " ");

          const dutchTitle = await translateTextToDutch(enTitle);

          // Replace title and description in nlBlock
          let newNlBlock = nlBlock.replace(
            /title:\s*"[^"]+"/,
            `title: "${dutchTitle.replace(/"/g, '\\"')}"`
          ).replace(
            /description:\s*"[^"]+"/,
            `description: "${dutchTitle.replace(/"/g, '\\"')} - Aurelia Royale"`
          );

          content = content.slice(0, nlStart) + newNlBlock + content.slice(nlEnd + 2);
          fs.writeFileSync(p, content, "utf-8");
          count++;
          console.log(`[FIXED REMAINING NL META] ${s} -> ${dutchTitle}`);
        }
      }
    }
  }

  console.log(`Total remaining metadataNl titles fixed: ${count}`);
}

main();
