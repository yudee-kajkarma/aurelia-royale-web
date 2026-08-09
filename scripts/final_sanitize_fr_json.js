const fs = require("fs");
const path = require("path");

const frDataPath = path.join(__dirname, "../src/data/blogs.data.fr.json");
let jsonStr = fs.readFileSync(frDataPath, "utf-8");

// Final polish replacements
jsonStr = jsonStr
  .replace(/de laboratorio/g, "de laboratoire")
  .replace(/Une piedra/g, "Une pierre")
  .replace(/piedra/g, "pierre")
  .replace(/les diamants de laboratorio atraen les aceites de la piel, les residuos du cuidado de la piel, la película de jabón et le polvo tal comme lo hacen les diamants naturels\. Es\.\.\./g, "Les diamants de laboratoire accumulent les huiles de la peau et les résidus de cosmétiques tout comme les diamants naturels.")
  .replace(/les diamants de laboratorio no pierden su brillo gradualmente\. Sus facetas cortadas et pulidas continúan interactuando avec la luz, mais les aceites pour la piel, les locio\.\.\./g, "Les diamants de laboratoire ne perdent pas leur éclat avec le temps, mais un entretien régulier préserve leur brillance.")
  .replace(/Quítese les bijoux de diamantes antes de nadar\. le diamante en sí est muy stable, mais la pieza completa incluye aleaciones de métal, engastes, cierres, acabados et, a vec\.\.\./g, "Retirez vos bijoux en diamants avant de nager pour protéger le métal et la monture du chlore et de l'eau salée.");

fs.writeFileSync(frDataPath, jsonStr, "utf-8");
console.log("Successfully sanitized all remaining hybrid terms in blogs.data.fr.json!");
