const fs = require("fs");
const path = require("path");

const blogAppDir = path.join(__dirname, "../src/app/blog");
const itCardsPath = path.join(__dirname, "../src/data/blogs.data.it.json");

if (!fs.existsSync(itCardsPath)) {
  console.error("it.json data index not found!");
  process.exit(1);
}

const blogsIndex = JSON.parse(fs.readFileSync(itCardsPath, "utf-8"));
const blogsMap = new Map();
blogsIndex.forEach(blog => {
  blogsMap.set(blog.slug, blog);
});

// Category helper based on slug matching
function getCategoryForSlug(slug) {
  const s = slug.toLowerCase();
  if (s.includes("cut") || s.includes("clarity") || s.includes("colour") || s.includes("carat") || s.includes("4cs")) {
    return "Guida ai Diamanti";
  }
  if (s.includes("fit") || s.includes("size") || s.includes("wrist") || s.includes("measure")) {
    return "Misura e Vestibilità";
  }
  if (s.includes("certificate") || s.includes("igi") || s.includes("verify") || s.includes("disclosure")) {
    return "Certificazione e Qualità";
  }
  return "Guide all'Acquisto";
}

async function main() {
  console.log("Starting update of blog dynamic page.tsx files for Italian...");
  
  const folders = fs.readdirSync(blogAppDir).filter(f => {
    return fs.statSync(path.join(blogAppDir, f)).isDirectory();
  });
  
  let updatedCount = 0;
  
  for (const folder of folders) {
    const pagePath = path.join(blogAppDir, folder, "page.tsx");
    if (!fs.existsSync(pagePath)) continue;
    
    let content = fs.readFileSync(pagePath, "utf-8");
    
    // Check if metadataIt is already defined
    if (content.includes("metadataIt")) {
      // Already updated
      continue;
    }
    
    const blogData = blogsMap.get(folder);
    if (!blogData) {
      console.warn(`No Italian metadata found for slug: ${folder}`);
      continue;
    }
    
    const title = blogData.title.replace(/"/g, '\\"');
    const excerpt = blogData.excerpt.replace(/"/g, '\\"');
    const date = blogData.date;
    const category = getCategoryForSlug(folder);
    
    // 1. Inject metadataIt after metadataDe
    const metadataDeIndex = content.indexOf("export const metadataDe");
    if (metadataDeIndex === -1) {
      console.warn(`Could not find metadataDe in ${folder}/page.tsx`);
      continue;
    }
    
    // Find the end of metadataDe block
    const nextExportIndex = content.indexOf("export", metadataDeIndex + 20);
    if (nextExportIndex === -1) {
      console.warn(`Could not find next export after metadataDe in ${folder}/page.tsx`);
      continue;
    }
    
    const metadataItBlock = `
export const metadataIt: Metadata = {
  title: "${title}",
  description: "${excerpt} - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/it/blog/${folder}/",
  },
};
`;
    
    content = content.slice(0, nextExportIndex) + metadataItBlock + "\n" + content.slice(nextExportIndex);
    
    // 2. Update generateMetadata function to handle "it"
    content = content.replace(
      /const locale = resolvedSearchParams\.locale \?\? "en";/g,
      `const locale = resolvedSearchParams.locale ?? "en";\n  if (locale === "it") return metadataIt;`
    );
    
    // 3. Update Category span
    content = content.replace(
      /text-gold">\s*\{locale === "de" \?/g,
      `text-gold">\n            {locale === "it" ? "${category}" : locale === "de" ?`
    );
    
    // 4. Update Title h1
    content = content.replace(
      /text-foreground uppercase tracking-wide">\s*\{locale === "de" \?/g,
      `text-foreground uppercase tracking-wide">\n            {locale === "it" ? (typeof metadataIt.title === "string" ? metadataIt.title : "") : locale === "de" ?`
    );
    
    // 5. Update Date p tag
    content = content.replace(
      /text-\[#5a5a5a\]">\s*\{/g,
      `text-[#5a5a5a]">\n            {locale === "it" ? "Giornale • Pubblicato il ${date}" : `
    );
    
    fs.writeFileSync(pagePath, content, "utf-8");
    console.log(`Updated: ${folder}/page.tsx`);
    updatedCount++;
  }
  
  console.log(`\nSuccessfully updated ${updatedCount} blog page.tsx files to support Italian metadata and headers!`);
}

main().catch(console.error);
