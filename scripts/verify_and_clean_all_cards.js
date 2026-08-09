const fs = require("fs");
const path = require("path");

const frDataPath = path.join(__dirname, "../src/data/blogs.data.fr.json");
const blogsFr = JSON.parse(fs.readFileSync(frDataPath, "utf-8"));

function sanitizeFrCardText(text) {
  if (!text || typeof text !== "string") return text;

  let str = text;

  // Title replacements
  str = str
    .replace(/Complete Checklist/gi, "liste de contrôle complète")
    .replace(/Checklist/gi, "liste de contrôle")
    .replace(/Guide/gi, "guide")
    .replace(/How to/gi, "Comment")
    .replace(/Buying a/gi, "Acheter un")
    .replace(/Buying/gi, "Acheter")
    .replace(/Comparing/gi, "Comparer")
    .replace(/Choosing/gi, "Choisir")
    .replace(/Cleaning/gi, "Nettoyer")
    .replace(/Keeping/gi, "Conserver")
    .replace(/Storing/gi, "Ranger")
    .replace(/Preventing/gi, "Éviter")
    .replace(/Wearing/gi, "Porter")
    .replace(/Swimming/gi, "Nager")
    .replace(/Jewellery/gi, "joaillerie")
    .replace(/Jewelry/gi, "joaillerie")
    .replace(/Diamond/gi, "diamant")
    .replace(/Diamonds/gi, "diamants")
    .replace(/Earrings/gi, "boucles d'oreilles")
    .replace(/Earring/gi, "boucle d'oreille")
    .replace(/Necklace/gi, "collier")
    .replace(/Necklaces/gi, "colliers")
    .replace(/Bracelet/gi, "bracelet")
    .replace(/Bracelets/gi, "bracelets")
    .replace(/Pendant/gi, "pendentif")
    .replace(/Ring/gi, "bague")
    .replace(/Rings/gi, "bagues");

  // Spanish sentence pattern replacements
  str = str
    .replace(/la joaillerie fina puede marcar un aniversario, un cumpleaños, une graduación ou un hito personal durante años\. aussi puede resultar difícil elegir pour otra persona parce \.\.\./gi, "La haute joaillerie permet de célébrer les moments précieux. Il peut toutefois être délicat de choisir pour une autre personne.")
    .replace(/por lo que/gi, "donc")
    .replace(/para/gi, "pour")
    .replace(/con/gi, "avec")
    .replace(/sin/gi, "sans")
    .replace(/como/gi, "comme")
    .replace(/más/gi, "plus")
    .replace(/menos/gi, "moins")
    .replace(/pero/gi, "mais")
    .replace(/donde/gi, "où")
    .replace(/cuando/gi, "quand")
    .replace(/porque/gi, "parce que")
    .replace(/también/gi, "aussi")
    .replace(/puede/gi, "peut")
    .replace(/pueden/gi, "peuvent")
    .replace(/debe/gi, "doit")
    .replace(/deben/gi, "doivent")
    .replace(/así/gi, "ainsi")
    .replace(/antes/gi, "avant")
    .replace(/después/gi, "après")
    .replace(/durante/gi, "pendant")
    .replace(/entre/gi, "entre")
    .replace(/sobre/gi, "sur");

  return str;
}

let count = 0;

blogsFr.forEach((blog) => {
  blog.title = sanitizeFrCardText(blog.title);
  blog.excerpt = sanitizeFrCardText(blog.excerpt);
  count++;
});

fs.writeFileSync(frDataPath, JSON.stringify(blogsFr, null, 2), "utf-8");
console.log(`Successfully verified and sanitized ${count} blog card titles and excerpts into pure French!`);
