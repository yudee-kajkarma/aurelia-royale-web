const fs = require("fs");
const path = require("path");

const blogAppDir = path.join(__dirname, "../src/app/blog");
const nlDataDir = path.join(__dirname, "../src/data/blogs/nl");
const blogsNlDataPath = path.join(__dirname, "../src/data/blogs.data.nl.json");

// 1. Update metadataNl for how-often-clean-diamond-jewellery
const cleanJewelleryPagePath = path.join(blogAppDir, "how-often-clean-diamond-jewellery/page.tsx");
if (fs.existsSync(cleanJewelleryPagePath)) {
  let content = fs.readFileSync(cleanJewelleryPagePath, "utf-8");
  content = content.replace(
    'title: "how-often-clean-diamond-jewellery",',
    'title: "Hoe vaak diamanten sieraden reinigen?",'
  ).replace(
    'description: "how-often-clean-diamond-jewellery - Aurelia Royale",',
    'description: "Ontdek hoe vaak u diamanten sieraden moet reinigen op basis van dragen, zettingen en materialen.",'
  );
  fs.writeFileSync(cleanJewelleryPagePath, content, "utf-8");
}

// 2. Fix Hero Headers in all blog page.tsx files for locale === "nl"
const subdirs = fs.readdirSync(blogAppDir);
let updatedHeadersCount = 0;

subdirs.forEach(subdir => {
  const pagePath = path.join(blogAppDir, subdir, "page.tsx");
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, "utf-8");

    // Update Hero header tag
    if (content.includes('{locale === "fr" ?') && !content.includes('{locale === "nl" ?')) {
      content = content.replace(
        '{locale === "fr" ?',
        '{locale === "nl" ? "Sieradenonderhoud en Verzorging" : locale === "fr" ?'
      );

      // Update h1 title resolution
      content = content.replace(
        'locale === "fr" ? (typeof metadataFr.title === "string" ? metadataFr.title : "")',
        'locale === "nl" ? (typeof metadataNl.title === "string" ? metadataNl.title : "") : locale === "fr" ? (typeof metadataFr.title === "string" ? metadataFr.title : "")'
      );

      // Update date / publication line
      content = content.replace(
        'locale === "fr" ? "Journal • Publié le 16 juillet 2026"',
        'locale === "nl" ? "Journaal • Gepubliceerd op 16 juli 2026" : locale === "fr" ? "Journal • Publié le 16 juillet 2026"'
      );

      fs.writeFileSync(pagePath, content, "utf-8");
      updatedHeadersCount++;
    }
  }
});

console.log(`Updated Dutch Hero headers across ${updatedHeadersCount} blog pages!`);

// 3. Perfect terminology across all Dutch JSON files in src/data/blogs/nl/*.json
const nlFiles = fs.readdirSync(nlDataDir).filter(f => f.endsWith(".json"));
let fixedJsonCount = 0;

nlFiles.forEach(file => {
  const jsonPath = path.join(nlDataDir, file);
  let raw = fs.readFileSync(jsonPath, "utf-8");

  // Apply Dutch terminology corrections
  raw = raw.replace(/\bstaatscontroles\b/gi, "professionele inspecties")
           .replace(/\bstaatscontrole\b/gi, "professionele controle")
           .replace(/\bVóór slijtage\b/g, "Vóór het dragen")
           .replace(/\bSlijtagepatroon\b/g, "Draagpatroon")
           .replace(/\bna slijtage\b/gi, "na het dragen")
           .replace(/\bna elke slijtage\b/gi, "na elke keer dragen")
           .replace(/\bbelangrijke slijtage\b/gi, "belangrijke gelegenheden")
           .replace(/\bfilm verzamelen\b/gi, "een laagje vuil opbouwen")
           .replace(/\bverzamelen van film\b/gi, "het opbouwen van een laagje vuil")
           .replace(/\bgedreven door\b/gi, "afhankelijk van")
           .replace(/\bfacetscintillatie\b/gi, "de schittering van de facetten")
           .replace(/\bklauwen\b/gi, "griffen")
           .replace(/\btanden\b/gi, "zetpootjes")
           .replace(/\bAurelia Royale-sieraden\b/g, "de sieraden van Aurelia Royale")
           // Fix missing spaces around links
           .replace(/\bophoe\b/gi, "op hoe")
           .replace(/\bopAurelia\b/gi, "op Aurelia")
           .replace(/\bofNeem\b/gi, "of neem")
           .replace(/\bzie:Neem\b/gi, "zie: Neem");

  fs.writeFileSync(jsonPath, raw, "utf-8");
  fixedJsonCount++;
});

console.log(`Perfected Dutch terminology across ${fixedJsonCount} blog JSON files!`);
