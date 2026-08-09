/**
 * DEFINITIVE German Blog Perfection Script
 * ==========================================
 * Fixes ALL known machine-translation errors across all 98 German blog JSON files.
 * 
 * Categories of fixes:
 * 1. Jewelry/Gemological terminology (prongs, settings, inclusions, etc.)
 * 2. Broken/literal translations (home cleaning, applications, exercises, etc.)
 * 3. CSS/component theme keys that should NOT be translated ("goldener Rand" -> "gold")
 * 4. Specific article title & heading corrections
 * 5. Inline link spacing issues
 * 6. Mixed English/German compound words
 */

const fs = require("fs");
const path = require("path");

const deDir = path.join(__dirname, "../src/data/blogs/de");
const deCardsPath = path.join(__dirname, "../src/data/blogs.data.de.json");
const appBlogDir = path.join(__dirname, "../src/app/blog");

// ============================================================
// MASTER REPLACEMENT TABLE
// Order matters: longer/more specific patterns FIRST
// ============================================================
const textReplacements = [
  // --- SPECIFIC ARTICLE TITLES & HEADINGS ---
  ["Sauberer, im Labor gezüchteter Diamantschmuck", "So reinigen Sie im Labor gezüchteten Diamantschmuck"],
  ["Überprüfen Sie, ob im Labor erstellter farbiger Stein mit natürlicher Behandlung erstellt wurde", "So prüfen Sie, ob ein Farbstein natürlich, behandelt oder im Labor hergestellt wurde"],
  ["Sorgen Sie dafür, dass Ihr Diamantschmuck im Labor glänzt", "So halten Sie Ihren im Labor gezüchteten Diamantschmuck glänzend"],
  ["Sorgen Sie dafür, dass im Labor gezüchteter Diamantschmuck glänzt", "Pflege von im Labor gezüchtetem Diamantschmuck für dauerhaften Glanz"],
  ["Die siebenstufige Methode zur Reinigung Ihres Zuhauses", "Die siebenstufige Methode zur Reinigung Ihres Schmucks"],
  ["Reinigung Ihres Zuhauses", "Reinigung Ihres Schmucks"],
  ["Anleitung zum Testen von Origins", "Anleitung zur Herkunftsprüfung"],
  ["Wie oft sollte man zu Hause putzen?", "Wie oft sollte der Schmuck zu Hause gereinigt werden?"],
  ["Home-Scratch- oder thermische Testmethoden", "Kratztests oder thermische Tests zu Hause"],
  ["Für montierte Ziegel gelten Testbeschränkungen", "Für gefasste Edelsteine gelten Testeinschränkungen"],
  ["Heimtests, die nicht über einen Kauf entscheiden sollen", "Tests zu Hause, die nicht über einen Kauf entscheiden sollten"],
  ["Heimtests sollten vermieden werden", "Tests zu Hause sollten vermieden werden"],
  ["Wenn Langeweile professionelles Urteilsvermögen erfordert", "Wann Mattheit eine professionelle Begutachtung erfordert"],
  [`Was „prickelnd“ eigentlich bedeutet`, `Was „Funkeln“ wirklich bedeutet`],
  [`Welche Behandlungsformulierung soll ich Ihnen sagen?`, `Welche Behandlungsangaben sollten Sie erfragen?`],
  ["Überprüfen Sie die Geltungsbereichsparameter des Zertifikats", "Prüfen Sie den Geltungsbereich des Zertifikats"],
  [`Druck, vor der Überprüfung auf Rücksendungen zu verzichten`, `Druck, auf das Rückgaberecht vor einer Prüfung zu verzichten`],
  [`Überprüfen Sie Eindämmungskarten und Helligkeitsstufen nebeneinander`, `Vergleichen Sie Einschlussdiagramme und Brillanzgrade nebeneinander`],

  // --- GEMOLOGICAL TERMINOLOGY ---
  // "Ziegel" (bricks) -> proper gemological term
  ["zusammengesetzte Ziegel", "zusammengesetzte Edelsteine"],
  ["montierte Ziegel", "gefasste Edelsteine"],
  ["Ziegel", "Edelsteine"],
  
  // "Eindämmung" (containment) -> "Einschluss" (inclusion)
  ["Eindämmungskarten", "Einschlussdiagramme"],
  ["Eindämmungen", "Einschlüsse"],
  ["Eindämmung", "Einschluss"],
  
  // "Nachahmung von Simulanz" -> proper terminology
  ["Nachahmung von Simulanz", "Imitation (Simulant)"],
  
  // "Store-Wert" -> "Marktwert"
  ["Store-Wert", "Marktwert"],
  
  // "Mein Eigentum" -> "Eigentumsnachweis"
  ["Mein Eigentum", "Eigentumsnachweis"],
  ["Mein Eigentum, Eigentumsgeschichte", "Eigentumsnachweis, Besitzerhistorie"],
  
  // "Ländereinsätze" -> geographic origin
  ["Bei Ländereinsätzen handelt es sich um fachkundige Beratung anhand chemischer Spuren in Naturstein", "Angaben zur geografischen Herkunft basieren auf fachkundiger Analyse chemischer Spuren im Naturstein"],
  ["Ländereinsätze", "Herkunftsangaben"],
  
  // Prongs/Settings terminology
  ["Ringzähne", "Ringkrappen"],
  ["Einstellstifte", "Krappen"],
  ["Einstellstift", "Krappe"],
  ["Überprüfen Sie die Füße", "Überprüfen Sie die Krappen"],
  ["Streben", "Krappen"],
  
  // "Fundstücke" (findings/artifacts) -> proper term
  ["Fundstücke hinter Pavillons", "Rückstände hinter dem Pavillon"],
  ["Fundstücke", "Rückstände"],
  
  // "Wellen" -> ring shanks/surfaces
  ["Wellen", "Ringschienen"],
  
  // "Bereinigen Sie Beiträge" -> clean earring posts
  ["Bereinigen Sie Beiträge", "Reinigen Sie die Ohrsteckerstifte"],
  
  // "Supportelemente" -> clasps/closures
  ["Supportelemente", "Verschlüsse"],
  
  // "Halterungseinstellungen" -> pendant bail / setting
  ["Halterungseinstellungen", "Anhängeröse und Fassung"],
  
  // "obbarbare" -> "nachweisbare"
  ["obbarbare Behandlungen", "nachweisbare Behandlungen"],
  ["obbarbare", "nachweisbare"],
  
  // "forschungsgenehmigungsfähig" -> proper term
  ["soweit forschungsgenehmigungsfähig", "soweit prüfbar"],
  ["forschungsgenehmigungsfähig", "prüfbar"],
  
  // "Einschränkungen im Gesundheitswesen" -> care/handling restrictions
  ["Einschränkungen im Gesundheitswesen in Bezug auf Material oder Handhabung", "Pflege- und Handhabungshinweise zum Material"],
  ["Einschränkungen im Gesundheitswesen", "Pflege- und Handhabungshinweise"],
  
  // "Dolmetschen erfordert Fachwissen" -> "Interpretation erfordert Fachwissen"
  ["Dolmetschen erfordert Fachwissen", "Die Interpretation erfordert Fachwissen"],
  ["Dolmetschen erfordert", "Die Interpretation erfordert"],
  
  // --- CLEANING / APPLICATION TERMINOLOGY ---
  ["Bewerben Sie sich zuerst; Vor dem Schmuck trocknen lassen", "Creme/Lotion zuerst auftragen; vor dem Schmuck trocknen lassen"],
  ["Bewerben Sie sich zuerst", "Zuerst auftragen"],
  ["Bewerben Sie sich vor", "Vorab auftragen"],
  ["Bewerben Sie sich", "Auftragen"],
  
  // "Langeweile" (boredom) -> "Mattheit" (dullness)
  ["Langeweile", "Mattheit"],
  
  // "prickelnd" (tingling/fizzy) -> "Funkeln" (sparkle)
  ["prickelnd", "Funkeln"],
  
  // "Übung" (exercise) -> "Sport & Training"
  ["Übung; Und", "Sport & Training;"],
  ["Übung;", "Sport & Training;"],
  ["Übung", "Sport & Training"],
  
  // "Nee" -> "Nein"
  ["Nee", "Nein"],
  
  // --- CATEGORY / PRODUCT HEADINGS ---
  ["der Ring:", "Ringe:"],
  ["die Halskette mit Anhänger:", "Halsketten & Anhänger:"],
  ["die Halskette:", "Halsketten:"],
  ["das Armband:", "Armbänder:"],
  ["der Ohrring:", "Ohrringe:"],
  ["Die Halskette mit Anhänger:", "Halsketten & Anhänger:"],
  
  // --- SURFACE FILM TERMINOLOGY ---
  ["Film sammeln", "einen Schmutzfilm ansetzen"],
  ["Film freigeben", "Schmutzfilm bilden"],
  ["Wenn der Film herauskommt:", "Wenn sich ein Schmutzfilm bildet:"],
  
  // --- CHECKLIST HEADINGS ---
  // Only replace exact short headings that appear as checklist labels
  
  // --- HOME CLEANING PHRASING ---
  ["zu Hause putzen", "den Schmuck zu Hause reinigen"],
  ["Haus sauber?", "Für die Reinigung zu Hause geeignet?"],
  ["Haus sauber", "Zu Hause reinigen"],
  
  // --- MIXED ENGLISH / BROKEN COMPOUNDS ---
  ["Home-Scratch", "Kratztest zu Hause"],
  ["Heimtests", "Tests zu Hause"],
  
  // --- INLINE LINK SPACING ---
  // Fix common broken link text patterns
  ["nachder Schmuck", "nach der Schmuck"],
  ["vonKontaktieren", "von Kontaktieren"],
  ["Royalevon", "Royale von"],
  
  // Fix callout type key that got translated
  ["aufbieten, ausrufen, zurufen", "callout"],
];

