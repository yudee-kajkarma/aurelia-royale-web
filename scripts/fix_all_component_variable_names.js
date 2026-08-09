const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '..', 'src', 'app', 'blog');
const dirs = fs.readdirSync(blogDir).filter(f => {
  return fs.statSync(path.join(blogDir, f)).isDirectory();
});

console.log(`Fixing variable references across ${dirs.length} blog directories...`);

let fixedCount = 0;

for (const slug of dirs) {
  const pagePath = path.join(blogDir, slug, 'page.tsx');
  if (!fs.existsSync(pagePath)) continue;

  let code = fs.readFileSync(pagePath, 'utf8');

  // Detect exact declared variable names
  const hasSecEn = code.includes('const articleSectionsEn:');
  const secVar = hasSecEn ? 'articleSectionsEn' : 'articleSections';

  const hasSchEn = code.includes('const schemaMarkupEn =') || code.includes('const schemaMarkupEn:');
  const schVar = hasSchEn ? 'schemaMarkupEn' : 'schemaMarkup';

  const hasSchEs = code.includes('const schemaMarkupEs =') || code.includes('const schemaMarkupEs:');
  const schEsVar = hasSchEs ? 'schemaMarkupEs' : schVar;

  const hasSecEs = code.includes('const articleSectionsEs:');

  // Update component body
  const compRegex = /export default\s+(async\s+)?function\s+(\w+)\s*\([^\)]*\)\s*\{([\s\S]*?)(return\s*\()/;
  const compMatch = code.match(compRegex);

  if (compMatch) {
    const funcName = compMatch[2];
    const secFallback = hasSecEs ? `(locale === "es" ? articleSectionsEs : ${secVar})` : secVar;
    const newBody = `\n  const resolvedSearchParams = await searchParams;\n  const locale = resolvedSearchParams.locale ?? "en";\n  const esData = locale === "es" ? getBlogDataEs("${slug}") : null;\n  const sections = esData && esData.length > 0 ? esData : ${secFallback};\n  const schema = locale === "es" ? ${schEsVar} : ${schVar};\n\n  `;

    code = code.replace(compMatch[0], `export default async function ${funcName}({ searchParams }: { searchParams: Promise<{ locale?: string }> }) {${newBody}${compMatch[4]}`);
  }

  // Update JSON.stringify(schemaMarkup) or JSON.stringify(schemaMarkupEn) to JSON.stringify(schema)
  code = code.replace(/dangerouslySetInnerHTML=\{\{\s*__html:\s*JSON\.stringify\((schemaMarkup|schemaMarkupEn|schemaMarkupEs)\)\s*\}\}/g, 'dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}');

  fs.writeFileSync(pagePath, code, 'utf8');
  fixedCount++;
}

console.log(`Successfully fixed variable references in ${fixedCount} blog pages!`);
