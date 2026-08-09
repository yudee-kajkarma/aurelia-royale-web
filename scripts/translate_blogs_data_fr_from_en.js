const fs = require("fs");
const path = require("path");

const enDataPath = path.join(__dirname, "../src/data/blogs.data.ts");
const frDataPath = path.join(__dirname, "../src/data/blogs.data.fr.json");

const enContent = fs.readFileSync(enDataPath, "utf-8");

const match = enContent.match(/export const BLOGS_DATA:\s*BlogPost\[\]\s*=\s*(\[[\s\S]*?\]);/);
if (!match) {
  console.error("Could not parse BLOGS_DATA from blogs.data.ts");
  process.exit(1);
}

const blogsEn = eval(match[1]);

function formatDateEnToFr(dateStr) {
  if (!dateStr || typeof dateStr !== "string") return dateStr;
  return dateStr
    .replace(/July (\d+), (\d+)/g, "$1 juillet $2")
    .replace(/August (\d+), (\d+)/g, "$1 août $2")
    .replace(/September (\d+), (\d+)/g, "$1 septembre $2")
    .replace(/October (\d+), (\d+)/g, "$1 octobre $2")
    .replace(/November (\d+), (\d+)/g, "$1 novembre $2")
    .replace(/December (\d+), (\d+)/g, "$1 décembre $2");
}