// ============================================================
// THEME KEY FIX: "goldener Rand" -> "gold" in callout theme
// This is a CSS/component key, not translatable text
// ============================================================

function fixThemeKeys(obj) {
  if (typeof obj === "string") return obj;
  if (Array.isArray(obj)) return obj.map(fixThemeKeys);
  if (typeof obj === "object" && obj !== null) {
    const newObj = {};
    for (const k of Object.keys(obj)) {
      if (k === "theme" && obj[k] === "goldener Rand") {
        newObj[k] = "gold";
      } else if (k === "type" && obj[k] === "aufbieten, ausrufen, zurufen") {
        newObj[k] = "callout";
      } else {
        newObj[k] = fixThemeKeys(obj[k]);
      }
    }
    return newObj;
  }
  return obj;
}

function applyTextReplacements(str) {
  if (!str || typeof str !== "string") return str;
  let s = str;
  for (const [find, replace] of textReplacements) {
    // Use string replacement (not regex) to avoid special char issues
    while (s.includes(find)) {
      s = s.replace(find, replace);
    }
  }
  return s;
}

function processValue(obj) {
  if (typeof obj === "string") {
    return applyTextReplacements(obj);
  }
  if (Array.isArray(obj)) {
    return obj.map(processValue);
  }
  if (typeof obj === "object" && obj !== null) {
    const newObj = {};
    for (const k of Object.keys(obj)) {
      if (k === "theme" && obj[k] === "goldener Rand") {
        newObj[k] = "gold";
      } else if (k === "type" && obj[k] === "aufbieten, ausrufen, zurufen") {
        newObj[k] = "callout";
      } else if (k === "type") {
        // Don't translate type keys
        newObj[k] = obj[k];
      } else {
        newObj[k] = processValue(obj[k]);
      }
    }
    return newObj;
  }
  return obj;
}

