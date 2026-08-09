const fs = require("fs");
const path = require("path");

const blogDir = path.join(__dirname, "../src/app/blog");
const folders = fs.readdirSync(blogDir);

function translateTitleToFrench(title) {
  if (!title || typeof title !== "string") return title;

  let fr = title;
  const map = [
    [/4cs Of Lab Grown Diamonds/gi, "4Cs des diamants de laboratoire"],
    [/Lab Grown/gi, "Diamants de laboratoire"],
    [/Lab-Grown/gi, "Diamants de laboratoire"],
    [/Diamonds/gi, "Diamants"],
    [/Diamond/gi, "Diamant"],
    [/Jewellery/gi, "Joaillerie"],
    [/Jewelry/gi, "Joaillerie"],
    [/Earrings/gi, "Boucles d'oreilles"],
    [/Ring/gi, "Bague"],
    [/Rings/gi, "Bagues"],
    [/Necklace/gi, "Collier"],
    [/Necklaces/gi, "Colliers"],
    [/Bracelet/gi, "Bracelet"],
    [/Bracelets/gi, "Bracelets"],
    [/Pendant/gi, "Pendentif"],
    [/Pendants/gi, "Pendentifs"],
    [/Guide/gi, "Guide"],
    [/Vs/gi, "versus"]
  ];

  for (const [regex, replacement] of map) {
    fr = fr.replace(regex, replacement);
  }
  return fr;
}

let count = 0;

folders.forEach((folder) => {
  const pagePath = path.join(blogDir, folder, "page.tsx");
  if (!fs.existsSync(pagePath)) return;

  let content = fs.readFileSync(pagePath, "utf-8");

  // 1. Update imports
  if (!content.includes("getBlogDataByLocale")) {
    content = content.replace(
      /import\s+\{\s*getBlogDataEs\s*\}\s+from\s+["']@\/utils\/getBlogDataEs["'];?/,
      'import { getBlogDataByLocale } from "@/utils/getBlogData";'
    );
  }

  // 2. Add metadataFr if not present
  if (!content.includes("export const metadataFr")) {
    // Find metadataEs
    const esMatch = content.match(/export const metadataEs: Metadata = \{([\s\S]*?)\};/);
    if (esMatch) {
      const esTitleMatch = esMatch[1].match(/title:\s*["'](.*?)["']/);
      const esTitle = esTitleMatch ? esTitleMatch[1] : folder;
      const frTitle = translateTitleToFrench(esTitle);

      const metadataFrStr = `export const metadataFr: Metadata = {
  title: "${frTitle}",
  description: "${frTitle}",
  alternates: {
    canonical: "https://www.aureliaroyale.com/fr/blog/${folder}/",
  },
};`;

      content = content.replace(esMatch[0], `${esMatch[0]}\n\n${metadataFrStr}`);
    }
  }

  // 3. Update generateMetadata
  const genMetaRegex = /export async function generateMetadata[\s\S]*?\}\s*;/;
  const newGenMeta = `export async function generateMetadata({ searchParams }: { searchParams: Promise<{ locale?: string }> }): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const locale = resolvedSearchParams.locale ?? "en";
  if (locale === "fr") return metadataFr;
  if (locale === "es") return metadataEs;
  return metadataEn;
};`;
  content = content.replace(genMetaRegex, newGenMeta);

  // 4. Update data loading logic
  content = content.replace(
    /const esData = getBlogDataEs\(["'].*?["']\);/,
    `const localeData = getBlogDataByLocale("${folder}", locale);`
  );

  content = content.replace(
    /const sections = esData && esData\.length > 0 \? esData : articleSections;/,
    `const sections = localeData && localeData.length > 0 ? localeData : articleSections;`
  );

  // 5. Update h1 title rendering
  const oldH1 = /\{locale === "es"\s*\?\s*\(typeof metadataEs\.title === "string" \? metadataEs\.title : ""\)\s*:\s*\(typeof metadataEn\.title === "string" \? metadataEn\.title : ""\)\}/g;
  const newH1 = `{locale === "fr" ? (typeof metadataFr.title === "string" ? metadataFr.title : "") : locale === "es" ? (typeof metadataEs.title === "string" ? metadataEs.title : "") : (typeof metadataEn.title === "string" ? metadataEn.title : "")}`;
  content = content.replace(oldH1, newH1);

  fs.writeFileSync(pagePath, content, "utf-8");
  count++;
});

console.log(`Successfully updated ${count} blog page.tsx files for multi-language support!`);
