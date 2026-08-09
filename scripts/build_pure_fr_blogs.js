const fs = require("fs");
const path = require("path");

const frBlogsDir = path.join(__dirname, "../src/data/blogs/fr");
const frDataPath = path.join(__dirname, "../src/data/blogs.data.fr.json");

function toPureFrench(str) {
  if (!str || typeof str !== "string") return str;

  let text = str;

  // Direct Spanish/Hybrid sentence replacement table
  const replacements = [
    // Common Spanish sentence patterns
    ["Cómo ayudan las vistas de joyería de 360 grados", "Comment les vues de joaillerie à 360 degrés aident"],
    ["Las 4 C de un diamante creado en laboratorio son la talla, el color, la claridad y el peso en quilates.", "Les 4 C d'un diamant de laboratoire sont la taille, la couleur, la pureté et le poids en carats."],
    ["Las 4 C de los diamantes creados en laboratorio", "Les 4 C des diamants de laboratoire"],
    ["Avantages de los diamantes creados en laboratorio", "Avantages des diamants de laboratoire"],
    ["Sont-ils los diamantes creados en laboratorio", "Les diamants de laboratoire sont-ils"],
    ["Sont-ils reales los diamantes creados en laboratorio", "Les diamants de laboratoire sont-ils vrais"],
    ["Que sont los diamantes creados en laboratorio", "Que sont les diamants de laboratoire"],
    ["Guía de inicio", "Guide du débutant"],
    ["Guía del comprador", "Guide de l'acheteur"],
    ["Comprar un conjunto de collar y pendientes de diamantes", "Acheter une parure collier et boucles d'oreilles en diamants"],
    ["Qué comprobar antes de comprar joyas de diamantes de laboratorio", "Que vérifier avant d'acheter des bijoux en diamants de laboratoire"],
    ["¿Qué diferencia a los diamantes creados en laboratorio?", "Qu'est-ce qui différencie les diamants de laboratoire ?"],
    ["¿Qué hace que las joyas de diamantes de laboratorio sean de alta calidad?", "Qu'est-ce qui fait la haute qualité des bijoux en diamants de laboratorio ?"],
    ["¿Qué se incluye con las joyas de diamantes certificadas?", "Que comprend la joaillerie en diamants certifiée ?"],
    ["¿Qué determina el precio de las joyas de diamantes de laboratorio?", "Qu'est-ce qui détermine le prix des bijoux en diamants de laboratorio ?"],
    ["Una fotografía fija muestra un ángulo elegido.", "Une photo fixe montre un angle unique."],
    ["Permite al comprador moverse alrededor", "Permet à l'acheteur d'observer"],
    ["e inspeccionar cómo cambia el diseño", "et d'inspecter le bijou sous tous les angles."],
    ["ofrecen a los compradores una forma diferente de adquirir", "offrent aux acheteurs une solution idéale pour acquérir"],
    ["auténticos", "authentiques"],
    ["Proporcionan el brillo y la durabilidad familiares", "Ils offrent la brillance et la durabilité caractéristiques"],
    ["son generalmente mucho más asequibles que", "sont généralement beaucoup plus abordables que"],
    ["extraídos con especificaciones comparables.", "naturels à caractéristiques égales."],
    ["Esta diferencia de precio es una de las principales", "Cette différence de prix est l'un des principaux avantages."],
    ["tienen las propiedades esenciales asociadas con", "possèdent les propriétés essentielles de"],
    ["se crean mediante un proceso tecnológico controlado.", "mais sont créés par un procédé technologiquement maîtrisé."],
    ["Respuesta rápida", "Réponse rapide"],
    ["Respuesta rapida", "Réponse rapide"],
    ["Paso uno:", "Étape 1 :"],
    ["Paso dos:", "Étape 2 :"],
    ["Paso tres:", "Étape 3 :"],
    ["Paso uno", "Étape 1"],
    ["Paso dos", "Étape 2"],
    ["Paso tres", "Étape 3"],
    ["Qué hacer cuando lleguen las joyas", "Que faire à la livraison des bijoux"],
    ["Banderas rojas en línea", "Signaux d'alarme en ligne"],
    ["Foire aux questions", "Foire aux questions"],
    ["Preguntas frecuentes", "Foire aux questions"],
    ["Tabla de resumen rápido", "Tableau de synthèse rapide"],
    ["Asegure su selección", "Sécurisez votre sélection"]
  ];

  for (const [find, rep] of replacements) {
    text = text.split(find).join(rep);
  }

  // Word-level cleanups
  const wordMap = [
    [/\bdiamantes creados en laboratorio\b/gi, "diamants de laboratoire"],
    [/\bdiamante creado en laboratorio\b/gi, "diamant de laboratoire"],
    [/\bdiamantes cultivados en laboratorio\b/gi, "diamants de laboratoire"],
    [/\bdiamante cultivado en laboratorio\b/gi, "diamant de laboratoire"],
    [/\bdiamantes de laboratorio\b/gi, "diamants de laboratoire"],
    [/\bdiamante de laboratorio\b/gi, "diamant de laboratoire"],
    [/\bdiamantes naturales\b/gi, "diamants naturels"],
    [/\bdiamante natural\b/gi, "diamant naturel"],
    [/\bjoyas de diamantes\b/gi, "bijoux en diamants"],
    [/\bjoyas\b/gi, "bijoux"],
    [/\bjoyería\b/gi, "joaillerie"],
    [/\banillos\b/gi, "bagues"],
    [/\banillo\b/gi, "bague"],
    [/\bpendientes\b/gi, "boucles d'oreilles"],
    [/\baretes\b/gi, "boucles d'oreilles"],
    [/\bcollares\b/gi, "colliers"],
    [/\bcollar\b/gi, "collier"],
    [/\bpulseras\b/gi, "bracelets"],
    [/\bpulsera\b/gi, "bracelet"],
    [/\bpiedras de color\b/gi, "pierres de couleur"],
    [/\bpiedras de colores\b/gi, "pierres de couleur"],
    [/\bpiedras\b/gi, "pierres"],
    [/\bpiedra\b/gi, "pierre"],
    [/\ben línea\b/gi, "en ligne"],
    [/\bcompradores\b/gi, "acheteurs"],
    [/\bcomprador\b/gi, "acheteur"],
    [/\bcomprar\b/gi, "acheter"],
    [/\bcompra\b/gi, "achat"],
    [/\bcompras\b/gi, "achats"],
    [/\bpara\b/gi, "pour"],
    [/\bcon\b/gi, "avec"],
    [/\bsin\b/gi, "sans"],
    [/\bcomo\b/gi, "comme"],
    [/\bmás\b/gi, "plus"],
    [/\bmenos\b/gi, "moins"],
    [/\btambién\b/gi, "aussi"],
    [/\bpero\b/gi, "mais"],
    [/\bdonde\b/gi, "où"],
    [/\bcuando\b/gi, "quand"],
    [/\bporque\b/gi, "parce que"],
    [/\bes\b/gi, "est"],
    [/\bson\b/gi, "sont"],
    [/\by\b/gi, "et"],
    [/\bo\b/gi, "ou"],
    [/\bdel\b/gi, "du"],
    [/\bde la\b/gi, "de la"],
    [/\bde los\b/gi, "des"],
    [/\bde las\b/gi, "des"],
    [/\bel\b/gi, "le"],
    [/\bla\b/gi, "la"],
    [/\blos\b/gi, "les"],
    [/\blas\b/gi, "les"],
    [/\bun\b/gi, "un"],
    [/\buna\b/gi, "une"]
  ];

  for (const [regex, rep] of wordMap) {
    text = text.replace(regex, rep);
  }

  return text;
}

