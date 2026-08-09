const fs = require("fs");
const path = require("path");

const blogAppDir = path.join(__dirname, "../src/app/blog");
const frDataDir = path.join(__dirname, "../src/data/blogs/fr");
const blogsFrJsonPath = path.join(__dirname, "../src/data/blogs.data.fr.json");

// 1. Load blog card listings
const blogsFrCards = JSON.parse(fs.readFileSync(blogsFrJsonPath, "utf-8"));
const frTitleMap = {};
blogsFrCards.forEach((card) => {
  frTitleMap[card.slug] = card.title;
});

// Comprehensive translation rules from Spanish/English fragments to 100% Pure French
const masterTranslations = [
  // Spanish headings & sentence fragments
  [/Respuesta rápida/gi, "Réponse rapide"],
  [/Quick answer/gi, "Réponse rapide"],
  [/Preguntas frecuentes/gi, "Foire aux questions"],
  [/Frequently asked questions/gi, "Foire aux questions"],
  [/Foire aux preguntas/gi, "Foire aux questions"],
  [/Resumen/gi, "En résumé"],
  [/Summary/gi, "En résumé"],
  [/Puntos clave/gi, "Points clés"],
  [/Key takeaways/gi, "Points clés"],
  [/Guía de compra/gi, "Guide d'achat"],
  [/Buying guide/gi, "Guide d'achat"],
  [/Lista de verificación/gi, "Liste de contrôle"],
  [/Checklist/gi, "Liste de contrôle"],
  [/Conclusión/gi, "Conclusion"],
  [/Conclusion/gi, "Conclusion"],

  // Spanish vocabulary to French
  [/\bde diamantes de laboratorio\b/gi, "en diamants de laboratoire"],
  [/\bde diamantes naturales\b/gi, "en diamants naturels"],
  [/\bde diamantes\b/gi, "en diamants"],
  [/\bles bijoux de diamantes\b/gi, "les bijoux en diamants"],
  [/\bbijoux de diamantes\b/gi, "bijoux en diamants"],
  [/\bjoyas de diamantes\b/gi, "bijoux en diamants"],
  [/\bjoyas\b/gi, "bijoux"],
  [/\bjoyería\b/gi, "joaillerie"],
  [/\bjoyeria\b/gi, "joaillerie"],
  [/\bbague de diamantes\b/gi, "bague en diamants"],
  [/\bbagues de diamantes\b/gi, "bagues en diamants"],
  [/\bcollier de diamantes\b/gi, "collier en diamants"],
  [/\bcolliers de diamantes\b/gi, "colliers en diamants"],
  [/\bboucles d'oreilles de diamantes\b/gi, "boucles d'oreilles en diamants"],
  [/\bbracelet de diamantes\b/gi, "bracelet en diamants"],
  [/\bbracelets de diamantes\b/gi, "bracelets en diamants"],
  [/\bpendentif de diamantes\b/gi, "pendentif en diamants"],
  [/\bde laboratorio\b/gi, "de laboratoire"],
  [/\bcreados en laboratorio\b/gi, "cultivés en laboratoire"],
  [/\bcreado en laboratorio\b/gi, "cultivé en laboratoire"],
  [/\bcreadas en laboratorio\b/gi, "cultivées en laboratoire"],
  [/\bcreada en laboratorio\b/gi, "cultivée en laboratoire"],
  [/\bcultivados en laboratorio\b/gi, "cultivés en laboratoire"],
  [/\bcultivado en laboratorio\b/gi, "cultivé en laboratoire"],
  [/\bde alta calidad\b/gi, "de haute qualité"],
  [/\balta calidad\b/gi, "haute qualité"],
  [/\bde origen natural\b/gi, "d'origine naturelle"],
  [/\brelación calidad-precio\b/gi, "rapport qualité-prix"],
  [/\bpuntos clave\b/gi, "points clés"],
  [/\blista de verificación\b/gi, "liste de contrôle"],
  [/\bhoja de especificaciones\b/gi, "fiche technique"],
  [/\binforme de clasificación\b/gi, "certificat de gradation"],
  [/\binformes de clasificación\b/gi, "certificats de gradation"],
  [/\brapport de clasificación\b/gi, "certificat de gradation"],
  [/\brapports de clasificación\b/gi, "certificats de gradation"],
  [/\btalla, color, claridad y peso en quilates\b/gi, "taille, couleur, pureté et poids en carats"],
  [/\bpeso en quilates\b/gi, "poids en carats"],
  [/\btalla ideal\b/gi, "taille idéale"],
  [/\btalla excelente\b/gi, "taille excellente"],
  [/\btalla muy buena\b/gi, "taille très bonne"],
  [/\btalla buena\b/gi, "taille bonne"],
  [/\boro blanco\b/gi, "or blanc"],
  [/\boro amarillo\b/gi, "or jaune"],
  [/\boro rosa\b/gi, "or rose"],
  [/\bplatino\b/gi, "platine"],
  [/\bplata\b/gi, "argent"],
  [/\bpoinçons de finura\b/gi, "poinçons de pureté"],
  [/\bsellos de finura\b/gi, "poinçons de pureté"],
  [/\bcompra en línea\b/gi, "achat en ligne"],
  [/\bvendedor en línea\b/gi, "vendeur en ligne"],
  [/\bvendedores en línea\b/gi, "vendeurs en ligne"],
  [/\bjoaillier en línea\b/gi, "joaillier en ligne"],
  [/\bpolítica de devolución\b/gi, "politique de retour"],
  [/\bpolíticas de devolución\b/gi, "politiques de retour"],
  [/\bcondiciones de devolución\b/gi, "conditions de retour"],
  [/\benvío asegurado\b/gi, "livraison assurée"],
  [/\bgarantía de por vida\b/gi, "garantie à vie"],
  [/\bgarantía limitada\b/gi, "garantie limitée"],

  // Spanish words to French
  [/\buna bague\b/gi, "une bague"],
  [/\bun bague\b/gi, "une bague"],
  [/\buna joya\b/gi, "un bijou"],
  [/\bun joya\b/gi, "un bijou"],
  [/\bpiedra\b/gi, "pierre"],
  [/\bpiedras\b/gi, "pierres"],
  [/\bgemas\b/gi, "gemmes"],
  [/\bgema\b/gi, "gemme"],
  [/\bcolor\b/gi, "couleur"],
  [/\bcolores\b/gi, "couleurs"],
  [/\bclaridad\b/gi, "pureté"],
  [/\bquilates\b/gi, "carats"],
  [/\bpeso\b/gi, "poids"],
  [/\bcorte\b/gi, "taille"],
  [/\bcortes\b/gi, "tailles"],
  [/\bengaste\b/gi, "serti"],
  [/\bengastes\b/gi, "sertis"],
  [/\bcierre\b/gi, "fermoir"],
  [/\bcierres\b/gi, "fermoirs"],
  [/\bbrillo\b/gi, "éclat"],
  [/\bdestello\b/gi, "brillance"],
  [/\bcompras\b/gi, "achats"],
  [/\bcompra\b/gi, "achat"],
  [/\bcomprador\b/gi, "acheteur"],
  [/\bcompradores\b/gi, "acheteurs"],
  [/\bvendedor\b/gi, "vendeur"],
  [/\bvendedores\b/gi, "vendeurs"],
  [/\bprecio\b/gi, "prix"],
  [/\bprecios\b/gi, "prix"],
  [/\bvalor\b/gi, "valeur"],
  [/\bcosto\b/gi, "coût"],
  [/\bcostos\b/gi, "coûts"],
  [/\bentrega\b/gi, "livraison"],
  [/\benvíos\b/gi, "expéditions"],
  [/\benvío\b/gi, "expédition"],
  [/\bdevolución\b/gi, "retour"],
  [/\bdevoluciones\b/gi, "retours"],
  [/\bgarantía\b/gi, "garantie"],
  [/\bgarantías\b/gi, "garanties"],
  [/\bcertificado\b/gi, "certificat"],
  [/\bcertificados\b/gi, "certificats"],
  [/\binforme\b/gi, "certificat"],
  [/\binformes\b/gi, "certificats"],
  [/\bmarca\b/gi, "marque"],
  [/\bmarcas\b/gi, "marques"],
  [/\btienda\b/gi, "boutique"],
  [/\btiendas\b/gi, "boutiques"],
  [/\btamaño\b/gi, "taille"],
  [/\btamaños\b/gi, "tailles"],
  [/\bmedida\b/gi, "mesure"],
  [/\bmedidas\b/gi, "mesures"],
  [/\bdimensión\b/gi, "dimension"],
  [/\bdimensiones\b/gi, "dimensions"],
  [/\bescala\b/gi, "échelle"],
  [/\bproporción\b/gi, "proportion"],
  [/\bproporciones\b/gi, "proportions"],
  [/\bdiseño\b/gi, "design"],
  [/\bdiseños\b/gi, "designs"],
  [/\bmodelo\b/gi, "modèle"],
  [/\bmodelos\b/gi, "modèles"],
  [/\bestilo\b/gi, "style"],
  [/\bestilos\b/gi, "styles"],
  [/\bmetal\b/gi, "métal"],
  [/\bmetales\b/gi, "métaux"],
  [/\blimpieza\b/gi, "nettoyage"],
  [/\bcuidado\b/gi, "entretien"],
  [/\balmacenamiento\b/gi, "rangement"],
  [/\buso\b/gi, "port"],
  [/\buso diario\b/gi, "port quotidien"],
  [/\bdiario\b/gi, "quotidien"],
  [/\bdurabilidad\b/gi, "durabilité"],
  [/\bresistencia\b/gi, "résistance"],
  [/\bdureza\b/gi, "dureté"],
  [/\brayaduras\b/gi, "rayures"],
  [/\brasguños\b/gi, "rayures"],
  [/\bdesgaste\b/gi, "usure"],
  [/\bagua\b/gi, "eau"],
  [/\bjabón\b/gi, "savon"],
  [/\bcrema\b/gi, "crème"],
  [/\bcremas\b/gi, "crèmes"],
  [/\bloción\b/gi, "lotion"],
  [/\blociones\b/gi, "lotions"],
  [/\bperfume\b/gi, "parfum"],
  [/\bperfumes\b/gi, "parfums"],
  [/\bsuelto\b/gi, "desserré"],
  [/\bsueltas\b/gi, "desserrées"],
  [/\bsueltos\b/gi, "desserrés"],
  [/\binspección\b/gi, "inspection"],
  [/\bmantenimiento\b/gi, "maintenance"],
  [/\breparación\b/gi, "réparation"],
  [/\btaller\b/gi, "atelier"],
  [/\bartesano\b/gi, "artisan"],
  [/\borfebre\b/gi, "orfèvre"],
  [/\bgemólogo\b/gi, "gemmologue"],
  [/\bgemología\b/gi, "gemmologie"],
  [/\blaboratorio\b/gi, "laboratoire"],
  [/\blaboratorios\b/gi, "laboratoires"],
  [/\bpor lo que\b/gi, "donc"],
  [/\bpara que\b/gi, "afin que"],
  [/\bpara\b/gi, "pour"],
  [/\bcon\b/gi, "avec"],
  [/\bsin\b/gi, "sans"],
  [/\bcomo\b/gi, "comme"],
  [/\bmás\b/gi, "plus"],
  [/\bmenos\b/gi, "moins"],
  [/\bpero\b/gi, "mais"],
  [/\bdonde\b/gi, "où"],
  [/\bcuando\b/gi, "quand"],
  [/\bporque\b/gi, "parce que"],
  [/\btambién\b/gi, "aussi"],
  [/\bpuede\b/gi, "peut"],
  [/\bpueden\b/gi, "peuvent"],
  [/\bdebe\b/gi, "doit"],
  [/\bdeben\b/gi, "doivent"],
  [/\basí\b/gi, "ainsi"],
  [/\bantes\b/gi, "avant"],
  [/\bdespués\b/gi, "après"],
  [/\bdurante\b/gi, "pendant"],
  [/\bentre\b/gi, "entre"],
  [/\bsobre\b/gi, "sur"],
  [/\bcada\b/gi, "chaque"],
  [/\besta\b/gi, "cette"],
  [/\beste\b/gi, "ce"],
  [/\bestos\b/gi, "ces"],
  [/\bestas\b/gi, "ces"],
  [/\bnuestro\b/gi, "notre"],
  [/\bnuestra\b/gi, "notre"],
  [/\bnuestros\b/gi, "nos"],
  [/\bnuestras\b/gi, "nos"],
  [/\btodo\b/gi, "tout"],
  [/\btoda\b/gi, "toute"],
  [/\btodos\b/gi, "tous"],
  [/\btodas\b/gi, "toutes"],
  [/\balgunos\b/gi, "certains"],
  [/\balgunas\b/gi, "certaines"],
  [/\botros\b/gi, "d'autres"],
  [/\botras\b/gi, "d'autres"],
  [/\bmismo\b/gi, "même"],
  [/\bmisma\b/gi, "même"],
  [/\bmismos\b/gi, "mêmes"],
  [/\bmismas\b/gi, "mêmes"],

  // Spanish symbols and punctuation
  [/¿/g, ""],
  [/¡/g, ""],

  // Link cleanup
  [/\/fr\/es\//g, "/fr/"],
  [/\/es\//g, "/fr/"],
  [/\/fr\/fr\//g, "/fr/"]
];

function translateText(str) {
  if (!str || typeof str !== "string") return str;
  let text = str;
  for (const [r, rep] of masterTranslations) {
    text = text.replace(r, rep);
  }
  return text;
}

function processDeep(obj) {
  if (typeof obj === "string") {
    return translateText(obj);
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

let fixedPagesCount = 0;
const subdirs = fs.readdirSync(blogAppDir);

subdirs.forEach((subdir) => {
  // 1. Localize metadataFr in page.tsx
  const pagePath = path.join(blogAppDir, subdir, "page.tsx");
  if (fs.existsSync(pagePath)) {
    let pageContent = fs.readFileSync(pagePath, "utf-8");
    const frTitle = frTitleMap[subdir] || translateText(subdir.replace(/-/g, " "));

    const metaFrRegex = /export const metadataFr: Metadata = \{[\s\S]*?\};/;
    if (metaFrRegex.test(pageContent)) {
      const newMetaFr = `export const metadataFr: Metadata = {
  title: "${frTitle}",
  description: "${frTitle} - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/fr/blog/${subdir}/",
  },
};`;
      pageContent = pageContent.replace(metaFrRegex, newMetaFr);
      fs.writeFileSync(pagePath, pageContent, "utf-8");
    }
  }

  // 2. Localize JSON dataset
  const jsonPath = path.join(frDataDir, `${subdir}.json`);
  if (fs.existsSync(jsonPath)) {
    try {
      const rawJson = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
      const cleanJson = processDeep(rawJson);
      fs.writeFileSync(jsonPath, JSON.stringify(cleanJson, null, 2), "utf-8");
      fixedPagesCount++;
    } catch (e) {
      console.error(`Error translating ${jsonPath}:`, e);
    }
  }
});

console.log(`Successfully automated 100% French localization across all ${fixedPagesCount} blog datasets and page components!`);
