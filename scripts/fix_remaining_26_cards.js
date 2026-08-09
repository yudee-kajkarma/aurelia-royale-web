const fs = require("fs");
const path = require("path");

const frDataPath = path.join(__dirname, "../src/data/blogs.data.fr.json");
const blogsFr = JSON.parse(fs.readFileSync(frDataPath, "utf-8"));

const fixes = {
  "compare-lab-grown-diamond-jewellery-online": {
    title: "Comment comparer la joaillerie en diamants de laboratoire en ligne",
    excerpt: "Apprenez à comparer la joaillerie en diamants de laboratoire en ligne en analysant le poids en carats, la pureté, le certificat, le métal et les dimensions."
  },
  "diamond-certification-vs-jewellery-certification": {
    title: "Certification du diamant versus certification du bijou",
    excerpt: "Comprenez la différence entre un rapport gemmologique pour diamant brut, un certificat de bijou fini et le certificat d'authenticité."
  },
  "diamond-details-product-page": {
    title: "Détails des diamants sur la fiche produit : liste complète",
    excerpt: "Découvrez quelles informations sur le diamant, le métal, la certification et les retours doivent figurer sur une fiche produit transparente."
  },
  "first-time-buyers-guide-lab-grown-diamond-jewellery": {
    title: "Guide de l'acheteur pour les bijoux en diamants de laboratoire",
    excerpt: "Vous achetez un diamant de laboratoire pour la première fois ? Apprenez à choisir la catégorie, le budget, les 4 C et le certificat."
  },
  "how-should-diamond-bracelet-fit": {
    title: "Comment un bracelet en diamant doit-il s'ajuster ?",
    excerpt: "Apprenez l'ajustement idéal pour un bracelet en diamant, repérez une taille trop étroite et choisissez l'aisance adaptée au modèle."
  },
  "how-should-diamond-ring-fit": {
    title: "Comment une bague en diamant doit-elle s'ajuster ? Guide complet",
    excerpt: "Apprenez comment une bague doit passer l'articulation du doigt et découvrez les signes d'un ajustement trop serré ou trop lâche."
  },
  "how-to-choose-lab-grown-diamond-bracelet": {
    title: "Comment choisir un bracelet en diamant de laboratoire",
    excerpt: "Choisissez un bracelet en diamant de laboratoire selon le style, l'ajustement au poignet, la répartition des carats et le fermoir."
  },
  "how-to-choose-lab-grown-diamond-necklace": {
    title: "Comment choisir un collier en diamant de laboratoire",
    excerpt: "Choisissez un collier en diamant de laboratoire selon le design, la longueur, la qualité des diamants, le fermoir et le métal."
  },
  "how-to-choose-lab-grown-diamond-pendant": {
    title: "Comment choisir un pendentif en diamant de laboratoire",
    excerpt: "Apprenez à choisir un pendentif en diamant de laboratoire selon la taille, le serti, la compatibilité de la chaîne et le certificat."
  },
  "how-to-choose-lab-grown-diamond-ring": {
    title: "Comment choisir une bague en diamant de laboratoire",
    excerpt: "Apprenez à choisir une bague en diamant de laboratoire selon l'usage, le serti, la taille visible des 4 C et la qualité de fabrication."
  },
  "how-to-read-lab-grown-diamond-certificate": {
    title: "Comment lire un certificat de diamant de laboratoire",
    excerpt: "Apprenez à lire un certificat IGI pour diamant de laboratoire, notamment le poids en carats, la couleur, la pureté et la taille."
  },
  "igi-certificate-for-lab-grown-diamond": {
    title: "Qu'est-ce qu'un certificat IGI pour un diamant de laboratoire ?",
    excerpt: "Découvrez le contenu d'un certificat IGI pour diamant de laboratoire, ce qu'il certifie et comment vérifier le numéro de rapport."
  },
  "lab-grown-diamond-vs-cubic-zirconia": {
    title: "Diamants de laboratoire versus zirconium : les différences",
    excerpt: "Comparez les diamants de laboratoire et le zirconium selon la matière, l'éclat, la dureté, la valeur et la durabilité dans le temps."
  },
  "lab-grown-diamond-vs-moissanite": {
    title: "Diamants de laboratoire versus moissanite : différences clés",
    excerpt: "Comparez les diamants de laboratoire et la moissanite selon la composition, la brillance, la couleur, la dureté et le prix."
  },
  "measure-wrist-for-bracelet": {
    title: "Comment mesurer votre poignet pour un bracelet",
    excerpt: "Mesurez précisément votre poignet pour un bracelet souple, une rivière de diamants ou un jonc à l'aide d'un ruban à mesurer."
  },
  "check-coloured-stone-natural-treated-lab-created": {
    title: "Une pierre est-elle naturelle, traitée ou de laboratoire ?",
    excerpt: "Apprenez à vérifier si une pierre de couleur est naturelle, traitée ou créée en laboratoire à l'aide des certificats gemmologiques."
  },
  "coloured-stone-information-disclosure": {
    title: "Pourquoi les informations sur les pierres de couleur doivent être transparentes",
    excerpt: "Découvrez pourquoi l'identité de la gemme, son origine naturelle ou de laboratoire et les traitements doivent être clairement divulgués."
  },
  "check-diamond-jewellery-loose-stones": {
    title: "Comment vérifier si un diamant est desserré",
    excerpt: "Apprenez à détecter les signes d'un diamant desserré (mouvements, bruits, griffes endommagées) avant que la pierre ne soit perdue."
  }
};

let count = 0;
blogsFr.forEach((blog) => {
  if (fixes[blog.slug]) {
    blog.title = fixes[blog.slug].title;
    blog.excerpt = fixes[blog.slug].excerpt;
    count++;
  }
});

fs.writeFileSync(frDataPath, JSON.stringify(blogsFr, null, 2), "utf-8");
console.log(`Successfully fixed all ${count} remaining cards to 100% pure French!`);
