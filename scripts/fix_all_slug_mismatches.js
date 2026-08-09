const fs = require("fs");
const path = require("path");

const frDataPath = path.join(__dirname, "../src/data/blogs.data.fr.json");
const blogsFr = JSON.parse(fs.readFileSync(frDataPath, "utf-8"));

// Comprehensive dictionary mapping both short and long slugs
const slugMap = {
  "total-carat-weight-meaning-diamond-jewellery": {
    title: "Signification du poids total en carats dans la joaillerie",
    excerpt: "Comprenez la signification du poids total en carats (CTW), sa différence avec la pierre centrale et la lecture des poids pour les bagues et bracelets."
  },
  "total-carat-weight-meaning-in-diamond-jewellery": {
    title: "Signification du poids total en carats dans la joaillerie",
    excerpt: "Comprenez la signification du poids total en carats (CTW), sa différence avec la pierre centrale et la lecture des poids pour les bagues et bracelets."
  },
  "set-budget-lab-grown-diamond-jewellery": {
    title: "Comment établir un budget pour la joaillerie en diamants",
    excerpt: "Établissez un budget réaliste pour vos bijoux en diamants de laboratoire en équilibrant le design, la qualité du diamant, le métal et l'entretien futur."
  },
  "setting-a-budget-for-lab-grown-diamond-jewellery": {
    title: "Comment établir un budget pour la joaillerie en diamants",
    excerpt: "Établissez un budget réaliste pour vos bijoux en diamants de laboratoire en équilibrant le design, la qualité du diamant, le métal et l'entretien futur."
  },
  "select-right-size-diamond-earrings": {
    title: "Comment choisir la bonne taille de boucles d'oreilles en diamants",
    excerpt: "Choisissez la taille idéale de boucles d'oreilles en diamants selon les millimètres, le poids en carats, le type de serti et la visibilité souhaitée."
  },
  "selecting-the-right-size-diamond-earrings": {
    title: "Comment choisir la bonne taille de boucles d'oreilles en diamants",
    excerpt: "Choisissez la taille idéale de boucles d'oreilles en diamants selon les millimètres, le poids en carats, le type de serti et la visibilité souhaitée."
  },
  "select-right-necklace-length": {
    title: "Comment choisir la bonne longueur de collier",
    excerpt: "Choisissez la longueur de collier idéale en testant les centimètres exacts, la hauteur du pendentif et le décolleté."
  },
  "selecting-the-right-necklace-length": {
    title: "Comment choisir la bonne longueur de collier",
    excerpt: "Choisissez la longueur de collier idéale en testant les centimètres exacts, la hauteur du pendentif et le décolleté."
  },
  "questions-to-ask-before-buying-lab-grown-diamond": {
    title: "25 questions à poser avant d'acheter un diamant de laboratoire",
    excerpt: "Utilisez ces 25 questions pour vérifier la qualité du diamant de laboratoire, le certificat, le traitement, le poids en carats, le métal et le prix total."
  },
  "questions-to-ask-before-buying-a-lab-grown-diamond": {
    title: "25 questions à poser avant d'acheter un diamant de laboratoire",
    excerpt: "Utilisez ces 25 questions pour vérifier la qualité du diamant de laboratoire, le certificat, le traitement, le poids en carats, le métal et le prix total."
  },
  "mistakes-buying-lab-grown-diamond-jewellery-online": {
    title: "15 erreurs lors de l'achat de bijoux en diamants de laboratoire en ligne",
    excerpt: "Évitez 15 erreurs coûteuses lors de l'achat de bijoux en diamants en ligne, des certificats non vérifiés aux imprécisions de dimensions."
  },
  "mistakes-when-buying-lab-grown-diamond-jewellery-online": {
    title: "15 erreurs lors de l'achat de bijoux en diamants de laboratoire en ligne",
    excerpt: "Évitez 15 erreurs coûteuses lors de l'achat de bijoux en diamants en ligne, des certificats non vérifiés aux imprécisions de dimensions."
  }
};

// Fallback auto-translator for any English phrases in titles or excerpts
function forceFrenchTitle(t) {
  if (!t) return t;
  let str = t;
  str = str
    .replace(/How to Set a Budget for Lab-Grown Diamond Jewellery/gi, "Comment établir un budget pour la joaillerie en diamants")
    .replace(/How to Choose the Right Diamond Earring Size/gi, "Comment choisir la bonne taille de boucles d'oreilles en diamants")
    .replace(/How to Select the Right Necklace Length/gi, "Comment choisir la bonne longueur de collier")
    .replace(/15 Lab-Grown Diamond Jewellery Buying Mistakes/gi, "15 erreurs lors de l'achat de bijoux en diamants de laboratoire en ligne")
    .replace(/How to/gi, "Comment")
    .replace(/Select/gi, "Sélectionner")
    .replace(/Set a Budget/gi, "Établir un budget")
    .replace(/Right Size/gi, "la bonne taille")
    .replace(/Right Necklace Length/gi, "la bonne longueur de collier")
    .replace(/Diamond Earring Size/gi, "la taille de boucles d'oreilles en diamants")
    .replace(/Buying Mistakes/gi, "Erreurs d'achat");
  return str;
}

function forceFrenchExcerpt(e) {
  if (!e) return e;
  let str = e;

  // Exact phrase replacements for remaining English excerpts
  if (str.includes("Learn what total carat weight means")) {
    return "Comprenez la signification du poids total en carats (CTW), sa différence avec la pierre centrale et la lecture des poids pour les bagues et bracelets.";
  }
  if (str.includes("Build a realistic lab-grown diamond jewellery budget")) {
    return "Établissez un budget réaliste pour vos bijoux en diamants de laboratoire en équilibrant le design, la qualité du diamant, le métal et l'entretien futur.";
  }
  if (str.includes("Choose the right diamond earring size using millimetres")) {
    return "Choisissez la taille idéale de boucles d'oreilles en diamants selon les millimètres, le poids en carats, le type de serti et la visibilité souhaitée.";
  }
  if (str.includes("Select the right necklace length by testing exact centimetres")) {
    return "Choisissez la longueur de collier idéale en testant les centimètres exacts, la hauteur du pendentif et le décolleté.";
  }
  if (str.includes("Use these 25 questions to check a lab-grown diamond’s quality")) {
    return "Utilisez ces 25 questions pour vérifier la qualité du diamant de laboratoire, le certificat, le traitement, le poids en carats, le métal et le prix total.";
  }
  if (str.includes("Avoid 15 costly mistakes when buying lab-grown diamond jewellery online")) {
    return "Évitez 15 erreurs coûteuses lors de l'achat de bijoux en diamants en ligne, des certificats non vérifiés aux imprécisions de dimensions.";
  }

  return str;
}

let updatedCount = 0;

blogsFr.forEach((blog) => {
  if (slugMap[blog.slug]) {
    blog.title = slugMap[blog.slug].title;
    blog.excerpt = slugMap[blog.slug].excerpt;
    updatedCount++;
  } else {
    blog.title = forceFrenchTitle(blog.title);
    blog.excerpt = forceFrenchExcerpt(blog.excerpt);
  }
});

fs.writeFileSync(frDataPath, JSON.stringify(blogsFr, null, 2), "utf-8");
console.log(`Successfully updated ${updatedCount} targeted short-slug items in blogs.data.fr.json!`);
