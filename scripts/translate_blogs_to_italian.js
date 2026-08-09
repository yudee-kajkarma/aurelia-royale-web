const fs = require("fs");
const path = require("path");

const esDir = path.join(__dirname, "../src/data/blogs/es");
const itDir = path.join(__dirname, "../src/data/blogs/it");
const esCardsPath = path.join(__dirname, "../src/data/blogs.data.es.json");
const itCardsPath = path.join(__dirname, "../src/data/blogs.data.it.json");

if (!fs.existsSync(itDir)) {
  fs.mkdirSync(itDir, { recursive: true });
}

// Custom terminology corrections to ensure 100% accuracy in Italian gemological terms
const terminologyFixes = [
  // Links
  [/\/es\/blog\//gi, "/it/blog/"],
  
  // Gemological terms
  [/\bdiamante da laboratorio\b/gi, "diamante coltivato in laboratorio"],
  [/\bdiamanti da laboratorio\b/gi, "diamanti coltivati in laboratorio"],
  [/\bdiamante sintetico\b/gi, "diamante coltivato in laboratorio"],
  [/\bdiamanti sintetici\b/gi, "diamanti coltivati in laboratorio"],
  
  // prongs
  [/\bgriffe\b/gi, "griffe"],
  [/\bpunte della montatura\b/gi, "griffe"],
  [/\bdenti dell'anello\b/gi, "griffe dell'anello"],
  
  // inclusions
  [/\bcontenimento\b/gi, "inclusioni"],
  [/\bmappe di contenimento\b/gi, "mappe delle inclusioni"],
  
  // settings
  [/\bmontature\b/gi, "montature"],
  
  // final verdict theme (ensure exact CSS key is used)
  [/"theme": "borde dorado"/gi, '"theme": "gold-border"'],
  [/"theme": "gold"/gi, '"theme": "gold-border"'],
  
  // callout type key
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

// Google translate gtx function with retries and delay
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
      
      // Combine all translated parts
      if (data && data[0]) {
        const translatedParts = data[0].map(part => part[0] || "").join("");
        return cleanItalianText(translatedParts);
      }
      throw new Error("Invalid response format");
    } catch (e) {
      retries--;
      if (retries === 0) {
        console.error(`Failed to translate: "${text.substring(0, 30)}..."`, e);
        return text; // fallback to original
      }
      // Wait before retry
      await new Promise(resolve => setTimeout(resolve, 1500));
    }
  }
}

// Translate dynamic objects recursively
async function translateObject(obj) {
  if (typeof obj === "string") {
    return await translateText(obj);
  }
  if (Array.isArray(obj)) {
    const results = [];
    for (const item of obj) {
      results.push(await translateObject(item));
    }
    return results;
  }
  if (typeof obj === "object" && obj !== null) {
    const newObj = {};
    for (const k of Object.keys(obj)) {
      // Don't translate non-text fields or structural keys
      if (
        k === "type" || 
        k === "src" || 
        k === "href" || 
        k === "shopHref" || 
        k === "contactHref" || 
        k === "priority" ||
        k === "theme" ||
        k === "slug" ||
        k === "image" ||
        k === "author"
      ) {
        newObj[k] = cleanItalianText(obj[k]);
      } else {
        newObj[k] = await translateObject(obj[k]);
      }
    }
    return newObj;
  }
  return obj;
}

async function main() {
  console.log("Starting full website translation to Italian...");
  
  // 1. Translate cards metadata
  if (fs.existsSync(esCardsPath)) {
    console.log("Translating blogs.data.es.json index cards...");
    const cards = JSON.parse(fs.readFileSync(esCardsPath, "utf-8"));
    const translatedCards = [];
    
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      console.log(`Translating card ${i+1}/${cards.length}: ${card.slug}`);
      const translated = await translateObject(card);
      translatedCards.push(translated);
      // Wait a tiny bit between cards to respect rate limits
      await new Promise(resolve => setTimeout(resolve, 200));
    }
    
    fs.writeFileSync(itCardsPath, JSON.stringify(translatedCards, null, 2), "utf-8");
    console.log("Finished translating blog cards index metadata!");
  }
  
  // 2. Translate all 98 blog JSON files
  console.log("Translating all 98 blog articles under src/data/blogs/es/ ...");
  const files = fs.readdirSync(esDir).filter(f => f.endsWith(".json"));
  
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const sourcePath = path.join(esDir, file);
    const targetPath = path.join(itDir, file);
    
    console.log(`[${i+1}/${files.length}] Translating article: ${file}`);
    const original = JSON.parse(fs.readFileSync(sourcePath, "utf-8"));
    const translated = await translateObject(original);
    
    fs.writeFileSync(targetPath, JSON.stringify(translated, null, 2), "utf-8");
    
    // Progress checkpoint
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  console.log("🎉 ALL BLOGS TRANSLATED TO ITALIAN SUCCESSFULLY!");
}

main().catch(console.error);
