const fs = require("fs");
const path = require("path");

const itDir = path.join(__dirname, "../src/data/blogs/it");
const esDir = path.join(__dirname, "../src/data/blogs/es");
const itCardsPath = path.join(__dirname, "../src/data/blogs.data.it.json");
const esCardsPath = path.join(__dirname, "../src/data/blogs.data.es.json");

const spanishWordsRegex = /\b(para|por|como|pero|los|las|verifique|inspeccione|artículo|conmigo|consigo|consiga|consiguen|detalles|página|aspecto|peso|escala|limpie|garantía|sello|calidad|coincidir|oro|platino|diamantes|anillo|anillos|gemas|aretes|collares|bracaletes|pulseras)\b/i;

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

async function translateText(text, from = "es", to = "it") {
  if (!text || typeof text !== "string" || text.trim() === "" || /^\d+$/.test(text.trim())) {
    return text;
  }
  
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${from}&tl=${to}&dt=t&q=${encodeURIComponent(text)}`;
  
  let retries = 7;
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
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}

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
    await new Promise(resolve => setTimeout(resolve, 200));
  }
  
  return results;
}

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
  console.log("Starting verification of Italian files...");
  
  // 1. Check cards metadata
  if (fs.existsSync(itCardsPath)) {
    const cardsContent = fs.readFileSync(itCardsPath, "utf-8");
    if (spanishWordsRegex.test(cardsContent)) {
      console.log("⚠️ Spanish words found in blogs.data.it.json. Re-translating cards metadata...");
      const originalCards = JSON.parse(fs.readFileSync(esCardsPath, "utf-8"));
      const strings = collectStrings(originalCards);
      const translatedStrings = await translateBatch(strings);
      const translatedCards = injectStrings(originalCards, translatedStrings);
      fs.writeFileSync(itCardsPath, JSON.stringify(translatedCards, null, 2), "utf-8");
      console.log("Successfully re-translated cards metadata!");
    } else {
      console.log("✅ blogs.data.it.json is clean of Spanish content!");
    }
  }

  // 2. Check each blog file and fix if needed
  const files = fs.readdirSync(itDir).filter(f => f.endsWith(".json"));
  let fixedCount = 0;
  
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const targetPath = path.join(itDir, file);
    const content = fs.readFileSync(targetPath, "utf-8");
    
    if (spanishWordsRegex.test(content)) {
      console.log(`⚠️ Spanish words found in ${file}. Re-translating sequentially to avoid DNS lookup errors...`);
      const sourcePath = path.join(esDir, file);
      const original = JSON.parse(fs.readFileSync(sourcePath, "utf-8"));
      const strings = collectStrings(original);
      
      const translatedStrings = await translateBatch(strings);
      const translated = injectStrings(original, translatedStrings);
      
      fs.writeFileSync(targetPath, JSON.stringify(translated, null, 2), "utf-8");
      console.log(`✅ Successfully re-translated and fixed: ${file}`);
      fixedCount++;
    }
  }
  
  console.log(`\nVerification complete. Fixed ${fixedCount} files.`);
}

main().catch(console.error);
