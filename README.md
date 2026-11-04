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
├─ layouts/BaseLayout.astro
├─ components/
│  ├─ Header.astro  Hero.astro  ProjectCard.astro
│  ├─ Experience.astro  About.astro  Contact.astro
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

## Regenerar la imagen social

```bash
npm run og
```

Genera `public/og.png` (1200×630) desde `scripts/generate-og.mjs`. Edita el SVG
del script si cambias el mensaje.
