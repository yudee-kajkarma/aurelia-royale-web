const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '..', 'src', 'app', 'blog');
const dirs = fs.readdirSync(blogDir).filter(f => {
  return fs.statSync(path.join(blogDir, f)).isDirectory();
});

console.log(`Auditing syntax errors across ${dirs.length} blog directories...`);

let fixedCount = 0;

for (const slug of dirs) {
  const pagePath = path.join(blogDir, slug, 'page.tsx');
  if (!fs.existsSync(pagePath)) continue;

  let code = fs.readFileSync(pagePath, 'utf8');

  // Remove orphaned generateMetadata signature fragments like:
  // ": { searchParams: Promise<{ locale?: string }> }): Promise<Metadata> {"
  // or orphaned return statements outside function scope
  const orphanedRegex = /\n\s*: \{ searchParams[\s\S]*?return locale === "es" \? metadataEs : metadataEn;?\s*\}?;?/g;
  
  if (orphanedRegex.test(code)) {
    code = code.replace(orphanedRegex, '');
    fs.writeFileSync(pagePath, code, 'utf8');
    fixedCount++;
  }
}

console.log(`Successfully fixed syntax errors in ${fixedCount} blog pages!`);
