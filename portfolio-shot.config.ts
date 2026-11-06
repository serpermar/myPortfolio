// portfolio-shot.config.mjs
export default {
  url: 'http://localhost:4321',
  output: './public/screenshots',
  pages: [
    { path: '/', name: 'home' },
    { path: '/proyectos', name: 'proyectos' },
    { path: '/proyectos/communityhub', name: 'communityhub' },
    { path: '/proyectos/apigame', name: 'apigame' },
    { path: '/proyectos/guessverse', name: 'guessverse' },
  ],
};