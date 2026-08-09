const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '..', 'src', 'app', 'blog', 'what-makes-lab-grown-diamonds-different', 'page.tsx');
let content = fs.readFileSync(targetFile, 'utf8');

// Replace unescaped inner quotes like: es "bueno". or “Excelente” or "ojo limpio" or "lechoso"
content = content.replace(/"text":\s*"Ninguna fila decide si un diamante es "bueno"\./g, '"text": "Ninguna fila decide si un diamante es \\"bueno\\".');
content = content.replace(/"text":\s*"antes de tratar “Excelente” como una garantía visual completa\."/g, '"text": "antes de tratar «Excelente» como una garantía visual completa."');
content = content.replace(/"text":\s*"El término "ojo limpio" no es una calificación oficial\./g, '"text": "El término \\"ojo limpio\\" no es una calificación oficial.');
content = content.replace(/"text":\s*"Términos como “lechoso”, “nebuloso” o “turbio” a menudo/g, '"text": "Términos como «lechoso», «nebuloso» o «turbio» a menudo');
content = content.replace(/"text":\s*"“A medida que crece” generalmente significa/g, '"text": "«A medida que crece» generalmente significa');

fs.writeFileSync(targetFile, content, 'utf8');
console.log("FIXED UNESCAPED QUOTES!");
