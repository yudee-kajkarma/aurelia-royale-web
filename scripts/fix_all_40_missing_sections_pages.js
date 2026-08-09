const fs = require("fs");
const path = require("path");

const blogDir = path.join(__dirname, "../src/app/blog");

const missingPages = [
  'buy-certified-lab-grown-diamond-jewellery-online',
  'buying-coloured-stone-diamond-jewellery',
  'buying-necklace-earring-set',
  'care-coloured-stones-diamonds',
  'certified-lab-grown-diamond-jewellery-meaning',
  'check-coloured-stone-natural-treated-lab-created',
  'check-diamond-information-is-complete',
  'check-diamond-jewellery-loose-stones',
  'choose-trustworthy-online-diamond-jeweller',
  'clean-lab-grown-diamond-jewellery',
  'coloured-centre-stones-vs-colourless-diamonds',
  'coloured-stone-information-disclosure',
  'coloured-stones-lab-grown-diamonds',
  'compare-diamond-bracelet-designs',
  'compare-diamond-earring-designs',
  'compare-diamond-necklace-designs',
  'compare-lab-grown-diamond-jewellery-online',
  'diamond-accents-jewellery-design',
  'diamond-accents-meaning',
  'diamond-jewellery-product-specifications-checklist',
  'diamond-laser-inscription',
  'first-time-buyers-guide-lab-grown-diamond-jewellery',
  'how-lab-grown-diamonds-are-graded',
  'how-often-clean-diamond-jewellery',
  'how-to-choose-lab-grown-diamond-jewellery-set',
  'how-to-compare-certified-lab-grown-diamonds',
  'keep-lab-grown-diamond-jewellery-sparkling',
  'perfume-skincare-diamond-jewellery',
  'prevent-jewellery-scratches',
  'professional-diamond-jewellery-inspection',
  'questions-coloured-stone-diamond-jewellery',
  'set-budget-lab-grown-diamond-jewellery',
  'store-diamond-jewellery',
  'swim-wearing-diamond-jewellery',
  'transparency-buying-diamond-jewellery',
  'wear-diamond-jewellery-in-shower',
  'what-determines-price-lab-grown-diamond-jewellery',
  'what-makes-lab-grown-diamond-jewellery-high-quality',
  'what-makes-lab-grown-diamonds-different',
  'what-to-check-before-buying-lab-grown-diamond-jewellery'
];

let fixed = 0;

missingPages.forEach((slug) => {
  const pagePath = path.join(blogDir, slug, "page.tsx");
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, "utf-8");

    // Match Page component line
    const fnSignature = "export default async function Page({ searchParams }: { searchParams: Promise<{ locale?: string }> }) {";
    if (content.includes(fnSignature)) {
      const parts = content.split(fnSignature);
      const before = parts[0];
      const after = parts[1];

      // Find where return ( starts inside Page()
      const returnIdx = after.indexOf("return (");
      if (returnIdx !== -1) {
        const bodyBeforeReturn = after.slice(0, returnIdx);
        const bodyAfterReturn = after.slice(returnIdx);

        const injectedCode = `\n  const localeData = getBlogDataByLocale("${slug}", locale);\n  const sections = localeData && localeData.length > 0 ? localeData : articleSections;\n`;

        const newPageBody = fnSignature + bodyBeforeReturn + injectedCode + bodyAfterReturn;
        fs.writeFileSync(pagePath, content, "utf-8");
        fixed++;
      }
    }
  }
});

console.log(`Successfully fixed sections definition in all ${fixed} blog pages!`);
