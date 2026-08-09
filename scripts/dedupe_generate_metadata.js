const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '..', 'src', 'app', 'blog');
const dirs = fs.readdirSync(blogDir).filter(f => {
  return fs.statSync(path.join(blogDir, f)).isDirectory();
});

console.log(`Auditing and deduplicating generateMetadata across ${dirs.length} blog directories...`);

let fixedCount = 0;

for (const slug of dirs) {
  const pagePath = path.join(blogDir, slug, 'page.tsx');
  if (!fs.existsSync(pagePath)) continue;

  let code = fs.readFileSync(pagePath, 'utf8');

  // Match all generateMetadata function declarations
  const genMetaRegex = /export async function generateMetadata[\s\S]*?\n\};?\n?/g;
  const matches = code.match(genMetaRegex);

  if (matches && matches.length > 1) {
    let first = true;
    code = code.replace(genMetaRegex, (match) => {
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

console.log(`Deduplicated generateMetadata in ${fixedCount} blog pages!`);
