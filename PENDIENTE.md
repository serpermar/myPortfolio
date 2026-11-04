# Pendiente antes de publicar

Estado: el sitio compila (`npm run build` ✅) y las 10 rutas responden 200.
Los cambios **no están commiteados**: revísalos con `npm run dev` antes de hacer
push. La web antigua sigue intacta en `legacy/` y en el historial de git.

> De momento lo dejamos **en local**, sin publicar. Cuando decidas subirlo, ojo:
> el `index.html` de la raíz ya no existe (ahora se genera en `dist/`). Si publicas
> con GitHub Pages en modo "deploy from branch", la web se romperá hasta que cambies
> la fuente a **GitHub Actions** o uses Vercel/Netlify. Lee la sección "Desplegar"
> del README antes de subir nada.

Pero hay tres cosas que **solo puedes hacer tú** y que separan "una web bonita"
de "una web que te consigue entrevistas".

---

## 1. El hueco desde octubre de 2025

He cargado tu CV completo: Roomdimensions (may–oct 2025), abnorm media (2022–2023),
Sycai Medical (2022) e Indra (2019–2020). Todo eso ya está en `src/data/site.ts`
con sus responsabilidades reales, y también en `/cv`.

Entre octubre de 2025 y hoy has estado formándote, con proyectos propios y buscando
empleo. Eso ya aparece como **etapa abierta** en la trayectoria (`site.period`), sin
inventar empresas ni fechas: la home y `/cv` muestran "Formación continua y proyectos
propios · Búsqueda activa". Mejor un hueco explicado que un hueco a secas.

Lo que falta, y solo lo sabes tú:

- **Qué cursos has hecho** desde octubre de 2025. Pásame nombre, centro y horas (o
  enlace) y los añado a `education` y al texto de la etapa. Ahora mismo dice "cursos
  de actualización técnica", que es cierto pero no impresiona a nadie.
- **Qué proyectos propios** has hecho en ese tiempo. Si alguno sirve, entra en
  `src/content/projects/` con su repo o demo: es la mejor prueba de que no has
  estado parado.

No he podido leer tu LinkedIn (bloquea el acceso automatizado), así que si ahí hay
algo que no esté en el CV, pásamelo y lo incorporo.

## 2. Repos y demos de los proyectos

Ahora mismo **solo `concurso` tiene enlace**, y es a GitHub. Un proyecto sin demo
ni repositorio es una captura de pantalla, y las capturas no demuestran nada.

En cada fichero de `src/content/projects/`:

| Proyecto | Acción |
|---|---|
| `proyecto-final-daw.md` | **Prioridad máxima.** El de más peso: añade `repo` y `demo`. |
| `pong.md` | Publica el repo (aunque sea un `index.html`). |
| `drag-and-drop.md` | Ídem, o quítalo del listado. |
| `reproductor-de-musica.md` | Ídem. |
| `juego-de-memoria.md` | Ídem. |
| `concurso.md` | Ya tiene repo. Si puedes, añade demo en GitHub Pages. |

Si un proyecto no merece la pena, bórralo. **Cuatro proyectos buenos valen más
que seis mediocres.** El listado se regenera solo.

También revisa `context:` en cada uno: ahora mismo he puesto `Personal` en los
que no sé si fueron de clase. Cámbialo si me equivoqué.

## 3. Formulario de contacto

Ahora mismo el formulario está **desactivado a propósito** (no hay código que
fingir que envía): la sección muestra el email y LinkedIn como alternativa.

Para activarlo:

1. Entra en https://web3forms.com y crea una clave gratis con tu email (30 s, sin tarjeta).
2. Pega la clave en `src/data/site.ts`:

```ts
web3formsKey: 'tu-clave-aqui',
```

Al hacerlo, el formulario aparece automáticamente en la home con validación y
mensaje de éxito. Si no lo haces, la web sigue funcionando: nadie ve un formulario
roto.

---

## Después de lo anterior

- [ ] **Publicar.** Elegiste dejarlo en local por ahora. Cuando quieras, la vía
      más rápida es Vercel o Netlify (conectas el repo y detectan Astro solos); si
      prefieres GitHub Pages, hay que añadir un workflow y cambiar la fuente en los
      ajustes del repo.
- [ ] **Dominio propio.** `sergipm.dev` ~12 €/año. Si eres estudiante, el
      [GitHub Student Pack](https://education.github.com/pack) incluye uno gratis
      en Namecheap. Cambia `site` en `astro.config.mjs` y `public/robots.txt`.
- [x] ~~**Regenerar el CV en PDF.**~~ Hecho: `public/Sergi-Perez-Mari-CV.pdf` es
      ya tu CV actualizado y coincide con lo que muestra la web.
- [ ] **Revisar `summary` de los proyectos.** Los he escrito a partir del título y
      el stack; son honestos pero genéricos. Tú puedes hacerlos específicos.
- [ ] **Casos de estudio.** Cada `.md` tiene una plantilla comentada al final.
      Rellenar dos bien (el proyecto final y Pong) ya marca diferencia.
- [x] ~~**Idiomas del CV**~~ Hecho: Catalán y Castellano nativos, Inglés B2,
      tal como pone tu CV. Ya se muestran en la home y en `/cv`.
- [ ] **GitHub activo.** El repo tiene 2 commits y es el portfolio. Un commit
      semanal de algo real vale más que cualquier animación de esta web.
- [ ] Borrar la carpeta `legacy/` cuando ya no necesites la web antigua
      (sigue accesible en el historial de git).

## Sugerencias que no he hecho a propósito

- **Blog / notas técnicas.** Sube mucho el nivel percibido, pero exige constancia.
  Mejor no tenerlo que tenerlo vacío.
- **Versión en inglés.** Recomendable si apuntas a remoto internacional. Se hace
  con `astro:i18n` y duplica el contenido: mejor cuando la versión española esté
  cerrada.
- **Analytics.** Plausible o Umami (sin cookies) si quieres saber si alguien entra.
  No lo instales antes de tener contenido real.
