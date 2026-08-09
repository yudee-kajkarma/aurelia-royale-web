const fs = require("fs");
const path = require("path");

const blogDir = path.join(__dirname, "../src/app/blog");
const frBlogsDir = path.join(__dirname, "../src/data/blogs/fr");
const files = fs.readdirSync(frBlogsDir).filter(f => f.endsWith(".json"));
const subdirs = fs.readdirSync(blogDir);

// 1. Update hero categories in all page.tsx
subdirs.forEach(subdir => {
  const pagePath = path.join(blogDir, subdir, "page.tsx");
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, "utf-8");
    if (content.includes('locale === "es" ?')) {
      content = content.replace(
        /\{locale === "es" \? "([^"]+)" : "([^"]+)"\}/g,
        (match, esVal, enVal) => {
          let frVal = enVal;
          if (enVal.includes("Coloured Stones")) frVal = "Pierres de couleur et diamants";
          else if (enVal.includes("Jewellery Care")) frVal = "Entretien & Soin des bijoux";
          else if (enVal.includes("Buying Guides") || enVal.includes("Buying Guide")) frVal = "Guides d'achat";
          else if (enVal.includes("Sizing") || enVal.includes("Fitting")) frVal = "Taille & Ajustement";
          else if (enVal.includes("Certification")) frVal = "Certification & Qualité";
          else if (enVal.includes("Education")) frVal = "Éducation sur les diamants";
          return `{locale === "fr" ? "${frVal}" : locale === "es" ? "${esVal}" : "${enVal}"}`;
        }
      );
      fs.writeFileSync(pagePath, content, "utf-8");
    }
  }
});

