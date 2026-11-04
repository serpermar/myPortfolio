/**
 * Genera public/og.png (1200x630) para las tarjetas sociales.
 * Uso: node scripts/generate-og.mjs
 * No hace falta ejecutarlo en cada build: el PNG resultante se versiona.
 */
import sharp from 'sharp';

const W = 1200;
const H = 630;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#100f0e"/>
      <stop offset="100%" stop-color="#0a0a0b"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.86" cy="0.12" r="0.7">
      <stop offset="0%" stop-color="#ff6a3d" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="#ff6a3d" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M48 0H0V48" fill="none" stroke="#ffffff" stroke-opacity="0.045" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <rect x="0" y="0" width="${W}" height="6" fill="#ff6a3d"/>

  <g font-family="Consolas, 'Courier New', monospace" font-size="19" fill="#8a857a" letter-spacing="4">
    <text x="80" y="112">SERGI PÉREZ MARÍ — BADALONA, BARCELONA</text>
  </g>

  <g font-family="Georgia, 'Times New Roman', serif" fill="#f4f1ea">
    <text x="76" y="300" font-size="86">Desarrollador</text>
    <text x="76" y="392" font-size="86" font-style="italic" fill="#ff8a63">full stack</text>
  </g>

  <g font-family="'Segoe UI', Arial, sans-serif" font-size="26" fill="#a5a094">
    <text x="80" y="486">Backend, frontend y todo lo que hay en medio.</text>
  </g>

  <g font-family="Consolas, 'Courier New', monospace" font-size="17" fill="#726d63" letter-spacing="3">
    <text x="80" y="566">JAVA · C# · PHP · JAVASCRIPT · REACT · MYSQL</text>
  </g>

  <rect x="80" y="592" width="1040" height="1" fill="#ffffff" fill-opacity="0.09"/>
</svg>`;

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile('public/og.png');

console.log('public/og.png generado');
