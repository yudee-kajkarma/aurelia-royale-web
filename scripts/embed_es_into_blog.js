const fs = require('fs');
const path = require('path');
const https = require('https');

function translateText(text) {
  return new Promise((resolve) => {
    if (!text || typeof text !== 'string' || !text.trim() || text.trim().length < 2) {
      return resolve(text);
    }
    if (text.startsWith('/') || text.startsWith('http') || text.startsWith('#') || text.startsWith('@')) {
      return resolve(text);
    }

    const techKeys = new Set([
      'BlogPosting', 'WebPage', 'Organization', 'BreadcrumbList', 'ListItem', 'FAQPage',
      'Question', 'Answer', 'Type', 'gold-border', 'cream', 'pine',
      'application/ld+json', 'canonical', 'alternates', 'Home', 'Journal', 'Aurelia Royale',
      'cta-banner', 'callout', 'paragraph', 'bullet-list', 'numbered-list', 'table', 'faq', 'cta-group', 'image',
      'headers', 'rows', 'items', 'question', 'answer', 'title', 'subtitle', 'parts', 'text', 'bold', 'italic',
      'href', 'buttons', 'label', 'shopHref', 'contactHref', 'src', 'alt', 'priority', 'theme'
    ]);

    if (techKeys.has(text)) {
      return resolve(text);
    }

    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=es&dt=t&q=${encodeURIComponent(text)}`;
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          let translated = parsed[0].map(item => item[0]).join('');
          translated = translated.replace(/después del parto/g, "después de la entrega");
          translated = translated.replace(/tras el parto/g, "después de la entrega");
          resolve(translated);
        } catch (e) {
          resolve(text);
        }
      });
    }).on('error', () => resolve(text));
  });
}

async function translateObj(obj) {
  if (typeof obj === 'string') {
    return await translateText(obj);
  } else if (Array.isArray(obj)) {
    const arr = [];
    for (const item of obj) {
      arr.push(await translateObj(item));
    }
    return arr;
  } else if (obj && typeof obj === 'object') {
    const res = {};
    for (const [k, v] of Object.entries(obj)) {
      if (['src', 'priority', 'theme', '@type', '@context', '@id', 'inLanguage', 'url', 'width', 'height'].includes(k)) {
        res[k] = v;
      } else if (k === 'href') {
        if (typeof v === 'string' && v.startsWith('/blog/')) {
          res[k] = `/es${v}`;
        } else {
          res[k] = v;
        }
      } else {
        res[k] = await translateObj(v);
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

  const origVarName = sectionsMatch[1];
  const origSectionsStr = sectionsMatch[2];

  let parsedSections;
  try {
    parsedSections = eval(origSectionsStr);
  } catch (e) {
    console.error(`Error parsing sections string in ${slug}: ${e.message}`);
    return;
  }

  console.log(`Translating ${parsedSections.length} sections for ${slug}...`);
  const translatedSections = await translateObj(parsedSections);

  // Save to json
  const jsonDir = path.join(__dirname, '..', 'src', 'data', 'blogs', 'es');
  if (!fs.existsSync(jsonDir)) {
    fs.mkdirSync(jsonDir, { recursive: true });
  }
  fs.writeFileSync(path.join(jsonDir, `${slug}.json`), JSON.stringify(translatedSections, null, 2), 'utf8');

  // Update page.tsx code
  let newCode = code;

  // Add getBlogDataEs import if missing
  if (!newCode.includes('import { getBlogDataEs }')) {
    newCode = `import { getBlogDataEs } from "@/utils/getBlogDataEs";\n` + newCode;
  }

  // Ensure export const metadataEn and metadataEs
  if (!newCode.includes('export const metadataEn') && newCode.includes('export const metadata: Metadata = {')) {
    const metaMatch = newCode.match(/export const metadata:\s*Metadata\s*=\s*(\{[\s\S]*?\n\};)/);
    if (metaMatch) {
      const metaObjStr = metaMatch[1];
      let metaObj = {};
      try { metaObj = eval(`(${metaObjStr})`); } catch (e) {}
      const metaEsObj = await translateObj(metaObj);
      
      const metaDeclarations = `export const metadataEn: Metadata = ${metaObjStr}\n\nexport const metadataEs: Metadata = ${JSON.stringify(metaEsObj, null, 2)};\n\nexport const metadata: Metadata = metadataEn;`;
      newCode = newCode.replace(metaMatch[0], metaDeclarations);
    }
  }

  // Ensure schemaMarkupEs
  if (!newCode.includes('const schemaMarkupEs') && newCode.includes('const schemaMarkupEn =')) {
    newCode = newCode.replace('const schemaMarkupEn =', 'const schemaMarkupEs = {};\nconst schemaMarkupEn =');
  }

  // Embed articleSectionsEs
  const esSectionsStr = `const articleSectionsEs: ArticleSection[] = ${JSON.stringify(translatedSections, null, 2)};\n\n`;
  
  if (newCode.includes('const articleSectionsEs')) {
    newCode = newCode.replace(/const articleSectionsEs:\s*ArticleSection\[\]\s*=\s*[\s\S]*?\n\];/, `const articleSectionsEs: ArticleSection[] = ${JSON.stringify(translatedSections, null, 2)};`);
  } else {
    newCode = newCode.replace(sectionsMatch[0], `${esSectionsStr}${sectionsMatch[0]}`);
  }

  // Update component body
  const compRegex = /export default async function\s+(\w+)\s*\(\s*\{\s*searchParams\s*\}\s*:\s*\{\s*searchParams\s*:\s*Promise<\{\s*locale\?\s*:\s*string\s*\}\s*>\s*\}\s*\)\s*\{([\s\S]*?)(return\s*\()/;
  const compMatch = newCode.match(compRegex);
  if (compMatch) {
    const funcName = compMatch[1];
    const newBody = `\n  const resolvedSearchParams = await searchParams;\n  const locale = resolvedSearchParams.locale ?? "en";\n  const esData = locale === "es" ? getBlogDataEs("${slug}") : null;\n  const sections = esData?.sections && esData.sections.length > 0\n    ? esData.sections\n    : (locale === "es" && typeof articleSectionsEs !== "undefined"\n        ? articleSectionsEs\n        : (typeof articleSectionsEn !== "undefined" ? articleSectionsEn : (typeof articleSections !== "undefined" ? articleSections : [])));\n  const schema = locale === "es" && typeof schemaMarkupEs !== "undefined"\n    ? schemaMarkupEs\n    : (typeof schemaMarkupEn !== "undefined" ? schemaMarkupEn : (typeof schemaMarkup !== "undefined" ? schemaMarkup : {}));\n\n  `;
    newCode = newCode.replace(compMatch[0], `export default async function ${funcName}({ searchParams }: { searchParams: Promise<{ locale?: string }> }) {${newBody}${compMatch[3]}`);
  }

  // Update DynamicArticle tag
  newCode = newCode.replace(/<DynamicArticle\s+sections=\{[^\}]+\}\s*\/>/, '<DynamicArticle sections={sections} />');

  fs.writeFileSync(pagePath, newCode, 'utf8');
  console.log(`SUCCESS! Updated ${pagePath}`);
}

const slug = process.argv[2];
if (slug) {
  processBlog(slug);
}
