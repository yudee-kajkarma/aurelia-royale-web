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

function translateBatch(texts) {
  return new Promise((resolve) => {
    if (!texts || texts.length === 0) return resolve([]);
    
    const delimiter = "\n\n===DELIM===\n\n";
    const combined = texts.join(delimiter);

    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=es&dt=t&q=${encodeURIComponent(combined)}`;
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          let translatedText = parsed[0].map(item => item[0]).join('');
          translatedText = translatedText.replace(/después del parto/gi, "después de la entrega");
          translatedText = translatedText.replace(/tras el parto/gi, "después de la entrega");
          const split = translatedText.split(/\s*===DELIM===\s*/);
          resolve(split.length === texts.length ? split : texts);
        } catch (e) {
          resolve(texts);
        }
      });
    }).on('error', () => resolve(texts));
  });
}

const preservedKeys = new Set([
  'type', 'src', 'priority', 'theme', '@type', '@context', '@id', 'inLanguage', 'url', 'width', 'height',
  'paragraph', 'bullet-list', 'numbered-list', 'cta-group', 'table', 'faq', 'image', 'callout', 'cta-banner',
  'cream', 'pine', 'gold-border'
]);

function gatherStrings(obj, strList = []) {
  if (typeof obj === 'string') {
    if (obj.trim() && !preservedKeys.has(obj) && !obj.startsWith('/') && !obj.startsWith('http') && !obj.startsWith('#')) {
      strList.push(obj);
    }
  } else if (Array.isArray(obj)) {
    for (const item of obj) gatherStrings(item, strList);
  } else if (obj && typeof obj === 'object') {
    for (const [k, v] of Object.entries(obj)) {
      if (!preservedKeys.has(k)) {
        gatherStrings(v, strList);
      }
    }
  }
  return strList;
}

function applyTranslations(obj, map) {
  if (typeof obj === 'string') {
    if (preservedKeys.has(obj)) return obj;
    if (map.has(obj)) return map.get(obj);
    return obj;
  } else if (Array.isArray(obj)) {
    return obj.map(item => applyTranslations(item, map));
  } else if (obj && typeof obj === 'object') {
    const res = {};
    for (const [k, v] of Object.entries(obj)) {
      if (preservedKeys.has(k)) {
        res[k] = v;
      } else if (k === 'href') {
        if (typeof v === 'string' && v.startsWith('/blog/')) {
          res[k] = `/es${v}`;
        } else {
          res[k] = v;
        }
      } else {
        res[k] = applyTranslations(v, map);
      }
    }
    return res;
  }
  return obj;
}

async function processBlog(slug) {
  const pagePath = path.join(__dirname, '..', 'src', 'app', 'blog', slug, 'page.tsx');
  if (!fs.existsSync(pagePath)) {
    console.error(`File not found: ${pagePath}`);
    return;
  }

  let code = fs.readFileSync(pagePath, 'utf8');

  // Extract articleSections or articleSectionsEn
  const sectionsMatch = code.match(/const\s+(articleSections|articleSectionsEn):\s*ArticleSection\[\]\s*=\s*(\[\s*[\s\S]*?\n\];)/);
  if (!sectionsMatch) {
    console.error(`Could not match sections in ${slug}`);
    return;
  }

  const origSectionsStr = sectionsMatch[2];
  let parsedSections;
  try {
    parsedSections = eval(origSectionsStr);
  } catch (e) {
    console.error(`Error parsing sections string in ${slug}: ${e.message}`);
    return;
  }

  console.log(`Gathering text strings for ${slug}...`);
  const stringsToTranslate = Array.from(new Set(gatherStrings(parsedSections)));

  console.log(`Translating ${stringsToTranslate.length} unique strings in batches...`);
  const translationMap = new Map();

  const chunkSize = 15;
  for (let i = 0; i < stringsToTranslate.length; i += chunkSize) {
    const chunk = stringsToTranslate.slice(i, i + chunkSize);
    const translatedChunk = await translateBatch(chunk);
    for (let j = 0; j < chunk.length; j++) {
      translationMap.set(chunk[j], translatedChunk[j] || chunk[j]);
    }
  }

  const translatedSections = applyTranslations(parsedSections, translationMap);

  // Save JSON in src/data/blogs/es/
  const jsonDir = path.join(__dirname, '..', 'src', 'data', 'blogs', 'es');
  if (!fs.existsSync(jsonDir)) fs.mkdirSync(jsonDir, { recursive: true });
  fs.writeFileSync(path.join(jsonDir, `${slug}.json`), JSON.stringify(translatedSections, null, 2), 'utf8');

  let newCode = code;

  // 1. Ensure import getBlogDataEs
  if (!newCode.includes('import { getBlogDataEs }')) {
    newCode = `import { getBlogDataEs } from "@/utils/getBlogDataEs";\n` + newCode;
  }

  // 2. Parse existing Metadata
  let metaTitleEn = "";
  let metaDescEn = "";
  const metaMatch = newCode.match(/export const (metadata|metadataEn):\s*Metadata\s*=\s*(\{[\s\S]*?\n\};)/);

  if (metaMatch) {
    try {
      const metaObj = eval(`(${metaMatch[2]})`);
      if (metaObj.title) metaTitleEn = metaObj.title;
      if (metaObj.description) metaDescEn = metaObj.description;
    } catch (e) {}
  }

  if (!metaTitleEn) {
    metaTitleEn = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  }
  if (!metaDescEn) {
    metaDescEn = metaTitleEn;
  }

  const metaTitleEs = await translateTextSingle(metaTitleEn);
  const metaDescEs = await translateTextSingle(metaDescEn);

  const metaSectionCode = `export const metadataEn: Metadata = {\n  title: ${JSON.stringify(metaTitleEn)},\n  description: ${JSON.stringify(metaDescEn)},\n  alternates: {\n    canonical: "https://www.aureliaroyale.com/blog/${slug}/",\n  },\n};\n\nexport const metadataEs: Metadata = {\n  title: ${JSON.stringify(metaTitleEs)},\n  description: ${JSON.stringify(metaDescEs)},\n  alternates: {\n    canonical: "https://www.aureliaroyale.com/es/blog/${slug}/",\n  },\n};\n\nexport async function generateMetadata({ searchParams }: { searchParams: Promise<{ locale?: string }> }): Promise<Metadata> {\n  const resolvedSearchParams = await searchParams;\n  const locale = resolvedSearchParams.locale ?? "en";\n  return locale === "es" ? metadataEs : metadataEn;\n};`;

  if (metaMatch) {
    newCode = newCode.replace(metaMatch[0], metaSectionCode);
  }

  // Ensure schemaMarkupEs defined if schemaMarkupEn exists
  if (!newCode.includes('const schemaMarkupEs') && newCode.includes('const schemaMarkupEn =')) {
    newCode = newCode.replace('const schemaMarkupEn =', 'const schemaMarkupEs = schemaMarkupEn;\nconst schemaMarkupEn =');
  }

  // Hero Header category, title, date
  const categoryMatch = newCode.match(/<span\s+className="font-jost[^"]*">\s*([^<]+)\s*<\/span>/);
  const dateMatch = newCode.match(/<p\s+className="font-jost[^"]*">\s*([^<]+)\s*<\/p>/);

  if (categoryMatch && !categoryMatch[1].includes('{locale === "es"')) {
    const catEn = categoryMatch[1].trim();
    const catEs = await translateTextSingle(catEn);
    newCode = newCode.replace(categoryMatch[0], categoryMatch[0].replace(catEn, `{locale === "es" ? "${catEs}" : "${catEn}"}`));
  }

  if (dateMatch && !dateMatch[1].includes('{locale === "es"')) {
    const dateEn = dateMatch[1].trim();
    const dateEs = await translateTextSingle(dateEn);
    newCode = newCode.replace(dateMatch[0], dateMatch[0].replace(dateEn, `{locale === "es" ? "${dateEs}" : "${dateEn}"}`));
  }

  // Replace h1 with clean metadataEs.title : metadataEn.title
  const h1Regex = /<h1\s+className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">\s*[\s\S]*?\s*<\/h1>/;
  const cleanH1 = `<h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">\n            {locale === "es" ? (typeof metadataEs.title === "string" ? metadataEs.title : "") : (typeof metadataEn.title === "string" ? metadataEn.title : "")}\n          </h1>`;
  if (h1Regex.test(newCode)) {
    newCode = newCode.replace(h1Regex, cleanH1);
  }

  // Update component body
  const compRegex = /export default\s+(async\s+)?function\s+(\w+)\s*\([^\)]*\)\s*\{([\s\S]*?)(return\s*\()/;
  const compMatch = newCode.match(compRegex);
  if (compMatch) {
    const funcName = compMatch[2];
    const hasSecEn = newCode.includes('articleSectionsEn');
    const secVar = hasSecEn ? 'articleSectionsEn' : 'articleSections';
    const hasSchEn = newCode.includes('schemaMarkupEn');
    const schVar = hasSchEn ? 'schemaMarkupEn' : 'schemaMarkup';
    const hasSchEs = newCode.includes('schemaMarkupEs');
    const schEsVar = hasSchEs ? 'schemaMarkupEs' : schVar;
    const newBody = `\n  const resolvedSearchParams = await searchParams;\n  const locale = resolvedSearchParams.locale ?? "en";\n  const esData = locale === "es" ? getBlogDataEs("${slug}") : null;\n  const sections = esData?.sections && esData.sections.length > 0 ? esData.sections : ${secVar};\n  const schema = locale === "es" ? ${schEsVar} : ${schVar};\n\n  `;
    newCode = newCode.replace(compMatch[0], `export default async function ${funcName}({ searchParams }: { searchParams: Promise<{ locale?: string }> }) {${newBody}${compMatch[4]}`);
  }

  // DynamicArticle sections={sections}
  newCode = newCode.replace(/<DynamicArticle\s+sections=\{[^\}]+\}\s*\/>/, '<DynamicArticle sections={sections} />');

  fs.writeFileSync(pagePath, newCode, 'utf8');
  console.log(`SUCCESS! Updated ${pagePath}`);
}

const slug = process.argv[2];
if (slug) {
  processBlog(slug);
}

module.exports = { processBlog };
