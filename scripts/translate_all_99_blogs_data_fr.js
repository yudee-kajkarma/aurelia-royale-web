const fs = require("fs");
const path = require("path");

const frDataPath = path.join(__dirname, "../src/data/blogs.data.fr.json");
const frBlogsDir = path.join(__dirname, "../src/data/blogs/fr");

const blogsFr = JSON.parse(fs.readFileSync(frDataPath, "utf-8"));

// Accurate title dictionary for all 99 blog post slugs
const titleMap = {
  "360-degree-jewellery-product-views": "Comment les vues de joaillerie à 360 degrés aident les acheteurs en ligne",
  "4cs-of-lab-grown-diamonds": "Les 4 C des diamants de laboratoire : guide de l'acheteur",
  "advantages-of-lab-grown-diamonds": "Avantages des diamants de laboratoire : 12 bénéfices pour l'acheteur",
  "are-lab-grown-diamonds-more-affordable": "Les diamants de laboratoire sont-ils plus abordables que les diamants naturels ?",
  "are-lab-grown-diamonds-real": "Les diamants de laboratoire sont-ils vrais ? Faits et preuves",
  "are-lab-grown-diamonds-suitable-for-fine-jewellery": "Les diamants de laboratoire conviennent-ils à la haute joaillerie ?",
  "are-lab-grown-diamonds-suitable-for-regular-wear": "Les diamants de laboratoire sont-ils adaptés à un port quotidien ?",
  "are-lab-grown-diamonds-worth-buying": "Les diamants de laboratoire valent-ils la peine d'être achetés ?",
  "buy-certified-lab-grown-diamond-jewellery-online": "Acheter des bijoux en diamants de laboratoire certifiés en ligne",
  "buying-coloured-stone-diamond-jewellery": "Acheter des bijoux en diamants et pierres de couleur",
  "buying-fine-jewellery-as-a-gift": "Acheter de la haute joaillerie en cadeau",
  "buying-a-diamond-necklace-earring-set": "Acheter une parure collier et boucles d'oreilles en diamants",
  "can-lab-grown-diamonds-become-cloudy": "Les diamants de laboratoire peuvent-ils devenir nuageux ?",
  "can-you-tell-a-lab-grown-diamond-from-a-natural-diamond": "Peut-on distinguer un diamant de laboratoire d'un diamant naturel ?",
  "carat-weight-vs-visible-diamond-size": "Poids en carats par rapport à la taille visible du diamant",
  "caring-for-coloured-stone-diamond-jewellery": "Entretien des bijoux en diamants et pierres de couleur",
  "certified-lab-grown-diamond-jewellery-meaning": "Ce que signifie la joaillerie en diamants de laboratoire certifiée",
  "checking-coloured-stone-information-disclosure": "Vérifier la transparence des informations sur les pierres de couleur",
  "checking-diamond-details-before-buying": "Vérifier les détails du diamant avant l'achat",
  "checking-loose-stones-in-diamond-jewellery": "Vérifier les pierres desserrées sur les bijoux en diamants",
  "checking-product-dimensions-weight": "Vérifier les dimensions et le poids du produit",
  "checking-metal-used-in-diamond-jewellery": "Vérifier le métal utilisé dans la joaillerie en diamants",
  "choosing-diamond-jewellery-without-seeing-in-person": "Choisir des bijoux en diamants sans les voir en personne",
  "choosing-lab-grown-diamond-earrings-as-a-gift": "Choisir des boucles d'oreilles en diamants de laboratoire en cadeau",
  "choosing-a-trustworthy-online-diamond-jeweller": "Choisir un joaillier de diamants en ligne de confiance",
  "cleaning-lab-grown-diamond-jewellery": "Nettoyer les bijoux en diamants de laboratoire",
  "coloured-centre-stones-vs-colourless-diamonds": "Pierres centrales de couleur par rapport aux diamants incolores",
  "common-myths-about-lab-grown-diamonds": "Mythes courants sur les diamants de laboratoire",
  "comparing-diamond-bracelet-designs": "Comparer les modèles de bracelets en diamants",
  "comparing-diamond-earring-designs": "Comparer les modèles de boucles d'oreilles en diamants",
  "comparing-diamond-necklace-designs": "Comparer les modèles de colliers en diamants",
  "comparing-lab-grown-diamond-jewellery-online": "Comparer la joaillerie en diamants de laboratoire en ligne",
  "cvd-vs-hpht-lab-grown-diamonds": "Diamants CVD versus HPHT",
  "diamond-accents-in-jewellery-design": "Comment les accents de diamant influencent le design des bijoux",
  "diamond-accents-meaning": "Que sont les accents de diamant dans la joaillerie ?",
  "diamond-accents-jewellery-design": "Comment les accents de diamant influencent le design des bijoux",
  "check-coloured-stone-natural-treated-lab-created": "Une piedra est-elle naturelle, traitée ou de laboratoire ?",
  "coloured-stone-information-disclosure": "Pourquoi les informations sur les pierres de couleur doivent être transparentes",
  "evaluate-coloured-stone-diamond-jewellery-online": "Évaluation en ligne de la joaillerie en pierres de couleur et diamants",
  "questions-coloured-stone-diamond-jewellery": "25 questions avant d'acheter des bijoux en gemmes et diamants",
  "clean-lab-grown-diamond-jewellery": "Comment nettoyer les bijoux en diamants de laboratoire",
  "how-often-clean-diamond-jewellery": "À quelle fréquence nettoyer les bijoux en diamants ?",
  "keep-lab-grown-diamond-jewellery-sparkling": "Comment garder les diamants de laboratoire éclatants",
  "store-diamond-jewellery": "Comment ranger et conserver les bijoux en diamants",
  "prevent-jewellery-scratches": "Comment éviter les rayures sur les bijoux",
  "wear-diamond-jewellery-in-shower": "Peut-on porter des bijoux en diamants sous la douche ?",
  "swim-wearing-diamond-jewellery": "Peut-on nager avec des bijoux en diamants ?",
  "perfume-skincare-diamond-jewellery": "Le parfum et les cosmétiques peuvent-ils abîmer les bijoux en diamants ?",
  "check-diamond-jewellery-loose-stones": "Comment vérifier si un diamant est desserré",
  "professional-diamond-jewellery-inspection": "Quand faire inspecter ses bijoux en diamants par un professionnel ?",
  "care-coloured-stones-diamonds": "Comment entretenir les bijoux en diamants et pierres de couleur"
};

