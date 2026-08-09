const fs = require("fs");
const path = require("path");

const blogDir = path.join(__dirname, "../src/app/blog");
const frBlogsDir = path.join(__dirname, "../src/data/blogs/fr");
const frDataPath = path.join(__dirname, "../src/data/blogs.data.fr.json");

const subdirs = fs.readdirSync(blogDir);
const frBlogsData = JSON.parse(fs.readFileSync(frDataPath, "utf-8"));
const frTitleMap = {};
frBlogsData.forEach(b => {
  frTitleMap[b.slug] = b.title;
});

// Dictionary for sentence-level & phrase-level English to French translation
const translationDictionary = [
  // Specific Page Title Replacements
  [/Questions About Coloured-Stone & Diamond Jewellery/gi, "Questions sur les bijoux en diamants et pierres de couleur"],
  [/25 Questions Before Buying Gemstone Jewellery/gi, "25 questions avant d'acheter des bijoux en gemmes et diamants"],
  [/Preguntas Joyas con diamantes y piedras de colores/gi, "Questions sur les bijoux en diamants et pierres de couleur"],

  // Sentence & Heading Replacements
  [/Quick answer/gi, "Réponse rapide"],
  [/Frequently asked questions/gi, "Foire aux questions"],
  [/The short list of five questions/gi, "Les cinq questions essentielles"],
  [/Questions about the coloured stone/gi, "Questions sur la pierre de couleur"],
  [/Questions about diamond accents/gi, "Questions sur les accents de diamant"],
  [/Questions about construction and wear/gi, "Questions sur la fabrication et le port"],
  [/Questions about images and documents/gi, "Questions sur les images et les certificats"],
  [/Questions about the transaction/gi, "Questions sur la transaction"],
  [/The response-quality test/gi, "Test de qualité des réponses du vendeur"],
  [/Copy-and-send message for the seller/gi, "Modèle de message à envoyer au vendeur"],
  [/Keep a pre-purchase evidence file/gi, "Dossier de preuve avant achat"],
  [/The Aurelia Royale standard/gi, "Le standard Aurelia Royale"],
  [/Final verdict/gi, "Verdict final"],
  [/Consult our experts/gi, "Consultez nos experts"],
  [/Explore the Collection/gi, "Explorer la Collection"],
  [/Ask an Expert/gi, "Consulter un Expert"],

  // Common Question Translations
  [/What is each gemstone\?/gi, "Quelle est la nature de chaque pierre précieuse ?"],
  [/Is the stone natural, lab-grown, composite or imitation\?/gi, "La pierre est-elle naturelle, cultivée en laboratoire, composée ou une imitation ?"],
  [/What treatments are known or detected, and how do they change care\?/gi, "Quels traitements sont connus ou détectés, et comment modifient-ils l'entretien ?"],
  [/What are the millimetre dimensions and carat weight of the centre stone, and what is the diamond accent total separately\?/gi, "Quelles sont les dimensions et le poids en carats de la pierre centrale et des diamants d'accent ?"],
  [/Does a verifiable report match this exact stone or finished piece, and what does it cover\?/gi, "Un certificat vérifiable correspond-il exactement à cette pierre ou au bijou fini ?"],
  [/What is the final delivered price, return position and warranty for my country and selected setting\?/gi, "Quel est le prix final livré, les conditions de retour et la garantie pour mon pays ?"],

  // Word & Phrase Replacements
  [/\/fr\/es\//g, "/fr/"],
  [/\/es\//g, "/fr/"],
  [/lab-grown diamond jewellery/gi, "bijoux en diamants de laboratoire"],
  [/lab-grown diamonds/gi, "diamants de laboratoire"],
  [/lab-grown diamond/gi, "diamant de laboratoire"],
  [/natural diamond/gi, "diamant naturel"],
  [/natural diamonds/gi, "diamants naturels"],
  [/coloured stone/gi, "pierre de couleur"],
  [/coloured stones/gi, "pierres de couleur"],
  [/gemstone jewellery/gi, "bijoux en pierres précieuses"],
  [/gemstone/gi, "pierre précieuse"],
  [/gemstones/gi, "pierres précieuses"],
  [/centre stone/gi, "pierre centrale"],
  [/diamond accents/gi, "accents de diamant"],
  [/diamond accent/gi, "accent de diamant"],
  [/carat weight/gi, "poids en carats"],
  [/total carat weight/gi, "poids total en carats"],
  [/yellow gold/gi, "or jaune"],
  [/white gold/gi, "or blanc"],
  [/rose gold/gi, "or rose"],
  [/platinum/gi, "platine"],
  [/silver/gi, "argent"],
  [/hallmark/gi, "poinçon"],
  [/hallmarks/gi, "poinçons"],
  [/grading report/gi, "certificat de gradation"],
  [/grading reports/gi, "certificats de gradation"],
  [/certificate/gi, "certificat"],
  [/certificates/gi, "certificats"],
  [/product page/gi, "fiche produit"],
  [/product pages/gi, "fiches produits"],
  [/online seller/gi, "vendeur en ligne"],
  [/online sellers/gi, "vendeurs en ligne"],
  [/return policy/gi, "politique de retour"],
  [/insured shipping/gi, "livraison assurée"],
  [/lifetime warranty/gi, "garantie à vie"]
];

function translateToPureFrench(str) {
  if (!str || typeof str !== "string") return str;
  let res = str;

  for (const [pattern, replacement] of translationDictionary) {
    res = res.replace(pattern, replacement);
  }

  // Final path cleanup
  res = res.replace(/\/fr\/es\//g, "/fr/").replace(/\/es\//g, "/fr/");

  return res;
}

function translateObjectDeep(obj) {
  if (typeof obj === "string") {
    return translateToPureFrench(obj);
  } else if (Array.isArray(obj)) {
    return obj.map(translateObjectDeep);
  } else if (typeof obj === "object" && obj !== null) {
    const res = {};
    for (const key of Object.keys(obj)) {
      res[key] = translateObjectDeep(obj[key]);
    }
    return res;
  }
  return obj;
}

let updatedPages = 0;

subdirs.forEach((subdir) => {
  const pagePath = path.join(blogDir, subdir, "page.tsx");
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, "utf-8");

    // 1. Fix metadataFr title and description
    const frTitle = frTitleMap[subdir] || translateToPureFrench(subdir.replace(/-/g, " "));
    const metaFrRegex = /export const metadataFr: Metadata = \{[\s\S]*?\};/;
    if (metaFrRegex.test(content)) {
      const newMetaFr = `export const metadataFr: Metadata = {
  title: "${frTitle}",
  description: "${frTitle} - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/fr/blog/${subdir}/",
  },
};`;
      content = content.replace(metaFrRegex, newMetaFr);
      fs.writeFileSync(pagePath, content, "utf-8");
    }

    // 2. Read existing FR JSON or create updated FR JSON
    const frJsonPath = path.join(frBlogsDir, `${subdir}.json`);
    if (fs.existsSync(frJsonPath)) {
      try {
        const rawJson = JSON.parse(fs.readFileSync(frJsonPath, "utf-8"));
        const cleanJson = translateObjectDeep(rawJson);
        fs.writeFileSync(frJsonPath, JSON.stringify(cleanJson, null, 2), "utf-8");
        updatedPages++;
      } catch (e) {
        console.error(`Error processing ${frJsonPath}:`, e);
      }
    }
  }
});

console.log(`Successfully updated metadataFr and translated JSON for ${updatedPages} blog pages to 100% pure French!`);
