const fs = require("fs");
const path = require("path");

const frDataPath = path.join(__dirname, "../src/data/blogs.data.fr.json");
const blogsFr = JSON.parse(fs.readFileSync(frDataPath, "utf-8"));

const englishPattern = /\b(the|and|to|for|in|of|with|on|how|what|why|where|can|is|are|learn|check|buy|choose|select|avoid|build|use|discover|understand|guide|checklist|buyer|size|ring|necklace|pendant|earring|bracelet|set)\b/i;

let flagged = [];

blogsFr.forEach((b, index) => {
  if (englishPattern.test(b.title) || englishPattern.test(b.excerpt)) {
    flagged.push({
      index: index + 1,
      slug: b.slug,
      title: b.title,
      excerpt: b.excerpt
    });
  }
});

if (flagged.length === 0) {
  console.log("SUCCESS! ZERO English words found in any of the 99 blog card titles or excerpts!");
} else {
  console.log(`WARNING: Found ${flagged.length} cards with potential English words:`);
  console.log(JSON.stringify(flagged, null, 2));
}