// ============================================================
// SPECIFIC FILE FIXES
// For the check-coloured-stone article, fix the broken link parts
// ============================================================
function fixCheckColouredStoneParts(data) {
  // Walk through and find the Aurelia Royale broken link section
  function walkAndFix(obj) {
    if (Array.isArray(obj)) return obj.map(walkAndFix);
    if (typeof obj === "object" && obj !== null) {
      // Fix the broken inline parts for the Aurelia Royale section
      if (obj.parts && Array.isArray(obj.parts)) {
        const texts = obj.parts.map(p => p.text || "").join("");
        if (texts.includes("der Schmuck von Aurelia Royale") && texts.includes("Kontaktieren Sie Aurelia Royale")) {
          obj.parts = [
            { text: "Aurelia Royale trennt die Edelsteintypen und erläutert Herkunft sowie Behandlungsumfang mit Berichtsnummern. Entdecken Sie " },
            { text: "den Schmuck von Aurelia Royale", href: "/shop/" },
            { text: " oder " },
            { text: "kontaktieren Sie uns", href: "/contact/" },
            { text: " für spezifische Angaben." }
          ];
        }
      }
      const newObj = {};
      for (const k of Object.keys(obj)) {
        newObj[k] = walkAndFix(obj[k]);
      }
      return newObj;
    }
    return obj;
  }
  return walkAndFix(data);
}

