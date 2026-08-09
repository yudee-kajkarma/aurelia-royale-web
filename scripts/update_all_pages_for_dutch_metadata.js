const fs = require("fs");
const path = require("path");

const blogAppDir = path.join(__dirname, "../src/app/blog");
const blogsNlDataPath = path.join(__dirname, "../src/data/blogs.data.nl.json");

async function main() {
  const blogsNl = fs.existsSync(blogsNlDataPath) ? JSON.parse(fs.readFileSync(blogsNlDataPath, "utf-8")) : [];
  const titleMap = new Map();
  blogsNl.forEach(b => titleMap.set(b.slug, b.title));

  const subdirs = fs.readdirSync(blogAppDir);
  let updatedCount = 0;

  for (const subdir of subdirs) {
    const pagePath = path.join(blogAppDir, subdir, "page.tsx");
    if (fs.existsSync(pagePath)) {
      let content = fs.readFileSync(pagePath, "utf-8");

      if (!content.includes("metadataNl")) {
        const dutchTitle = titleMap.get(subdir) || subdir;
        const metadataNlCode = `export const metadataNl: Metadata = {
  title: "${dutchTitle.replace(/"/g, '\\"')}",
  description: "${dutchTitle.replace(/"/g, '\\"')} - Aurelia Royale",
  alternates: {
    canonical: "https://www.aureliaroyale.com/nl/blog/${subdir}/",
  },
};\n\n`;

        // Insert metadataNl after metadataFr
        if (content.includes("export const metadataFr")) {
          const frIndex = content.indexOf("};", content.indexOf("export const metadataFr"));
          if (frIndex !== -1) {
            content = content.slice(0, frIndex + 2) + "\n\n" + metadataNlCode + content.slice(frIndex + 2);
          }
        }

        // Update generateMetadata logic
        if (content.includes('if (locale === "fr") return metadataFr;')) {
          content = content.replace(
            'if (locale === "fr") return metadataFr;',
            'if (locale === "nl") return metadataNl;\n  if (locale === "fr") return metadataFr;'
          );
        }

        fs.writeFileSync(pagePath, content, "utf-8");
        updatedCount++;
      }
    }
  }

  console.log(`Updated metadataNl across ${updatedCount} blog page components!`);
}

main();
