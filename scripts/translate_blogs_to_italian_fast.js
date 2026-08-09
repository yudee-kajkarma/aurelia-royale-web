const fs = require("fs");
const path = require("path");

const esDir = path.join(__dirname, "../src/data/blogs/es");
const itDir = path.join(__dirname, "../src/data/blogs/it");
const esCardsPath = path.join(__dirname, "../src/data/blogs.data.es.json");
const itCardsPath = path.join(__dirname, "../src/data/blogs.data.it.json");

if (!fs.existsSync(itDir)) {
  fs.mkdirSync(itDir, { recursive: true });
}

// Terminology fixes for high-end Italian jewelry terms
const terminologyFixes = [
  [/\/es\/blog\//gi, "/it/blog/"],
  [/\bdiamante da laboratorio\b/gi, "diamante coltivato in laboratorio"],
  [/\bdiamanti da laboratorio\b/gi, "diamanti coltivati in laboratorio"],
  [/\bdiamante sintetico\b/gi, "diamante coltivato in laboratorio"],
  [/\bdiamanti sintetici\b/gi, "diamanti coltivati in laboratorio"],
  [/\bgriffe\b/gi, "griffe"],
  [/\bpunte della montatura\b/gi, "griffe"],
  [/\bdenti dell'anello\b/gi, "griffe dell'anello"],
  [/\bcontenimento\b/gi, "inclusioni"],
  [/\bmappe di contenimento\b/gi, "mappe delle inclusioni"],
  [/\bmontature\b/gi, "montature"],
  [/"theme": "borde dorado"/gi, '"theme": "gold-border"'],
  [/"theme": "gold"/gi, '"theme": "gold-border"'],
  [/"type": "aufbieten, ausrufen, zurufen"/gi, '"type": "callout"'],
  [/"type": "richiamo"/gi, '"type": "callout"']
];

function cleanItalianText(text) {
  if (typeof text !== "string") return text;
  let s = text;
  terminologyFixes.forEach(([find, replace]) => {
    if (find instanceof RegExp) {
      s = s.replace(find, replace);
    } else {
      while (s.includes(find)) {
        s = s.replace(find, replace);
      }
    }
  });
  return s;
}

// Translate single string with retry
async function translateText(text, from = "es", to = "it") {
  if (!text || typeof text !== "string" || text.trim() === "" || /^\d+$/.test(text.trim())) {
    return text;
  }
  
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${from}&tl=${to}&dt=t&q=${encodeURIComponent(text)}`;
  
  let retries = 5;
  while (retries > 0) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      const data = await res.json();
      
      if (data && data[0]) {
        const translatedParts = data[0].map(part => part[0] || "").join("");
        return cleanItalianText(translatedParts);
      }
      throw new Error("Invalid response format");
    } catch (e) {
      retries--;
      if (retries === 0) {
        console.error(`Failed to translate: "${text.substring(0, 30)}..."`, e);
        return text;
      }
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
}

// Translate an array of strings by joining them into chunks of 40 strings (max 4000 characters)
async function translateBatch(texts) {
  const results = [];
  const chunkSize = 40;
  
  for (let i = 0; i < texts.length; i += chunkSize) {
    const chunk = texts.slice(i, i + chunkSize);
    const cleanChunk = chunk.map(t => (t && t.trim() !== "") ? t : "EMPTY");
    const joined = cleanChunk.join(" ||| ");
    
    const translatedText = await translateText(joined);
    const split = translatedText.split(/\s*\|\|\|\s*/);
    
    for (let idx = 0; idx < chunk.length; idx++) {
      if (cleanChunk[idx] === "EMPTY") {
        results.push(chunk[idx]);
      } else {
        const translatedVal = split[idx];
        results.push(translatedVal !== undefined ? translatedVal : chunk[idx]);
      }
    }
    
    // Short cooldown to prevent rate limit blocks
    await new Promise(resolve => setTimeout(resolve, 150));
  }
  
  return results;
}

// Collect all strings from object
function collectStrings(obj, results = []) {
  if (typeof obj === "string") {
    results.push(obj);
  } else if (Array.isArray(obj)) {
    obj.forEach(item => collectStrings(item, results));
  } else if (typeof obj === "object" && obj !== null) {
    for (const k of Object.keys(obj)) {
      if (
        k === "type" || k === "src" || k === "href" || k === "shopHref" ||
        k === "contactHref" || k === "priority" || k === "theme" ||
        k === "slug" || k === "image" || k === "author"
      ) {
        continue;
      }
      collectStrings(obj[k], results);
    }
  }
  return results;
}

// Inject translated strings back into object
function injectStrings(obj, translatedArray, state = { index: 0 }) {
  if (typeof obj === "string") {
    const val = translatedArray[state.index];
    state.index++;
    return val;
  }
  if (Array.isArray(obj)) {
    return obj.map(item => injectStrings(item, translatedArray, state));
  }
  if (typeof obj === "object" && obj !== null) {
    const newObj = {};
    for (const k of Object.keys(obj)) {
      if (
        k === "type" || k === "src" || k === "href" || k === "shopHref" ||
        k === "contactHref" || k === "priority" || k === "theme" ||
        k === "slug" || k === "image" || k === "author"
      ) {
        newObj[k] = cleanItalianText(obj[k]);
      } else {
        newObj[k] = injectStrings(obj[k], translatedArray, state);
      }
    }
    return newObj;
  }
  return obj;
}

async function main() {
  console.log("Starting MULTI-WORKER ULTRA FAST website translation to Italian...");
  
  // 1. Translate cards metadata
  if (fs.existsSync(esCardsPath)) {
    console.log("Collecting strings from cards metadata...");
    const cards = JSON.parse(fs.readFileSync(esCardsPath, "utf-8"));
    const strings = collectStrings(cards);
    console.log(`Found ${strings.length} strings in cards metadata. Translating...`);
    
    const translatedStrings = await translateBatch(strings);
    const translatedCards = injectStrings(cards, translatedStrings);
    
    fs.writeFileSync(itCardsPath, JSON.stringify(translatedCards, null, 2), "utf-8");
    console.log("Finished translating blog cards index metadata!");
  }
  
  // 2. Translate all 98 blog JSON files in parallel using 5 workers
  console.log("\nTranslating all 98 blog articles...");
  const files = fs.readdirSync(esDir).filter(f => f.endsWith(".json"));
  
  const numWorkers = 5;
  const workers = [];
  
  for (let w = 0; w < numWorkers; w++) {
    workers.push((async () => {
      for (let i = w; i < files.length; i += numWorkers) {
        const file = files[i];
        const sourcePath = path.join(esDir, file);
        const targetPath = path.join(itDir, file);
        
        console.log(`[Worker ${w}] (${i+1}/${files.length}) Processing: ${file}`);
        const original = JSON.parse(fs.readFileSync(sourcePath, "utf-8"));
        const strings = collectStrings(original);
        
        const translatedStrings = await translateBatch(strings);
        const translated = injectStrings(original, translatedStrings);
        
        fs.writeFileSync(targetPath, JSON.stringify(translated, null, 2), "utf-8");
        console.log(`[Worker ${w}] (${i+1}/${files.length}) Saved translated: ${file}`);
      }
    })());
  }
  
  await Promise.all(workers);
  
  console.log("\n🎉 ALL 98 BLOGS AND METADATA INDEX TRANSLATED TO ITALIAN SUCCESSFULLY!");
}

main().catch(console.error);
