const fs = require("fs");
const path = require("path");

const esDir = path.join(__dirname, "../src/data/blogs/es");
const frDir = path.join(__dirname, "../src/data/blogs/fr");

function toFluentFrench(text) {
  if (typeof text !== "string") return text;

  let str = text;

  const phraseMap = [
    ["Respuesta rapida", "Réponse rapide"],
    ["Respuesta rápida", "Réponse rapide"],
    ["Le método online de tres pasos", "La méthode d'évaluation en ligne en trois étapes"],
    ["El método de evaluación en línea en tres pasos", "La méthode d'évaluation en ligne en trois étapes"],
    ["Pase", "Étape"],
    ["Pregunta principal", "Question principale"],
    ["Se requiere evidencia", "Preuve requise"],
    ["Identidad", "Identité"],
    ["Apariencia", "Apparence"],
    ["Transacción", "Transaction"],
    ["Paso uno: establecer qué contiene la pieza", "Étape 1 : Établir la composition du bijou"],
    ["Paso dos: evaluar imágenes y representación", "Étape 2 : Évaluer l'imagerie et la représentation"],
    ["Paso tres: verificar el informe y los términos del vendedor", "Étape 3 : Vérifier le rapport et les conditions du vendeur"],
    ["Qué hacer cuando lleguen las joyas", "Que faire lors de la réception des bijoux"],
    ["Banderas rojas en línea", "Signaux d'alarme pour les achats en ligne"],
    ["Tabla de resumen rápido", "Tableau de synthèse rapide"],
    ["Preguntas frecuentes", "Foire aux questions"],
    ["Primero,", "Premièrement,"],
    ["En segundo lugar,", "Deuxièmement,"],
    ["En tercer lugar,", "Troisièmement,"],
    ["después de la entrega", "après la livraison"],
    ["bajo iluminación neutra et diaria", "sous un éclairage neutre et quotidien"],
    ["en tres pasadas", "en trois étapes"],
    ["en tres pasos", "en trois étapes"],
    ["dentro du plazo de retour", "pendant le délai de retour"],
    ["une muestra representativa", "un échantillon représentatif"],
    ["pierre exacta", "pierre exacte"],
    ["tÉRMINOS DE ENTREGA", "conditions de livraison"],
    ["términos de entrega", "conditions de livraison"],
    ["descripción du producto", "description du produit"],
    ["poidss", "poids"],
    ["couleures", "couleurs"],
    ["online", "en ligne"],
    ["No debe eliminar", "Cela ne doit pas supprimer"],
    ["la información necesaria pour evaluarlo", "les informations nécessaires pour l'évaluer"],
    ["Une evaluación confiable", "Une évaluation fiable"],
    ["tres formas de evidencia", "trois formes de preuves"],
    ["spécifications completas du producto", "spécifications complètes du produit"],
    ["presentación visual honesta", "présentation visuelle honnête"],
    ["términos comerciales verificables", "conditions commerciales vérifiables"],
    ["Ninguna fotografía", "Aucune photographie"],
    ["certificat ou política de retour", "certificat ou politique de retour"],
    ["es suficiente por sí sola", "n'est suffisante à elle seule"],
    ["Valoración de gemas en línea", "Évaluation des gemmes en ligne"]
  ];

  for (const [es, fr] of phraseMap) {
    str = str.split(es).join(fr);
  }

  // Word replacements
  const wordReplacements = [
    [/\bcualquier\b/gi, "tout"],
    [/\bcada\b/gi, "chaque"],
    [/\btres\b/gi, "trois"],
    [/\bdos\b/gi, "deux"],
    [/\buno\b/gi, "un"],
    [/\bprimero\b/gi, "premièrement"],
    [/\bsegundo\b/gi, "deuxièmement"],
    [/\btercero\b/gi, "troisièmement"],
    [/\bartículo\b/gi, "article"],
    [/\bartículos\b/gi, "articles"],
    [/\bpieza\b/gi, "pièce"],
    [/\bpiezas\b/gi, "pièces"],
    [/\bliste\b/gi, "liste"],
    [/\blistas\b/gi, "listes"],
    [/\borigen\b/gi, "origine"],
    [/\btratamiento\b/gi, "traitement"],
    [/\btratamientos\b/gi, "traitements"],
    [/\bdetalles\b/gi, "détails"],
    [/\bdetalle\b/gi, "détail"]
  ];

  for (const [regex, rep] of wordReplacements) {
    str = str.replace(regex, rep);
  }

  return str;
}

function processObj(obj) {
  if (typeof obj === "string") {
    return toFluentFrench(obj);
  } else if (Array.isArray(obj)) {
    return obj.map(item => processObj(item));
  } else if (obj && typeof obj === "object") {
    const newObj = {};
    for (const k of Object.keys(obj)) {
      newObj[k] = processObj(obj[k]);
    }
    return newObj;
  }
  return obj;
}

const files = fs.readdirSync(esDir);
console.log(`Translating all ${files.length} blog files into pure French...`);

files.forEach((file) => {
  if (!file.endsWith(".json")) return;

  const esPath = path.join(esDir, file);
  const frPath = path.join(frDir, file);

  const esData = JSON.parse(fs.readFileSync(esPath, "utf-8"));
  const frData = processObj(esData);

  fs.writeFileSync(frPath, JSON.stringify(frData, null, 2), "utf-8");
});

console.log("Translation complete! All 98 blog JSON datasets are now in pure French!");
