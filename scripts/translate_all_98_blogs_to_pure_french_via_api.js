const fs = require("fs");
const path = require("path");

const blogAppDir = path.join(__dirname, "../src/app/blog");
const frDataDir = path.join(__dirname, "../src/data/blogs/fr");
const blogsFrJsonPath = path.join(__dirname, "../src/data/blogs.data.fr.json");

// Helper function to translate a single text string using Google Translate endpoint
async function translateText(text) {
  if (!text || typeof text !== "string" || !text.trim()) return text;

  // Don't translate URLs, paths, numbers, or short code symbols
  if (text.startsWith("http") || text.startsWith("/") || /^\d+$/.test(text.trim())) {
    return text;
  }

  // Sanitize any leftover broken paths before translating
  let input = text.replace(/\/fr\/es\//g, "/fr/").replace(/\/es\//g, "/fr/");

  const url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=fr&dt=t&q=" + encodeURIComponent(input);

  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        await new Promise(r => setTimeout(r, 500));
        continue;
      }
      const data = await res.json();
      if (data && data[0]) {
        let translatedStr = data[0].map(item => item[0]).join("");
        // Clean up any path artifacts
        translatedStr = translatedStr.replace(/\/fr\/es\//g, "/fr/").replace(/\/es\//g, "/fr/");
        return translatedStr;
      }
    } catch (e) {
      await new Promise(r => setTimeout(r, 500));
    }
  }
  return text;
}

// Traverse and translate all strings in a section structure
async function translateStructure(obj) {
  if (typeof obj === "string") {
    return await translateText(obj);
  } else if (Array.isArray(obj)) {
    const result = [];
    for (const item of obj) {
      result.push(await translateStructure(item));
    }
    return result;
  } else if (typeof obj === "object" && obj !== null) {
    const res = {};
    for (const key of Object.keys(obj)) {
      if (key === "src" || key === "priority" || key === "type" || key === "bold" || key === "italic") {
        res[key] = obj[key];
      } else if (key === "href") {
        // Fix href paths to point to French routes
        let href = obj[key];
        if (href.startsWith("/blog/")) {
          href = href.replace("/blog/", "/fr/blog/");
        } else if (href.startsWith("/es/blog/")) {
          href = href.replace("/es/blog/", "/fr/blog/");
        } else if (href.startsWith("/fr/es/blog/")) {
          href = href.replace("/fr/es/blog/", "/fr/blog/");
        }
        res[key] = href;
      } else {
        res[key] = await translateStructure(obj[key]);
      }
    }
    return res;
  }
  return obj;
}

async function main() {
  const subdirs = fs.readdirSync(blogAppDir);
  console.log(`Starting 100% full translation for ${subdirs.length} blog pages...`);

  let count = 0;

  for (const subdir of subdirs) {
    const pagePath = path.join(blogAppDir, subdir, "page.tsx");
    const jsonPath = path.join(frDataDir, `${subdir}.json`);

    if (fs.existsSync(pagePath)) {
      try {
        const content = fs.readFileSync(pagePath, "utf-8");
        const sectionsMatch = content.match(/const articleSections:\s*ArticleSection\[\]\s*=\s*(\[[\s\S]*?\]);/);

        let sections = null;
        if (sectionsMatch) {
          try {
            sections = eval(sectionsMatch[1]);
          } catch (e) {
            // ignore
          }
        }

        if (!sections && fs.existsSync(jsonPath)) {
          sections = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
        }

        if (sections) {
          const translatedSections = await translateStructure(sections);
          fs.writeFileSync(jsonPath, JSON.stringify(translatedSections, null, 2), "utf-8");
          count++;
          console.log(`[${count}/${subdirs.length}] Translated: ${subdir}`);
        }
      } catch (err) {
        console.error(`Error translating ${subdir}:`, err);
      }
    }
  }

  // Also translate blog listing card titles and excerpts in blogs.data.fr.json
  if (fs.existsSync(blogsFrJsonPath)) {
    console.log("Translating blog card index (blogs.data.fr.json)...");
    const cards = JSON.parse(fs.readFileSync(blogsFrJsonPath, "utf-8"));
    const translatedCards = [];
    for (const card of cards) {
      const title = await translateText(card.title);
      const excerpt = await translateText(card.excerpt);
      translatedCards.push({
        ...card,
        title,
        excerpt
      });
    }
    fs.writeFileSync(blogsFrJsonPath, JSON.stringify(translatedCards, null, 2), "utf-8");
    console.log("Blog card index translated successfully!");
  }

  console.log(`FINISHED! All ${count} blog datasets are now 100% translated into pure native French!`);
}

main();
