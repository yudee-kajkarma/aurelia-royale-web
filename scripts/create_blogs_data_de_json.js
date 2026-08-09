const fs = require("fs");
const path = require("path");

const nlCardsPath = path.join(__dirname, "../src/data/blogs.data.nl.json");
const deCardsPath = path.join(__dirname, "../src/data/blogs.data.de.json");

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

async function main() {
  if (fs.existsSync(nlCardsPath)) {
    const nlCards = JSON.parse(fs.readFileSync(nlCardsPath, "utf-8"));
    console.log(`Translating ${nlCards.length} cards to German...`);

    const deCards = [];

    // Parallel batch translation of 15 cards at a time
    for (let i = 0; i < nlCards.length; i += 15) {
      const chunk = nlCards.slice(i, i + 15);
      const translatedChunk = await Promise.all(chunk.map(async (card) => ({
        ...card,
        title: await translateTextToGerman(card.title),
        excerpt: await translateTextToGerman(card.excerpt)
      })));
      deCards.push(...translatedChunk);
    }

    fs.writeFileSync(deCardsPath, JSON.stringify(deCards, null, 2), "utf-8");
    console.log("Successfully created src/data/blogs.data.de.json!");
  }
}

main();
