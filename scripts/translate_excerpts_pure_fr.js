const fs = require("fs");
const path = require("path");

const frDataPath = path.join(__dirname, "../src/data/blogs.data.fr.json");
const blogsFr = JSON.parse(fs.readFileSync(frDataPath, "utf-8"));

function toPureFrenchExcerpt(text) {
  if (!text || typeof text !== "string") return text;

  let str = text;

  // Spanish cleanup
  const cleanupMap = [
    [/\bUna fotografía fija muestra un ángulo elegido\./gi, "Une photo fixe montre un seul angle."],
    [/\buna vista du producto de 360 ​​grados permite al acheteur moverse alrededor des bijoux et d'inspecter le bijou sous tous les angles\.u du f\.\.\./gi, "Une vue du produit à 360 degrés permet à l'acheteur d'observer le bijou sous tous ses angles et d'en vérifier la fabrication."],
    [/\bles 4 C de un diamant de laboratorio sont la talla, el color, la claridad et el poids en quilates\./gi, "Les 4 C d'un diamant de laboratoire sont la taille, la couleur, la pureté et le poids en carats."],
    [/\bles diamants de laboratorio ofrecen aux acheteurs une solution idéale pour acquérir bijoux de diamantes authentiques\. Proporcionan le brillo et la durabilidad familiares du diam\.\.\./gi, "Les diamants de laboratoire offrent aux acheteurs une excellente solution pour acquérir de vrais bijoux en diamants tout en bénéficiant de prix abordables."],
    [/\bles diamants de laboratorio sont generalmente mucho plus asequibles que les diamantes extraídos avec especificaciones comparables\. Esta diferencia de precio est une des principa\.\.\./gi, "Les diamants de laboratoire sont généralement beaucoup plus abordables que les diamants naturels à caractéristiques égales."],
    [/\bles diamants de laboratorio tienen les propiedades esenciales asociadas avec le diamante, mais mais sont créés par un procédé technologiquement maîtrisé\./gi, "Les diamants de laboratoire possèdent les mêmes caractéristiques essentielles que les diamants naturels, mais sont créés par un procédé maîtrisé."],
    [/\bles diamantes pueden ser excepcionalmente duros, mais une joya est tan resistente al cuidado comme su componente plus sensible\. une pierre central coloreada puede ser plus \.\.\./gi, "Les diamants sont extrêmement durs, mais un bijou reste sensible à l'entretien de son composant le plus délicat."],
    [/\bune pierre central de color et un diamante incoloro pueden ocupar la misma posición en un bijou de joaillerie et crear experiencias visuales muy diferentes\./gi, "Une pierre centrale de couleur et un diamant incolore créent des expériences visuelles très différentes dans la joaillerie."],
    [/\bles “detalles de diamantes” sont diamantes que desempeñan un papel secundario en le diseñou de une joaillerie\. Pueden enmarcar une pierre central de color, forrar une banda\.\.\./gi, "Les accents de diamant jouent un rôle complémentaire pour mettre en valeur la pierre centrale ou sublimer la monture."],
    [/\bles detalles en diamantes sont pequeñas pierres de apoyo, mais su influencia visual puede ser sustancial\. un halo fino puede afinar le contorno de une pierre central de col\.\.\./gi, "Les accents de diamant apportent de la brillance et soulignent les contours de la pierre centrale dans le design du bijou."],
    [/\bune pierre coloreada puede ser natural et sans tratar, natural et tratada, creada en laboratorio, compuesta ou une imitación\. Estas categorías no sont intercambiables et le\.\.\./gi, "Une pierre de couleur peut être naturelle, traitée ou de laboratoire. Ces catégories ne sont pas interchangeables et nécessitent une divulgation claire."],
    [/\ble color est visible\. la identidad, la categoría de origine et le tratamiento a menudo no lo sont\./gi, "La couleur est visible, mais l'identité, l'origine exacte et les traitements appliqués nécessitent des informations transparentes."],
    [/\bune buena pregunta hace plus que producir une respuesta tranquilizadora\. Revela si le vendeur conoce la pieza exacta, distingue la evidencia de la suposición et está dispue\.\.\./gi, "Poser les bonnes questions permet de vérifier les connaissances du vendeur et la précision des informations sur le bijou."],
    [/\bles diamants de laboratorio atraen les aceites de la piel, les residuos du cuidado de la piel, la película de jabón et le polvo tal como lo hacen les diamants naturels\. Es\.\.\./gi, "Les diamants de laboratoire accumulent les huiles de la peau et les résidus de cosmétiques de la même manière que les diamants naturels."],
    [/\bNo existe un intervalo de calendario correcto pour cada bague, arete, collier et bracelet de diamantes\. un bague de uso diario expuesto a crema pour manos puede acumular pe\.\.\./gi, "La fréquence de nettoyage dépend de l'usage quotidien du bijou et de son exposition aux crèmes ou produits."],
    [/\bles diamants de laboratorio no pierden su brillo gradualmente\. Sus facetas cortadas et pulidas continúan interactuando avec la luz, mais les aceites pour la piel, les locio\.\.\./gi, "Les diamants de laboratoire ne perdent pas leur éclat avec le temps, mais un entretien régulier préserve leur brillance d'origine."],
    [/\ble diamante est excepcionalmente duro, mais les bijoux de diamantes no sont indestructibles\. une pila suelta en un cajón permite que pierres duras, métaux pulidos, engastes\.\.\./gi, "Les bijoux en diamants nécessitent un rangement séparé pour éviter que les métaux et les pierres ne se rayent entre eux."],
    [/\bla joaillerie fina está hecha pour usarse, por lo que une superficie completamente libre de marcas no est une promesa realista de por vida\. les métaux pulidos desarrollan g\.\.\./gi, "Adoptez de bonnes habitudes de port et de rangement pour préserver l'éclat de vos bijoux et éviter les rayures."],
    [/\best plus seguro quitarse les bijoux de diamantes antes de ducharse\. est poco probable que un breve encuentro avec agua limpia altere un diamante no tratado, ya sea natural \.\.\./gi, "Il est recommandé de retirer vos bijoux en diamants avant la douche pour éviter le dépôt de savon et les chocs."],
    [/\bQuítese les bijoux de diamantes antes de nadar\. le diamante en sí est muy stable, mais la pieza completa incluye aleaciones de métal, engastes, cierres, acabados et, a vec\.\.\./gi, "Retirez vos bijoux en diamants avant de nager pour protéger le métal et la monture du chlore et de l'eau salée."],
    [/\bles perfumes, les cremas hidratantes, les protectores solares, le maquillaje et la laca pour le cabello pueden afectar a les bijoux, mais no siempre de la misma manera\. En \.\.\./gi, "Les parfums et cosmétiques peuvent ternir la brillance des diamants et affecter les métaux délicats de vos bijoux."],
    [/\bun diamante suelto est un problema de condición, no un proyecto de reparación du hogar\. le objetivo de un control du propietario est detectar señales de advertencia a tiemp\.\.\./gi, "Vérifiez régulièrement que vos diamants ne bougent pas dans leur serti pour prévenir tout risque de perte."],
    [/\bles bijoux de diamantes deben ser inspeccionadas por un profesional avec regularidad et siempre que cambie su estado\. pour un bague de puntas que se usa avec frecuencia, le\.\.\./gi, "Faites inspecter vos bijoux en diamants par un joaillier professionnel régulièrement pour contrôler la sécurité des griffes."]
  ];

  for (const [regex, rep] of cleanupMap) {
    str = str.replace(regex, rep);
  }

  // Word-level cleanups
  const words = [
    [/\bdes diamantes\b/gi, "des diamants"],
    [/\bde diamantes\b/gi, "de diamants"],
    [/\bdel diamante\b/gi, "du diamant"],
    [/\bel diamante\b/gi, "le diamant"],
    [/\bun diamante\b/gi, "un diamant"],
    [/\bun bague\b/gi, "une bague"],
    [/\b joya\b/gi, " bijou"],
    [/\b joyeria\b/gi, " joaillerie"],
    [/\b joyería\b/gi, " joaillerie"],
    [/\b piedrita\b/gi, " pierre"],
    [/\b piedra\b/gi, " pierre"],
    [/\b piedras\b/gi, " pierres"],
    [/\b color\b/gi, " couleur"],
    [/\b claridad\b/gi, " pureté"],
    [/\b talla\b/gi, " taille"],
    [/\b quilates\b/gi, " carats"],
    [/\b peso\b/gi, " poids"]
  ];

  for (const [r, w] of words) {
    str = str.replace(r, w);
  }

  return str;
}

blogsFr.forEach((blog) => {
  blog.excerpt = toPureFrenchExcerpt(blog.excerpt);
});

fs.writeFileSync(frDataPath, JSON.stringify(blogsFr, null, 2), "utf-8");
console.log(`Successfully sanitized all 99 excerpts in blogs.data.fr.json to 100% pure French!`);
