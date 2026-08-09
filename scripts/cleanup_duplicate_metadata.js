const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '..', 'src', 'app', 'blog');
const dirs = fs.readdirSync(blogDir).filter(f => {
  return fs.statSync(path.join(blogDir, f)).isDirectory();
});

console.log(`Cleaning up duplicate metadata definitions across ${dirs.length} blog directories...`);

let cleanedCount = 0;

for (const slug of dirs) {
  const pagePath = path.join(blogDir, slug, 'page.tsx');
  if (!fs.existsSync(pagePath)) continue;

  let code = fs.readFileSync(pagePath, 'utf8');

  // Match all occurrences of export const metadataEs
  const matches = [...code.matchAll(/export const metadataEs:\s*Metadata\s*=\s*\{[\s\S]*?\n\};/g)];
  if (matches.length > 1) {
    let first = true;
    code = code.replace(/export const metadataEs:\s*Metadata\s*=\s*\{[\s\S]*?\n\};/g, (match) => {
      if (first) {
        first = false;
        return match;
      }
      return '';
    });
    fs.writeFileSync(pagePath, code, 'utf8');
    cleanedCount++;
  }

  // Match all occurrences of export async function generateMetadata
  const genMatches = [...code.matchAll(/export async function generateMetadata[\s\S]*?\n\};?/g)];
  if (genMatches.length > 1) {
    let first = true;
    code = code.replace(/export async function generateMetadata[\s\S]*?\n\};?/g, (match) => {
      if (first) {
        first = false;
        return match;
      }
      return '';
    });
    fs.writeFileSync(pagePath, code, 'utf8');
    cleanedCount++;
  }
}

console.log(`Cleaned up duplicate declarations in ${cleanedCount} files!`);
