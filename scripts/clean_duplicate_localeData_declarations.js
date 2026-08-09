const fs = require("fs");
const path = require("path");

const blogDir = path.join(__dirname, "../src/app/blog");
const subdirs = fs.readdirSync(blogDir);

let fixed = 0;

subdirs.forEach((subdir) => {
  const pagePath = path.join(blogDir, subdir, "page.tsx");
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, "utf-8");

    // Clean any duplicates inside generateMetadata
    const genMetaIdx = content.indexOf("export async function generateMetadata");
    const pageFnIdx = content.indexOf("export default async function Page");

    if (genMetaIdx !== -1 && pageFnIdx !== -1 && genMetaIdx < pageFnIdx) {
      let metaPart = content.slice(genMetaIdx, pageFnIdx);
      let pagePart = content.slice(pageFnIdx);
      let beforeMeta = content.slice(0, genMetaIdx);

      // Check if metaPart has const localeData or const sections
      let metaModified = false;
      if (metaPart.includes("const localeData =")) {
        // Remove lines matching const localeData or const sections from generateMetadata
        const lines = metaPart.split("\n");
        const cleanLines = lines.filter(line => !line.includes("const localeData =") && !line.includes("const sections ="));
        metaPart = cleanLines.join("\n");
        metaModified = true;
      }

      // Check if pagePart has duplicate const localeData
      let pageModified = false;
      const pageLines = pagePart.split("\n");
      let countLocaleData = 0;
      const cleanPageLines = pageLines.filter(line => {
        if (line.includes("const localeData =")) {
          countLocaleData++;
          return countLocaleData === 1;
        }
        return true;
      });

      let countSections = 0;
      const cleanPageLines2 = cleanPageLines.filter(line => {
        if (line.includes("const sections =")) {
          countSections++;
          return countSections === 1;
        }
        return true;
      });

      if (metaModified || countLocaleData > 1 || countSections > 1) {
        content = beforeMeta + metaPart + cleanPageLines2.join("\n");
        fs.writeFileSync(pagePath, content, "utf-8");
        fixed++;
      }
    }
  }
});

console.log(`Successfully cleaned duplicate declarations in ${fixed} blog page files!`);
