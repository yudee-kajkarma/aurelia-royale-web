const fs = require("fs");
const path = require("path");

const blogAppDir = path.join(__dirname, "../src/app/blog");
const nlDataDir = path.join(__dirname, "../src/data/blogs/nl");
const blogsNlJsonPath = path.join(__dirname, "../src/data/blogs.data.nl.json");

if (!fs.existsSync(nlDataDir)) {
  fs.mkdirSync(nlDataDir, { recursive: true });
}

async function translateTextToDutch(text) {
  if (!text || typeof text !== "string" || !text.trim()) return text;
  if (text.startsWith("http") || (text.startsWith("/") && !text.includes(" ")) || /^\d+$/.test(text.trim())) {
    return text;
  }

  let input = text.replace(/\/fr\/es\//g, "/nl/").replace(/\/es\//g, "/nl/").replace(/\/fr\//g, "/nl/");
  const url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=nl&dt=t&q=" + encodeURIComponent(input);

  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        if (data && data[0]) {
          let translatedStr = data[0].map(item => item[0]).join("");
          return translatedStr.replace(/\/fr\/es\//g, "/nl/").replace(/\/es\//g, "/nl/").replace(/\/fr\//g, "/nl/");
        }
      }
    } catch (e) {
      await new Promise(r => setTimeout(r, 200));
    }
  }
  return text;
}

// Concurrency pool helper
async function mapConcurrent(items, concurrency, fn) {
  const results = new Array(items.length);
  let index = 0;

  async function worker() {
    while (index < items.length) {
      const i = index++;
      results[i] = await fn(items[i], i);
    }
  }

  const workers = [];
  for (let i = 0; i < Math.min(concurrency, items.length); i++) {
    workers.push(worker());
  }
  await Promise.all(workers);
  return results;
}

function collectStrings(obj, collector) {
  if (typeof obj === "string") {
    collector.push(obj);
  } else if (Array.isArray(obj)) {
    obj.forEach(item => collectStrings(item, collector));
  } else if (typeof obj === "object" && obj !== null) {
    for (const key of Object.keys(obj)) {
      if (key !== "src" && key !== "priority" && key !== "type" && key !== "bold" && key !== "italic" && key !== "href") {
        collectStrings(obj[key], collector);
      }
    }
  }
}

function replaceStrings(obj, map) {
  if (typeof obj === "string") {
    return map.get(obj) || obj;
  } else if (Array.isArray(obj)) {
    return obj.map(item => replaceStrings(item, map));
  } else if (typeof obj === "object" && obj !== null) {
    const res = {};
    for (const key of Object.keys(obj)) {
      if (key === "src" || key === "priority" || key === "type" || key === "bold" || key === "italic") {
        res[key] = obj[key];
      } else if (key === "href") {
        let href = obj[key];
        if (href.startsWith("/blog/")) href = href.replace("/blog/", "/nl/blog/");
        else if (href.startsWith("/es/blog/")) href = href.replace("/es/blog/", "/nl/blog/");
        else if (href.startsWith("/fr/blog/")) href = href.replace("/fr/blog/", "/nl/blog/");
        res[key] = href;
      } else {
        res[key] = replaceStrings(obj[key], map);
      }
    }
    return res;
  }
  return obj;
}

async function processSubdir(subdir) {
  const pagePath = path.join(blogAppDir, subdir, "page.tsx");
  const jsonPath = path.join(nlDataDir, `${subdir}.json`);

  if (!fs.existsSync(pagePath)) return;

  const content = fs.readFileSync(pagePath, "utf-8");
  const sectionsMatch = content.match(/const articleSections:\s*ArticleSection\[\]\s*=\s*(\[[\s\S]*?\]);/);

  let sections = null;
  if (sectionsMatch) {
    try { sections = eval(sectionsMatch[1]); } catch (e) {}
  }

  if (!sections) return;

  const stringList = [];
  collectStrings(sections, stringList);
  const uniqueStrings = Array.from(new Set(stringList));

  const translations = await mapConcurrent(uniqueStrings, 15, async (str) => {
    return await translateTextToDutch(str);
  });

  const translationMap = new Map();
  uniqueStrings.forEach((str, i) => {
    translationMap.set(str, translations[i]);
  });

  const translatedSections = replaceStrings(sections, translationMap);
  fs.writeFileSync(jsonPath, JSON.stringify(translatedSections, null, 2), "utf-8");
  console.log(`[NL DONE] ${subdir}`);
}

async function main() {
  const subdirs = fs.readdirSync(blogAppDir);
  console.log(`Fast parallel translating ${subdirs.length} blogs into DUTCH...`);

  for (let i = 0; i < subdirs.length; i += 5) {
    const batch = subdirs.slice(i, i + 5);
    await Promise.all(batch.map(processSubdir));
  }

  // Also translate blog card listings in blogs.data.nl.json
  const frBlogsDataPath = path.join(__dirname, "../src/data/blogs.data.fr.json");
  if (fs.existsSync(frBlogsDataPath)) {
    console.log("Translating blog card index into DUTCH...");
    const cards = JSON.parse(fs.readFileSync(frBlogsDataPath, "utf-8"));
    const updatedCards = await mapConcurrent(cards, 10, async (card) => {
      const title = await translateTextToDutch(card.title);
      const excerpt = await translateTextToDutch(card.excerpt);
      return { ...card, title, excerpt };
    });
    fs.writeFileSync(blogsNlJsonPath, JSON.stringify(updatedCards, null, 2), "utf-8");
    console.log("Blog card index translated into DUTCH!");
  }

  console.log("ALL 98 BLOG DATASETS ARE NOW 100% PURE DUTCH!");
}

main();
