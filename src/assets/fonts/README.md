# Star Jedi

Fuente: **Star Jedi** de Boba Fonts.
Origen: https://www.dafont.com/star-jedi.font

Uso **personal**. No está permitido su uso comercial sin permiso del autor.
Para un portfolio personal está bien; si algún día el sitio se usa con fines
comerciales, sustitúyela por una alternativa libre como Orbitron.

El archivo `starjedi.woff2` es una conversión del `Starjedi.ttf` original para
reducir peso. La fuente se aplica solo a títulos, navegación y elementos
destacados; el texto de los párrafos sigue en Inter.

## Por qué no se fuerza `text-transform: uppercase`

Star Jedi trae dos alfabetos con la misma altura de mayúscula:

- **Mayúsculas:** las formas decorativas del logo. Algunas (R, N, K, Q, I…)
  invaden la letra siguiente y a tamaño pequeño se leen mal.
- **Minúsculas:** las formas limpias, pensadas para texto corrido.

Por eso los títulos usan la caja natural del texto (sin `text-transform`) y un
`letter-spacing` de `0.06em`. Así se aprovechan las formas limpias sin perder el
aspecto de Star Wars. No añadas `text-transform: uppercase` a los elementos con
`var(--font-display)`.
