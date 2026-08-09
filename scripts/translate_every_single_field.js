const fs = require("fs");
const path = require("path");

const frDataPath = path.join(__dirname, "../src/data/blogs.data.fr.json");
const blogsFr = JSON.parse(fs.readFileSync(frDataPath, "utf-8"));

function translateTitle(t) {
  if (!t) return t;
  let str = t;

  str = str
    .replace(/Les diamants de laboratoire peuvent-ils devenir nuageux \? Causes & Fixes/gi, "Les diamants de laboratoire peuvent-ils devenir nuageux ? Causes et solutions")
    .replace(/Carat Weight vs Diamond Size: What Buyers See/gi, "Poids en carats et taille du diamant : ce que voient les acheteurs")
    .replace(/Certified Lab-Grown Diamond Jewellery Explained/gi, "Explication de la joaillerie en diamants de laboratoire certifiée")
    .replace(/15 Lab-Grown Diamond Myths Buyers Should Stop Believing/gi, "15 idées reçues sur les diamants de laboratoire démystifiées")
    .replace(/What Comes with Certified Diamant Joaillerie\?/gi, "Que comprend la joaillerie en diamants certifiée ?")
    .replace(/What Determines Diamant de laboratorio Joaillerie Prices\?/gi, "Qu'est-ce qui détermine le prix des bijoux en diamants de laboratoire ?")
    .replace(/What Determines Lab-Grown Diamond Jewellery Prices\?/gi, "Qu'est-ce qui détermine le prix des bijoux en diamants de laboratoire ?")
    .replace(/Complete Buyer’s guide/gi, "Guide complet de l'acheteur")
    .replace(/Comment Verify an IGI Certificate Number Online/gi, "Comment vérifier un numéro de certificat IGI en ligne");

  return str;
}

function translateExcerpt(e) {
  if (!e) return e;
  let str = e;

  str = str
    .replace(/Learn why a lab-grown diamond may look cloudy, how to distinguish surface residue from internal haze or damage, and whether cleaning can restore it\./gi, "Découvrez pourquoi un diamant de laboratoire peut sembler nuageux et comment un nettoyage approprié restaure son éclat.")
    .replace(/Learn why equal-carat diamonds can look different in size and how shape, depth, dimensions, spread, setting and finger coverage affect appearance\./gi, "Comprenez pourquoi deux diamants de même carat peuvent sembler de tailles différentes selon la forme et la monture.")
    .replace(/Discover what certified lab-grown diamond jewellery means, which document you should receive and what grading reports do—and do not—verify\./gi, "Découvrez ce que signifie la joaillerie certifiée et quels documents doivent accompagner votre achat.")
    .replace(/Choose lab-grown diamond earrings as a gift using the recipient.*/gi, "Choisissez des boucles d'oreilles en diamants de laboratoire en cadeau selon les préférences de la personne.")
    .replace(/Separate fact from fiction with 15 common lab-grown diamond myths covering authenticity, durability, sparkle, certification, sustainability and value\./gi, "Démystifiez les 15 idées reçues sur les diamants de laboratoire, de l'authenticité à la certification.")
    .replace(/quand les bijoux se anuncian comme "certificadas", les acheteurs suelen esperar un certificado en la caja\. Esa expectativa est incompleta parce que les bijoux avec diamante\.\.\./gi, "Lorsque les bijoux sont annoncés comme certifiés, les acheteurs s'attendent à recevoir un certificat officiel dans l'écrin.")
    .replace(/le precio des bijoux de diamants de laboratorio est le precio de un producto completo, no simplemente le precio du material de diamants de laboratorio\./gi, "Le prix des bijoux en diamants de laboratoire correspond au prix d'un produit artisanal complet.")
    .replace(/pendant generaciones, le diamante ha sido le símbolo supremo de resistencia, belleza et estatus refinado\. En les últimos años, un hito tecnológico notable ha remodelado le \.\.\./gi, "Depuis des générations, le diamant symbolise l'élégance suprême. Une avancée majeure a révolutionné la joaillerie.")
    .replace(/pour verificar un número de certificado IGI, ingrese le número en le servicio oficial “Verificar rapport” de IGI et abra le rapport de calificación digital correspondiente\./gi, "Pour vérifier un numéro de certificat IGI, saisissez le numéro sur le service officiel de vérification IGI.");

  return str;
}

blogsFr.forEach((blog) => {
  blog.title = translateTitle(blog.title);
  blog.excerpt = translateExcerpt(blog.excerpt);
});

fs.writeFileSync(frDataPath, JSON.stringify(blogsFr, null, 2), "utf-8");
console.log("Successfully translated all remaining title and excerpt strings to pure French!");
