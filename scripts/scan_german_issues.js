const fs = require("fs");
const path = require("path");

const deDir = path.join(__dirname, "../src/data/blogs/de");

// Patterns to scan for across all German blog JSON files
const badPatterns = [
  "obbarbare", "Ziegel", "Store-Wert", "Mein Eigentum", "Ländereinsätze",
  "Home-Scratch", "Eindämmung", "Geltungsbereichsparameter",
  "Nachahmung von Simulanz", "goldener Rand", "Einstellstifte",
  "Ringzähne", "Supportelemente", "Bereinigen Sie Beiträge",
  "Halterungseinstellungen", "Überprüfen Sie die Füße",
  "Fundstücke hinter Pavillons", "Reinigung Ihres Zuhauses",
  "zu Hause putzen", "Für montierte Ziegel",
  "Bänder und Eindämmungen", "Heimtests",
  "Druck, vor der Überprüfung auf Rücksendungen zu verzichten",
  "forschungsgenehmigungsfähig", "Einschränkungen im Gesundheitswesen",
  "Dolmetschen erfordert", "Bewerben Sie sich",
  "aufbieten, ausrufen, zurufen",
  "Anleitung zum Testen von Origins",
  "Home-Scratch- oder thermische Testmethoden"
];

const files = fs.readdirSync(deDir).filter(f => f.endsWith(".json"));
let totalIssues = 0;

files.forEach(file => {
  const content = fs.readFileSync(path.join(deDir, file), "utf-8");
  const found = [];
  badPatterns.forEach(p => {
    if (content.includes(p)) found.push(p);
  });
  if (found.length > 0) {
    console.log(`${file}: ${found.join(" | ")}`);
    totalIssues += found.length;
  }
});

console.log(`\nTotal issues found: ${totalIssues} across ${files.length} files`);
