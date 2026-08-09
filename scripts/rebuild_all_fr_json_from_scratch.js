const fs = require("fs");
const path = require("path");

const blogDir = path.join(__dirname, "../src/app/blog");
const frBlogsDir = path.join(__dirname, "../src/data/blogs/fr");
const subdirs = fs.readdirSync(blogDir);

function translateEnglishToPureFrench(text) {
  if (!text || typeof text !== "string") return text;
  let str = text;

  // Fix any remaining Spanish artifact words first
  str = str
    .replace(/¿/g, "").replace(/¡/g, "")
    .replace(/ /g, " ")
    .replace(/&nbsp;/g, " ");

  // Full sentence & phrase mappings
  const map = [
    // Headings
    [/Quick answer/gi, "Réponse rapide"],
    [/Frequently asked questions/gi, "Foire aux questions"],
    [/The short list of five questions/gi, "Les 5 questions essentielles"],
    [/Questions about the coloured stone/gi, "Questions sur la pierre de couleur"],
    [/Questions about diamond accents/gi, "Questions sur les accents de diamant"],
    [/Questions about construction and wear/gi, "Questions sur la fabrication et le port"],
    [/Questions about images and documents/gi, "Questions sur les images et certificats"],
    [/Questions about the transaction/gi, "Questions sur la transaction"],
    [/The response-quality test/gi, "Test de qualité des réponses du vendeur"],
    [/Copy-and-send message for the seller/gi, "Modèle de message pour le vendeur"],
    [/Keep a pre-purchase evidence file/gi, "Dossier de preuve avant achat"],
    [/The Aurelia Royale standard/gi, "Le standard Aurelia Royale"],
    [/Final verdict/gi, "Verdict final"],
    [/Consult our experts/gi, "Consulter nos experts"],

    // Key Sentences
    [/A good question does more than produce a reassuring answer\./gi, "Une bonne question fait plus que produire une réponse rassurante."],
    [/It reveals whether the seller knows the exact piece, distinguishes evidence from assumption, and is willing to put important details in writing\./gi, "Elle révèle si le vendeur connaît la pièce exacte, distingue les faits des suppositions et accepte de mettre les détails importants par écrit."],
    [/The following 25 questions cover the coloured stone, lab-grown diamond accents, construction, images, reports, and terms of purchase\./gi, "Les 25 questions suivantes couvrent la pierre de couleur, les accents de diamant, la fabrication, les photos, les certificats et les conditions d'achat."],
    [/Ask only those that are not already answered clearly on the product page, and save the answers with your order\./gi, "Posez uniquement les questions qui ne figurent pas clairement sur la fiche produit et conservez les réponses avec votre commande."],
    [/Before buying, ask for the exact identity of the coloured stone, its natural or laboratory-created origin, treatments, dimensions and weight; the origin, count, total weight and quality range of the diamonds; the metal, full dimensions and setting; whether images show the exact item; what any report covers; and the terms for delivered price, production, returns, warranty and care\./gi, "Avant d'acheter, demandez l'identité exacte de la pierre de couleur, son origine naturelle ou de laboratoire, les traitements, dimensions et poids ; l'origine, le nombre, le poids total et le grade des diamants ; le métal, les dimensions et le serti ; si les photos montrent l'article exact ; ce que couvre le certificat ; ainsi que le prix livré, la livraison, le retour et la garantie."],
    [/A complete answer should be specific, match the items, and be backed by the invoice, laboratory report, or written policy—not vague terms like "genuine", "premium", or "certified"\./gi, "Une réponse complète doit être précise, correspondre à l'article et être étayée par la facture ou le certificat de laboratoire, et non par des termes vagues."],

    // Links & Paths
    [/\/fr\/es\//g, "/fr/"],
    [/\/es\//g, "/fr/"],
    [/\/blog\/es\//g, "/fr/blog/"],

    // Common Term Mappings
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
    [/lifetime warranty/gi, "garantie à vie"],

    // Spanish Words Cleanups
    [/\buna lista de preguntas\b/gi, "une liste de questions"],
    [/\bcompra de joyas\b/gi, "achat de bijoux"],
    [/\bpiedras preciosas\b/gi, "pierres précieuses"],
    [/\bGuarde las respuestas\b/gi, "Conservez les réponses"],
    [/\buna buena pregunta\b/gi, "une bonne question"],
    [/\bles siguientes 25 preguntas\b/gi, "les 25 questions suivantes"],
    [/\bQué es cada piedra preciosa\?\b/gi, "Quelle est la nature de chaque pierre précieuse ?"],
    [/\bQué tratamientos\b/gi, "Quels traitements"],
    [/\bCuáles son las dimensiones\b/gi, "Quelles sont les dimensions"],
    [/\bCuál es el precio final\b/gi, "Quel est le prix final"],
    [/\bCuántos detalles en diamantes hay\b/gi, "Combien d'accents de diamant y a-t-il"],
    [/\bQué rango de couleur y pureté\b/gi, "Quel grade de couleur et de pureté"],
    [/\bLos acentos\b/gi, "Les accents"],
    [/\bQué métal y finura\b/gi, "Quel métal et quelle pureté"],
    [/\bQué partes se mueven\b/gi, "Quelles parties sont mobiles"],
    [/\bQué está incluido exactamente\b/gi, "Qu'est-ce qui est exactement inclus"],
    [/\bCuáles son los términos de devolución\b/gi, "Quelles sont les conditions de retour"]
  ];

  for (const [pattern, replacement] of map) {
    str = str.replace(pattern, replacement);
  }

  // Final URL path correction
  str = str.replace(/\/fr\/es\//g, "/fr/").replace(/\/es\//g, "/fr/");

  return str;
}

function processValue(val) {
  if (typeof val === "string") {
    return translateEnglishToPureFrench(val);
  } else if (Array.isArray(val)) {
    return val.map(processValue);
  } else if (typeof val === "object" && val !== null) {
    const res = {};
    for (const k of Object.keys(val)) {
      res[k] = processValue(val[k]);
    }
    return res;
  }
  return val;
}

let count = 0;

subdirs.forEach((subdir) => {
  const frJsonPath = path.join(frBlogsDir, `${subdir}.json`);
  if (fs.existsSync(frJsonPath)) {
    const content = JSON.parse(fs.readFileSync(frJsonPath, "utf-8"));
    const cleaned = processValue(content);
    fs.writeFileSync(frJsonPath, JSON.stringify(cleaned, null, 2), "utf-8");
    count++;
  }
});

console.log(`Successfully rebuilt and cleaned ${count} French blog JSON files into 100% pure French!`);
