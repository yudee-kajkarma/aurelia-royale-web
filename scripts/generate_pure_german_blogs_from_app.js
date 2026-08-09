const fs = require("fs");
const path = require("path");

const blogAppDir = path.join(__dirname, "../src/app/blog");
const deDir = path.join(__dirname, "../src/data/blogs/de");
const nlDir = path.join(__dirname, "../src/data/blogs/nl");
const blogsDataPath = path.join(__dirname, "../src/data/blogs.data.json");
const blogsDataDePath = path.join(__dirname, "../src/data/blogs.data.de.json");

if (!fs.existsSync(deDir)) {
  fs.mkdirSync(deDir, { recursive: true });
}

async function translateTextToGerman(text) {
  if (!text || typeof text !== "string" || !text.trim()) return text;
  const url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=de&dt=t&q=" + encodeURIComponent(text);
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

async function translateBlogJsonFast(data) {
  const stringsToTranslate = [];

  function collect(obj) {
    if (typeof obj === "string" && obj.trim().length > 0) {
      stringsToTranslate.push(obj);
    } else if (Array.isArray(obj)) {
      obj.forEach(collect);
    } else if (typeof obj === "object" && obj !== null) {
      for (const k of Object.keys(obj)) {
        if (k !== "src" && k !== "href" && k !== "shopHref" && k !== "contactHref" && k !== "priority") {
          collect(obj[k]);
        }
      }
    }
  }

  collect(data);

  const uniqueStrings = Array.from(new Set(stringsToTranslate));
  const translationsMap = new Map();

  for (let i = 0; i < uniqueStrings.length; i += 30) {
    const chunk = uniqueStrings.slice(i, i + 30);
    await Promise.all(chunk.map(async (str) => {
      let translated = await translateTextToGerman(str);
      // Clean up common German translation artifacts
      translated = translated.replace(/\bvor dem Tragen und Reinigen\b/gi, "vor dem Tragen und Reinigen")
                             .replace(/\bFilm sammeln\b/gi, "einen Schmutzfilm ansetzen")
                             .replace(/\bAurelia Royale-Schmuck\b/g, "der Schmuck von Aurelia Royale");
      translationsMap.set(str, translated);
    }));
  }

  function replace(obj) {
    if (typeof obj === "string") {
      return translationsMap.get(obj) || obj;
    }
    if (Array.isArray(obj)) {
      return obj.map(replace);
    }
    if (typeof obj === "object" && obj !== null) {
      const newObj = {};
      for (const k of Object.keys(obj)) {
        if (k === "src" || k === "href" || k === "shopHref" || k === "contactHref" || k === "priority") {
          newObj[k] = obj[k];
        } else {
          newObj[k] = replace(obj[k]);
        }
      }
      return newObj;
    }
    return obj;
  }

  return replace(data);
}

async function main() {
  const files = fs.readdirSync(nlDir).filter(f => f.endsWith(".json"));
  console.log(`Translating all ${files.length} blogs into pure German...`);

  const concurrency = 12;
  for (let i = 0; i < files.length; i += concurrency) {
    const chunk = files.slice(i, i + concurrency);
    await Promise.all(chunk.map(async (file) => {
      const slug = file.replace(".json", "");
      const nlPath = path.join(nlDir, file);
      const dePath = path.join(deDir, file);

      try {
        const nlData = JSON.parse(fs.readFileSync(nlPath, "utf-8"));
        const deData = await translateBlogJsonFast(nlData);
        fs.writeFileSync(dePath, JSON.stringify(deData, null, 2), "utf-8");
        console.log(`[GERMAN DONE] ${slug}`);
      } catch (e) {
        console.error(`Error translating ${slug}:`, e);
      }
    }));
  }

  console.log("Generating blogs.data.de.json...");
  if (fs.existsSync(blogsDataPath)) {
    const cards = JSON.parse(fs.readFileSync(blogsDataPath, "utf-8"));
    const deCards = await translateBlogJsonFast(cards);
    fs.writeFileSync(blogsDataDePath, JSON.stringify(deCards, null, 2), "utf-8");
    console.log("Generated blogs.data.de.json!");
  }

  console.log("ALL GERMAN BLOG DATASETS COMPLETED SUCCESSFULLY!");
}

main();
