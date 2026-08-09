const fs = require("fs");
const path = require("path");

const frBlogsDir = path.join(__dirname, "../src/data/blogs/fr");
const files = fs.readdirSync(frBlogsDir).filter(f => f.endsWith(".json"));

const sentenceMap = [
  // 25 Questions Mappings
  [/1\. What is the exact pierre précieuse species or variety\?/gi, "1. Quelle est la variété minérale exacte de la pierre ?"],
  [/Look for mineral varieties \(e\.g\. sapphire, emerald\)\. Avoid marketing color titles\./gi, "Recherchez la variété minérale (ex. saphir, émeraude) et évitez les dénominations commerciales vagues."],
  [/2\. Is the stone natural, laboratory-created, composite or an imitation\?/gi, "2. La pierre est-elle naturelle, créée en laboratoire, composée ou une imitation ?"],
  [/Confirm the exact category\. For lab-grown details, see/gi, "Confirmez la catégorie exacte. Pour plus de détails sur les diamants de laboratoire, consultez"],
  [/how diamants de laboratoire should be described and disclosed/gi, "comment les diamants de laboratoire doivent être décrits et divulgués"],
  [/3\. Has the coloured stone been treated\?/gi, "3. La pierre de couleur a-t-elle subi un traitement ?"],
  [/Identify treat names like heat, filling, coatings, or dyeing rather than a general 'enhanced'\./gi, "Exigez le nom du traitement (chauffage, remplissage, résine) au lieu d'un terme vague."],
  [/4\. What does the treatment change about care or repair\?/gi, "4. Que modifie ce traitement concernant l'entretien ou la réparation ?"],
  [/Obtain clean limits before cleaning\. See care steps at/gi, "Informez-vous des précautions avant tout nettoyage. Consultez le guide d'entretien sur"],
  [/how to care for coloured stones and diamants/gi, "comment entretenir les bijoux en diamants et pierres de couleur"],
  [/5\. Are the photographs of the exact stone\?/gi, "5. Les photographies représentent-elles la pierre exacte ?"],
  [/Identify unique listing items vs stock design variation allowances\./gi, "Vérifiez s'il s'agit d'une pièce unique en photo ou d'un modèle de série."],
  [/6\. How is the colour described beyond one word\?/gi, "6. Comment la couleur est-elle décrite au-delà d'un seul mot ?"],
  [/Verify hue saturation properties under daylight environments\./gi, "Examinez la teinte et la saturation sous différents éclairages (lumière du jour)."],
  [/7\. What are the stone’s millimetre dimensions\?/gi, "7. Quelles sont les dimensions en millimètres de la pierre ?"],
  [/Verify millimetre outlines separately\. Consult size charts at/gi, "Vérifiez les dimensions physiques en millimètres. Consultez le guide des tailles sur"],
  [/carat weight versus visible diamant size/gi, "poids en carats par rapport à la taille visible du diamant"],
  [/8\. Is carat weight measured or estimated\?/gi, "8. Le poids en carats est-il mesuré ou estimé ?"],
  [/Confirm if weights represent loose scales or mounted mathematical estimates\./gi, "Vérifiez si le poids a été mesuré sur balance avant sertissage ou estimé."],
  [/9\. Are diamants natural or lab-grown\?/gi, "9. Les diamants sont-ils naturels ou de laboratoire ?"],
  [/Verify origin directly\. Accents describe design roles, not materials\./gi, "Confirmez l'origine exacte des diamants d'accentuation."],
  [/10\. How many diamant accents are there and what shapes are they\?/gi, "10. Combien d'accents de diamant comporte le bijou et de quelle forme ?"],
  [/Record stone count to verify setting density\./gi, "Comptez le nombre exact de pierres pour vérifier la densité du serti."],
  [/11\. What is the combined diamant accent total carat weight\?/gi, "11. Quel est le poids total en carats de l'ensemble des diamants d'accent ?"],
  [/Separate accent totals from centre weights\. Review guides at/gi, "Distinguez le poids des diamants d'accent du poids de la pierre centrale. Consultez le guide sur"],
  [/total carat weight in diamant jewellery/gi, "signification du poids total en carats dans la joaillerie"],
  [/12\. What colour and clarity range is stated for accents\?/gi, "12. Quels sont les grades de couleur et de pureté indiqués pour les accents ?"],
  [/Audit stated group parameters\. For grading guides, see/gi, "Vérifiez la gamme de qualité des diamants secondaires. Pour plus de détails, consultez"],
  [/the 4Cs of lab-grown diamants/gi, "les 4 C des diamants de laboratoire"],
  [/13\. Do accents match in visible appearance\?/gi, "13. Les diamants d'accent sont-ils homogènes en apparence ?"],
  [/Ask if sorting steps ensure uniform design colours and sizes\./gi, "Demandez si un tri rigoureux garantit une couleur et une taille uniformes."],
  [/14\. What metal and fineness are used\?/gi, "14. Quel métal et quelle pureté sont utilisés ?"],
  [/Consult alloy percentages and hallmarks\. Read metal guides at/gi, "Vérifiez les poinçons et la teneur en métal précieux. Consultez le guide sur"],
  [/how to check metal used in diamant jewellery/gi, "comment vérifier le métal utilisé dans la joaillerie en diamants"],
  [/15\. What are the jewellery’s complete dimensions and weight\?/gi, "15. Quelles sont les dimensions complètes et le poids du bijou ?"],
  [/Measure band widths, heights, chain drops and total item weights\./gi, "Vérifiez la largeur de l'anneau, la hauteur du serti et le poids total du bijou."],
  [/16\. How does the setting protect the coloured stone\?/gi, "16. Comment la monture protège-t-elle la pierre de couleur ?"],
  [/Check whether bezels shield gem tips from daily impacts\./gi, "Vérifiez si le serti (ex. serti clos) protège les angles de la pierre contre les chocs."],
  [/17\. What parts move, open or detach\?/gi, "17. Quelles parties sont mobiles, s'ouvrent ou se détachent ?"],
  [/Verify hook connections, clasp safety links and hinge points\./gi, "Examinez les fermoirs, huit de sécurité et articulations."],
  [/18\. Is this piece suitable for how I plan to wear it\?/gi, "18. Ce bijou est-il adapté à mon style de vie et à mon port quotidien ?"],
  [/Match gem durability with daily wear schedules\./gi, "Assurez-vous que la dureté de la pierre convient à un port quotidien."],
  [/19\. Can I see front, side, back, macro, body and motion views\?/gi, "19. Puis-je voir des photos de face, de profil, de dos, en porté et en vidéo ?"],
  [/Request multi-angle captures under neutral lighting environments\./gi, "Demandez des visuels sous plusieurs angles et sous un éclairage neutre."],
  [/20\. What type of report is supplied\?/gi, "20. Quel type de certificat est fourni avec le bijou ?"],
  [/Confirm whether documents represent loose gems or finished items\./gi, "Vérifiez si le certificat concerne la pierre nue ou le bijou fini."],
  [/21\. What exact components does the report cover\?/gi, "21. Quels éléments exacts sont couverts par le certificat ?"],
  [/Mounted reports are limited by setting\. For details, see/gi, "Un certificat sur bijou monté comporte des limites. Pour plus de détails, consultez"],
  [/what certified lab-grown diamant jewellery means/gi, "ce que signifie la joaillerie en diamants de laboratoire certifiée"],
  [/22\. Can I verify the report independently\?/gi, "22. Puis-je vérifier le certificat de manière indépendante ?"],
  [/Enter report numbers directly into official lab lookups\./gi, "Saisissez le numéro de rapport directement sur le site officiel du laboratoire gemmologique."],
  [/23\. What is included exactly in the delivered price\?/gi, "23. Qu'est-ce qui est exactement inclus dans le prix livré ?"],
  [/Confirm VAT, duties, shipping fees and local customs responsibilities\./gi, "Vérifiez si la TVA, les frais de douane et la livraison sont inclus."],
  [/24\. Is the item ready-made, made-to-order or custom\?/gi, "24. Le bijou est-il prêt à expédier, fabriqué à la commande ou sur-mesure ?"],
  [/Confirm schedule duration and cancellation limits before paying\./gi, "Vérifiez le délai de fabrication et les conditions d'annulation avant le paiement."],
  [/25\. What are the return, warranty and repair terms for this exact order\?/gi, "25. Quelles sont les conditions de retour, de garantie et de réparation ?"],
  [/Confirm return windows, return shipping coverage and size limitations\./gi, "Confirmez le délai de rétractation et qui prend en charge les frais de retour."],

  // Common UI titles
  [/Buying Questions Guide/gi, "Guide des questions d'achat"],
  [/Gem Identity Verification/gi, "Vérification de l'identité des pierres"],
  [/A list of questions for pierre précieuse jewelry buying/gi, "Une liste de questions pour l'achat de bijoux en pierres précieuses"],
  [/Save written replies with order transaction documents to confirm specification levels\./gi, "Conservez les réponses écrites avec la facture pour confirmer les spécifications."],

  // Image path correction
  [/\/images\/fr\/blog\//g, "/images/blog/"]
];

function translateJsonDeep(obj) {
  if (typeof obj === "string") {
    let res = obj;
    for (const [r, rep] of sentenceMap) {
      res = res.replace(r, rep);
    }
    return res;
  } else if (Array.isArray(obj)) {
    return obj.map(translateJsonDeep);
  } else if (typeof obj === "object" && obj !== null) {
    const res = {};
    for (const k of Object.keys(obj)) {
      res[k] = translateJsonDeep(obj[k]);
    }
    return res;
  }
  return obj;
}

let count = 0;
files.forEach((file) => {
  const filePath = path.join(frBlogsDir, file);
  const json = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const cleaned = translateJsonDeep(json);
  fs.writeFileSync(filePath, JSON.stringify(cleaned, null, 2), "utf-8");
  count++;
});

console.log(`Successfully translated all sentence-level questions in ${count} French blog JSON files!`);
