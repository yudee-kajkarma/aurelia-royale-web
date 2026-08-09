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
        res[k] = (typeof v === 'string' && v.startsWith('/blog/')) ? v.replace('/blog/', '/es/blog/') : v;
      } else {
        res[k] = await translateObj(v);
      }
    }
    return res;
  }
  return obj;
}

async function processBlog(slug) {
  const pagePath = path.join(__dirname, '../src/app/blog', slug, 'page.tsx');
  if (!fs.existsSync(pagePath)) return false;

  const outDir = path.join(__dirname, '../src/data/blogs/es');
  const outFile = path.join(outDir, `${slug}.json`);

  if (fs.existsSync(outFile)) {
    try {
      const data = JSON.parse(fs.readFileSync(outFile, 'utf-8'));
      if (data.sections && data.sections.length > 0) {
        return false; // Already generated properly
      }
    } catch(e) {}
  }

  const content = fs.readFileSync(pagePath, 'utf-8');

  const titleMatch = content.match(/export const metadataEn:[^\{]*\{\s*title:\s*"([^"]+)"/) || content.match(/title:\s*"([^"]+)"/);
  const descMatch = content.match(/export const metadataEn:[^\{]*\{\s*description:\s*"([^"]+)"/) || content.match(/description:\s*"([^"]+)"/);
  const catMatch = content.match(/schemaMarkupEn[\s\S]*?"articleSection":\s*"([^"]+)"/) || content.match(/schemaMarkup[\s\S]*?"articleSection":\s*"([^"]+)"/);
  const dateMatch = content.match(/"datePublished":\s*"([^"]+)"/);

  const titleEn = titleMatch ? titleMatch[1] : slug.replace(/-/g, ' ');
  const descEn = descMatch ? descMatch[1] : '';
  const catEn = catMatch ? catMatch[1] : 'Journal';
  const dateStr = dateMatch ? dateMatch[1] : '2026-07-16';

  const titleEs = await translateText(titleEn);
  const descEs = await translateText(descEn);
  const catEs = await translateText(catEn);

  let sections = [];
  const asMatch = content.match(/const (?:articleSectionsEn|articleSections)(?:\s*:\s*[^=]+)?=\s*(\[[\s\S]*?\n\];)/);
  if (asMatch) {
    try {
      let rawArrStr = asMatch[1].trim().replace(/;$/, '');
      sections = eval(`(${rawArrStr})`);
    } catch (e) {
      sections = [];
    }
  }

  const sectionsEs = await translateObj(sections);

  const blogData = {
    slug,
    title: titleEs,
    description: descEs,
    category: catEs,
    datePublished: dateStr,
    sections: sectionsEs
  };

  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outFile, JSON.stringify(blogData, null, 2), 'utf-8');
  console.log(`[DONE] Generated complete Spanish JSON for ${slug} (${sectionsEs.length} sections)`);
  return true;
}

async function main() {
  const blogsDir = path.join(__dirname, '../src/app/blog');
  const limit = parseInt(process.argv[2] || '15', 10);
  const entries = fs.readdirSync(blogsDir).sort();
  let count = 0;
  for (const entry of entries) {
    const fullPath = path.join(blogsDir, entry);
    if (fs.statSync(fullPath).isDirectory() && fs.existsSync(path.join(fullPath, 'page.tsx'))) {
      const generated = await processBlog(entry);
      if (generated) {
        count++;
        if (count >= limit) break;
      }
    }
  }
  console.log(`Batch complete! Generated ${count} new Spanish JSON files.`);
}

main();
