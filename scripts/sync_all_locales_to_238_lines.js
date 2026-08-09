const fs = require("fs");
const path = require("path");

const localesDir = path.join(__dirname, "../src/locales");
const esPath = path.join(localesDir, "es.json");
const template = JSON.parse(fs.readFileSync(esPath, "utf-8"));

const languages = ["en", "es", "fr", "nl", "de"];

async function translateText(text, targetLang) {
  if (!text || typeof text !== "string" || !text.trim()) return text;
  if (targetLang === "es") return text; // template is spanish
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=es&tl=${targetLang}&dt=t&q=` + encodeURIComponent(text);
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

async function syncObject(templateObj, existingObj, targetLang) {
  if (typeof templateObj === "string") {
    if (existingObj && typeof existingObj === "string" && existingObj.trim()) {
      return existingObj;
    }
    return await translateText(templateObj, targetLang);
  }

  if (typeof templateObj === "object" && templateObj !== null) {
    const result = {};
    for (const key of Object.keys(templateObj)) {
      const existingVal = existingObj ? existingObj[key] : undefined;
      result[key] = await syncObject(templateObj[key], existingVal, targetLang);
    }
    return result;
  }

  return templateObj;
}

async function main() {
  console.log("Synchronizing all locale files to match 238-line template...");

  for (const lang of languages) {
    const langPath = path.join(localesDir, `${lang}.json`);
    let existingObj = {};
    if (fs.existsSync(langPath)) {
      try {
        existingObj = JSON.parse(fs.readFileSync(langPath, "utf-8"));
      } catch (e) {}
    }

    const syncedObj = await syncObject(template, existingObj, lang);

    // Write back with 2 spaces indent
    const formattedJson = JSON.stringify(syncedObj, null, 2);
    fs.writeFileSync(langPath, formattedJson, "utf-8");

    const lineCount = formattedJson.split("\n").length;
    console.log(`[SYNCED] ${lang}.json -> ${lineCount} lines`);
  }

  console.log("ALL 5 LOCALE FILES ARE NOW 100% SYNCHRONIZED!");
}

main();
