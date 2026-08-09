const fs = require('fs');
const path = require('path');
const https = require('https');

function translateTextSingle(text) {
  return new Promise((resolve) => {
    if (!text || typeof text !== 'string' || !text.trim()) return resolve(text);
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=es&dt=t&q=${encodeURIComponent(text)}`;
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          let translatedText = parsed[0].map(item => item[0]).join('');
          translatedText = translatedText.replace(/después del parto/gi, "después de la entrega");
          translatedText = translatedText.replace(/tras el parto/gi, "después de la entrega");
          resolve(translatedText);
        } catch (e) {
          resolve(text);
        }
      });
    }).on('error', () => resolve(text));
  });
}

const blogDir = path.join(__dirname, '..', 'src', 'app', 'blog');
const dirs = fs.readdirSync(blogDir).filter(f => {
  return fs.statSync(path.join(blogDir, f)).isDirectory();
});

console.log(`Rebuilding metadataEn, metadataEs & Hero Headers across ${dirs.length} blog directories...`);

async function run() {
  let updatedCount = 0;

  for (let i = 0; i < dirs.length; i++) {
    const slug = dirs[i];
    const pagePath = path.join(blogDir, slug, 'page.tsx');
    if (!fs.existsSync(pagePath)) continue;

    let code = fs.readFileSync(pagePath, 'utf8');

    // Extract English title and description
    let enTitle = "";
    let enDesc = "";

    const metaEnMatch = code.match(/export const metadataEn:\s*Metadata\s*=\s*(\{[\s\S]*?\n\};)/);
    const metaGenMatch = code.match(/export const metadata:\s*Metadata\s*=\s*(\{[\s\S]*?\n\};)/);

    let foundMetaStr = "";
    if (metaEnMatch) {
      foundMetaStr = metaEnMatch[1];
    } else if (metaGenMatch) {
      foundMetaStr = metaGenMatch[1];
    }

    if (foundMetaStr) {
      try {
        const obj = eval(`(${foundMetaStr})`);
        if (obj.title) enTitle = obj.title;
        if (obj.description) enDesc = obj.description;
      } catch (e) {}
    }

    // Fallback: try matching from schema or h1 if metadata not found
    if (!enTitle) {
      const h1Match = code.match(/<h1[^>]*>\s*([^<\{\n]+)\s*<\/h1>/);
      if (h1Match) enTitle = h1Match[1].trim();
    }

    if (!enTitle) enTitle = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    if (!enDesc) enDesc = enTitle;

    // Translate to Spanish
    const esTitle = await translateTextSingle(enTitle);
    const esDesc = await translateTextSingle(enDesc);

    const metaEnCode = `export const metadataEn: Metadata = {\n  title: ${JSON.stringify(enTitle)},\n  description: ${JSON.stringify(enDesc)},\n  alternates: {\n    canonical: "https://www.aureliaroyale.com/blog/${slug}/",\n  },\n};`;
    const metaEsCode = `export const metadataEs: Metadata = {\n  title: ${JSON.stringify(esTitle)},\n  description: ${JSON.stringify(esDesc)},\n  alternates: {\n    canonical: "https://www.aureliaroyale.com/es/blog/${slug}/",\n  },\n};`;
    const genMetaCode = `export async function generateMetadata({ searchParams }: { searchParams: Promise<{ locale?: string }> }): Promise<Metadata> {\n  const resolvedSearchParams = await searchParams;\n  const locale = resolvedSearchParams.locale ?? "en";\n  return locale === "es" ? metadataEs : metadataEn;\n}`;

    const newMetadataSection = `// 1. SEO Metadata\n${metaEnCode}\n\n${metaEsCode}\n\n${genMetaCode}\n`;

    // Replace existing metadata section (from "// 1. SEO" or "export const metadata" down to before schema)
    // Replace any export const metadataEn / metadataEs / metadata / generateMetadata
    code = code.replace(/(\/\/ 1\. SEO[\s\S]*?)?(export const metadataEn[\s\S]*?generateMetadata[^\}]*?\})\n*/, '');
    code = code.replace(/(export const metadata:\s*Metadata\s*=\s*\{[\s\S]*?\n\};)\n*/, '');
    code = code.replace(/(export const metadataEs:\s*Metadata\s*=\s*\{[\s\S]*?\n\};)\n*/, '');
    code = code.replace(/(export async function generateMetadata[\s\S]*?\})\n*/, '');

    // Insert newMetadataSection right after imports
    const importEndIndex = code.indexOf('import ', code.lastIndexOf('import '));
    const firstLineAfterImports = code.indexOf('\n', importEndIndex) + 1;

    code = code.slice(0, firstLineAfterImports) + '\n' + newMetadataSection + '\n' + code.slice(firstLineAfterImports);

    // Update Hero Header H1 to cleanest JSX
    const h1Regex = /<h1\s+className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">\s*[\s\S]*?\s*<\/h1>/;
    const cleanH1 = `<h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">\n            {locale === "es" ? metadataEs.title : metadataEn.title}\n          </h1>`;

    if (h1Regex.test(code)) {
      code = code.replace(h1Regex, cleanH1);
    }

    fs.writeFileSync(pagePath, code, 'utf8');
    updatedCount++;
    if ((i + 1) % 10 === 0 || i === dirs.length - 1) {
      console.log(`[${i + 1}/${dirs.length}] Rebuilt metadata and hero header for ${slug}`);
    }
  }

  console.log(`SUCCESS! Rebuilt metadata and Hero Headers across ${updatedCount} blog pages.`);
}

run();
