const fs = require("fs");
const path = require("path");

const frBlogsDir = path.join(__dirname, "../src/data/blogs/fr");
const files = fs.readdirSync(frBlogsDir).filter(f => f.endsWith(".json"));

let cleanedCount = 0;

files.forEach((file) => {
  const filePath = path.join(frBlogsDir, file);
  let str = fs.readFileSync(filePath, "utf-8");
  const original = str;

  // Spanish to French replacements
  str = str
    .replace(/¿Con qué frecuencia se limpian las joyas de diamantes\?/g, "À quelle fréquence nettoyer les bijoux en diamants ?")
    .replace(/bijoux de diamantes limpias et brillantes en exhibición/g, "Bijoux en diamants propres et étincelants")
    .replace(/Brillo de diamante limpio/g, "Éclat d'un diamant propre")
    .replace(/No existe un intervalo de calendario correcto/g, "Il n'existe pas d'intervalle fixe universel")
    .replace(/respuesta rapida/g, "Réponse rapide")
    .replace(/un calendario de inicio práctico/g, "Un calendrier d'entretien pratique")
    .replace(/Calendarios de verificación visual/g, "Calendrier de vérification visuelle")
    .replace(/Patrón de desgaste/g, "Fréquence de port")
    .replace(/control visual/g, "Contrôle visuel")
    .replace(/Limpieza suave du hogar, si se aprueba/g, "Nettoyage doux à la maison")
    .replace(/Verificación de condición profesional/g, "Inspection professionnelle")
    .replace(/bague de uso diario/g, "Bague portée au quotidien")
    .replace(/boucles d'oreilles usados avec frecuencia/g, "Boucles d'oreilles fréquentes")
    .replace(/Colgante usado avec frecuencia/g, "Pendentif porté fréquemment")
    .replace(/bracelet de diamantes/g, "Bracelet en diamants")
    .replace(/bijoux ocasionales/g, "Bijoux d'occasion")
    .replace(/¿Qué hace que les bijoux necesiten limpiarse antes\?/g, "Qu'est-ce qui nécessite un nettoyage plus fréquent ?")
    .replace(/Aceites pour la piel/g, "Huiles de la peau")
    .replace(/Cuidado de la piel/g, "Cosmétiques et soins")
    .replace(/Residuos de jabón/g, "Résidus de savon")
    .replace(/Cocina et tareas del hogar/g, "Tâches ménagères et cuisine")
    .replace(/¿Debo limpiar mi bague de diamantes todas les semanas\?/g, "Devrais-je nettoyer ma bague en diamants toutes les semaines ?")
    .replace(/¿La falta de brillo significa que un diamante está dañado\?/g, "Un manque d'éclat signifie-t-il que le diamant est abîmé ?")
    .replace(/¿Qué pasa si mis bijoux contienen pierres de couleur\?/g, "Que faire si mon bijou contient des pierres de couleur ?")
    .replace(/de diamantes/g, "en diamants")
    .replace(/les bijoux de diamantes/g, "les bijoux en diamants")
    .replace(/le diamante/g, "le diamant")
    .replace(/un bague/g, "une bague")
    .replace(/una bague/g, "une bague")
    .replace(/del diamante/g, "du diamant")
    .replace(/des diamantes/g, "des diamants")
    .replace(/las joyas/g, "les bijoux")
    .replace(/las joyas de diamantes/g, "les bijoux en diamants")
    .replace(/de laboratorio/g, "de laboratoire");

  if (str !== original) {
    fs.writeFileSync(filePath, str, "utf-8");
    cleanedCount++;
  }
});

console.log(`Successfully sanitized ${cleanedCount} individual French blog JSON files!`);