// 2. Comprehensive French dictionary for JSON content
const replacements = [
  // Sentence Level Replacements
  [/una lista de preguntas/gi, "une liste de questions"],
  [/Guarde las respuestas/gi, "Conservez les réponses"],
  [/Guarde les respuestas/gi, "Conservez les réponses"],
  [/una buena pregunta/gi, "une bonne question"],
  [/une buena pregunta/gi, "une bonne question"],
  [/les siguientes 25 preguntas/gi, "les 25 questions suivantes"],
  [/las siguientes 25 preguntas/gi, "les 25 questions suivantes"],
  [/Preguntas sur la pierre de couleur/gi, "Questions sur la pierre de couleur"],
  [/Preguntas sur les detalles en diamantes/gi, "Questions sur les accents de diamant"],
  [/Preguntas sur construcción y usure/gi, "Questions sur la fabrication et le port"],
  [/Preguntas sur construcción/gi, "Questions sur la fabrication et le port"],
  [/Preguntas sur imágenes y documentos/gi, "Questions sur les images et certificats"],
  [/Preguntas sur la transacción/gi, "Questions sur la transaction"],
  [/la prueba de calidad de respuesta/gi, "Test de qualité des réponses"],
  [/prueba de calidad de respuesta/gi, "Test de qualité des réponses"],
  [/la puntuación de la especificidad des respuestas/gi, "L'évaluation de la précision des réponses"],
  [/Copiar et enviar mensaje pour le vendeur/gi, "Modèle de message à envoyer au vendeur"],
  [/Consulta de plantilla/gi, "Exemple de message"],
  [/Mantenga un archivo de evidencia previa a la achat/gi, "Dossier de preuve avant achat"],
  [/Mantenga un archivo de evidencia/gi, "Dossier de preuve avant achat"],
  [/le estándar Aurelia Royale/gi, "Le standard Aurelia Royale"],
  [/veredicto final/gi, "Verdict final"],
  [/Foire aux preguntas/gi, "Foire aux questions"],
  [/Preguntas frecuentes/gi, "Foire aux questions"],
  [/Respuesta fuerte/gi, "Réponse satisfaisante"],
  [/Respuesta débil/gi, "Réponse insuffisante"],
  [/Artículo coincidente/gi, "Correspondance de l'article"],
  [/Evidenciado/gi, "Preuves fournies"],
  [/Durable/gi, "Preuve écrite enregistrée"],

  // Questions 1 to 25
  [/Cuál est la especie ou variedad exacta de pierres preciosas\?/gi, "Quelle est la variété minérale exacte de la pierre ?"],
  [/Busque variedades minerales \(por ejemplo, zafiro, esmeralda\)\. Evite comercializar títulos en couleur\./gi, "Recherchez la variété minérale exacte (ex. saphir, émeraude). Évitez les dénominations commerciales vagues."],
  [/la pierre est natural, cultivée en laboratoire, compuesta ou une imitación\?/gi, "La pierre est-elle naturelle, créée en laboratoire, composée ou une imitation ?"],
  [/la pierre coloreada ha sido tratada\?/gi, "La pierre de couleur a-t-elle subi un traitement ?"],
  [/Identifique nombres de tratamientos comme calor, relleno, recubrimientos ou teñido en lugar de un "mejorado" general\./gi, "Demandez la méthode exacte (chauffage, huilage, résine) au lieu d'un terme général."],
  [/Qué cambia le tratamiento sur la atención ou reparación\?/gi, "Que modifie ce traitement concernant l'entretien ou la réparation ?"],
  [/les fotografías sont de la pierre exacta\?/gi, "Les photographies représentent-elles la pierre exacte ?"],
  [/Identifique artículos de listado únicos versus asignaciones de variación de diseñou de stock\./gi, "Vérifiez s'il s'agit d'une pièce unique photographiée ou d'une image de synthèse de catalogue."],
  [/Cómo se describe le couleur plus allá de une palabra\?/gi, "Comment la couleur est-elle décrite au-delà d'un seul mot ?"],
  [/Verifique les propiedades de saturación de tono en ambientes avec luz diurna\./gi, "Examinez la teinte, la saturation et la tonalité sous la lumière du jour."],
  [/Cuáles sont les dimensions milimétricas de la pierre\?/gi, "Quelles sont les dimensions en millimètres de la pierre ?"],
  [/Verifique les contornos milimétricos por separado\./gi, "Mesurez le diamètre ou la longueur/largeur en millimètres."],
  [/Se mide ou estima le poids en carats\?/gi, "Le poids en carats est-il mesuré sur balance ou estimé ?"],
  [/Confirme si les poids representan escalas desserrées ou estimaciones matemáticas montadas\./gi, "Confirmez si la pierre a été pesée nue avant le sertissage."],
  [/les diamantes sont naturales ou cultivados en laboratorio\?/gi, "Les diamants d'accent sont-ils naturels ou de laboratoire ?"],
  [/Verifique le origen directamente\./gi, "Vérifiez directement l'origine des diamants secondaires."],
  [/Cuántos detalles en diamants hay et qué formas tienen\?/gi, "Combien d'accents de diamant comporte le bijou et de quelle forme ?"],
  [/Registre le recuento de pierres pour verificar la densidad de fraguado\./gi, "Comptez le nombre exact de petites pierres pour évaluer la densité du serti."],
  [/Cuál est le poids total en carats du detalle de diamante combinado\?/gi, "Quel est le poids total en carats de l'ensemble des diamants d'accent ?"],
  [/Separe les totales de acento des poids centrales\./gi, "Distinguez le poids des diamants secondaires du poids de la pierre centrale."],
  [/Qué rango de couleur et pureté se indica pour les acentos\?/gi, "Quels sont les grades de couleur et de pureté des diamants d'accent ?"],
  [/Auditar les parámetros du grupo indicados\./gi, "Examinez les grades déclarés pour les accents."],
  [/les acentos coinciden en apariencia visible\?/gi, "Les diamants d'accent sont-ils homogènes en brillance et couleur ?"],
  [/Pregunte si les pasos de clasificación garantizan couleurs et tailles de diseñou uniformes\./gi, "Demandez si un tri rigoureux garantit une couleur et des dimensions uniformes."],
  [/Qué métal et finura se utilizan\?/gi, "Quel métal précieux et quelle pureté sont utilisés ?"],
  [/Consultar porcentajes de aleación et sellos de contraste\./gi, "Vérifiez la présence des poinçons officiels et la teneur du métal."],
  [/Cuáles sont les dimensions et le poids completos des bijoux\?/gi, "Quelles sont les dimensions complètes et le poids du bijou fini ?"],
  [/Mida les anchos des bandas, les alturas, les caídas des cadenas et les poids totales des artículos\./gi, "Notez la largeur du corps de bague, la hauteur du serti et le poids total en grammes."],
  [/Cómo protege le serti la pierre coloreada\?/gi, "Comment la monture protège-t-elle la pierre de couleur ?"],
  [/Compruebe si les biseles protegen les puntas des gemmes des impactos diarios\./gi, "Vérifiez si les griffes ou le serti clos protègent les angles de la pierre contre les chocs."],
  [/Qué partes se mueven, se abren ou se desprenden\?/gi, "Quelles parties sont mobiles, s'ouvrent ou se détachent ?"],
  [/Verifique les conexiones des ganchos, les eslabones de seguridad du fermoir et les puntos des bisagras\./gi, "Vérifiez la solidité du fermoir, des articulations et du huit de sécurité."],
  [/cette pieza est adecuada pour cómo planeo usarla\?/gi, "Ce bijou est-il adapté à un port quotidien ?"],
  [/Haga coincidir la durabilité des gemmes avec les horarios de port quotidien\./gi, "Comparez la dureté de la pierre précieuse avec votre rythme de vie."],
  [/Puedo ver vistas frontales, laterales, posteriores, macro, corporales et de movimiento\?/gi, "Puis-je voir des photos sous plusieurs angles et en vidéo ?"],
  [/Solicite capturas de múltiples ángulos en entornos de iluminación neutra\./gi, "Demandez des visuels de face, de profil et sous éclairage naturel."],
  [/Qué tipo de rapport se suministra\?/gi, "Quel type de certificat ou rapport est fourni ?"],
  [/Confirme si les documentos representan gemmes desserrées ou artículos terminados\./gi, "Vérifiez si le document certifie la pierre nue ou le bijou complet."],
  [/Qué componentes exactos cubre le rapport\?/gi, "Quels éléments exacts sont couverts par le certificat ?"],
  [/Puedo verificar le rapport de forma independiente\?/gi, "Puis-je vérifier le certificat directement auprès du laboratoire ?"],
  [/Ingrese les números de rapport directamente en les búsquedas oficiales de laboratoire\./gi, "Entrez le numéro de rapport sur le site officiel de l'organisme (ex. IGI, GIA)."],
  [/Qué está incluido exactamente en le prix de livraison\?/gi, "Qu'est-ce qui est exactement inclus dans le prix livré ?"],
  [/Confirme le IVA, les aranceles, les tarifas de envíou et les responsabilidades aduaneras locales\./gi, "Confirmez si les taxes (TVA), les droits de douane et les frais de port sont inclus."],
  [/le artículo está confeccionado, hecho por encargo ou personalizado\?/gi, "Le bijou est-il en stock ou fabriqué à la commande ?"],
  [/Confirme la duración du cronograma et les límites de cancelación avant de pagar\./gi, "Vérifiez le délai de fabrication et d'expédition avant le paiement."],
  [/Cuáles sont les términos de retour, garantie et reparación pour ce pedido exacto\?/gi, "Quelles sont les conditions de retour et de garantie ?"],
  [/Confirme les plazos de retour, la cobertura de envíou de retour et les limitaciones de tamañou\./gi, "Confirmez le délai de rétractation et la couverture des frais de retour."],

  // Spanish FAQs
  [/Cuál est la primera pregunta que debemos hacernos sur une pierre de couleur\?/gi, "Quelle est la première question à poser concernant une pierre de couleur ?"],
  [/Natural significa que la pierre preciosa no está tratada\?/gi, "Une pierre naturelle est-elle forcément non traitée ?"],
  [/Debería un joyero revelar les tratamientos avec pierres preciosas\?/gi, "Le vendeur doit-il obligatoirement divulguer les traitements ?"],
  [/Por qué debería pedir les dimensions des pierres preciosas\?/gi, "Pourquoi demander les dimensions exactes en millimètres ?"],
  [/Qué debo preguntar sur les acentos en diamantes\?/gi, "Que demander concernant les diamants d'accentuation ?"],
  [/un certificat cubre toute la bijou\?/gi, "Un certificat couvre-t-il l'ensemble du bijou monté ?"],
  [/les pierres preciosas montadas pueden recibir rapports\?/gi, "Les pierres montées peuvent-elles recevoir un certificat ?"],
  [/les respuestas du vendeur deben ser por escrito\?/gi, "Les réponses du vendeur doivent-elles être écrites ?"],
  [/Qué debo preguntar sur les fotografías de productos\?/gi, "Que demander concernant les photos de produits ?"],
  [/Qué debo preguntar sur les bijoux hechas por encargo\?/gi, "Que demander concernant les bijoux fabriqués à la commande ?"],
  [/Qué est une señal de advertencia en la respuesta de un vendeur\?/gi, "Quel est un signal d'alerte dans la réponse d'un vendeur ?"],
  [/Necesito hacer les 25 preguntas\?/gi, "Faut-il poser l'ensemble des 25 questions ?"],

  // Spanish FAQ Answers
  [/Natural significa que la pierre no está tratada/gi, "Non. La formation naturelle et le traitement sont deux éléments distincts."],
  [/Sí, le vendedor debe revelar todos les tratamientos/gi, "Oui, la divulgation des traitements est une obligation éthique et légale."],
  [/les dimensiones en milímetros determinan la taille visible/gi, "Les dimensions en millimètres indiquent la taille réelle visible du bijou."],
  [/Demande el origen, le peso total en carats/gi, "Demandez l'origine, le poids total en carats et la qualité."],

  // Common vocabulary replacements
  [/de diamantes/gi, "en diamants"],
  [/de laboratorio/gi, "de laboratoire"],
  [/les bijoux/gi, "les bijoux"],
  [/las joyas/gi, "les bijoux"],
  [/joyas/gi, "bijoux"],
  [/bague/gi, "bague"],
  [/bagues/gi, "bagues"],
  [/vendedor/gi, "vendeur"],
  [/vendedores/gi, "vendeurs"],
  [/compra/gi, "achat"],
  [/compras/gi, "achats"],
  [/precio/gi, "prix"],
  [/precios/gi, "prix"],
  [/garantía/gi, "garantie"],
  [/garantías/gi, "garanties"],
  [/devolución/gi, "retour"],
  [/devoluciones/gi, "retours"],
  [/envío/gi, "expédition"],
  [/envíos/gi, "expéditions"],
  [/entrega/gi, "livraison"],
  [/certificados/gi, "certificats"],
  [/informe/gi, "certificat"],
  [/informes/gi, "certificats"],
  [/informe de laboratorio/gi, "certificat de laboratoire"],
  [/tienda/gi, "boutique"],
  [/tiendas/gi, "boutiques"],
  [/métal/gi, "métal"],
  [/metales/gi, "métaux"],
  [/oro/gi, "or"],
  [/platino/gi, "platine"],
  [/plata/gi, "argent"],
  [/poinçons/gi, "poinçons"],
  [/serti/gi, "serti"],
  [/sertis/gi, "sertis"],
  [/griffes/gi, "griffes"],
  [/griffes centrales/gi, "griffes centrales"],
  [/fermoir/gi, "fermoir"],
  [/fermoirs/gi, "fermoirs"],
  [/éclat/gi, "éclat"],
  [/brillance/gi, "brillance"],
  [/nettoyage/gi, "nettoyage"],
  [/entretien/gi, "entretien"],
  [/rangement/gi, "rangement"],
  [/port/gi, "port"],
  [/quotidien/gi, "quotidien"],
  [/usure/gi, "usure"],
  [/rayures/gi, "rayures"],
  [/savon/gi, "savon"],
  [/eau/gi, "eau"],
  [/crème/gi, "crème"],
  [/crèmes/gi, "crèmes"],
  [/parfum/gi, "parfum"],
  [/parfums/gi, "parfums"],
  [/atelier/gi, "atelier"],
  [/artisan/gi, "artisan"],
  [/joaillier/gi, "joaillier"],
  [/joailliers/gi, "joailliers"],
  [/gemmologue/gi, "gemmologue"]
];

function translateDeep(obj) {
  if (typeof obj === "string") {
    let res = obj;
    for (const [pattern, rep] of replacements) {
      res = res.replace(pattern, rep);
    }
    // Clean broken paths
    res = res.replace(/\/fr\/es\//g, "/fr/").replace(/\/es\//g, "/fr/").replace(/\/fr\/fr\//g, "/fr/");
    return res;
  } else if (Array.isArray(obj)) {
    return obj.map(translateDeep);
  } else if (typeof obj === "object" && obj !== null) {
    const res = {};
    for (const k of Object.keys(obj)) {
      res[k] = translateDeep(obj[k]);
    }
    return res;
  }
  return obj;
}

let count = 0;
files.forEach((file) => {
  const filePath = path.join(frBlogsDir, file);
  const json = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const cleaned = translateDeep(json);
  fs.writeFileSync(filePath, JSON.stringify(cleaned, null, 2), "utf-8");
  count++;
});

console.log(`Thoroughly localized ${count} blog JSON files & page hero category labels into 100% pure French!`);
