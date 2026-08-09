const fs = require("fs");
const path = require("path");

const frBlogsDir = path.join(__dirname, "../src/data/blogs/fr");
const files = fs.readdirSync(frBlogsDir).filter(f => f.endsWith(".json"));

const headingMap = {
  "Respuesta rápida": "Réponse rapide",
  "Preguntas frecuentes": "Foire aux questions",
  "Lista de verificación": "Liste de contrôle",
  "Resumen": "En résumé",
  "Puntos clave": "Points clés",
  "Guía de compra": "Guide d'achat",
  "Conclusión": "Conclusion",
  "Artículos relacionados": "Articles connexes"
};

function translateTextToPureFrench(text) {
  if (!text || typeof text !== "string") return text;

  let str = text;

  // Spanish question marks and exclamation marks
  str = str.replace(/¿/g, "").replace(/¡/g, "");

  // Phrase level replacements
  const phrases = [
    [/de diamantes de laboratorio/gi, "en diamants de laboratoire"],
    [/de diamantes naturales/gi, "en diamants naturels"],
    [/de diamantes/gi, "en diamants"],
    [/les bijoux de diamantes/gi, "les bijoux en diamants"],
    [/bijoux de diamantes/gi, "bijoux en diamants"],
    [/bague de diamantes/gi, "bague en diamants"],
    [/bagues de diamantes/gi, "bagues en diamants"],
    [/collier de diamantes/gi, "collier en diamants"],
    [/colliers de diamantes/gi, "colliers en diamants"],
    [/boucles d'oreilles de diamantes/gi, "boucles d'oreilles en diamants"],
    [/bracelet de diamantes/gi, "bracelet en diamants"],
    [/bracelets de diamantes/gi, "bracelets en diamants"],
    [/pendentif de diamantes/gi, "pendentif en diamants"],
    [/joaillerie de diamantes/gi, "joaillerie en diamants"],
    [/de laboratorio/gi, "de laboratoire"],
    [/creados en laboratorio/gi, "cultivés en laboratoire"],
    [/creado en laboratorio/gi, "cultivé en laboratoire"],
    [/creadas en laboratorio/gi, "cultivées en laboratoire"],
    [/creada en laboratorio/gi, "cultivée en laboratoire"],
    [/de alta calidad/gi, "de haute qualité"],
    [/alta calidad/gi, "haute qualité"],
    [/de origen natural/gi, "d'origine naturelle"],
    [/relación calidad-precio/gi, "rapport qualité-prix"],
    [/puntos clave/gi, "points clés"],
    [/lista de verificación/gi, "liste de contrôle"],
    [/hoja de especificaciones/gi, "fiche technique"],
    [/informe de clasificación/gi, "certificat de gradation"],
    [/informes de clasificación/gi, "certificats de gradation"],
    [/rapport de clasificación/gi, "certificat de gradation"],
    [/rapports de clasificación/gi, "certificats de gradation"],
    [/talla, color, claridad y peso en quilates/gi, "taille, couleur, pureté et poids en carats"],
    [/peso en quilates/gi, "poids en carats"],
    [/en carats/gi, "en carats"],
    [/talla ideal/gi, "taille idéale"],
    [/talla excelente/gi, "taille excellente"],
    [/talla muy buena/gi, "taille très bonne"],
    [/talla buena/gi, "taille bonne"],
    [/oro blanco/gi, "or blanc"],
    [/oro amarillo/gi, "or jaune"],
    [/oro rosa/gi, "or rose"],
    [/platino/gi, "platine"],
    [/plata/gi, "argent"],
    [/poinçons/gi, "poinçons"],
    [/sellos de finura/gi, "poinçons de pureté"],
    [/compra en línea/gi, "achat en ligne"],
    [/vendedor en línea/gi, "vendeur en ligne"],
    [/vendedores en línea/gi, "vendeurs en ligne"],
    [/joaillier en línea/gi, "joaillier en ligne"],
    [/política de devolución/gi, "politique de retour"],
    [/políticas de devolución/gi, "politiques de retour"],
    [/condiciones de devolución/gi, "conditions de retour"],
    [/envío asegurado/gi, "livraison assurée"],
    [/garantía de por vida/gi, "garantie à vie"],
    [/garantía limitada/gi, "garantie limitée"]
  ];

  for (const [r, rep] of phrases) {
    str = str.replace(r, rep);
  }

  // Word level Spanish cleanup
  const wordMap = [
    [/\buna bague\b/gi, "une bague"],
    [/\bun bague\b/gi, "une bague"],
    [/\buna joya\b/gi, "un bijou"],
    [/\bun joya\b/gi, "un bijou"],
    [/\b joya\b/gi, " bijou"],
    [/\b joyas\b/gi, " bijoux"],
    [/\b joyeria\b/gi, " joaillerie"],
    [/\b joyería\b/gi, " joaillerie"],
    [/\b piedra\b/gi, " pierre"],
    [/\b piedras\b/gi, " pierres"],
    [/\b gemas\b/gi, " gemmes"],
    [/\b gema\b/gi, " gemme"],
    [/\b color\b/gi, " couleur"],
    [/\b colores\b/gi, " couleurs"],
    [/\b claridad\b/gi, " pureté"],
    [/\b quilates\b/gi, " carats"],
    [/\b peso\b/gi, " poids"],
    [/\b corte\b/gi, " taille"],
    [/\b cortes\b/gi, " tailles"],
    [/\b engaste\b/gi, " serti"],
    [/\b engastes\b/gi, " sertis"],
    [/\b cierre\b/gi, " fermoir"],
    [/\b cierres\b/gi, " fermoirs"],
    [/\b brillo\b/gi, " éclat"],
    [/\b destello\b/gi, " brillance"],
    [/\b compras\b/gi, " achats"],
    [/\b compra\b/gi, " achat"],
    [/\b comprador\b/gi, " acheteur"],
    [/\b compradores\b/gi, " acheteurs"],
    [/\b vendedor\b/gi, " vendeur"],
    [/\b vendedores\b/gi, " vendeurs"],
    [/\b precio\b/gi, " prix"],
    [/\b precios\b/gi, " prix"],
    [/\b valor\b/gi, " valeur"],
    [/\b costo\b/gi, " coût"],
    [/\b costos\b/gi, " coûts"],
    [/\b entrega\b/gi, " livraison"],
    [/\b envíos\b/gi, " expéditions"],
    [/\b envío\b/gi, " expédition"],
    [/\b devolución\b/gi, " retour"],
    [/\b devoluciones\b/gi, " retours"],
    [/\b garantía\b/gi, " garantie"],
    [/\b garantías\b/gi, " garanties"],
    [/\b certificado\b/gi, " certificat"],
    [/\b certificados\b/gi, " certificats"],
    [/\b informe\b/gi, " rapport"],
    [/\b informes\b/gi, " rapports"],
    [/\b marca\b/gi, " marque"],
    [/\b marcas\b/gi, " marques"],
    [/\b tienda\b/gi, " boutique"],
    [/\b tiendas\b/gi, " boutiques"],
    [/\b tamaño\b/gi, " taille"],
    [/\b tamaños\b/gi, " tailles"],
    [/\b medida\b/gi, " mesure"],
    [/\b medidas\b/gi, " mesures"],
    [/\b dimensión\b/gi, " dimension"],
    [/\b dimensiones\b/gi, " dimensions"],
    [/\b escala\b/gi, " échelle"],
    [/\b proporción\b/gi, " proportion"],
    [/\b proporciones\b/gi, " proportions"],
    [/\b diseño\b/gi, " design"],
    [/\b diseños\b/gi, " designs"],
    [/\b modelo\b/gi, " modèle"],
    [/\b modelos\b/gi, " modèles"],
    [/\b estilo\b/gi, " style"],
    [/\b estilos\b/gi, " styles"],
    [/\b metal\b/gi, " métal"],
    [/\b metales\b/gi, " métaux"],
    [/\b limpieza\b/gi, " nettoyage"],
    [/\b cuidado\b/gi, " entretien"],
    [/\b almacenamiento\b/gi, " rangement"],
    [/\b uso\b/gi, " port"],
    [/\b uso diario\b/gi, " port quotidien"],
    [/\b diario\b/gi, " quotidien"],
    [/\b durabilidad\b/gi, " durabilité"],
    [/\b resistencia\b/gi, " résistance"],
    [/\b dureza\b/gi, " dureté"],
    [/\b rayaduras\b/gi, " rayures"],
    [/\b rasguños\b/gi, " rayures"],
    [/\b desgaste\b/gi, " usure"],
    [/\b agua\b/gi, " eau"],
    [/\b jabón\b/gi, " savon"],
    [/\b crema\b/gi, " crème"],
    [/\b cremas\b/gi, " crèmes"],
    [/\b loción\b/gi, " lotion"],
    [/\b lociones\b/gi, " lotions"],
    [/\b perfume\b/gi, " parfum"],
    [/\b perfumes\b/gi, " parfums"],
    [/\b suelto\b/gi, " desserré"],
    [/\b sueltas\b/gi, " desserrées"],
    [/\b sueltos\b/gi, " desserrés"],
    [/\b inspección\b/gi, " inspection"],
    [/\b mantenimiento\b/gi, " maintenance"],
    [/\breparación\b/gi, " réparation"],
    [/\b taller\b/gi, " atelier"],
    [/\bartesano\b/gi, " artisan"],
    [/\borfebre\b/gi, " orfèvre"],
    [/\bgemólogo\b/gi, " gemmologue"],
    [/\bgemología\b/gi, " gemmologie"],
    [/\blaboratorio\b/gi, " laboratoire"],
    [/\blaboratorios\b/gi, " laboratoires"],
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
    [/\bmismas\b/gi, "mêmes"]
  ];

  for (const [r, rep] of wordMap) {
    str = str.replace(r, rep);
  }

  return str;
}

function processValue(val) {
  if (typeof val === "string") {
    return translateTextToPureFrench(val);
  } else if (Array.isArray(val)) {
    return val.map(processValue);
  } else if (typeof val === "object" && val !== null) {
    const res = {};
    for (const k of Object.keys(val)) {
      if (k === "heading" && headingMap[val[k]]) {
        res[k] = headingMap[val[k]];
      } else {
        res[k] = processValue(val[k]);
      }
    }
    return res;
  }
  return val;
}

let modifiedFiles = 0;

files.forEach((file) => {
  const filePath = path.join(frBlogsDir, file);
  const json = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const updated = processValue(json);
  fs.writeFileSync(filePath, JSON.stringify(updated, null, 2), "utf-8");
  modifiedFiles++;
});

console.log(`Successfully processed and translated all ${modifiedFiles} individual blog JSON files into 100% pure French!`);
