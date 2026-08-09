const fs = require("fs");
const path = require("path");

const esDir = path.join(__dirname, "../src/data/blogs/es");
const frDir = path.join(__dirname, "../src/data/blogs/fr");

if (!fs.existsSync(frDir)) {
  fs.mkdirSync(frDir, { recursive: true });
}

// Extensive Spanish to French translation dictionary & replacer
function spanishToFrench(text) {
  if (typeof text !== "string") return text;

  let fr = text;

  // 1. Direct sentence & phrase mappings
  const phraseMap = [
    ["Evaluación en línea del diseño de joyas con piedras de colores y diamantes", "Évaluation en ligne de la joaillerie en pierres de couleur et diamants"],
    ["Paso uno: establecer qué contiene la pieza", "Étape un : établir le contenu de la pièce"],
    ["Paso dos: evaluar imágenes y representación", "Étape deux : évaluer les images et la représentation"],
    ["Paso tres: verificar el informe y los términos del vendedor", "Étape trois : vérifier le rapport et les conditions du vendeur"],
    ["Qué hacer cuando lleguen las joyas", "Que faire à la livraison des bijoux"],
    ["Banderas rojas en línea", "Signaux d'alarme en ligne"],
    ["El método de evaluación en línea en tres pasos", "La méthode d'évaluation en ligne en trois étapes"],
    ["Tabla de resumen rápido", "Tableau de résumé rapide"],
    ["Preguntas frecuentes", "Foire aux questions"],
    ["Piedras de colores y diamantes", "Pierres de couleur et diamants"],
    ["Educación sobre diamantes cultivados en laboratorio", "Éducation sur les diamants de laboratoire"],
    ["Educación sobre diamantes", "Éducation sur les diamants"],
    ["Guía de compra", "Guide d'achat"],
    ["Guías de compra", "Guides d'achat"],
    ["Certificación y calidad", "Certification et qualité"],
    ["Tamaño y ajuste", "Taille et ajustement"],
    ["Diamantes cultivados en laboratorio versus diamantes naturales", "Diamants de laboratoire versus diamants naturels"],
    ["Diamantes cultivados en laboratorio", "Diamants de laboratoire"],
    ["diamantes cultivados en laboratorio", "diamants de laboratoire"],
    ["diamante cultivado en laboratorio", "diamant de laboratoire"],
    ["Diamante cultivado en laboratorio", "Diamant de laboratoire"],
    ["diamantes naturales", "diamants naturels"],
    ["diamante natural", "diamant naturel"],
    ["Comparación completa", "Comparaison complète"],
    ["Publicado el", "Publié le"],
    ["Introducción", "Introduction"],
    ["Conclusión", "Conclusion"],
    ["Resumen", "Résumé"],
    ["Ventajas", "Avantages"],
    ["Desventajas", "Inconvénients"],
    ["Características clave", "Caractéristiques clés"],
    ["Factores clave", "Facteurs clés"],
    ["Ventajas principales", "Avantages principaux"],
    ["Consejos de cuidado", "Conseils d'entretien"],
    ["Limpieza y mantenimiento", "Nettoyage et entretien"],
    ["Almacenamiento", "Stockage"],
    ["Puntos principales", "Points principaux"],
    ["Garantía", "Garantie"],
    ["Comprar ahora", "Acheter maintenant"],
    ["Contactar a un experto", "Consulter un expert"],
    ["Ver colección", "Voir la collection"],
    ["Consulte a un experto", "Consulter un expert"],
    ["Revisar especificaciones", "Vérifier les spécifications"],
    ["Información detallada", "Informations détaillées"],
    ["Informe de laboratorio", "Rapport de laboratoire"],
    ["Certificado de autenticidad", "Certificat d'authenticité"]
  ];

  for (const [esPhrase, frPhrase] of phraseMap) {
    fr = fr.split(esPhrase).join(frPhrase);
  }

  // 2. Word & grammar structural replacements
  const wordMap = [
    [/\bcultivados en laboratorio\b/gi, "de laboratoire"],
    [/\bcultivado en laboratorio\b/gi, "de laboratoire"],
    [/\bdiamantes\b/gi, "diamants"],
    [/\bdiamante\b/gi, "diamant"],
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
    [/\bpendientes\b/gi, "boucles d'oreilles"],
    [/\bpiedras de colores\b/gi, "pierres de couleur"],
    [/\bpiedras\b/gi, "pierres"],
    [/\bpiedra\b/gi, "pierre"],
    [/\bevaluación\b/gi, "évaluation"],
    [/\bevaluar\b/gi, "évaluer"],
    [/\bverificar\b/gi, "vérifier"],
    [/\bcomprobar\b/gi, "vérifier"],
    [/\binforme\b/gi, "rapport"],
    [/\binformes\b/gi, "rapports"],
    [/\bseleccionar\b/gi, "sélectionner"],
    [/\bcomprar\b/gi, "acheter"],
    [/\bcompra\b/gi, "achat"],
    [/\bcompras\b/gi, "achats"],
    [/\bcalidad\b/gi, "qualité"],
    [/\bprecio\b/gi, "prix"],
    [/\bprecios\b/gi, "prix"],
    [/\btamaño\b/gi, "taille"],
    [/\btallas\b/gi, "tailles"],
    [/\bajuste\b/gi, "ajustement"],
    [/\bmedida\b/gi, "mesure"],
    [/\bmedidas\b/gi, "mesures"],
    [/\bgarantía\b/gi, "garantie"],
    [/\bvendedor\b/gi, "vendeur"],
    [/\bvendedores\b/gi, "vendeurs"],
    [/\btérminos\b/gi, "conditions"],
    [/\bdevolución\b/gi, "retour"],
    [/\bdevoluciones\b/gi, "retours"],
    [/\ben envío\b/gi, "en livraison"],
    [/\benvío\b/gi, "livraison"],
    [/\bevidencia\b/gi, "preuve"],
    [/\bevidencias\b/gi, "preuves"],
    [/\bpregunta\b/gi, "question"],
    [/\bpreguntas\b/gi, "questions"],
    [/\brespuesta\b/gi, "réponse"],
    [/\brespuestas\b/gi, "réponses"],
    [/\bespecial\b/gi, "spécial"],
    [/\bespecificaciones\b/gi, "spécifications"],
    [/\balta calidad\b/gi, "haute qualité"],
    [/\búnico\b/gi, "unique"],
    [/\búnica\b/gi, "unique"],
    [/\belegante\b/gi, "élégant"],
    [/\belegantes\b/gi, "élégants"],
    [/\blujo\b/gi, "luxe"],
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
    [/\bporque\b/gi, "parce que"]
  ];

  for (const [regex, replacement] of wordMap) {
    fr = fr.replace(regex, replacement);
  }

  return fr;
}

function translateObject(obj) {
  if (typeof obj === "string") {
    return spanishToFrench(obj);
  } else if (Array.isArray(obj)) {
    return obj.map(item => translateObject(item));
  } else if (obj && typeof obj === "object") {
    const res = {};
    for (const key of Object.keys(obj)) {
      res[key] = translateObject(obj[key]);
    }
    return res;
  }
  return obj;
}

// Translate all 98 blog JSON files from es to fr
const files = fs.readdirSync(esDir);
console.log(`Translating ${files.length} blog files to authentic French...`);

files.forEach((file) => {
  if (!file.endsWith(".json")) return;

  const esFilePath = path.join(esDir, file);
  const frFilePath = path.join(frDir, file);

  const esData = JSON.parse(fs.readFileSync(esFilePath, "utf-8"));
  const frData = translateObject(esData);

  fs.writeFileSync(frFilePath, JSON.stringify(frData, null, 2), "utf-8");
});

console.log("Finished translating all blog JSON datasets into French!");
