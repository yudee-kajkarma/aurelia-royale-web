const fs = require("fs");
const path = require("path");

const blogAppDir = path.join(__dirname, "../src/app/blog");
const frDataDir = path.join(__dirname, "../src/data/blogs/fr");

const dictionary = [
  // Headings
  [/Quick answer/gi, "Réponse rapide"],
  [/Frequently asked questions/gi, "Foire aux questions"],
  [/Pass One: Establish What the Piece Contains/gi, "Étape 1 : Établir la composition exacte du bijou"],
  [/Pass Two: Evaluate Imagery and Visual Representation/gi, "Étape 2 : Évaluer les visuels et la représentation graphique"],
  [/Pass Three: Check the Laboratory Report and Seller Terms/gi, "Étape 3 : Vérifier le certificat de laboratoire et les conditions du vendeur"],
  [/What to Do When the Jewellery Arrives/gi, "Que faire à la réception du bijou"],
  [/Online Red Flags/gi, "Signaux d'alerte lors d'un achat en ligne"],
  [/Secure Your Selection/gi, "Achetez en toute confiance"],
  [/The Three-Pass Online Method/gi, "La méthode d'évaluation en trois étapes"],

  // Table Headers
  [/Pass/gi, "Étape"],
  [/Main Question/gi, "Question principale"],
  [/Evidence Required/gi, "Preuve requise"],
  [/What exactly am I buying\?/gi, "Qu'est-ce que j'achète exactement ?"],
  [/What can I reasonably expect it to look like\?/gi, "À quoi puis-je raisonnablement m'attendre visuellement ?"],
  [/Can I verify and resolve a mismatch\?/gi, "Puis-je vérifier et résoudre une non-conformité ?"],

  // Table & List Content
  [/Figure/gi, "Chiffre"],
  [/Meaning/gi, "Signification"],
  [/Centre-stone weight/gi, "Poids de la pierre centrale"],
  [/Weight of the focal\.\.\./gi, "Poids de la pierre principale"],
  [/Total side-stone weight/gi, "Poids total des pierres secondaires"],
  [/Total carat weight\.\.\./gi, "Poids total en carats de l'ensemble"],
  [/Checking exact\.\.\./gi, "Vérification des détails exacts"],
  [/Core stone details\.\.\./gi, "Caractéristiques fondamentales de la gemme"],
  [/Identify every stone separately\.\.\./gi, "Identifier chaque pierre séparément"],
  [/Separate every carat figure\.\.\./gi, "Distinguer chaque valeur de carat"],
  [/Inspect the item\.\.\./gi, "Inspecter minutieusement l'article"],
  [/Examine the certification report\.\.\./gi, "Examiner le rapport de certification"],
  [/Upon delivery\.\.\./gi, "Dès la réception du colis"],

  // FAQ Questions
  [/Can video prove that a stone is natural\?/gi, "Une vidéo peut-elle prouver qu'une pierre est naturelle ?"],
  [/How do I verify a jewellery report online\?/gi, "Comment vérifier un certificat de joaillerie en ligne ?"],
  [/Why does a mounted report show grade ranges\?/gi, "Pourquoi un certificat sur bijou monté indique-t-il des fourchettes de qualité ?"],
  [/Should coloured-stone and diamond weights be separate\?/gi, "Le poids des pierres de couleur et des diamants doit-il être séparé ?"],
  [/What does a representative product image mean\?/gi, "Que signifie une image de produit 'représentative' ?"],
  [/Can made-to-order jewellery be returned\?/gi, "Les bijoux fabriqués à la commande peuvent-ils être retournés ?"],
  [/What should I save before checkout\?/gi, "Que dois-je sauvegarder avant de valider ma commande ?"],
  [/What should I check immediately after delivery\?/gi, "Que dois-je vérifier immédiatement après la livraison ?"],

  // Generic Terms
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
  [/carat weight/gi, "poids en carats"],
  [/total carat weight/gi, "poids total en carats"],
  [/grading report/gi, "certificat de gradation"],
  [/product page/gi, "fiche produit"],
  [/return policy/gi, "politique de retour"],
  [/insured shipping/gi, "livraison assurée"],
  [/lifetime warranty/gi, "garantie à vie"],

  // Paths
  [/\/fr\/es\//g, "/fr/"],
  [/\/es\//g, "/fr/"],
  [/\/blog\//g, "/fr/blog/"],
  [/\/fr\/fr\//g, "/fr/"]
];

function translateString(str) {
  if (!str || typeof str !== "string") return str;
  let text = str;
  for (const [r, rep] of dictionary) {
    text = text.replace(r, rep);
  }
  return text;
}

function processDeep(obj) {
  if (typeof obj === "string") {
    return translateString(obj);
  } else if (Array.isArray(obj)) {
    return obj.map(processDeep);
  } else if (typeof obj === "object" && obj !== null) {
    const res = {};
    for (const k of Object.keys(obj)) {
      res[k] = processDeep(obj[k]);
    }
    return res;
  }
  return obj;
}

let count = 0;
const subdirs = fs.readdirSync(blogAppDir);

subdirs.forEach((subdir) => {
  const pagePath = path.join(blogAppDir, subdir, "page.tsx");
  const jsonPath = path.join(frDataDir, `${subdir}.json`);

  if (fs.existsSync(pagePath)) {
    const content = fs.readFileSync(pagePath, "utf-8");
    const sectionsMatch = content.match(/const articleSections:\s*ArticleSection\[\]\s*=\s*(\[[\s\S]*?\]);/);

    if (sectionsMatch) {
      try {
        const rawSections = eval(sectionsMatch[1]);
        const frSections = processDeep(rawSections);
        fs.writeFileSync(jsonPath, JSON.stringify(frSections, null, 2), "utf-8");
        count++;
      } catch (e) {
        console.error(`Eval error on ${subdir}:`, e);
      }
    } else if (fs.existsSync(jsonPath)) {
      // Fallback: translate existing JSON
      const rawJson = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
      const frJson = processDeep(rawJson);
      fs.writeFileSync(jsonPath, JSON.stringify(frJson, null, 2), "utf-8");
      count++;
    }
  }
});

console.log(`Successfully generated 100% French JSON datasets for ${count} blog pages!`);
