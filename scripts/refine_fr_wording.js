const fs = require("fs");
const path = require("path");

const frDir = path.join(__dirname, "../src/data/blogs/fr");

function refineText(str) {
  if (typeof str !== "string") return str;

  let res = str;

  // Apply wording refinements
  res = res.replace(/Qu'acheté-je exactamente \?/gi, "Qu'est-ce que j'achète exactement ?");
  res = res.replace(/Qu'acheté-je exactement\?/gi, "Qu'est-ce que j'achète exactement ?");
  res = res.replace(/Qu'acheté-je/gi, "Qu'est-ce que j'achète");
  res = res.replace(/poids séparés/gi, "leurs poids respectifs");
  res = res.replace(/statut naturel ou créé en laboratoire/gi, "origine naturelle ou créée en laboratoire");
  res = res.replace(/statut naturel ou créé en laboratorio/gi, "origine naturelle ou créée en laboratoire");
  res = res.replace(/Frequently Asked Questions/gi, "Foire aux questions");

  return res;
}

function processNode(node) {
  if (typeof node === "string") {
    return refineText(node);
  } else if (Array.isArray(node)) {
    return node.map(item => processNode(item));
  } else if (node && typeof node === "object") {
    const res = {};
    for (const key of Object.keys(node)) {
      res[key] = processNode(node[key]);
    }
    return res;
  }
  return node;
}

const files = fs.readdirSync(frDir);
let count = 0;

files.forEach((file) => {
  if (!file.endsWith(".json")) return;

  const filePath = path.join(frDir, file);
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const refined = processNode(data);

  fs.writeFileSync(filePath, JSON.stringify(refined, null, 2), "utf-8");
  count++;
});

console.log(`Successfully applied French wording refinements across all ${count} blog JSON datasets!`);
