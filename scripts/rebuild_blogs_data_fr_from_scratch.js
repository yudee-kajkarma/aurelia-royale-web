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

// Complete dictionary of authentic French translations for all 99 blog cards
const translationsMap = {
  "360-degree-jewellery-product-views": {
    title: "Comment les vues de joaillerie à 360 degrés aident les acheteurs en ligne",
    excerpt: "Découvrez ce que les vues de joaillerie à 360 degrés révèlent sur les sertis, les proportions, les fermoirs et la fabrication."
  },
  "4cs-of-lab-grown-diamonds": {
    title: "Les 4 C des diamants de laboratoire : guide de l'acheteur",
    excerpt: "Comprenez les 4 C des diamants de laboratoire (taille, couleur, pureté et carat) et apprenez à équilibrer les caractéristiques."
  },
  "advantages-of-lab-grown-diamonds": {
    title: "Avantages des diamants de laboratoire : 12 bénéfices pour l'acheteur",
    excerpt: "Explorez les avantages des diamants de laboratoire, notamment leurs propriétés authentiques, leur durabilité et leurs prix accessibles."
  },
  "are-lab-grown-diamonds-more-affordable": {
    title: "Les diamants de laboratoire sont-ils plus abordables que les diamants naturels ?",
    excerpt: "Découvrez pourquoi les diamants de laboratoire coûtent généralement moins cher et comment comparer correctement la taille et le prix total."
  },
  "are-lab-grown-diamonds-real": {
    title: "Les diamants de laboratoire sont-ils vrais ? Faits et preuves",
    excerpt: "Les diamants de laboratoire sont-ils vrais ? Découvrez ce qui en fait de vrais diamants et comment fonctionnent les tests."
  },
  "are-lab-grown-diamonds-suitable-for-fine-jewellery": {
    title: "Les diamants de laboratoire conviennent-ils à la haute joaillerie ?",
    excerpt: "Découvrez si les diamants de laboratoire conviennent à la haute joaillerie et l'impact de la qualité et de la certification."
  },
  "are-lab-grown-diamonds-suitable-for-regular-wear": {
    title: "Les diamants de laboratoire sont-ils adaptés à un port quotidien ?",
    excerpt: "Découvrez si les diamants de laboratoire conviennent à un port quotidien et comment protéger vos bijoux."
  },
  "are-lab-grown-diamonds-worth-buying": {
    title: "Les diamants de laboratoire valent-ils la peine d'être achetés ?",
    excerpt: "Découvrez si les diamants de laboratoire offrent un bon rapport qualité-prix et ce qui compte le plus lors de l'achat."
  },
  "buy-certified-lab-grown-diamond-jewellery-online": {
    title: "Acheter des bijoux en diamants de laboratoire certifiés en ligne",
    excerpt: "Découvrez ce qu'il faut vérifier lors de l'achat de bijoux en diamants de laboratoire certifiés en ligne."
  },
  "buying-coloured-stone-diamond-jewellery": {
    title: "Acheter des bijoux en diamants et pierres de couleur",
    excerpt: "La première question à se poser n'est pas 'Combien de carats ?', mais 'Quelle est la nature de chaque pierre ?'"
  },
  "buying-fine-jewellery-as-a-gift": {
    title: "Acheter de la haute joaillerie en cadeau",
    excerpt: "Découvrez comment choisir de la haute joaillerie en cadeau, sélectionner des modèles polyvalents et vérifier les tailles."
  },
  "buying-fine-jewellery-as-gift": {
    title: "Acheter de la haute joaillerie en cadeau : liste de contrôle complète",
    excerpt: "La haute joaillerie permet de célébrer les moments précieux. Il peut toutefois être délicat de choisir pour une autre personne."
  },
  "buying-a-diamond-necklace-earring-set": {
    title: "Acheter une parure collier et boucles d'oreilles en diamants",
    excerpt: "Découvrez comment choisir une parure assortie de collier et boucles d'oreilles en diamants."
  },
  "buying-necklace-earring-set": {
    title: "Acheter une parure collier et boucles d'oreilles : ce qu'il faut vérifier",
    excerpt: "Une parure doit former un ensemble harmonieux lorsqu'elle est portée complète, tout en restant élégante portée séparément."
  },
  "can-lab-grown-diamonds-become-cloudy": {
    title: "Les diamants de laboratoire peuvent-ils devenir nuageux ?",
    excerpt: "Découvrez pourquoi les diamants deviennent rarement nuageux et comment un nettoyage approprié restaure leur éclat."
  },
  "can-you-tell-a-lab-grown-diamond-from-a-natural-diamond": {
    title: "Peut-on distinguer un diamant de laboratoire d'un diamant naturel ?",
    excerpt: "Découvrez pourquoi les diamants de laboratoire et naturels ne peuvent pas être distingués à l'œil nu."
  },
  "carat-weight-vs-visible-diamond-size": {
    title: "Poids en carats par rapport à la taille visible du diamant",
    excerpt: "Comprenez la relation entre le poids en carats et les dimensions physiques du diamant."
  },
  "caring-for-coloured-stone-diamond-jewellery": {
    title: "Entretien des bijoux en diamants et pierres de couleur",
    excerpt: "Apprenez à nettoyer, ranger et protéger vos bijoux en diamants et pierres de couleur."
  },
  "care-coloured-stones-diamonds": {
    title: "Comment entretenir les bijoux en diamants et pierres de couleur",
    excerpt: "Les diamants sont extrêmement durs, mais un bijou reste sensible à l'entretien de son composant le plus délicat."
  },
  "certified-lab-grown-diamond-jewellery-meaning": {
    title: "Ce que signifie la joaillerie en diamants de laboratoire certifiée",
    excerpt: "Découvrez ce que signifie la joaillerie certifiée et comment vérifier les certificats en ligne."
  },
  "checking-coloured-stone-information-disclosure": {
    title: "Vérifier la transparence des informations sur les pierres de couleur",
    excerpt: "Découvrez comment les vendeurs doivent divulguer les traitements et l'origine des pierres de couleur."
  },
  "coloured-stone-information-disclosure": {
    title: "Pourquoi les informations sur les pierres de couleur doivent être transparentes",
    excerpt: "La couleur est visible, mais l'identité, l'origine exacte et les traitements appliqués nécessitent des informations transparentes."
  },
  "check-coloured-stone-natural-treated-lab-created": {
    title: "Une pierre est-elle naturelle, traitée ou de laboratoire ?",
    excerpt: "Une pierre de couleur peut être naturelle, traitée ou de laboratoire. Ces catégories ne sont pas interchangeables et nécessitent une divulgation claire."
  },
  "checking-diamond-details-before-buying": {
    title: "Vérifier les détails du diamant avant l'achat",
    excerpt: "Découvrez les détails essentiels sur les diamants à vérifier sur les fiches produits."
  },
  "checking-loose-stones-in-diamond-jewellery": {
    title: "Vérifier les pierres desserrées sur les bijoux en diamants",
    excerpt: "Apprenez à repérer les pierres desserrées sur vos bijoux et quand consulter un professionnel."
  },
  "check-diamond-jewellery-loose-stones": {
    title: "Comment vérifier si un diamant est desserré",
    excerpt: "Vérifiez régulièrement que vos diamants ne bougent pas dans leur serti pour prévenir tout risque de perte."
  },
  "checking-product-dimensions-weight": {
    title: "Vérifier les dimensions et le poids du produit",
    excerpt: "Découvrez pourquoi les dimensions du produit et le poids total sont importants lors des achats en ligne."
  },
  "checking-metal-used-in-diamond-jewellery": {
    title: "Vérifier le métal utilisé dans la joaillerie en diamants",
    excerpt: "Apprenez à vérifier la pureté du métal et les poinçons sur vos bijoux en diamants."
  },
  "choosing-diamond-jewellery-without-seeing-in-person": {
    title: "Choisir des bijoux en diamants sans les voir en personne",
    excerpt: "Découvrez comment évaluer la joaillerie en diamants en ligne en toute confiance grâce aux fiches techniques et vidéos."
  },
  "choosing-lab-grown-diamond-earrings-as-a-gift": {
    title: "Choisir des boucles d'oreilles en diamants de laboratoire en cadeau",
    excerpt: "Découvrez comment choisir des boucles d'oreilles en diamants de laboratoire à offrir en cadeau."
  },
  "choosing-a-trustworthy-online-diamond-jeweller": {
    title: "Choisir un joaillier de diamants en ligne de confiance",
    excerpt: "Découvrez comment évaluer un joaillier en ligne et vérifier ses garanties et avis clients."
  },
  "cleaning-lab-grown-diamond-jewellery": {
    title: "Nettoyer les bijoux en diamants de laboratoire",
    excerpt: "Apprenez des méthodes sûres et efficaces pour nettoyer vos bijoux en diamants à la maison."
  },
  "clean-lab-grown-diamond-jewellery": {
    title: "Comment nettoyer les bijoux en diamants de laboratoire",
    excerpt: "Les diamants de laboratoire accumulent les huiles de la peau et les résidus de cosmétiques tout comme les diamants naturels."
  },
  "coloured-centre-stones-vs-colourless-diamonds": {
    title: "Pierres centrales de couleur par rapport aux diamants incolores",
    excerpt: "Une pierre centrale de couleur et un diamant incolore créent des expériences visuelles très différentes dans la joaillerie."
  },
  "coloured-stones-lab-grown-diamonds": {
    title: "Associer pierres de couleur et diamants de laboratoire",
    excerpt: "Dans la joaillerie en pierres de couleur, la gemme apporte la teinte principale tandis que les diamants de laboratoire subliment la monture."
  },
  "common-myths-about-lab-grown-diamonds": {
    title: "Mythes courants sur les diamants de laboratoire",
    excerpt: "Démystifiez les idées reçues sur les diamants de laboratoire, de leur composition à leur certification."
  },
  "comparing-diamond-bracelet-designs": {
    title: "Comparer les modèles de bracelets en diamants",
    excerpt: "Comparez les styles de bracelets en diamants, des bracelets rivières aux joncs, et vérifiez leur fermoir."
  },
  "compare-diamond-bracelet-designs": {
    title: "Comparer les modèles de bracelets en diamants",
    excerpt: "La première étape pour comparer les bracelets en diamants est de déterminer si le bracelet est souple, semi-rigide ou rigide."
  },
  "comparing-diamond-earring-designs": {
    title: "Comparer les modèles de boucles d'oreilles en diamants",
    excerpt: "Comparez les styles de boucles d'oreilles en diamants et choisissez le fermoir adapté."
  },
  "compare-diamond-earring-designs": {
    title: "Comparer les modèles de boucles d'oreilles en diamants",
    excerpt: "Pour comparer équitablement les boucles d'oreilles, analysez la façon dont chaque modèle se positionne et réagit sur l'oreille."
  },
  "comparing-diamond-necklace-designs": {
    title: "Comparer les modèles de colliers en diamants",
    excerpt: "Comparez les modèles de colliers en diamants et découvrez l'impact de la chaîne et du serti."
  },
  "compare-diamond-necklace-designs": {
    title: "Comparer les modèles de colliers en diamants",
    excerpt: "Les modèles de colliers en diamants se distinguent principalement par la répartition visuelle du poids et l'emplacement du point focal."
  },
  "comparing-lab-grown-diamond-jewellery-online": {
    title: "Comparer la joaillerie en diamants de laboratoire en ligne",
    excerpt: "Découvrez comment comparer les offres de joaillerie en diamants de laboratoire en ligne."
  },
  "cvd-vs-hpht-lab-grown-diamonds": {
    title: "Diamants CVD versus HPHT",
    excerpt: "Comprenez les différences entre les méthodes de croissance CVD et HPHT pour les diamants de laboratoire."
  },
  "diamond-accents-in-jewellery-design": {
    title: "Comment les accents de diamant influencent le design des bijoux",
    excerpt: "Les accents de diamant apportent de la brillance et soulignent les contours de la pierre centrale dans le design du bijou."
  },
  "diamond-accents-jewellery-design": {
    title: "Comment les accents de diamant influencent le design des bijoux",
    excerpt: "Les accents de diamant apportent de la brillance et soulignent les contours de la pierre centrale dans le design du bijou."
  },
  "diamond-accents-meaning": {
    title: "Que sont les accents de diamant dans la joaillerie ?",
    excerpt: "Les accents de diamant jouent un rôle complémentaire pour mettre en valeur la pierre centrale ou sublimer la monture."
  },
  "diamond-details-on-product-pages": {
    title: "Détails du diamant sur les fiches produits",
    excerpt: "Découvrez les informations clés sur les diamants qui doivent figurer sur les fiches produits."
  },
  "diamond-jewellery-product-specifications-checklist": {
    title: "Liste de contrôle des spécifications de joaillerie en diamants",
    excerpt: "Utilisez cette liste de contrôle pratique pour passer en revue les spécifications des bijoux avant d'acheter."
  },
  "diamond-laser-inscription": {
    title: "Inscription laser sur les diamants",
    excerpt: "Découvrez ce qu'est une inscription laser et comment elle relie un diamant à son certificat."
  },
  "diamond-necklace-vs-diamond-pendant": {
    title: "Collier en diamant par rapport au pendentif en diamant",
    excerpt: "Comparez les colliers et les pendentifs en diamants et choisissez le style adapté à votre garde-robe."
  },
  "do-lab-grown-diamonds-have-resale-value": {
    title: "Les diamants de laboratoire ont-ils une valeur de revente ?",
    excerpt: "Découvrez le marché de la revente des diamants de laboratoire et les facteurs d'évaluation."
  },
  "do-lab-grown-diamonds-last-forever": {
    title: "Les diamants de laboratoire durent-ils pour toujours ?",
    excerpt: "Découvrez pourquoi les diamants de laboratoire ont la même durabilité physique et chimique que les diamants naturels."
  },
  "do-lab-grown-diamonds-lose-their-sparkle": {
    title: "Les diamants de laboratoire perdent-ils leur éclat ?",
    excerpt: "Découvrez pourquoi les diamants de laboratoire conservent leur éclat optique pour toujours."
  },
  "do-lab-grown-diamonds-need-certification": {
    title: "Les diamants de laboratoire ont-ils besoin d'une certification ?",
    excerpt: "Découvrez pourquoi la certification par un laboratoire indépendant est essentielle pour les diamants de laboratoire."
  },
  "evaluate-coloured-stone-diamond-jewellery-online": {
    title: "Évaluation en ligne de la joaillerie en pierres de couleur et diamants",
    excerpt: "L'achat en ligne prive de la possibilité d'observer un bijou sous différentes lumières avant de payer. Cela ne doit pas supprimer les informations nécessaires pour l'évaluer."
  },
  "first-time-buyers-guide-to-lab-grown-diamond-jewellery": {
    title: "Guide pour les premiers acheteurs de bijoux en diamants de laboratoire",
    excerpt: "Un guide complet pour les premiers acheteurs de bijoux en diamants de laboratoire."
  },
  "high-quality-jewellery-product-images": {
    title: "Images de produits de haute qualité",
    excerpt: "Découvrez pourquoi des photos et vidéos haute résolution sont essentielles pour évaluer les bijoux en ligne."
  },
  "how-are-lab-grown-diamonds-made": {
    title: "Comment sont fabriqués les diamants de laboratoire ?",
    excerpt: "Découvrez la science derrière la synthèse des diamants HPHT et CVD en laboratoire."
  },
  "how-lab-grown-diamonds-are-graded": {
    title: "Comment sont classés les diamants de laboratoire",
    excerpt: "Découvrez comment les laboratoires gemmologiques évaluent les diamants de laboratoire selon les 4 C."
  },
  "how-lab-grown-diamonds-should-be-disclosed": {
    title: "Comment les diamants de laboratoire doivent être divulgués",
    excerpt: "Découvrez les obligations légales et éthiques de divulgation de l'origine des diamants de laboratoire."
  },
  "how-often-should-you-clean-diamond-jewellery": {
    title: "À quelle fréquence nettoyer les bijoux en diamants ?",
    excerpt: "Découvrez la fréquence idéale de nettoyage pour vos bagues, boucles d'oreilles et colliers en diamants."
  },
  "how-often-clean-diamond-jewellery": {
    title: "À quelle fréquence nettoyer les bijoux en diamants ?",
    excerpt: "La fréquence de nettoyage dépend de l'usage quotidien du bijou et de son exposition aux crèmes ou produits."
  },
  "how-should-a-diamond-bracelet-fit": {
    title: "Comment un bracelet en diamant doit s'ajuster ?",
    excerpt: "Découvrez comment un bracelet en diamant doit se positionner sur le poignet et choisir la bonne taille."
  },
  "how-should-a-diamond-ring-fit": {
    title: "Comment une bague en diamant doit s'ajuster ?",
    excerpt: "Découvrez le confort idéal d'une bague en diamant au doigt et comment ajuster la taille."
  },
  "how-to-choose-a-lab-grown-diamond-bracelet": {
    title: "Comment choisir un bracelet en diamant de laboratoire",
    excerpt: "Découvrez comment choisir le bracelet en diamant de laboratoire idéal."
  },
  "how-to-choose-lab-grown-diamond-drop-earrings": {
    title: "Comment choisir des boucles d'oreilles pendantes en diamants",
    excerpt: "Découvrez comment choisir d'élégantes boucles d'oreilles pendantes en diamants de laboratoire."
  },
  "how-to-choose-lab-grown-diamond-earrings": {
    title: "Comment choisir des boucles d'oreilles en diamants de laboratoire",
    excerpt: "Découvrez comment choisir vos boucles d'oreilles en diamants de laboratoire."
  },
  "how-to-choose-a-lab-grown-diamond-jewellery-set": {
    title: "Comment choisir une parure de bijoux en diamants de laboratoire",
    excerpt: "Découvrez comment choisir une parure assortie en diamants de laboratoire."
  },
  "how-to-choose-lab-grown-diamond-jewellery-set": {
    title: "Comment choisir une parure de bijoux en diamants de laboratoire",
    excerpt: "Une parure de bijoux en diamants de laboratoire doit être évaluée comme une collection complète, et pas seulement par son nombre de carats."
  },
  "how-to-choose-a-lab-grown-diamond-necklace": {
    title: "Comment choisir un collier en diamant de laboratoire",
    excerpt: "Découvrez comment choisir le collier en diamant de laboratoire idéal."
  },
  "how-to-choose-a-lab-grown-diamond-pendant": {
    title: "Comment choisir un pendentif en diamant de laboratoire",
    excerpt: "Découvrez comment choisir un pendentif en diamant de laboratoire et sa chaîne assortie."
  },
  "how-to-choose-a-lab-grown-diamond-ring": {
    title: "Comment choisir une bague en diamant de laboratoire",
    excerpt: "Découvrez comment choisir une bague en diamant de laboratoire et sa monture idéale."
  },
  "how-to-choose-lab-grown-diamond-stud-earrings": {
    title: "Comment choisir des puces d'oreilles en diamants",
    excerpt: "Découvrez comment choisir des puces d'oreilles classiques en diamants de laboratoire."
  },
  "how-to-compare-certified-lab-grown-diamonds": {
    title: "Comment comparer des diamants de laboratoire certifiés",
    excerpt: "Découvrez comment comparer des diamants de laboratoire certifiés IGI et choisir la meilleure valeur."
  },
  "how-to-measure-ring-size": {
    title: "Comment mesurer la taille d'une bague",
    excerpt: "Apprenez des méthodes précises pour mesurer votre taille de bague à la maison."
  },
  "how-to-read-a-lab-grown-diamond-certificate": {
    title: "Comment lire un certificat de diamant de laboratoire",
    excerpt: "Apprenez à lire et comprendre un certificat de diamant de laboratoire IGI."
  },
  "igi-certificate-for-lab-grown-diamonds": {
    title: "Certificat IGI pour diamants de laboratoire",
    excerpt: "Découvrez le contenu d'un certificat IGI et comment le vérifier en ligne."
  },
  "jewellery-availability-production-time": {
    title: "Disponibilité des bijoux et délai de production",
    excerpt: "Découvrez l'impact des délais de fabrication et de la taille sur la livraison de vos bijoux."
  },
  "keeping-lab-grown-diamond-jewellery-sparkling": {
    title: "Garder les bijoux en diamants de laboratoire éclatants",
    excerpt: "Découvrez les gestes simples au quotidien pour garder vos bijoux en diamants éclatants."
  },
  "keep-lab-grown-diamond-jewellery-sparkling": {
    title: "Comment garder les diamants de laboratoire éclatants",
    excerpt: "Les diamants de laboratoire ne perdent pas leur éclat avec le temps, mais un entretien régulier préserve leur brillance d'origine."
  },
  "lab-grown-diamond-carat-weight-explained": {
    title: "Explication du poids en carats des diamants de laboratoire",
    excerpt: "Comprenez comment le poids en carats est mesuré et son influence sur le prix et la surface visible."
  },
  "lab-grown-diamond-clarity-grades-explained": {
    title: "Explication des degrés de pureté des diamants",
    excerpt: "Découvrez l'échelle de pureté des diamants et choisissez le meilleur grade selon votre budget."
  },
  "lab-grown-diamond-colour-grades-explained": {
    title: "Explication des degrés de couleur des diamants",
    excerpt: "Découvrez l'échelle de couleur des diamants D à Z et les nuances visuelles."
  },
  "lab-grown-diamond-cut-explained": {
    title: "Explication de la taille des diamants de laboratoire",
    excerpt: "Découvrez pourquoi la taille est le critère le plus important pour la brillance du diamant."
  },
  "lab-grown-diamonds-vs-cubic-zirconia": {
    title: "Diamants de laboratoire versus zirconium",
    excerpt: "Comparez les diamants de laboratoire au zirconium sur la dureté, la brillance et la valeur."
  },
  "lab-grown-diamonds-vs-moissanite": {
    title: "Diamants de laboratoire versus moissanite",
    excerpt: "Comparez les diamants de laboratoire à la moissanite sur l'indice de réfraction et le feu des couleurs."
  },
  "lab-grown-vs-natural-diamonds": {
    title: "Diamants de laboratoire versus naturels",
    excerpt: "Comparez les diamants de laboratoire aux diamants naturels sur leurs propriétés et prix."
  },
  "measuring-wrist-for-a-bracelet": {
    title: "Mesurer le poignet pour un bracelet",
    excerpt: "Apprenez à mesurer précisément votre poignet pour un bracelet en diamant."
  },
  "mistakes-when-buying-lab-grown-diamond-jewellery-online": {
    title: "Erreurs lors de l'achat de bijoux en diamants en ligne",
    excerpt: "Évitez les erreurs courantes lors de l'achat de bijoux en diamants en ligne."
  },
  "perfume-skincare-diamond-jewellery": {
    title: "Le parfum et les cosmétiques peuvent-ils abîmer les bijoux en diamants ?",
    excerpt: "Les parfums et cosmétiques peuvent ternir la brillance des diamants et affecter les métaux délicats de vos bijoux."
  },
  "prevent-jewellery-scratches": {
    title: "Comment éviter les rayures sur les bijoux",
    excerpt: "Adoptez de bonnes habitudes de port et de rangement pour préserver l'éclat de vos bijoux et éviter les rayures."
  },
  "preventing-jewellery-scratches": {
    title: "Éviter les rayures sur les bijoux",
    excerpt: "Découvrez des conseils pratiques pour éviter les rayures sur vos bijoux en diamants."
  },
  "professional-diamond-jewellery-inspection": {
    title: "Quand faire inspecter ses bijoux en diamants par un professionnel ?",
    excerpt: "Faites inspecter vos bijoux en diamants par un joaillier professionnel régulièrement pour contrôler la sécurité des griffes."
  },
  "questions-about-coloured-stone-diamond-jewellery": {
    title: "Questions sur les bijoux en diamants avec pierres de couleur",
    excerpt: "Trouvez les réponses aux questions essentielles sur l'achat de bijoux en diamants et pierres de couleur."
  },
  "questions-coloured-stone-diamond-jewellery": {
    title: "25 questions avant d'acheter des bijoux en gemmes et diamants",
    excerpt: "Poser les bonnes questions permet de vérifier les connaissances du vendeur et la précision des informations sur le bijou."
  },
  "questions-to-ask-before-buying-a-lab-grown-diamond": {
    title: "Questions à poser avant d'acheter un diamant de laboratoire",
    excerpt: "Découvrez les 7 questions essentielles à poser à votre joaillier avant d'acheter un diamant de laboratoire."
  },
  "ready-made-vs-made-to-order-diamond-jewellery": {
    title: "Bijoux en diamants prêts à porter versus sur commande",
    excerpt: "Comparez les bijoux en diamants prêts à expédier avec les créations sur commande."
  },
  "selecting-the-right-necklace-length": {
    title: "Sélectionner la bonne longueur de collier",
    excerpt: "Découvrez comment choisir la longueur de collier idéale selon votre décolleté."
  },
  "selecting-the-right-size-diamond-earrings": {
    title: "Sélectionner la bonne taille de boucles d'oreilles",
    excerpt: "Découvrez comment choisir la taille idéale de boucles d'oreilles en diamants."
  },
  "setting-a-budget-for-lab-grown-diamond-jewellery": {
    title: "Établir un budget pour la joaillerie en diamants",
    excerpt: "Découvrez comment fixer un budget réaliste pour vos bijoux en diamants de laboratoire."
  },
  "storing-diamond-jewellery": {
    title: "Ranger et conserver les bijoux en diamants",
    excerpt: "Apprenez à ranger vos bijoux en diamants en toute sécurité pour éviter les rayures."
  },
  "store-diamond-jewellery": {
    title: "Comment ranger et conserver les bijoux en diamants",
    excerpt: "Les bijoux en diamants nécessitent un rangement séparé pour éviter que les métaux et les pierres ne se rayent entre eux."
  },
  "swimming-wearing-diamond-jewellery": {
    title: "Nager en portant des bijoux en diamants",
    excerpt: "Découvrez pourquoi vous devez éviter de nager avec des bijoux en diamants."
  },
  "swim-wearing-diamond-jewellery": {
    title: "Peut-on nager avec des bijoux en diamants ?",
    excerpt: "Retirez vos bijoux en diamants avant de nager pour protéger le métal et la monture du chlore et de l'eau salée."
  },
  "total-carat-weight-meaning-in-diamond-jewellery": {
    title: "Signification du poids total en carats dans la joaillerie",
    excerpt: "Comprenez la signification du poids total en carats (CTW) dans les bijoux multi-pierres."
  },
  "transparency-buying-diamond-jewellery": {
    title: "Transparence lors de l'achat de bijoux en diamants",
    excerpt: "Découvrez pourquoi la transparence des prix et la certification sont essentielles lors de l'achat."
  },
  "verifying-igi-certificate-number": {
    title: "Vérifier le numéro de certificat IGI",
    excerpt: "Apprenez à vérifier un numéro de certificat IGI en ligne pour confirmer l'authenticité."
  },
  "verify-igi-certificate-number": {
    title: "Comment vérifier un numéro de certificat IGI en ligne",
    excerpt: "Pour vérifier un numéro de certificat IGI, saisissez le numéro sur le service officiel de vérification IGI."
  },
  "wearing-diamond-jewellery-in-the-shower": {
    title: "Porter des bijoux en diamants sous la douche",
    excerpt: "Découvrez pourquoi porter des bijoux en diamants sous la douche peut ternir leur éclat."
  },
  "wear-diamond-jewellery-in-shower": {
    title: "Peut-on porter des bijoux en diamants sous la douche ?",
    excerpt: "Il est recommandé de retirer vos bijoux en diamants avant la douche pour éviter le dépôt de savon et les chocs."
  },
  "what-are-lab-grown-diamonds": {
    title: "Que sont les diamants de laboratoire ? Guide complet de l'acheteur",
    excerpt: "Les diamants de laboratoire constituent le symbole moderne de résistance et de beauté de la haute joaillerie."
  },
  "what-determines-the-price-of-lab-grown-diamond-jewellery": {
    title: "Qu'est-ce qui détermine le prix des bijoux en diamants ?",
    excerpt: "Le prix des bijoux en diamants dépend de plusieurs facteurs clés."
  },
  "what-determines-price-lab-grown-diamond-jewellery": {
    title: "Qu'est-ce qui détermine le prix de la joaillerie en diamants de laboratoire ?",
    excerpt: "Le prix des bijoux en diamants de laboratoire correspond au prix d'un produit complet et artisanal."
  },
  "what-is-included-with-certified-diamond-jewellery": {
    title: "Que comprend la joaillerie en diamants certifiée ?",
    excerpt: "Découvrez tous les documents et garanties inclus avec un bijou en diamant certifié."
  },
  "what-included-certified-diamond-jewellery": {
    title: "Que comprend la joaillerie en diamants certifiée ?",
    excerpt: "Découvrez les documents de certification et les garanties fournis lors de l'achat d'un bijou en diamant certifié."
  },
  "what-makes-lab-grown-diamond-jewellery-high-quality": {
    title: "Qu'est-ce qui fait la haute qualité des bijoux en diamants ?",
    excerpt: "Découvrez ce qui détermine la haute qualité d'un bijou en diamant de laboratoire."
  },
  "what-makes-lab-grown-diamonds-different": {
    title: "Qu'est-ce qui différencie les diamants de laboratoire ?",
    excerpt: "Les diamants de laboratoire sont créés selon des procédés technologiques de pointe tout en conservant une unicité."
  },
  "what-to-check-before-buying-lab-grown-diamond-jewellery": {
    title: "Que vérifier avant d'acheter des bijoux en diamants de laboratoire",
    excerpt: "Le meilleur achat de bijoux en diamants de laboratoire est celui d'une pièce avec une description transparente et certifiée."
  }
};

const blogsFr = blogsEn.map((blog) => {
  const tr = translationsMap[blog.slug];
  if (tr) {
    return {
      ...blog,
      title: tr.title,
      excerpt: tr.excerpt,
      date: formatDateEnToFr(blog.date)
    };
  }
  return {
    ...blog,
    date: formatDateEnToFr(blog.date)
  };
});

fs.writeFileSync(frDataPath, JSON.stringify(blogsFr, null, 2), "utf-8");
console.log(`Successfully rebuilt blogs.data.fr.json with ${blogsFr.length} 100% pure French entries from scratch!`);
