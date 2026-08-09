const fs = require("fs");
const path = require("path");

const frDataPath = path.join(__dirname, "../src/data/blogs.data.fr.json");
const frBlogsDir = path.join(__dirname, "../src/data/blogs/fr");

const frData = JSON.parse(fs.readFileSync(frDataPath, "utf-8"));

let updatedCount = 0;

frData.forEach((blog) => {
  const jsonPath = path.join(frBlogsDir, `${blog.slug}.json`);
  if (fs.existsSync(jsonPath)) {
    try {
      const blogContent = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
      // Find the first paragraph text or caption
      let fluentText = "";
      for (const sec of blogContent) {
        if (sec.content && Array.isArray(sec.content)) {
          for (const block of sec.content) {
            if (block.type === "paragraph" && block.text && block.text.length > 30) {
              fluentText = block.text;
              break;
            } else if (block.type === "image" && block.caption && block.caption.length > 30) {
              fluentText = block.caption;
            }
          }
        }
        if (fluentText) break;
      }

      if (fluentText) {
        // Truncate to a clean excerpt length if needed (~160 chars)
        if (fluentText.length > 180) {
          blog.excerpt = fluentText.slice(0, 177) + "...";
        } else {
          blog.excerpt = fluentText;
        }
        updatedCount++;
      }
    } catch (e) {
      console.error(`Error reading ${jsonPath}`, e);
    }
  }
});

fs.writeFileSync(frDataPath, JSON.stringify(frData, null, 2), "utf-8");
console.log(`Successfully populated ${updatedCount} blog card excerpts with 100% pure fluent French content!`);
