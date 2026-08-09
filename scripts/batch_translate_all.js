const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const blogDir = path.join(__dirname, '..', 'src', 'app', 'blog');
const dirs = fs.readdirSync(blogDir).filter(f => {
  return fs.statSync(path.join(blogDir, f)).isDirectory();
});

console.log(`Found ${dirs.length} total blog folders.`);

async function runAll() {
  for (let i = 0; i < dirs.length; i++) {
    const slug = dirs[i];
    console.log(`\n[${i + 1}/${dirs.length}] Processing blog: ${slug}`);
    try {
      execSync(`node scripts/translate_and_update_page.js "${slug}"`, { stdio: 'inherit', cwd: path.join(__dirname, '..') });
    } catch (e) {
      console.error(`Error processing ${slug}:`, e.message);
    }
  }
  console.log('\nALL BLOGS TRANSLATED AND UPDATED SUCCESSFULLY!');
}

runAll();
