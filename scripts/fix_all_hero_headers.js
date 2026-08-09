const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '..', 'src', 'app', 'blog');
const dirs = fs.readdirSync(blogDir).filter(f => {
  return fs.statSync(path.join(blogDir, f)).isDirectory();
});

console.log(`Fixing Hero Headers across ${dirs.length} blog directories...`);

let fixedCount = 0;

for (const slug of dirs) {
  const pagePath = path.join(blogDir, slug, 'page.tsx');
  if (!fs.existsSync(pagePath)) continue;

  let code = fs.readFileSync(pagePath, 'utf8');

  // Fix h1 tag: remove quotes and translated JS variables
  // Replace <h1 ...> ... </h1> with standard dynamic title expression
  const h1Regex = /<h1\s+className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">\s*[\s\S]*?\s*<\/h1>/;
  
  if (h1Regex.test(code)) {
    const cleanH1 = `<h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">\n            {locale === "es" ? (typeof metadataEs?.title === "string" ? metadataEs.title : "") : (typeof metadataEn?.title === "string" ? metadataEn.title : "")}\n          </h1>`;
    code = code.replace(h1Regex, cleanH1);
    fs.writeFileSync(pagePath, code, 'utf8');
    fixedCount++;
  }
}

console.log(`Successfully fixed ${fixedCount} blog Hero Header titles!`);