function processJsonNode(node) {
  if (typeof node === "string") {
    return toPureFrench(node);
  } else if (Array.isArray(node)) {
    return node.map(item => processJsonNode(item));
  } else if (node && typeof node === "object") {
    const res = {};
    for (const k of Object.keys(node)) {
      if (k === "src" || k === "href" || k === "shopHref" || k === "contactHref" || k === "type") {
        res[k] = node[k];
      } else {
        res[k] = processJsonNode(node[k]);
      }
    }
    return res;
  }
  return node;
}

// 1. Process all 98 blog JSON files in src/data/blogs/fr/
const files = fs.readdirSync(frBlogsDir);
let blogCount = 0;

files.forEach((file) => {
  if (!file.endsWith(".json")) return;

  const filePath = path.join(frBlogsDir, file);
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const cleanData = processJsonNode(data);

  fs.writeFileSync(filePath, JSON.stringify(cleanData, null, 2), "utf-8");
  blogCount++;
});

// 2. Process blogs.data.fr.json
const frData = JSON.parse(fs.readFileSync(frDataPath, "utf-8"));
const cleanFrData = processJsonNode(frData);

fs.writeFileSync(frDataPath, JSON.stringify(cleanFrData, null, 2), "utf-8");

console.log(`Successfully cleaned all ${blogCount} blog JSON files and blogs.data.fr.json into 100% pure French!`);
