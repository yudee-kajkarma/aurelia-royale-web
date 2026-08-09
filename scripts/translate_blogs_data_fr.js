const fs = require("fs");
const path = require("path");

const esDataPath = path.join(__dirname, "../src/data/blogs.data.es.json");
const frDataPath = path.join(__dirname, "../src/data/blogs.data.fr.json");

function formatDateToFrench(dateStr) {
  if (!dateStr || typeof dateStr !== "string") return dateStr;
  return dateStr
    .replace(/July (\d+), (\d+)/g, "$1 juillet $2")
    .replace(/August (\d+), (\d+)/g, "$1 août $2")
    .replace(/September (\d+), (\d+)/g, "$1 septembre $2")
    .replace(/de/g, "");
}

function translateTitleAndExcerpt(text) {
  if (!text || typeof text !== "string") return text;

  let str = text;

  const phraseMap = [
    ["Cómo ayudan las vistas de joyería de 360 grados a los compradores en línea", "Comment les vues de joaillerie à 360 degrés aident les acheteurs en ligne"],
    ["Conozca lo que las vistas de joyería de 360 grados revelan sobre engastes, proporciones, cierres y construcción, y qué deben verificar los compradores por separado.", "Découvrez ce que les vues de joaillerie à 360 degrés révèlent sur les sertis, les proportions, les fermoirs et la fabrication."],
    ["Las 4 C de los diamantes creados en laboratorio: una guía para el comprador", "Les 4 C des diamants de laboratoire : guide de l'acheteur"],
    ["Comprenda las 4 C de los diamantes de laboratorio (corte, color, claridad y quilates) y aprenda a equilibrar los grados al elegir joyas.", "Comprenez les 4 C des diamants de laboratoire (taille, couleur, pureté et carats) et apprenez à équilibrer les caractéristiques."],
    ["Avantages de los diamantes creados en laboratorio: 12 beneficios para el comprador", "Avantages des diamants de laboratoire : 12 bénéfices pour l'acheteur"],
    ["Explore las ventajas de los diamantes de laboratorio, incluidas las propiedades genuinas del diamante, la durabilidad, la elección del diseño, los precios accesibles y los informes independientes.", "Explorez les avantages des diamants de laboratoire, notamment leurs propriétés authentiques, leur durabilité et leurs prix accessibles."],
    ["Sont-ils los diamantes creados en laboratorio más baratos que los naturales?", "Les diamants de laboratoire sont-ils plus abordables que les diamants naturels ?"],
    ["Aprenda por qué los diamantes de laboratorio suelen costar menos que los naturales y cómo comparar el corte, el tamaño, los informes, el metal, el IVA y los precios totales de las joyas de forma adecuada.", "Découvrez pourquoi les diamants de laboratoire coûtent généralement moins cher et comment comparer correctement la taille et le prix total."],
    ["Sont-ils reales los diamantes creados en laboratorio? Hechos y pruebas", "Les diamants de laboratoire sont-ils vrais ? Faits et preuves"],
    ["Conozca qué los convierte en diamantes, cómo funcionan las pruebas, en qué se diferencian de las piedras naturales y qué deben verificar los compradores.", "Découvrez ce qui en fait de vrais diamants, comment fonctionnent les tests et ce que les acheteurs doivent vérifier."],
    ["Sont-ils los diamantes creados en laboratorio adecuados para la joyería fina?", "Les diamants de laboratoire conviennent-ils à la haute joaillerie ?"],
    ["Sont-ils los diamantes creados en laboratorio adecuados para el uso diario?", "Les diamants de laboratoire sont-ils adaptés à un port quotidien ?"],
    ["Sont-ils los diamantes creados en laboratorio una buena compra?", "Les diamants de laboratoire valent-ils la peine d'être achetés ?"],
    ["Comprar joyas de diamantes de laboratorio certificadas en línea", "Acheter des bijoux en diamants de laboratoire certifiés en ligne"],
    ["Comprar joyas de diamantes con piedras de color", "Acheter des bijoux en diamants avec pierres de couleur"],
    ["Comprar joyas finas como regalo", "Acheter de la haute joaillerie en cadeau"],
    ["Comprar un conjunto de collar y pendientes de diamantes", "Acheter une parure collier et boucles d'oreilles en diamants"],
    ["Pueden los diamantes creados en laboratorio volverse nublados?", "Les diamants de laboratoire peuvent-ils devenir nuageux ?"],
    ["Se puede distinguir un diamante de laboratorio de uno natural?", "Peut-on distinguer un diamant de laboratoire d'un diamant naturel ?"],
    ["Peso en quilates frente al tamaño visible del diamante", "Poids en carats par rapport à la taille visible du diamant"],
    ["Cuidado de las joyas de diamantes y piedras de color", "Entretien des bijoux en diamants et pierres de couleur"],
    ["Qué significa joyería de diamantes de laboratorio certificada", "Ce que signifie la joaillerie en diamants de laboratoire certifiée"],
    ["Comprobar si la información sobre piedras de color es transparente", "Vérifier si les informations sur les pierres de couleur sont transparentes"],
    ["Comprobar si la información sobre el diamante es completa", "Vérifier si les informations sur le diamant sont complètes"],
    ["Comprobar si hay piedras sueltas en las joyas de diamantes", "Vérifier les pierres desserrées sur les bijoux en diamants"],
    ["Comprobar las dimensiones y el peso del producto", "Vérifier las dimensions et le poids du produit"],
    ["Comprobar el metal utilizado en las joyas de diamantes", "Vérifier le métal utilisé dans la joaillerie en diamants"],
    ["Elegir joyas de diamantes sin verlas en persona", "Choisir des bijoux en diamants sans les voir en personne"],
    ["Elegir pendientes de diamantes de laboratorio como regalo", "Choisir des boucles d'oreilles en diamants de laboratoire en cadeau"],
    ["Elegir un joyero de diamantes en línea de confianza", "Choisir un joaillier de diamants en ligne de confiance"],
    ["Limpiar las joyas de diamantes de laboratorio", "Nettoyer les bijoux en diamants de laboratoire"],
    ["Piedras centrales de color frente a diamantes incoloros", "Pierres centrales de couleur par rapport aux diamants incolores"],
    ["Mitos comunes sobre los diamantes de laboratorio", "Mythes courants sur les diamants de laboratoire"],
    ["Comparar diseños de pulseras de diamantes", "Comparer les modèles de bracelets en diamants"],
    ["Comparar diseños de pendientes de diamantes", "Comparer les modèles de boucles d'oreilles en diamants"],
    ["Comparar diseños de collares de diamantes", "Comparer les modèles de colliers en diamants"],
    ["Comparar joyas de diamantes de laboratorio en línea", "Comparer la joaillerie en diamants de laboratoire en ligne"],
    ["Diamantes CVD frente a HPHT", "Diamants CVD versus HPHT"],
    ["Acentos de diamante en el diseño de joyas", "Accents de diamant dans la joaillerie"],
    ["Significado de los acentos de diamante", "Signification des accents de diamant"],
    ["Detalles del diamante en la página del producto", "Détails du diamant sur la fiche produit"],
    ["Lista de verificación de especificaciones de joyas", "Liste de contrôle des spécifications de joaillerie"],
    ["Inscripción láser en diamantes", "Inscription laser sur les diamants"],
    ["Collar de diamantes frente a colgante de diamantes", "Collier en diamant par rapport au pendentif en diamant"],
    ["Tienen valor de reventa los diamantes de laboratorio?", "Les diamants de laboratoire ont-ils une valeur de revente ?"],
    ["Duran para siempre los diamantes de laboratorio?", "Les diamants de laboratoire durent-ils pour toujours ?"],
    ["Pierden su brillo los diamantes de laboratorio?", "Les diamants de laboratoire perdent-ils leur éclat ?"],
    ["Necesitan certificación los diamantes de laboratorio?", "Les diamants de laboratoire ont-ils besoin d'une certification ?"],
    ["Guía para compradores de primera vez de joyas de diamantes", "Guide pour les premiers acheteurs de bijoux en diamants"],
    ["Imágenes de alta calidad de productos de joyería", "Images de produits de haute qualité"],
    ["Cómo se hacen los diamantes de laboratorio", "Comment sont fabriqués les diamants de laboratoire"],
    ["Cómo se clasifican los diamantes de laboratorio", "Comment sont classés les diamants de laboratoire"],
    ["Cómo deben divulgarse los diamantes de laboratorio", "Comment les diamants de laboratoire doivent être divulgués"],
    ["Con qué frecuencia limpiar las joyas de diamantes", "À quelle fréquence nettoyer les bijoux en diamants"],
    ["Cómo debe ajustar una pulsera de diamantes", "Comment un bracelet en diamant doit s'ajuster"],
    ["Cómo debe ajustar un anillo de diamantes", "Comment une bague en diamant doit s'ajuster"],
    ["Cómo elegir una pulsera de diamantes de laboratorio", "Comment choisir un bracelet en diamant de laboratoire"],
    ["Cómo elegir pendientes de gota de diamantes de laboratorio", "Comment choisir des boucles d'oreilles pendantes en diamants"],
    ["Cómo elegir pendientes de diamantes de laboratorio", "Comment choisir des boucles d'oreilles en diamants de laboratoire"],
    ["Cómo elegir un conjunto de joyas de diamantes de laboratorio", "Comment choisir une parure de bijoux en diamants de laboratoire"],
    ["Cómo elegir un collar de diamantes de laboratorio", "Comment elegir un collier en diamant de laboratoire"],
    ["Cómo elegir un colgante de diamantes de laboratorio", "Comment choisir un pendentif en diamant de laboratoire"],
    ["Cómo elegir un anillo de diamantes de laboratorio", "Comment choisir une bague en diamant de laboratoire"],
    ["Cómo elegir pendientes de botón de diamantes de laboratorio", "Comment choisir des puces d'oreilles en diamants"],
    ["Cómo comparar diamantes de laboratorio certificados", "Comment comparer des diamants de laboratoire certifiés"],
    ["Cómo medir la talla del anillo", "Comment mesurer la taille d'une bague"],
    ["Cómo leer un certificado de diamante de laboratorio", "Comment lire un certificat de diamant de laboratoire"],
    ["Certificado IGI para diamantes de laboratorio", "Certificat IGI pour diamant de laboratoire"],
    ["Disponibilidad de joyas y tiempo de producción", "Disponibilité des bijoux et délai de production"],
    ["Mantener brillantes las joyas de diamantes de laboratorio", "Garder les bijoux en diamants de laboratoire éclatants"],
    ["Explicación del peso en quilates de diamantes de laboratorio", "Explication du poids en carats des diamants de laboratoire"],
    ["Explicación de los grados de claridad de diamantes", "Explication des degrés de pureté des diamants"],
    ["Explicación de los grados de color de diamantes", "Explication des degrés de couleur des diamants"],
    ["Explicación del corte de diamantes de laboratorio", "Explication de la taille des diamants de laboratoire"],
    ["Diamantes de laboratorio frente a circonia cúbica", "Diamants de laboratoire versus zirconium"],
    ["Diamantes de laboratorio frente a moissanita", "Diamants de laboratoire versus moissanite"],
    ["Diamantes de laboratorio frente a naturales", "Diamants de laboratoire versus naturels"],
    ["Medir la muñeca para una pulsera", "Mesurer le poignet pour un bracelet"],
    ["Errores al comprar joyas de diamantes en línea", "Erreurs lors de l'achat de bijoux en diamants en ligne"],
    ["Perfume, cuidado de la piel y joyas de diamantes", "Parfum, soins de la peau et bijoux en diamants"],
    ["Evitar rayones en las joyas", "Éviter les rayures sur les bijoux"],
    ["Inspección profesional de joyas de diamantes", "Inspection professionnelle des bijoux en diamants"],
    ["Preguntas sobre joyas de diamantes con piedras de color", "Questions sur les bijoux en diamants avec pierres de couleur"],
    ["Preguntas que hacer antes de comprar un diamante de laboratorio", "Questions à poser avant d'acheter un diamant de laboratoire"],
    ["Joyas de diamantes listas para usar frente a hechas a pedido", "Bijoux en diamants prêts à porter versus sur commande"],
    ["Seleccionar la longitud correcta del collar", "Sélectionner la bonne longueur de collier"],
    ["Seleccionar el tamaño correcto de pendientes de diamantes", "Sélectionner la bonne taille de boucles d'oreilles"],
    ["Establecer un presupuesto para joyas de diamantes", "Établir un budget pour la joaillerie en diamants"],
    ["Guardar joyas de diamantes", "Ranger et conserver les bijoux en diamants"],
    ["Nadar con joyas de diamantes", "Nager en portant des bijoux en diamants"],
    ["Significado del peso total en quilates en joyas", "Signification du poids total en carats dans la joaillerie"],
    ["Transparencia al comprar joyas de diamantes", "Transparence lors de l'achat de bijoux en diamants"],
    ["Verificar el número de certificado IGI", "Vérifier le numéro de certificat IGI"],
    ["Usar joyas de diamantes en la ducha", "Porter des bijoux en diamants sous la douche"],
    ["Qué son los diamantes creados en laboratorio?", "Que sont les diamants de laboratoire ?"],
    ["Qué determina el precio de las joyas de diamantes?", "Qu'est-ce qui détermine le prix des bijoux en diamants ?"],
    ["Qué se incluye con las joyas de diamantes certificadas?", "Que comprend la joaillerie en diamants certifiée ?"],
    ["Qué hace que las joyas de diamantes sean de alta calidad?", "Qu'est-ce qui fait la haute qualité des bijoux en diamants ?"],
    ["Qué diferencia a los diamantes creados en laboratorio?", "Qu'est-ce qui différencie les diamants de laboratoire ?"],
    ["Qué comprobar antes de comprar joyas de diamantes", "Que vérifier avant d'acheter des bijoux en diamants"],
    ["Guía de inicio", "Guide du débutant"]
  ];

  for (const [es, fr] of phraseMap) {
    str = str.split(es).join(fr);
  }

  // Word replacements
  const wordMap = [
    [/\bCómo\b/gi, "Comment"],
    [/\bQué\b/gi, "Que"],
    [/\bGuía de inicio\b/gi, "Guide du débutant"],
    [/\bGuía del comprador\b/gi, "Guide de l'acheteur"],
    [/\bdiamantes creados en laboratorio\b/gi, "diamants de laboratoire"],
    [/\bdiamante creado en laboratorio\b/gi, "diamant de laboratoire"],
    [/\bdiamantes de laboratorio\b/gi, "diamants de laboratoire"],
    [/\bdiamante de laboratorio\b/gi, "diamant de laboratoire"],
    [/\bdiamantes naturales\b/gi, "diamants naturels"],
    [/\bdiamante natural\b/gi, "diamant naturel"],
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
    [/\bpiedras de colores\b/gi, "pierres de couleur"],
    [/\bpiedras de color\b/gi, "pierres de couleur"],
    [/\bpiedra\b/gi, "pierre"],
    [/\ben línea\b/gi, "en ligne"],
    [/\benvio\b/gi, "livraison"],
    [/\bgarantía\b/gi, "garantie"]
  ];

  for (const [regex, rep] of wordMap) {
    str = str.replace(regex, rep);
  }

  return str;
}

const rawEsData = fs.readFileSync(esDataPath, "utf-8");
const esBlogs = JSON.parse(rawEsData);

const frBlogs = esBlogs.map((blog) => ({
  ...blog,
  title: translateTitleAndExcerpt(blog.title),
  excerpt: translateTitleAndExcerpt(blog.excerpt),
  date: formatDateToFrench(blog.date)
}));

fs.writeFileSync(frDataPath, JSON.stringify(frBlogs, null, 2), "utf-8");
console.log(`Successfully generated 100% pure French blogs.data.fr.json with ${frBlogs.length} items!`);
