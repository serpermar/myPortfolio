// scripts/screenshots.mjs
import { generate } from 'portfolio-shot';

// Rellena esto cuando cada proyecto tenga su URL pública de Vercel/Netlify
const externalProjects = [
    // { name: 'communityhub', url: 'https://communityhub.vercel.app' },
    // { name: 'apigame', url: 'https://apigame.vercel.app' },
    // { name: 'guessverse', url: 'https://guessverse.vercel.app' },
];

for (const project of externalProjects) {
    console.log(`Capturando ${project.name}…`);
    await generate({
        url: project.url,
        output: `./public/screenshots/${project.name}`,
        pages: [{ path: '/', name: 'home' }],
    });
}

if (externalProjects.length === 0) {
    console.log('No hay proyectos externos configurados todavía.');
}