// ============================================================
// MAIN EXECUTION
// ============================================================
async function main() {
  console.log("=".repeat(60));
  console.log("DEFINITIVE GERMAN BLOG PERFECTION");
  console.log("Fixing ALL 98 German blog JSON datasets...");
  console.log("=".repeat(60));

  const files = fs.readdirSync(deDir).filter(f => f.endsWith(".json"));
  let filesUpdated = 0;
  let totalReplacements = 0;

  files.forEach(file => {
    const p = path.join(deDir, file);
    try {
      const original = fs.readFileSync(p, "utf-8");
      let data = JSON.parse(original);
      
      // Apply text replacements
      data = processValue(data);
      
      // Special fix for check-coloured-stone article
      if (file === "check-coloured-stone-natural-treated-lab-created.json") {
        data = fixCheckColouredStoneParts(data);
      }
      
      const result = JSON.stringify(data, null, 2);
      if (result !== original) {
        fs.writeFileSync(p, result, "utf-8");
        filesUpdated++;
        
        // Count changes
        let changeCount = 0;
        for (const [find] of textReplacements) {
          const count = (original.match(new RegExp(find.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
          changeCount += count;
        }
        if (original.includes("goldener Rand")) changeCount++;
        if (changeCount > 0) {
          totalReplacements += changeCount;
          console.log(`  ✅ ${file}: ${changeCount} fix(es)`);
        } else {
          console.log(`  ✅ ${file}: theme/structural fix`);
        }
      }
    } catch (e) {
      console.error(`  ❌ Error processing ${file}:`, e.message);
    }
  });

  console.log(`\nUpdated ${filesUpdated}/${files.length} blog JSON files with ${totalReplacements}+ corrections.`);

  // --- FIX blogs.data.de.json card index ---
  console.log("\nFixing blogs.data.de.json card index...");
  if (fs.existsSync(deCardsPath)) {
    const cards = JSON.parse(fs.readFileSync(deCardsPath, "utf-8"));
    const cleanedCards = cards.map(c => {
      const cleaned = processValue(c);
      // Specific title fixes
      if (c.slug === "clean-lab-grown-diamond-jewellery") {
        cleaned.title = "So reinigen Sie im Labor gezüchteten Diamantschmuck";
      }
      if (c.slug === "check-coloured-stone-natural-treated-lab-created") {
        cleaned.title = "So prüfen Sie, ob ein Farbstein natürlich, behandelt oder im Labor hergestellt wurde";
      }
      if (c.slug === "keep-lab-grown-diamond-jewellery-sparkling") {
        cleaned.title = "So halten Sie Ihren im Labor gezüchteten Diamantschmuck glänzend";
      }
      return cleaned;
    });
    fs.writeFileSync(deCardsPath, JSON.stringify(cleanedCards, null, 2), "utf-8");
    console.log("  ✅ blogs.data.de.json updated!");
  }

  // --- FIX page.tsx metadataDe entries ---
  console.log("\nFixing metadataDe in blog page components...");
  const slugTitleMap = {
    "clean-lab-grown-diamond-jewellery": "So reinigen Sie im Labor gezüchteten Diamantschmuck",
    "check-coloured-stone-natural-treated-lab-created": "So prüfen Sie, ob ein Farbstein natürlich, behandelt oder im Labor hergestellt wurde",
    "keep-lab-grown-diamond-jewellery-sparkling": "So halten Sie Ihren im Labor gezüchteten Diamantschmuck glänzend"
  };

  let pagesUpdated = 0;
  const dirs = fs.readdirSync(appBlogDir);
  dirs.forEach(d => {
    const p = path.join(appBlogDir, d, "page.tsx");
    if (fs.existsSync(p)) {
      let content = fs.readFileSync(p, "utf-8");
      let original = content;
      
      // Apply text replacements to page.tsx content
      for (const [find, replace] of textReplacements) {
        while (content.includes(find)) {
          content = content.replace(find, replace);
        }
      }
      
      if (content !== original) {
        fs.writeFileSync(p, content, "utf-8");
        pagesUpdated++;
      }
    }
  });
  console.log(`  ✅ Updated ${pagesUpdated} blog page.tsx files.`);

  // --- VERIFICATION SCAN ---
  console.log("\n" + "=".repeat(60));
  console.log("POST-FIX VERIFICATION SCAN");
  console.log("=".repeat(60));
  
  const criticalPatterns = [
    "obbarbare", "Ziegel", "Store-Wert", "Mein Eigentum", "Ländereinsätze",
    "Home-Scratch", "Nachahmung von Simulanz", "goldener Rand",
    "aufbieten, ausrufen, zurufen", "forschungsgenehmigungsfähig",
    "Einschränkungen im Gesundheitswesen", "Dolmetschen erfordert",
    "Eindämmung", "Ringzähne", "Einstellstifte", "Supportelemente",
    "Bereinigen Sie Beiträge", "Halterungseinstellungen",
    "Fundstücke hinter Pavillons", "Reinigung Ihres Zuhauses",
    "Heimtests", "Geltungsbereichsparameter"
  ];
  
  let remainingIssues = 0;
  files.forEach(file => {
    const content = fs.readFileSync(path.join(deDir, file), "utf-8");
    const found = [];
    criticalPatterns.forEach(p => {
      if (content.includes(p)) found.push(p);
    });
    if (found.length > 0) {
      console.log(`  ⚠️  ${file}: ${found.join(" | ")}`);
      remainingIssues += found.length;
    }
  });
  
  if (remainingIssues === 0) {
    console.log("  ✅ ZERO remaining issues found!");
  } else {
    console.log(`  ⚠️  ${remainingIssues} remaining issues found.`);
  }

  console.log("\n🎉 DEFINITIVE GERMAN BLOG PERFECTION COMPLETE!");
}

main();
