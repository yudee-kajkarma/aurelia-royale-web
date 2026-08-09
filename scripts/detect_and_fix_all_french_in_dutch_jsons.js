const fs = require("fs");
const path = require("path");

const nlDir = path.join(__dirname, "../src/data/blogs/nl");
const enDir = path.join(__dirname, "../src/data/blogs/en");
const files = fs.readdirSync(nlDir).filter(f => f.endsWith(".json"));

async function translateToDutch(text) {
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

function isFrench(str) {
  if (!str || typeof str !== "string" || str.length < 5) return false;
  // Common French words/patterns
  const frenchRegex = /\b(comment|pourquoi|lorsque|chaque|tous|toutes|autres|bijoux|diamants|avec|dans|pour|sur|par|plus|pas|sont|cette|cet|ces|votre|vos|notre|nos|est-ce|qu'est-ce|l'achat|l'entretien|d'un|d'une|une|des)\b/i;
  const matches = str.match(frenchRegex);
  return matches && matches.length > 0;
}

async function processValue(val, enVal) {
  if (typeof val === "string") {
    if (isFrench(val)) {
      const source = enVal && typeof enVal === "string" ? enVal : val;
      const translated = await translateToDutch(source);
      return translated;
    }
    return val;
  }
  if (Array.isArray(val)) {
    const newArr = [];
    for (let i = 0; i < val.length; i++) {
      const enItem = Array.isArray(enVal) ? enVal[i] : undefined;
      newArr.push(await processValue(val[i], enItem));
    }
    return newArr;
  }
  if (typeof val === "object" && val !== null) {
    const newObj = {};
    for (const key of Object.keys(val)) {
      const enItem = enVal && typeof enVal === "object" ? enVal[key] : undefined;
      newObj[key] = await processValue(val[key], enItem);
    }
    return newObj;
  }
  return val;
}

async function main() {
  console.log(`Scanning all ${files.length} Dutch blog JSON files for French text...`);
  let fixedFilesCount = 0;

  for (const file of files) {
    const nlPath = path.join(nlDir, file);
    const enPath = path.join(enDir, file);

    const nlData = JSON.parse(fs.readFileSync(nlPath, "utf-8"));
    const enData = fs.existsSync(enPath) ? JSON.parse(fs.readFileSync(enPath, "utf-8")) : null;

    const nlDataStr = JSON.stringify(nlData);
    if (isFrench(nlDataStr)) {
      console.log(`[FRENCH DETECTED] Translating: ${file}`);
      const updatedData = await processValue(nlData, enData);
      fs.writeFileSync(nlPath, JSON.stringify(updatedData, null, 2), "utf-8");
      fixedFilesCount++;
    }
  }

  console.log(`Finished processing! Fixed French text in ${fixedFilesCount} blog files.`);
}

main();
