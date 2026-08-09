const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '..', 'src', 'app', 'blog');
const dirs = fs.readdirSync(blogDir).filter(f => {
  return fs.statSync(path.join(blogDir, f)).isDirectory();
});

console.log(`Auditing and deduplicating metadataEs across ${dirs.length} blog directories...`);

let fixedCount = 0;

for (const slug of dirs) {
  const pagePath = path.join(blogDir, slug, 'page.tsx');
  if (!fs.existsSync(pagePath)) continue;

  let code = fs.readFileSync(pagePath, 'utf8');

  // Match all metadataEs declarations
  const metaEsRegex = /export const metadataEs:\s*Metadata\s*=\s*\{[\s\S]*?\n\};?\n?/g;
  const matches = code.match(metaEsRegex);

  if (matches && matches.length > 1) {
    let first = true;
    code = code.replace(metaEsRegex, (match) => {
      if (first) {
        first = false;
        return match;
      }
      return '';
    });
    fs.writeFileSync(pagePath, code, 'utf8');
    fixedCount++;
  }
}

console.log(`Deduplicated metadataEs in ${fixedCount} blog pages!`);
