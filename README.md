# Portfolio — Sergi Pérez Marí

Portfolio personal construido con **Astro 7** y **React** (una sola isla, para el
filtro de proyectos). Sin base de datos, sin CMS, sin servidor: el contenido vive
en ficheros Markdown versionados con el código.

## Arrancar

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview  # sirve dist/ para comprobar el resultado final
```

## Estructura

```
src/
├─ content/
│  └─ projects/          ← un .md por proyecto (esto es el "CMS")
├─ data/site.ts          ← datos personales, experiencia, formación, stack
├─ data/github.ts        ← repos públicos de GitHub (API + copia de respaldo)
├─ layouts/BaseLayout.astro
├─ components/
│  ├─ Header.astro  Hero.astro  ProjectCard.astro
│  ├─ Experience.astro  About.astro  Contact.astro
│  ├─ GitHubRepos.astro      ← listado automático de repositorios
│  └─ ProjectsExplorer.tsx   ← isla React (filtro + búsqueda)
├─ pages/
│  ├─ index.astro
│  ├─ proyectos/index.astro
│  ├─ proyectos/[slug].astro
│  ├─ cv.astro
│  └─ 404.astro
└─ styles/global.css     ← sistema de diseño (tokens CSS, claro/oscuro)
```

## Añadir un proyecto

1. Copia `docs/plantilla-proyecto.md` a `src/content/projects/mi-proyecto.md`.
2. Rellena el frontmatter (`title`, `summary`, `year`, `stack`, `repo`, `demo`…).
3. Guarda la captura en `src/assets/projects/` y apunta a ella con ruta relativa.
4. `npm run dev`. La página se genera sola en `/proyectos/mi-proyecto`.

Si el esquema del frontmatter no cuadra, el build **falla con un error claro**:
así no se publica un proyecto a medias.

- `featured: true` → aparece en la home (máximo 3, ordenados por `order`).
- `order` → posición en el listado y en el paginador anterior/siguiente.
- Sin `repo` ni `demo`, la tarjeta muestra "Sin enlace público".

## Repositorios de GitHub

La página `/proyectos` incluye debajo una sección que se genera sola con los
repositorios públicos de `serpermar`, excluyendo `myPortfolio`. Se leen de la API
de GitHub en cada build (`src/data/github.ts`), así que no hay que actualizarla a
mano: al hacer push de un repo nuevo, aparece en el siguiente despliegue.

- Si la API no responde (sin red o rate limit), se usa la copia local `FALLBACK`
  del mismo fichero. El build nunca se rompe por GitHub.
- Para evitar el límite de 60 peticiones/hora, define `GITHUB_TOKEN` en el
  entorno del build (Vercel/Netlify) o en un `.env` local. Es opcional.
- Los nombres se pueden retocar en `DISPLAY_NAMES` y los repos a ocultar en
  `EXCLUDED`, ambos en `src/data/github.ts`.

### Portadas de los repos

Cada tarjeta usa la misma estructura que las fichas de proyecto (portada 16:10,
título, resumen, tags y enlaces). Por defecto la portada es la imagen social que
GitHub genera para el repositorio.

Para usar una captura propia, deja el fichero en `src/assets/projects/github/`
con el nombre exacto del repo y sin extensión en el nombre base:

```
src/assets/projects/github/controlGastos.png
src/assets/projects/github/Footprint-Mappa.webp
```

Se detecta automáticamente, sin importar nada. Formatos: `.png`, `.jpg`,
`.jpeg`, `.webp`, `.avif`. Si la imagen social de GitHub falla, la tarjeta
mantiene un fondo con el nombre del repo como respaldo.

## Desplegar

**Opción recomendada — Vercel o Netlify.** Importas el repo y detectan Astro solo:
build `npm run build`, output `dist`. Sin configuración extra.

**Dominio propio.** Cambia `site` en `astro.config.mjs` por tu dominio, apunta el
DNS del proveedor y listo. Es lo que más credibilidad da por lo que cuesta.

**GitHub Pages en `serpermar.github.io/myPortfolio`.** Funciona, pero al vivir en
un subdirectorio hay que declarar `base: '/myPortfolio'` y prefijar los enlaces
internos. Si vas por aquí, pídemelo y lo adapto: son 10 minutos y es fácil
dejarlo a medias.

Después de desplegar, actualiza `public/robots.txt` y la URL del sitemap si el
dominio no es `sergipm.dev`.

## Detalles que no se ven pero están

- **Tema claro/oscuro** sin parpadeo: script inline en `<head>` que aplica la
  preferencia antes del primer pintado.
- **Imágenes** optimizadas a WebP con `srcset` y dimensiones explícitas (sin CLS).
- **Accesibilidad**: skip link, foco visible, contraste AA, navegación por teclado.
- **SEO**: canonical, Open Graph, Twitter Card, JSON-LD de `Person`, sitemap.
- **Movimiento reducido** respetado (`prefers-reduced-motion`).
- Las animaciones de scroll usan `animation-timeline: view()`: donde no existe,
  simplemente no hay animación.

## Tipografía

- **Texto y párrafos:** Inter Variable.
- **Títulos, navegación, botones y enlaces destacados:** **Star Jedi** de
  [Boba Fonts](https://www.dafont.com/star-jedi.font), la fuente fan que imita el
  logo de Star Wars. El archivo `src/assets/fonts/starjedi.woff2` es una
  conversión del TTF original.
- **Metadatos y etiquetas:** mono del sistema.

> **Licencia:** Star Jedi es de uso **personal**. No está permitido su uso
> comercial sin permiso del autor. Si el portfolio pasa a tener fines
> comerciales, sustitúyela por una alternativa libre como Orbitron.

Para cambiar la fuente de títulos, edita `--font-display` y el `@font-face` en
`src/styles/global.css`. El texto de los párrafos sigue siempre en Inter.

Star Jedi tiene dos alfabetos a la misma altura: las mayúsculas decorativas del
logo se pisan entre sí y las minúsculas son las formas limpias. Por eso los
títulos **no** usan `text-transform: uppercase` y llevan `letter-spacing: 0.06em`.
No vuelvas a forzar mayúsculas en elementos con `var(--font-display)`.

## Regenerar la imagen social

```bash
npm run og
```

Genera `public/og.png` (1200×630) desde `scripts/generate-og.mjs`. Edita el SVG
del script si cambias el mensaje.