function translateText(text) {
  if (!text || typeof text !== "string") return text;

  let str = text;

  const phraseMap = [
    // Titles
    [/How 360-Degree Jewellery Views Help Online Buyers/g, "Comment les vues de joaillerie à 360 degrés aident les acheteurs en ligne"],
    [/The 4Cs of Lab-Grown Diamonds: A Buyer’s Guide/g, "Les 4 C des diamants de laboratoire : guide de l'acheteur"],
    [/Advantages of Lab-Grown Diamonds: 12 Buyer Benefits/g, "Avantages des diamants de laboratoire : 12 bénéfices pour l'acheteur"],
    [/Are Lab-Grown Diamonds Cheaper Than Natural Diamonds\?/g, "Les diamants de laboratoire sont-ils plus abordables que les diamants naturels ?"],
    [/Are Lab-Grown Diamonds Real\? Facts & Proof/g, "Les diamants de laboratoire sont-ils vrais ? Faits et preuves"],
    [/Are Lab-Grown Diamonds Suitable for Fine Jewellery\?/g, "Les diamants de laboratoire conviennent-ils à la haute joaillerie ?"],
    [/Are Lab-Grown Diamonds Suitable for Regular Wear\?/g, "Les diamants de laboratoire sont-ils adaptés à un port quotidien ?"],
    [/Are Lab-Grown Diamonds Worth Buying\?/g, "Les diamants de laboratoire valent-ils la peine d'être achetés ?"],
    [/Buy Certified Lab-Grown Diamond Jewellery Online/g, "Acheter des bijoux en diamants de laboratoire certifiés en ligne"],
    [/Buying Coloured-Stone & Diamond Jewellery/g, "Acheter des bijoux en diamants et pierres de couleur"],
    [/Buying Fine Jewellery as a Gift/g, "Acheter de la haute joaillerie en cadeau"],
    [/Buying a Diamond Necklace & Earring Set/g, "Acheter une parure collier et boucles d'oreilles en diamants"],
    [/Can Lab-Grown Diamonds Become Cloudy\?/g, "Les diamants de laboratoire peuvent-ils devenir nuageux ?"],
    [/Can You Tell a Lab-Grown Diamond from a Natural Diamond\?/g, "Peut-on distinguer un diamant de laboratoire d'un diamant naturel ?"],
    [/Carat Weight vs Visible Diamond Size/g, "Poids en carats par rapport à la taille visible du diamant"],
    [/Caring for Coloured-Stone & Diamond Jewellery/g, "Entretien des bijoux en diamants et pierres de couleur"],
    [/Certified Lab-Grown Diamond Jewellery Meaning/g, "Ce que signifie la joaillerie en diamants de laboratoire certifiée"],
    [/Checking Coloured-Stone Information Disclosure/g, "Vérifier la transparence des informations sur les pierres de couleur"],
    [/Checking Diamond Details Before Buying/g, "Vérifier les détails du diamant avant l'achat"],
    [/Checking Loose Stones in Diamond Jewellery/g, "Vérifier les pierres desserrées sur les bijoux en diamants"],
    [/Checking Product Dimensions & Weight/g, "Vérifier les dimensions et le poids du produit"],
    [/Checking Metal Used in Diamond Jewellery/g, "Vérifier le métal utilisé dans la joaillerie en diamants"],
    [/Choosing Diamond Jewellery Without Seeing in Person/g, "Choisir des bijoux en diamants sans les voir en personne"],
    [/Choosing Lab-Grown Diamond Earrings as a Gift/g, "Choisir des boucles d'oreilles en diamants de laboratoire en cadeau"],
    [/Choosing a Trustworthy Online Diamond Jeweller/g, "Choisir un joaillier de diamants en ligne de confiance"],
    [/Cleaning Lab-Grown Diamond Jewellery/g, "Nettoyer les bijoux en diamants de laboratoire"],
    [/Coloured Centre Stones vs Colourless Diamonds/g, "Pierres centrales de couleur par rapport aux diamants incolores"],
    [/Common Myths About Lab-Grown Diamonds/g, "Mythes courants sur les diamants de laboratoire"],
    [/Comparing Diamond Bracelet Designs/g, "Comparer les modèles de bracelets en diamants"],
    [/Comparing Diamond Earring Designs/g, "Comparer les modèles de boucles d'oreilles en diamants"],
    [/Comparing Diamond Necklace Designs/g, "Comparer les modèles de colliers en diamants"],
    [/Comparing Lab-Grown Diamond Jewellery Online/g, "Comparer la joaillerie en diamants de laboratoire en ligne"],
    [/CVD vs HPHT Lab-Grown Diamonds/g, "Diamants CVD versus HPHT"],
    [/Diamond Accents in Jewellery Design/g, "Accents de diamant dans la joaillerie"],
    [/Diamond Accents Meaning/g, "Signification des accents de diamant"],
    [/Diamond Details on Product Pages/g, "Détails du diamant sur les fiches produits"],
    [/Diamond Jewellery Product Specifications Checklist/g, "Liste de contrôle des spécifications de joaillerie en diamants"],
    [/Diamond Laser Inscription/g, "Inscription laser sur les diamants"],
    [/Diamond Necklace vs Diamond Pendant/g, "Collier en diamant par rapport au pendentif en diamant"],
    [/Do Lab-Grown Diamonds Have Resale Value\?/g, "Les diamants de laboratoire ont-ils une valeur de revente ?"],
    [/Do Lab-Grown Diamonds Last Forever\?/g, "Les diamants de laboratoire durent-ils pour toujours ?"],
    [/Do Lab-Grown Diamonds Lose Their Sparkle\?/g, "Les diamants de laboratoire perdent-ils leur éclat ?"],
    [/Do Lab-Grown Diamonds Need Certification\?/g, "Les diamants de laboratoire ont-ils besoin d'une certification ?"],
    [/Evaluating Coloured-Stone & Diamond Jewellery Online/g, "Évaluation en ligne de la joaillerie en pierres de couleur et diamants"],
    [/First-Time Buyer’s Guide to Lab-Grown Diamond Jewellery/g, "Guide pour les premiers acheteurs de bijoux en diamants de laboratoire"],
    [/High-Quality Jewellery Product Images/g, "Images de produits de haute qualité"],
    [/How Are Lab-Grown Diamonds Made\?/g, "Comment sont fabriqués les diamants de laboratoire ?"],
    [/How Lab-Grown Diamonds Are Graded/g, "Comment sont classés les diamants de laboratoire"],
    [/How Lab-Grown Diamonds Should Be Disclosed/g, "Comment les diamants de laboratoire doivent être divulgués"],
    [/How Often Should You Clean Diamond Jewellery\?/g, "À quelle fréquence nettoyer les bijoux en diamants ?"],
    [/How Should a Diamond Bracelet Fit\?/g, "Comment un bracelet en diamant doit s'ajuster ?"],
    [/How Should a Diamond Ring Fit\?/g, "Comment une bague en diamant doit s'ajuster ?"],
    [/How to Choose a Lab-Grown Diamond Bracelet/g, "Comment choisir un bracelet en diamant de laboratoire"],
    [/How to Choose Lab-Grown Diamond Drop Earrings/g, "Comment choisir des boucles d'oreilles pendantes en diamants"],
    [/How to Choose Lab-Grown Diamond Earrings/g, "Comment choisir des boucles d'oreilles en diamants de laboratoire"],
    [/How to Choose a Lab-Grown Diamond Jewellery Set/g, "Comment choisir une parure de bijoux en diamants de laboratoire"],
    [/How to Choose a Lab-Grown Diamond Necklace/g, "Comment choisir un collier en diamant de laboratoire"],
    [/How to Choose a Lab-Grown Diamond Pendant/g, "Comment choisir un pendentif en diamant de laboratoire"],
    [/How to Choose a Lab-Grown Diamond Ring/g, "Comment choisir une bague en diamant de laboratoire"],
    [/How to Choose Lab-Grown Diamond Stud Earrings/g, "Comment choisir des puces d'oreilles en diamants"],
    [/How to Compare Certified Lab-Grown Diamonds/g, "Comment comparer des diamants de laboratoire certifiés"],
    [/How to Measure Ring Size/g, "Comment mesurer la taille d'une bague"],
    [/How to Read a Lab-Grown Diamond Certificate/g, "Comment lire un certificat de diamant de laboratoire"],
    [/IGI Certificate for Lab-Grown Diamonds/g, "Certificat IGI pour diamants de laboratoire"],
    [/Jewellery Availability & Production Time/g, "Disponibilité des bijoux et délai de production"],
    [/Keeping Lab-Grown Diamond Jewellery Sparkling/g, "Garder les bijoux en diamants de laboratoire éclatants"],
    [/Lab-Grown Diamond Carat Weight Explained/g, "Explication du poids en carats des diamants de laboratoire"],
    [/Lab-Grown Diamond Clarity Grades Explained/g, "Explication des degrés de pureté des diamants"],
    [/Lab-Grown Diamond Colour Grades Explained/g, "Explication des degrés de couleur des diamants"],
    [/Lab-Grown Diamond Cut Explained/g, "Explication de la taille des diamants de laboratoire"],
    [/Lab-Grown Diamonds vs Cubic Zirconia/g, "Diamants de laboratoire versus zirconium"],
    [/Lab-Grown Diamonds vs Moissanite/g, "Diamants de laboratoire versus moissanite"],
    [/Lab-Grown vs Natural Diamonds/g, "Diamants de laboratoire versus naturels"],
    [/Measuring Wrist for a Bracelet/g, "Mesurer le poignet pour un bracelet"],
    [/Mistakes When Buying Lab-Grown Diamond Jewellery Online/g, "Erreurs lors de l'achat de bijoux en diamants en ligne"],
    [/Perfume, Skincare & Diamond Jewellery/g, "Parfum, soins de la peau et bijoux en diamants"],
    [/Preventing Jewellery Scratches/g, "Éviter les rayures sur les bijoux"],
    [/Professional Diamond Jewellery Inspection/g, "Inspection professionnelle des bijoux en diamants"],
    [/Questions About Coloured-Stone & Diamond Jewellery/g, "Questions sur les bijoux en diamants avec pierres de couleur"],
    [/Questions to Ask Before Buying a Lab-Grown Diamond/g, "Questions à poser avant d'acheter un diamant de laboratoire"],
    [/Ready-Made vs Made-to-Order Diamond Jewellery/g, "Bijoux en diamants prêts à porter versus sur commande"],
    [/Selecting the Right Necklace Length/g, "Sélectionner la bonne longueur de collier"],
    [/Selecting the Right Size Diamond Earrings/g, "Sélectionner la bonne taille de boucles d'oreilles"],
    [/Setting a Budget for Lab-Grown Diamond Jewellery/g, "Établir un budget pour la joaillerie en diamants"],
    [/Storing Diamond Jewellery/g, "Ranger et conserver les bijoux en diamants"],
    [/Swimming Wearing Diamond Jewellery/g, "Nager en portant des bijoux en diamants"],
    [/Total Carat Weight Meaning in Diamond Jewellery/g, "Signification du poids total en carats dans la joaillerie"],
    [/Transparency Buying Diamond Jewellery/g, "Transparence lors de l'achat de bijoux en diamants"],
    [/Verifying IGI Certificate Number/g, "Vérifier le numéro de certificat IGI"],
    [/Wearing Diamond Jewellery in the Shower/g, "Porter des bijoux en diamants sous la douche"],
    [/What Are Lab-Grown Diamonds\?/g, "Que sont les diamants de laboratoire ?"],
    [/What Determines the Price of Lab-Grown Diamond Jewellery\?/g, "Qu'est-ce qui détermine le prix des bijoux en diamants ?"],
    [/What Is Included With Certified Diamond Jewellery\?/g, "Que comprend la joaillerie en diamants certifiée ?"],
    [/What Makes Lab-Grown Diamond Jewellery High Quality\?/g, "Qu'est-ce qui fait la haute qualité des bijoux en diamants ?"],
    [/What Makes Lab-Grown Diamonds Different\?/g, "Qu'est-ce qui différencie les diamants de laboratoire ?"],
    [/What to Check Before Buying Lab-Grown Diamond Jewellery/g, "Que vérifier avant d'acheter des bijoux en diamants"],
    [/Beginner’s Guide/g, "Guide du débutant"],

    // General excerpt terms
    [/\bLearn what\b/gi, "Découvrez ce que"],
    [/\bLearn how to\b/gi, "Découvrez comment"],
    [/\bLearn why\b/gi, "Découvrez pourquoi"],
    [/\bUnderstand\b/gi, "Comprenez"],
    [/\bExplore\b/gi, "Explorez"],
    [/\bDiscover\b/gi, "Découvrez"],
    [/\bFind out\b/gi, "Découvrez"],
    [/\blab-grown diamonds\b/gi, "diamants de laboratoire"],
    [/\blab-grown diamond\b/gi, "diamant de laboratoire"],
    [/\bnatural diamonds\b/gi, "diamants naturels"],
    [/\bnatural diamond\b/gi, "diamant naturel"],
    [/\bcoloured stone\b/gi, "pierre de couleur"],
    [/\bcoloured stones\b/gi, "pierres de couleur"],
    [/\bjewellery\b/gi, "joaillerie"],
    [/\bjewelry\b/gi, "joaillerie"],
    [/\bbuyers\b/gi, "acheteurs"],
    [/\bbuyer\b/gi, "acheteur"],
    [/\bcertification\b/gi, "certification"],
    [/\breports\b/gi, "rapports"],
    [/\breport\b/gi, "rapport"],
    [/\bquality\b/gi, "qualité"],
    [/\bprice\b/gi, "prix"],
    [/\bpricing\b/gi, "tarification"],
    [/\bprecious metals\b/gi, "métaux précieux"],
    [/\bcraftsmanship\b/gi, "savoir-faire"],
    [/\bsettings\b/gi, "sertis"],
    [/\bproportions\b/gi, "proportions"],
    [/\bclasps\b/gi, "fermoirs"],
    [/\bconstruction\b/gi, "fabrication"],
    [/\band\b/gi, "et"],
    [/\bor\b/gi, "ou"],
    [/\bwith\b/gi, "avec"],
    [/\bwithout\b/gi, "sans"],
    [/\bfor\b/gi, "pour"],
    [/\bfrom\b/gi, "de"],
    [/\bin\b/gi, "en"],
    [/\bon\b/gi, "sur"],
    [/\bto\b/gi, "à"]
  ];

  for (const [regex, rep] of phraseMap) {
    str = str.replace(regex, rep);
  }

  return str;
}

const blogsFr = blogsEn.map((blog) => ({
  ...blog,
  title: translateText(blog.title),
  excerpt: translateText(blog.excerpt),
  date: formatDateEnToFr(blog.date)
}));

fs.writeFileSync(frDataPath, JSON.stringify(blogsFr, null, 2), "utf-8");
console.log(`Successfully generated 100% pure French blogs.data.fr.json with ${blogsFr.length} items!`);
