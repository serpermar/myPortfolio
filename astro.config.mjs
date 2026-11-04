import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// Cambia `site` por tu dominio final. Si publicas en GitHub Pages sin dominio
// propio, será algo como 'https://serpermar.github.io' + `base: '/myPortfolio'`.
export default defineConfig({
  site: 'https://sergipm.dev',
  integrations: [react(), sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
