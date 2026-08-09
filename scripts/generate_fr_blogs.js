const fs = require("fs");
const path = require("path");

const esDir = path.join(__dirname, "../src/data/blogs/es");
const frDir = path.join(__dirname, "../src/data/blogs/fr");
const blogsDataEsPath = path.join(__dirname, "../src/data/blogs.data.es.json");
const blogsDataFrPath = path.join(__dirname, "../src/data/blogs.data.fr.json");

if (!fs.existsSync(frDir)) {
  fs.mkdirSync(frDir, { recursive: true });
}

// Simple English/Spanish -> French key terms mapping dictionary for common blog headings & UI text
function translateToFrenchText(text) {
  if (typeof text !== "string") return text;

  let fr = text;

  // Replacements for common phrases
  const phraseMap = [
    [/Diamantes cultivados en laboratorio versus diamantes naturales/g, "Diamants de laboratoire versus diamants naturels"],
    [/Diamantes cultivados en laboratorio/g, "Diamants de laboratoire"],
    [/diamantes cultivados en laboratorio/g, "diamants de laboratoire"],
    [/diamante cultivado en laboratorio/g, "diamant de laboratoire"],
    [/Diamante cultivado en laboratorio/g, "Diamant de laboratoire"],
    [/diamantes naturales/g, "diamants naturels"],
    [/diamante natural/g, "diamant naturel"],
    [/Educación sobre diamantes/g, "Éducation sur les diamants"],
    [/Guía de compra/g, "Guide d'achat"],
    [/Guías de compra/g, "Guides d'achat"],
    [/Certificación y calidad/g, "Certification et qualité"],
    [/Tamaño y ajuste/g, "Taille et ajustement"],
    [/Comparación completa/g, "Comparaison complète"],
    [/Publicado el/g, "Publié le"],
    [/Introducción/g, "Introduction"],
    [/Conclusión/g, "Conclusion"],
    [/¿Qué son/g, "Que sont"],
    [/¿Cómo/g, "Comment"],
    [/¿Por qué/g, "Pourquoi"],
    [/¿Es/g, "Est-ce"],
    [/¿Son/g, "Sont-ils"],
    [/¿Cuánto/g, "Combien"],
    [/Resumen/g, "Résumé"],
    [/Ventajas/g, "Avantages"],
    [/Desventajas/g, "Inconvénients"],
    [/Preguntas frecuentes/g, "Foire aux questions"],
    [/Características clave/g, "Caractéristiques clés"],
    [/Factores clave/g, "Facteurs clés"],
    [/Ventajas principales/g, "Avantages principaux"],
    [/Consejos de cuidado/g, "Conseils d'entretien"],
    [/Limpieza y mantenimiento/g, "Nettoyage et entretien"],
    [/Almacenamiento/g, "Stockage"],
    [/Puntos principales/g, "Points principaux"]
  ];

  for (const [regex, replacement] of phraseMap) {
    fr = fr.replace(regex, replacement);
  }

  return fr;
}

function translateSection(section) {
  if (!section) return section;

  const newSection = { ...section };

  if (newSection.title) {
    newSection.title = translateToFrenchText(newSection.title);
  }

  if (newSection.heading) {
    newSection.heading = translateToFrenchText(newSection.heading);
  }

  if (newSection.paragraphs && Array.isArray(newSection.paragraphs)) {
    newSection.paragraphs = newSection.paragraphs.map(p => translateToFrenchText(p));
  }

  if (newSection.items && Array.isArray(newSection.items)) {
    newSection.items = newSection.items.map(item => translateToFrenchText(item));
  }

  if (newSection.list && Array.isArray(newSection.list)) {
    newSection.list = newSection.list.map(item => translateToFrenchText(item));
  }

  return newSection;
}

// 1. Process individual blog JSON files
const files = fs.readdirSync(esDir);
console.log(`Processing ${files.length} blog files for French...`);

files.forEach((file) => {
  if (!file.endsWith(".json")) return;

  const filePath = path.join(esDir, file);
  const rawData = fs.readFileSync(filePath, "utf-8");

  try {
    const data = JSON.parse(rawData);
    let frData;

    if (Array.isArray(data)) {
      frData = data.map(section => translateSection(section));
    } else if (data && Array.isArray(data.sections)) {
      frData = {
        ...data,
        sections: data.sections.map(section => translateSection(section))
      };
    } else {
      frData = data;
    }

    const frFilePath = path.join(frDir, file);
    fs.writeFileSync(frFilePath, JSON.stringify(frData, null, 2), "utf-8");
  } catch (err) {
    console.error(`Error processing ${file}:`, err);
  }
});

// 2. Process blogs.data.es.json -> blogs.data.fr.json
if (fs.existsSync(blogsDataEsPath)) {
  const rawEsData = fs.readFileSync(blogsDataEsPath, "utf-8");
  try {
    const esBlogs = JSON.parse(rawEsData);
    const frBlogs = esBlogs.map((blog) => ({
      ...blog,
      title: translateToFrenchText(blog.title),
      excerpt: translateToFrenchText(blog.excerpt),
      date: blog.date ? blog.date.replace(/de/g, "") : blog.date
    }));

    fs.writeFileSync(blogsDataFrPath, JSON.stringify(frBlogs, null, 2), "utf-8");
    console.log("Successfully generated src/data/blogs.data.fr.json!");
  } catch (err) {
    console.error("Error generating blogs.data.fr.json:", err);
  }
}

console.log("French blog translation script completed!");
