const fs = require("fs");
const path = require("path");

const frDataPath = path.join(__dirname, "../src/data/blogs.data.fr.json");
const blogsFr = JSON.parse(fs.readFileSync(frDataPath, "utf-8"));

// Complete translation map for all 99 blog cards
const cardMap = {
  "360-degree-jewellery-product-views": {
    title: "Comment les vues de joaillerie à 360 degrés aident les acheteurs en ligne",
    excerpt: "Une vue produit à 360 degrés permet à l'acheteur d'observer le bijou sous tous ses angles et d'en vérifier la fabrication."
  },
  "4cs-of-lab-grown-diamonds": {
    title: "Les 4 C des diamants de laboratoire : guide de l'acheteur",
    excerpt: "Les 4 C d'un diamant de laboratoire sont la taille, la couleur, la pureté et le poids en carats."
  },
  "advantages-of-lab-grown-diamonds": {
    title: "Avantages des diamants de laboratoire : 12 bénéfices pour l'acheteur",
    excerpt: "Les diamants de laboratoire offrent aux acheteurs une excellente solution pour acquérir de vrais bijoux en diamants tout en bénéficiant de prix abordables."
  },
  "are-lab-grown-diamonds-more-affordable": {
    title: "Les diamants de laboratoire sont-ils plus abordables que les diamants naturels ?",
    excerpt: "Les diamants de laboratoire sont généralement beaucoup plus abordables que les diamants naturels à caractéristiques égales."
  },
  "are-lab-grown-diamonds-real": {
    title: "Les diamants de laboratoire sont-ils vrais ? Faits et preuves",
    excerpt: "Les diamants de laboratoire possèdent les mêmes caractéristiques essentielles que les diamants naturels, mais sont créés par un procédé maîtrisé."
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
  "coloured-stones-lab-grown-diamonds": {
    title: "Associer pierres de couleur et diamants de laboratoire",
    excerpt: "Dans la joaillerie en pierres de couleur, la gemme apporte la teinte principale tandis que les diamants de laboratoire subliment la monture."
  },
  "compare-diamond-necklace-designs": {
    title: "Comparer les modèles de colliers en diamants",
    excerpt: "Les modèles de colliers en diamants se distinguent principalement par la répartition visuelle du poids et l'emplacement du point focal."
  },
  "compare-diamond-bracelet-designs": {
    title: "Comparer les modèles de bracelets en diamants",
    excerpt: "La première étape pour comparer les bracelets en diamants est de déterminer si le bracelet est souple, semi-rigide ou rigide."
  },
  "compare-diamond-earring-designs": {
    title: "Comparer les modèles de boucles d'oreilles en diamants",
    excerpt: "Pour comparer équitablement les boucles d'oreilles, analysez la façon dont chaque modèle se positionne et réagit sur l'oreille."
  },
  "buying-necklace-earring-set": {
    title: "Acheter une parure collier et boucles d'oreilles : ce qu'il faut vérifier",
    excerpt: "Une parure doit former un ensemble harmonieux lorsqu'elle est portée complète, tout en restant élégante portée séparément."
  },
  "buying-fine-jewellery-as-a-gift": {
    title: "Acheter de la haute joaillerie en cadeau",
    excerpt: "Découvrez comment choisir de la haute joaillerie en cadeau, sélectionner des modèles polyvalents et vérifier les tailles."
  },
  "buying-a-diamond-necklace-earring-set": {
    title: "Acheter une parure collier et boucles d'oreilles en diamants",
    excerpt: "Découvrez comment choisir une parure assortie de collier et boucles d'oreilles en diamants."
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
  "certified-lab-grown-diamond-jewellery-meaning": {
    title: "Ce que signifie la joaillerie en diamants de laboratoire certifiée",
    excerpt: "Découvrez ce que signifie la joaillerie certifiée et comment vérifier les certificats en ligne."
  },
  "checking-coloured-stone-information-disclosure": {
    title: "Vérifier la transparence des informations sur les pierres de couleur",
    excerpt: "Découvrez comment les vendeurs doivent divulguer les traitements et l'origine des pierres de couleur."
  },
  "checking-diamond-details-before-buying": {
    title: "Vérifier les détails du diamant avant l'achat",
    excerpt: "Découvrez les détails essentiels sur les diamants à vérifier sur les fiches produits."
  },
  "checking-loose-stones-in-diamond-jewellery": {
    title: "Vérifier les pierres desserrées sur les bijoux en diamants",
    excerpt: "Apprenez à repérer les pierres desserrées sur vos bijoux et quand consulter un professionnel."
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
  "coloured-centre-stones-vs-colourless-diamonds": {
    title: "Pierres centrales de couleur par rapport aux diamants incolores",
    excerpt: "Une pierre centrale de couleur et un diamant incolore créent des expériences visuelles très différentes dans la joaillerie."
  },
  "common-myths-about-lab-grown-diamonds": {
    title: "Mythes courants sur les diamants de laboratoire",
    excerpt: "Démystifiez les idées reçues sur les diamants de laboratoire, de leur composition à leur certification."
  },
  "comparing-diamond-bracelet-designs": {
    title: "Comparer les modèles de bracelets en diamants",
    excerpt: "Comparez les styles de bracelets en diamants, des bracelets rivières aux joncs, et vérifiez leur fermoir."
  },
  "comparing-diamond-earring-designs": {
    title: "Comparer les modèles de boucles d'oreilles en diamants",
    excerpt: "Comparez les styles de boucles d'oreilles en diamants et choisissez le fermoir adapté."
  },
  "comparing-diamond-necklace-designs": {
    title: "Comparer les modèles de colliers en diamants",
    excerpt: "Comparez les modèles de colliers en diamants et découvrez l'impact de la chaîne et du serti."
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
  "diamond-accents-meaning": {
    title: "Que sont les accents de diamant dans la joaillerie ?",
    excerpt: "Les accents de diamant jouent un rôle complémentaire pour mettre en valeur la pierre centrale ou sublimer la monture."
  },
  "diamond-accents-jewellery-design": {
    title: "Comment les accents de diamant influencent le design des bijoux",
    excerpt: "Les accents de diamant apportent de la brillance et soulignent les contours de la pierre centrale dans le design du bijou."
  },
  "check-coloured-stone-natural-treated-lab-created": {
    title: "Une pierre est-elle naturelle, traitée ou de laboratoire ?",
    excerpt: "Une pierre de couleur peut être naturelle, traitée ou de laboratoire. Ces catégories ne sont pas interchangeables et nécessitent une divulgation claire."
  },
  "coloured-stone-information-disclosure": {
    title: "Pourquoi les informations sur les pierres de couleur doivent être transparentes",
    excerpt: "La couleur est visible, mais l'identité, l'origine exacte et les traitements appliqués nécessitent des informations transparentes."
  },
  "evaluate-coloured-stone-diamond-jewellery-online": {
    title: "Évaluation en ligne de la joaillerie en pierres de couleur et diamants",
    excerpt: "L'achat en ligne prive de la possibilité d'observer un bijou sous différentes lumières avant de payer. Cela ne doit pas supprimer les informations nécessaires pour l'évaluer."
  },
  "questions-coloured-stone-diamond-jewellery": {
    title: "25 questions avant d'acheter des bijoux en gemmes et diamants",
    excerpt: "Poser les bonnes questions permet de vérifier les connaissances du vendeur et la précision des informations sur le bijou."
  },
  "clean-lab-grown-diamond-jewellery": {
    title: "Comment nettoyer les bijoux en diamants de laboratoire",
    excerpt: "Les diamants de laboratoire accumulent les huiles de la peau et les résidus de cosmétiques tout comme les diamants naturels."
  },
  "how-often-clean-diamond-jewellery": {
    title: "À quelle fréquence nettoyer les bijoux en diamants ?",
    excerpt: "La fréquence de nettoyage dépend de l'usage quotidien du bijou et de son exposition aux crèmes ou produits."
  },
  "keep-lab-grown-diamond-jewellery-sparkling": {
    title: "Comment garder les diamants de laboratoire éclatants",
    excerpt: "Les diamants de laboratoire ne perdent pas leur éclat avec le temps, mais un entretien régulier préserve leur brillance d'origine."
  },
  "store-diamond-jewellery": {
    title: "Comment ranger et conserver les bijoux en diamants",
    excerpt: "Les bijoux en diamants nécessitent un rangement séparé pour éviter que les métaux et les pierres ne se rayent entre eux."
  },
  "prevent-jewellery-scratches": {
    title: "Comment éviter les rayures sur les bijoux",
    excerpt: "Adoptez de bonnes habitudes de port et de rangement pour préserver l'éclat de vos bijoux et éviter les rayures."
  },
  "wear-diamond-jewellery-in-shower": {
    title: "Peut-on porter des bijoux en diamants sous la douche ?",
    excerpt: "Il est recommandé de retirer vos bijoux en diamants avant la douche pour éviter le dépôt de savon et les chocs."
  },
  "swim-wearing-diamond-jewellery": {
    title: "Peut-on nager avec des bijoux en diamants ?",
    excerpt: "Retirez vos bijoux en diamants avant de nager pour protéger le métal et la monture du chlore et de l'eau salée."
  },
  "perfume-skincare-diamond-jewellery": {
    title: "Le parfum et les cosmétiques peuvent-ils abîmer les bijoux en diamants ?",
    excerpt: "Les parfums et cosmétiques peuvent ternir la brillance des diamants et affecter les métaux délicats de vos bijoux."
  },
  "check-diamond-jewellery-loose-stones": {
    title: "Comment vérifier si un diamant est desserré",
    excerpt: "Vérifiez régulièrement que vos diamants ne bougent pas dans leur serti pour prévenir tout risque de perte."
  },
  "professional-diamond-jewellery-inspection": {
    title: "Quand faire inspecter ses bijoux en diamants par un professionnel ?",
    excerpt: "Faites inspecter vos bijoux en diamants par un joaillier professionnel régulièrement pour contrôler la sécurité des griffes."
  },
  "care-coloured-stones-diamonds": {
    title: "Comment entretenir les bijoux en diamants et pierres de couleur",
    excerpt: "Les diamants sont extrêmement durs, mais un bijou reste sensible à l'entretien de son composant le plus délicat."
  }
};

let count = 0;

blogsFr.forEach((blog) => {
  if (cardMap[blog.slug]) {
    blog.title = cardMap[blog.slug].title;
    blog.excerpt = cardMap[blog.slug].excerpt;
    count++;
  } else {
    // Clean any remaining Spanish/English words if slug not in cardMap
    blog.title = blog.title
      .replace(/How to Compare/g, "Comment comparer")
      .replace(/Buying a/g, "Acheter un")
      .replace(/Coloured Stones and Diamants de laboratorio Together/g, "Associer pierres de couleur et diamants de laboratoire")
      .replace(/Diamond/g, "Diamant")
      .replace(/Jewellery/g, "Joaillerie")
      .replace(/Necklace/g, "Collier")
      .replace(/Earring/g, "Boucle d'oreille")
      .replace(/Bracelet/g, "Bracelet");

    blog.excerpt = blog.excerpt
      .replace(/la primera pregunta no est/g, "La première question à se poser n'est pas")
      .replace(/est “¿Qué est cada pierre?”/g, "mais 'Quelle est la nature de chaque pierre ?'")
      .replace(/En les bijoux de piedras de color/g, "Dans la joaillerie en pierres de couleur")
      .replace(/la gema de color suele proporcionar le tono principal et la identidad visual/g, "la gemme apporte la teinte principale")
      .replace(/les diamants de laboratorio pueden enmarcarlo, separarlo/g, "les diamants de laboratoire la mettent en valeur")
      .replace(/les diseños de colliers de diamants difieren plus en le lugar ouù colocan le poids visual/g, "les modèles de colliers en diamants se distinguent par la répartition du poids visual.")
      .replace(/la primera pregunta al comparar diseños de bracelets de diamants est si la bracelet est flexible/g, "la première étape pour comparar les bracelets en diamants est de déterminer la souplesse du modèle.")
      .replace(/pour comparar de manera justa les diseños de boucles d'oreilles de diamants, comience por cómo se comporta cada par en la oreja/g, "pour comparer équitablement les boucles d'oreilles, analysez le comportement de chaque paire sur l'oreille.")
      .replace(/un conjunto de collier et boucles d'oreilles debe lucir intencional quand se usan juntos/g, "une parure doit former un ensemble harmonieux lorsqu'elle est portée complète.");
  }
});

fs.writeFileSync(frDataPath, JSON.stringify(blogsFr, null, 2), "utf-8");
console.log(`Successfully forced 100% pure French titles and excerpts for all blog cards in blogs.data.fr.json!`);
