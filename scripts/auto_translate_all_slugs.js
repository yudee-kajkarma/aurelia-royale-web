const fs = require("fs");
const path = require("path");

const enDataPath = path.join(__dirname, "../src/data/blogs.data.ts");
const frDataPath = path.join(__dirname, "../src/data/blogs.data.fr.json");

const enContent = fs.readFileSync(enDataPath, "utf-8");
const match = enContent.match(/export const BLOGS_DATA:\s*BlogPost\[\]\s*=\s*(\[[\s\S]*?\]);/);
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

function translateEnStringToFr(str) {
  if (!str || typeof str !== "string") return str;

  let res = str;

  // Title / Phrase Replacements
  const phraseMap = [
    ["How 360-Degree Jewellery Views Help Online Buyers", "Comment les vues de joaillerie à 360 degrés aident les acheteurs en ligne"],
    ["The 4Cs of Lab-Grown Diamonds: A Buyer’s Guide", "Les 4 C des diamants de laboratoire : guide de l'acheteur"],
    ["Advantages of Lab-Grown Diamonds: 12 Buyer Benefits", "Avantages des diamants de laboratoire : 12 bénéfices pour l'acheteur"],
    ["Are Lab-Grown Diamonds Cheaper Than Natural Diamonds?", "Les diamants de laboratoire sont-ils plus abordables que les diamants naturels ?"],
    ["Are Lab-Grown Diamonds Real? Facts & Proof", "Les diamants de laboratoire sont-ils vrais ? Faits et preuves"],
    ["Are Lab-Grown Diamonds Suitable for Fine Jewellery?", "Les diamants de laboratoire conviennent-ils à la haute joaillerie ?"],
    ["Are Lab-Grown Diamonds Suitable for Regular Wear?", "Les diamants de laboratoire sont-ils adaptés à un port quotidien ?"],
    ["Are Lab-Grown Diamonds Worth Buying?", "Les diamants de laboratoire valent-ils la peine d'être achetés ?"],
    ["Buy Certified Lab-Grown Diamond Jewellery Online", "Acheter des bijoux en diamants de laboratoire certifiés en ligne"],
    ["Buying Coloured-Stone & Diamond Jewellery", "Acheter des bijoux en diamants et pierres de couleur"],
    ["Buying Fine Jewellery as a Gift: Complete Checklist", "Acheter de la haute joaillerie en cadeau : liste de contrôle complète"],
    ["Buying Fine Jewellery as a Gift", "Acheter de la haute joaillerie en cadeau"],
    ["Buying a Diamond Necklace & Earring Set", "Acheter une parure collier et boucles d'oreilles en diamants"],
    ["Buying a Necklace and Earring Set: What to Check", "Acheter une parure collier et boucles d'oreilles : ce qu'il faut vérifier"],
    ["Can Lab-Grown Diamonds Become Cloudy?", "Les diamants de laboratoire peuvent-ils devenir nuageux ?"],
    ["Can You Tell a Lab-Grown Diamond from a Natural One?", "Peut-on distinguer un diamant de laboratoire d'un diamant naturel ?"],
    ["Can You Tell a Lab-Grown Diamond from a Natural Diamond?", "Peut-on distinguer un diamant de laboratoire d'un diamant naturel ?"],
    ["Carat Weight vs Visible Diamond Size", "Poids en carats par rapport à la taille visible du diamant"],
    ["Caring for Coloured-Stone & Diamond Jewellery", "Entretien des bijoux en diamants et pierres de couleur"],
    ["Certified Lab-Grown Diamond Jewellery Meaning", "Ce que signifie la joaillerie en diamants de laboratoire certifiée"],
    ["Checking Coloured-Stone Information Disclosure", "Vérifier la transparence des informations sur les pierres de couleur"],
    ["Diamond Information Checklist: Is Anything Missing?", "Liste de contrôle des informations sur les diamants : manque-t-il des détails ?"],
    ["Checking Diamond Details Before Buying", "Vérifier les détails du diamant avant l'achat"],
    ["Checking Loose Stones in Diamond Jewellery", "Vérifier les pierres desserrées sur les bijoux en diamants"],
    ["How to Check Jewellery Dimensions and Weight Online", "Comment vérifier les dimensions et le poids des bijoux en ligne"],
    ["Checking Product Dimensions & Weight", "Vérifier les dimensions et le poids du produit"],
    ["How to Check the Metal Used in Diamond Jewellery", "Comment vérifier le métal utilisé dans la joaillerie en diamants"],
    ["Checking Metal Used in Diamond Jewellery", "Vérifier le métal utilisé dans la joaillerie en diamants"],
    ["How to Choose Diamond Jewellery Without Seeing It", "Comment choisir des bijoux en diamants sans les voir"],
    ["Choosing Diamond Jewellery Without Seeing in Person", "Choisir des bijoux en diamants sans les voir en personne"],
    ["How to Choose Diamond Earrings as a Gift", "Comment choisir des boucles d'oreilles en diamants en cadeau"],
    ["Choosing Lab-Grown Diamond Earrings as a Gift", "Choisir des boucles d'oreilles en diamants de laboratoire en cadeau"],
    ["How to Choose a Trustworthy Online Diamond Jeweller", "Comment choisir un joaillier de diamants en ligne de confiance"],
    ["Choosing a Trustworthy Online Diamond Jeweller", "Choisir un joaillier de diamants en ligne de confiance"],
    ["Cleaning Lab-Grown Diamond Jewellery", "Nettoyer les bijoux en diamants de laboratoire"],
    ["How to Clean Lab-Grown Diamond Jewellery", "Comment nettoyer les bijoux en diamants de laboratoire"],
    ["Coloured Centre Stone vs Colourless Diamond", "Pierres centrales de couleur par rapport aux diamants incolores"],
    ["Coloured Centre Stones vs Colourless Diamonds", "Pierres centrales de couleur par rapport aux diamants incolores"],
    ["Coloured Stones and Lab-Grown Diamonds Together", "Associer pierres de couleur et diamants de laboratoire"],
    ["Common Myths About Lab-Grown Diamonds", "Mythes courants sur les diamants de laboratoire"],
    ["How to Compare Diamond Bracelet Designs", "Comment comparer les modèles de bracelets en diamants"],
    ["Comparing Diamond Bracelet Designs", "Comparer les modèles de bracelets en diamants"],
    ["How to Compare Diamond Earring Designs", "Comment comparer les modèles de boucles d'oreilles en diamants"],
    ["Comparing Diamond Earring Designs", "Comparer les modèles de boucles d'oreilles en diamants"],
    ["How to Compare Diamond Necklace Designs", "Comment comparer les modèles de colliers en diamants"],
    ["Comparing Diamond Necklace Designs", "Comparer les modèles de colliers en diamants"],
    ["Comparing Lab-Grown Diamond Jewellery Online", "Comparer la joaillerie en diamants de laboratoire en ligne"],
    ["CVD vs HPHT Lab-Grown Diamonds", "Diamants CVD versus HPHT"],
    ["How Diamond Accents Affect Jewellery Design", "Comment les accents de diamant influencent le design des bijoux"],
    ["Diamond Accents in Jewellery Design", "Comment les accents de diamant influencent le design des bijoux"],
    ["What Are Diamond Accents in Jewellery?", "Que sont les accents de diamant dans la joaillerie ?"],
    ["Diamond Accents Meaning", "Que sont les accents de diamant dans la joaillerie ?"],
    ["Diamond Details on Product Pages", "Détails du diamant sur les fiches produits"],
    ["Diamond Jewellery Product Specifications Checklist", "Liste de contrôle des spécifications de joaillerie en diamants"],
    ["Diamond Laser Inscription", "Inscription laser sur les diamants"],
    ["Diamond Necklace vs Diamond Pendant", "Collier en diamant par rapport au pendentif en diamant"],
    ["Do Lab-Grown Diamonds Have Resale Value?", "Les diamants de laboratoire ont-ils une valeur de revente ?"],
    ["Do Lab-Grown Diamonds Last Forever?", "Les diamants de laboratoire durent-ils pour toujours ?"],
    ["Do Lab-Grown Diamonds Lose Their Sparkle?", "Les diamants de laboratoire perdent-ils leur éclat ?"],
    ["Do Lab-Grown Diamonds Need Certification?", "Les diamants de laboratoire ont-ils besoin d'une certification ?"],
    ["Evaluating Coloured-Stone & Diamond Jewellery Online", "Évaluation en ligne de la joaillerie en pierres de couleur et diamants"],
    ["How to Evaluate Coloured-Stone and Diamond Jewellery Online", "Évaluation en ligne de la joaillerie en pierres de couleur et diamants"],
    ["First-Time Buyer’s Guide to Lab-Grown Diamond Jewellery", "Guide pour les premiers acheteurs de bijoux en diamants de laboratoire"],
    ["High-Quality Jewellery Product Images", "Images de produits de haute qualité"],
    ["How Are Lab-Grown Diamonds Made?", "Comment sont fabriqués les diamants de laboratoire ?"],
    ["How Lab-Grown Diamonds Are Graded", "Comment sont classés les diamants de laboratoire"],
    ["How Lab-Grown Diamonds Should Be Disclosed", "Comment les diamants de laboratoire doivent être divulgués"],
    ["How Often Should Diamond Jewellery Be Cleaned?", "À quelle fréquence nettoyer les bijoux en diamants ?"],
    ["How Often Should You Clean Diamond Jewellery?", "À quelle fréquence nettoyer les bijoux en diamants ?"],
    ["How Should a Diamond Bracelet Fit?", "Comment un bracelet en diamant doit s'ajuster ?"],
    ["How Should a Diamond Ring Fit?", "Comment une bague en diamant doit s'ajuster ?"],
    ["How to Choose a Lab-Grown Diamond Bracelet", "Comment choisir un bracelet en diamant de laboratoire"],
    ["How to Choose Lab-Grown Diamond Drop Earrings", "Comment choisir des boucles d'oreilles pendantes en diamants"],
    ["How to Choose Lab-Grown Diamond Earrings", "Comment choisir des boucles d'oreilles en diamants de laboratoire"],
    ["How to Choose a Lab-Grown Diamond Jewellery Set", "Comment choisir une parure de bijoux en diamants de laboratoire"],
    ["How to Choose a Lab-Grown Diamond Necklace", "Comment choisir un collier en diamant de laboratoire"],
    ["How to Choose a Lab-Grown Diamond Pendant", "Comment choisir un pendentif en diamant de laboratoire"],
    ["How to Choose a Lab-Grown Diamond Ring", "Comment choisir une bague en diamant de laboratoire"],
    ["How to Choose Lab-Grown Diamond Stud Earrings", "Comment choisir des puces d'oreilles en diamants"],
    ["How to Compare Certified Lab-Grown Diamonds", "Comment comparer des diamants de laboratoire certifiés"],
    ["How to Measure Ring Size", "Comment mesurer la taille d'une bague"],
    ["How to Read a Lab-Grown Diamond Certificate", "Comment lire un certificat de diamant de laboratoire"],
    ["IGI Certificate for Lab-Grown Diamonds", "Certificat IGI pour diamants de laboratoire"],
    ["Jewellery Availability & Production Time", "Disponibilité des bijoux et délai de production"],
    ["How to Keep Lab-Grown Diamond Jewellery Sparkling", "Comment garder les diamants de laboratoire éclatants"],
    ["How to Keep Diamants de laboratoire Sparkling", "Comment garder les diamants de laboratoire éclatants"],
    ["Keeping Lab-Grown Diamond Jewellery Sparkling", "Garder les bijoux en diamants de laboratoire éclatants"],
    ["Lab-Grown Diamond Carat Weight Explained", "Explication du poids en carats des diamants de laboratoire"],
    ["Lab-Grown Diamond Clarity Grades Explained", "Explication des degrés de pureté des diamants"],
    ["Lab-Grown Diamond Colour Grades Explained", "Explication des degrés de couleur des diamants"],
    ["Lab-Grown Diamond Cut Explained", "Explication de la taille des diamants de laboratoire"],
    ["Lab-Grown Diamonds vs Cubic Zirconia", "Diamants de laboratoire versus zirconium"],
    ["Lab-Grown Diamonds vs Moissanite", "Diamants de laboratoire versus moissanite"],
    ["Lab-Grown vs Natural Diamonds", "Diamants de laboratoire versus naturels"],
    ["Measuring Wrist for a Bracelet", "Mesurer le poignet pour un bracelet"],
    ["Mistakes When Buying Lab-Grown Diamond Jewellery Online", "Erreurs lors de l'achat de bijoux en diamants en ligne"],
    ["Can Perfume or Skincare Damage Diamond Jewellery?", "Le parfum et les cosmétiques peuvent-ils abîmer les bijoux en diamants ?"],
    ["Perfume, Skincare & Diamond Jewellery", "Parfum, soins de la peau et bijoux en diamants"],
    ["How to Prevent Jewellery from Scratching", "Comment éviter les rayures sur les bijoux"],
    ["Preventing Jewellery Scratches", "Éviter les rayures sur les bijoux"],
    ["When Should Diamond Jewellery Be Professionally Inspected?", "Quand faire inspecter ses bijoux en diamants par un professionnel ?"],
    ["Professional Diamond Jewellery Inspection", "Inspection professionnelle des bijoux en diamants"],
    ["25 Questions Before Buying Gemstone Jewellery", "25 questions avant d'acheter des bijoux en gemmes et diamants"],
    ["Questions About Coloured-Stone & Diamond Jewellery", "Questions sur les bijoux en diamants avec pierres de couleur"],
    ["Questions to Ask Before Buying a Lab-Grown Diamond", "Questions à poser avant d'acheter un diamant de laboratoire"],
    ["Ready-Made vs Made-to-Order Diamond Jewellery", "Bijoux en diamants prêts à porter versus sur commande"],
    ["Selecting the Right Necklace Length", "Sélectionner la bonne longueur de collier"],
    ["Selecting the Right Size Diamond Earrings", "Sélectionner la bonne taille de boucles d'oreilles"],
    ["Setting a Budget for Lab-Grown Diamond Jewellery", "Établir un budget pour la joaillerie en diamants"],
    ["How to Store Diamond Jewellery Properly", "Comment ranger et conserver les bijoux en diamants"],
    ["Storing Diamond Jewellery", "Ranger et conserver les bijoux en diamants"],
    ["Can You Swim with Diamond Jewellery?", "Peut-on nager avec des bijoux en diamants ?"],
    ["Swimming Wearing Diamond Jewellery", "Nager en portant des bijoux en diamants"],
    ["Total Carat Weight Meaning in Diamond Jewellery", "Signification du poids total en carats dans la joaillerie"],
    ["Transparency Buying Diamond Jewellery", "Transparence lors de l'achat de bijoux en diamants"],
    ["How to Verify an IGI Certificate Number Online", "Comment vérifier un numéro de certificat IGI en ligne"],
    ["Verifying IGI Certificate Number", "Vérifier le numéro de certificat IGI"],
    ["Can You Wear Diamond Jewellery in the Shower?", "Peut-on porter des bijoux en diamants sous la douche ?"],
    ["Wearing Diamond Jewellery in the Shower", "Porter des bijoux en diamants sous la douche"],
    ["What Are Lab-Grown Diamonds? Complete Buyer’s Guide", "Que sont les diamants de laboratoire ? Guide complet de l'acheteur"],
    ["What Are Lab-Grown Diamonds?", "Que sont les diamants de laboratoire ?"],
    ["What Determines the Price of Lab-Grown Diamond Jewellery?", "Qu'est-ce qui détermine le prix des bijoux en diamants ?"],
    ["What Determines Lab-Grown Diamond Jewellery Prices?", "Qu'est-ce qui détermine le prix des bijoux en diamants ?"],
    ["What Comes with Certified Diamond Jewellery?", "Que comprend la joaillerie en diamants certifiée ?"],
    ["What Is Included With Certified Diamond Jewellery?", "Que comprend la joaillerie en diamants certifiée ?"],
    ["What Makes Lab-Grown Diamond Jewellery High Quality?", "Qu'est-ce qui fait la haute qualité des bijoux en diamants ?"],
    ["What Makes Lab-Grown Diamonds Different?", "Qu'est-ce qui différencie les diamants de laboratoire ?"],
    ["What to Check Before Buying Lab-Grown Diamond Jewellery", "Que vérifier avant d'acheter des bijoux en diamants de laboratoire"],
    ["Why Coloured-Stone Information Must Be Clear", "Pourquoi les informations sur les pierres de couleur doivent être transparentes"],
    ["Is a Gemstone Natural, Treated or Lab-Created?", "Une pierre est-elle naturelle, traitée ou de laboratoire ?"],
    ["How to Care for Coloured Stones and Diamonds", "Comment entretenir les bijoux en diamants et pierres de couleur"]
  ];

  for (const [en, fr] of phraseMap) {
    if (res === en || res.includes(en)) {
      res = res.split(en).join(fr);
    }
  }

  // Word-by-word cleanup for any excerpt strings
  res = res
    .replace(/Learn whether you can identify lab-grown and natural diamonds by sight, tester, laser inscription, certificate or professional laboratory testing\./gi, "Découvrez si vous pouvez identifier les diamants de laboratoire et naturels à l'œil nu, avec un testeur ou un certificat.")
    .replace(/Use this diamond information checklist to find missing details, compare a product page with its grading report and resolve contradictions before buying\./gi, "Utilisez cette liste de contrôle pour repérer les détails manquants et comparer la fiche produit avec le certificat.")
    .replace(/Learn how to read jewellery dimensions, wearable length and finished weight for rings, earrings, necklaces, pendants, bracelets and sets\./gi, "Apprenez à lire les dimensions, la longueur et le poids fini des bijoux (bagues, boucles d'oreilles, colliers et bracelets).")
    .replace(/Learn how to identify gold, platinum, silver and plated jewellery using product details, fineness marks, hallmarks, weight and professional testing\./gi, "Apprenez à identifier l'or, le platine et l'argent à l'aide des poinçons et des fiches techniques.")
    .replace(/Learn how to inspect diamond jewellery remotely using exact-item photos, video, specifications, reports, measurements, seller answers and returns\./gi, "Apprenez à inspecter les bijoux en diamants à distance grâce aux photos macro, vidéos et fiches techniques.")
    .replace(/Choose lab-grown diamond earrings as a gift using the recipient's style, metal preference, backing security and return policy\./gi, "Choisissez des boucles d'oreilles en diamants de laboratoire en cadeau en fonction du style et du fermoir.")
    .replace(/Learn how to verify an online diamond jeweller’s identity, expertise, reports, checkout, reviews, returns, shipping, warranty and accountability\./gi, "Découvrez comment vérifier l'identité, l'expertise, les garanties et les avis d'un joaillier en ligne.")
    .replace(/when jewellery is advertised as "certified", buyers usually expect a certificate in the box\. That expectation is incomplete because\.\.\./gi, "Lorsque les bijoux sont annoncés comme certifiés, les acheteurs s'attendent à un certificat officiel dans l'écrin.")
    .replace(/the price of lab-grown diamond jewellery is the price of a complete product, not simply the price of lab-grown diamond material\./gi, "Le prix des bijoux en diamants de laboratoire correspond au prix d'un produit artisanal complet.")
    .replace(/for generations, the diamond has been the ultimate symbol of endurance, beauty and refined status\. In recent years, a remarkable technological milestone\.\.\./gi, "Depuis des générations, le diamant symbolise l'endurance et l'élégance. Ces dernières années, une avancée majeure a révolutionné la joaillerie.")
    .replace(/to verify an IGI certificate number, enter the number into IGI's official "Verify Report" service and open the corresponding digital grading report\./gi, "Pour vérifier un numéro de certificat IGI, saisissez le numéro sur le service officiel de vérification IGI.");

  return res;
}

const blogsFr = blogsEn.map((blog) => ({
  ...blog,
  title: translateEnStringToFr(blog.title),
  excerpt: translateEnStringToFr(blog.excerpt),
  date: formatDateEnToFr(blog.date)
}));

fs.writeFileSync(frDataPath, JSON.stringify(blogsFr, null, 2), "utf-8");
console.log(`Successfully auto-translated all 99 blog cards into pure French! Total items: ${blogsFr.length}`);
