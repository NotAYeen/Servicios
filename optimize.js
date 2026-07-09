const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
if (html.includes('<link rel="stylesheet" href="output.css">')) {
  const outputCss = fs.readFileSync('output.css', 'utf8');
  html = html.replace('<link rel="stylesheet" href="output.css">', '<style>' + outputCss + '</style>');
}
if (html.includes('<link rel="stylesheet" href="styles.css?v=14">')) {
  const stylesCss = fs.readFileSync('styles.css', 'utf8');
  html = html.replace('<link rel="stylesheet" href="styles.css?v=14">', '<style>' + stylesCss + '</style>');
}
html = html.replace('src="assets/yo1-small.webp"', 'src="assets/yo1-small.webp" srcset="assets/yo1-small.webp 1x, assets/yo1.webp 2x"');
html = html.replace('src="assets/chatbot-small.webp"', 'src="assets/chatbot-small.webp" srcset="assets/chatbot-small.webp 1x, assets/chatbot.webp 2x"');
const gfontLink = '<link href="https://fonts.googleapis.com/css2?family=Gruppo&family=Kalnia:wght@100..700&family=Red+Hat+Text:wght@300..700&display=swap" rel="stylesheet">';
const newGfontLink = `<link rel="preload" href="https://fonts.googleapis.com/css2?family=Gruppo&family=Kalnia:wght@100..700&family=Red+Hat+Text:wght@300..700&display=swap" as="style">
<link href="https://fonts.googleapis.com/css2?family=Gruppo&family=Kalnia:wght@100..700&family=Red+Hat+Text:wght@300..700&display=swap" rel="stylesheet" media="print" onload="this.media='all'">
<noscript><link href="https://fonts.googleapis.com/css2?family=Gruppo&family=Kalnia:wght@100..700&family=Red+Hat+Text:wght@300..700&display=swap" rel="stylesheet"></noscript>`;
html = html.replace(gfontLink, newGfontLink);
fs.writeFileSync('index.html', html);
console.log('Optimizations applied successfully.');
