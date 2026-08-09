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

console.log(`Auditing and repairing metadataEs & Hero Headers across ${dirs.length} blog directories...`);

async function fixAll() {
  let count = 0;
  for (const slug of dirs) {
    const pagePath = path.join(blogDir, slug, 'page.tsx');
    if (!fs.existsSync(pagePath)) continue;

    let code = fs.readFileSync(pagePath, 'utf8');
    let updated = false;

    // 1. Ensure metadataEs exists
    if (!code.includes('metadataEs')) {
      const metaMatch = code.match(/export const (metadataEn|metadata):\s*Metadata\s*=\s*(\{[\s\S]*?\n\};)/);
      if (metaMatch) {
        const varName = metaMatch[1];
        const metaObjStr = metaMatch[2];
        let metaObj = {};
        try { metaObj = eval(`(${metaObjStr})`); } catch (e) {}
        
        const titleEs = metaObj.title ? await translateTextSingle(metaObj.title) : "";
        const descEs = metaObj.description ? await translateTextSingle(metaObj.description) : "";
        const canEs = metaObj.alternates?.canonical ? metaObj.alternates.canonical.replace('/blog/', '/es/blog/') : "";

        const metaEsObj = {
          title: titleEs,
          description: descEs,
          ...(canEs ? { alternates: { canonical: canEs } } : {})
        };

        const replacement = varName === 'metadata'
          ? `export const metadataEn: Metadata = ${metaObjStr}\n\nexport const metadataEs: Metadata = ${JSON.stringify(metaEsObj, null, 2)};`
          : `${metaMatch[0]}\n\nexport const metadataEs: Metadata = ${JSON.stringify(metaEsObj, null, 2)};`;

        code = code.replace(metaMatch[0], replacement);
        updated = true;
      }
    }

    // 2. Ensure generateMetadata exists and static metadata export is removed if generateMetadata is present
    if (!code.includes('export async function generateMetadata')) {
      const genMetaFunc = `\nexport async function generateMetadata({ searchParams }: { searchParams: Promise<{ locale?: string }> }): Promise<Metadata> {\n  const resolvedSearchParams = await searchParams;\n  const locale = resolvedSearchParams.locale ?? "en";\n  return locale === "es" && typeof metadataEs !== "undefined" ? metadataEs : (typeof metadataEn !== "undefined" ? metadataEn : metadataEn);\n}\n`;
      code = code.replace(/export const metadataEs: Metadata = [\s\S]*?;\n/, `$&\n${genMetaFunc}`);
      updated = true;
    }

    // Remove any leftover "export const metadata: Metadata = metadataEn;" to avoid Next.js export collision
    if (code.includes('export const metadata: Metadata = metadataEn;') || code.includes('export const metadata = metadataEn;')) {
      code = code.replace(/export const metadata:?\s*Metadata?\s*=\s*metadataEn;\n?/g, '');
      updated = true;
    }

    // 3. Fix h1 Hero Header safely using typeof checks
    const h1Regex = /<h1\s+className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">\s*[\s\S]*?\s*<\/h1>/;
    const safeH1 = `<h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">\n            {locale === "es" ? (typeof metadataEs !== "undefined" && typeof metadataEs.title === "string" ? metadataEs.title : "") : (typeof metadataEn !== "undefined" && typeof metadataEn.title === "string" ? metadataEn.title : "")}\n          </h1>`;

    if (h1Regex.test(code)) {
      code = code.replace(h1Regex, safeH1);
      updated = true;
    }

    if (updated) {
      fs.writeFileSync(pagePath, code, 'utf8');
      count++;
    }
  }

  console.log(`Audit complete! Updated ${count} blog page.tsx files.`);
}

fixAll();
