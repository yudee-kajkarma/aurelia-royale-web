const fs = require("fs");
const path = require("path");

const blogDir = path.join(__dirname, "../src/app/blog");
const folders = fs.readdirSync(blogDir);

let count = 0;

folders.forEach((folder) => {
  const pagePath = path.join(blogDir, folder, "page.tsx");
  if (!fs.existsSync(pagePath)) return;

  let content = fs.readFileSync(pagePath, "utf-8");

  // Replace hardcoded English date line
  content = content.replace(
    /Journal\s*•\s*Published\s+July\s+1[56],\s*2026/g,
    `{locale === "fr" ? "Journal • Publié le 16 juillet 2026" : locale === "es" ? "Diario • Publicado el 16 de julio de 2026" : "Journal • Published July 16, 2026"}`
  );
  content = content.replace(
    /Educational Guide\s*•\s*Published\s+July\s+1[56],\s*2026/g,
    `{locale === "fr" ? "Guide Éducatif • Publié le 16 juillet 2026" : locale === "es" ? "Guía Educativa • Publicado el 16 de julio de 2026" : "Educational Guide • Published July 16, 2026"}`
  );
  content = content.replace(
    /Registry Guide\s*•\s*Published\s+July\s+1[56],\s*2026/g,
    `{locale === "fr" ? "Guide de Registre • Publié le 16 juillet 2026" : locale === "es" ? "Guía de Registro • Publicado el 16 de julio de 2026" : "Registry Guide • Published July 16, 2026"}`
  );

  // Replace hardcoded category badges
  content = content.replace(
    />\s*Lab-Grown Diamond Education\s*</g,
    `>{locale === "fr" ? "Éducation sur les diamants de laboratoire" : locale === "es" ? "Educación sobre diamantes cultivados en laboratorio" : "Lab-Grown Diamond Education"}<`
  );
  content = content.replace(
    />\s*Coloured Stones and Diamonds\s*</g,
    `>{locale === "fr" ? "Pierres de couleur et diamants" : locale === "es" ? "Piedras de colores y diamantes" : "Coloured Stones and Diamonds"}<`
  );

  fs.writeFileSync(pagePath, content, "utf-8");
  count++;
});

console.log(`Updated headers across ${count} blog page.tsx files!`);