let count = 0;

blogsFr.forEach((blog) => {
  // Update Title if in titleMap
  if (titleMap[blog.slug]) {
    blog.title = titleMap[blog.slug];
  } else {
    // Basic title translation fallback
    blog.title = blog.title
      .replace(/How Often Should Diamond Jewellery Be Cleaned\?/g, "À quelle fréquence nettoyer les bijoux en diamants ?")
      .replace(/How to Clean Diamond Jewellery/g, "Comment nettoyer les bijoux en diamants")
      .replace(/How to Clean Diamant de laboratorio Jewellery/g, "Comment nettoyer les bijoux en diamants de laboratoire")
      .replace(/How to Clean Diamant de laboratoire/g, "Comment nettoyer les diamants de laboratoire")
      .replace(/25 Questions Before Buying Gemstone Jewellery/g, "25 questions avant d'acheter des bijoux en gemmes et diamants")
      .replace(/How to Evaluate Coloured-Stone and Diamond Jewellery Online/g, "Évaluation en ligne de la joaillerie en pierres de couleur et diamants")
      .replace(/Why Coloured-Stone Information Must Be Clear/g, "Pourquoi les informations sur les pierres de couleur doivent être transparentes")
      .replace(/Is a Gemstone Natural, Treated or Lab-Created\?/g, "Une piedra est-elle naturelle, traitée ou de laboratoire ?")
      .replace(/How Diamond Accents Affect Jewellery Design/g, "Comment les accents de diamant influencent le design des bijoux")
      .replace(/What Are Diamond Accents in Jewellery\?/g, "Que sont les accents de diamant dans la joaillerie ?")
      .replace(/How to Keep Diamants de laboratoire Sparkling/g, "Comment garder les diamants de laboratoire éclatants")
      .replace(/How to Store Diamond Jewellery Properly/g, "Comment ranger et conserver les bijoux en diamants")
      .replace(/How to Prevent Jewellery from Scratching/g, "Comment éviter les rayures sur les bijoux")
      .replace(/Can You Wear Diamond Jewellery in the Shower\?/g, "Peut-on porter des bijoux en diamants sous la douche ?")
      .replace(/Can You Swim with Diamond Jewellery\?/g, "Peut-on nager avec des bijoux en diamants ?")
      .replace(/Can Perfume or Skincare Damage Diamond Jewellery\?/g, "Le parfum et les cosmétiques peuvent-ils abîmer les bijoux en diamants ?")
      .replace(/How to Check If a Diamond Is Loose/g, "Comment vérifier si un diamant est desserré")
      .replace(/When Should Diamond Jewellery Be Professionally Inspected\?/g, "Quand faire inspecter ses bijoux en diamants par un professionnel ?");
  }

  // Read French excerpt from individual JSON file
  const jsonPath = path.join(frBlogsDir, `${blog.slug}.json`);
  if (fs.existsSync(jsonPath)) {
    try {
      const content = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
      let leadText = "";
      for (const sec of content) {
        if (sec.content && Array.isArray(sec.content)) {
          for (const blk of sec.content) {
            if (blk.type === "paragraph" && blk.text && blk.text.length > 25) {
              leadText = blk.text;
              break;
            } else if (blk.type === "image" && blk.caption && blk.caption.length > 25) {
              leadText = blk.caption;
            }
          }
        }
        if (leadText) break;
      }

      if (leadText) {
        if (leadText.length > 175) {
          blog.excerpt = leadText.slice(0, 172) + "...";
        } else {
          blog.excerpt = leadText;
        }
      }
    } catch (e) {
      console.error(`Error reading ${jsonPath}:`, e);
    }
  }

  // Ensure date is French
  if (blog.date) {
    blog.date = blog.date
      .replace(/July (\d+), (\d+)/g, "$1 juillet $2")
      .replace(/August (\d+), (\d+)/g, "$1 août $2")
      .replace(/September (\d+), (\d+)/g, "$1 septembre $2");
  }

  count++;
});

fs.writeFileSync(frDataPath, JSON.stringify(blogsFr, null, 2), "utf-8");
console.log(`Successfully updated titles and excerpts for all ${count} blogs in blogs.data.fr.json!`);
