# Star Jedi

Fuente: **Star Jedi** de Boba Fonts.
Origen: https://www.dafont.com/star-jedi.font

Uso **personal**. No está permitido su uso comercial sin permiso del autor.
Para un portfolio personal está bien; si algún día el sitio se usa con fines
comerciales, sustitúyela por una alternativa libre como Orbitron.

El archivo `starjedi.woff2` es una conversión del `Starjedi.ttf` original para
reducir peso. La fuente se aplica solo a títulos, navegación y elementos
destacados; el texto de los párrafos sigue en Inter.

## Por qué se fuerza `text-transform: lowercase`

Star Jedi trae dos alfabetos con la misma altura de mayúscula
(`x-height` = `cap-height` = 1444/2048), pero con métricas distintas:

- **Mayúsculas:** las formas decorativas del logo. Tienen *bearings* negativos
  y desbordan el ancho de la letra: la K, R, N y Q invaden hasta `0,2em` la
  letra siguiente, así que en texto corrido se montan unas sobre otras.
- **Minúsculas:** el mismo alfabeto, con las formas limpias y sin desbordes
  (máximo `0,07em`). La `i` es una barra, la `t` una T, etc. Se leen igual
  como mayúsculas porque van a altura de caja alta.

Por eso todo lo que usa `var(--font-display)` lleva `text-transform: lowercase`
y un `letter-spacing` de `0.08em`: se pinta el juego limpio y las 26 letras
(con tildes y `ñ`) quedan separadas. El texto del HTML no cambia, solo su
representación, así que el buscador y los lectores de pantalla siguen leyendo
la caja original.

No añadas `text-transform: uppercase` a elementos con `var(--font-display)`:
volverías a las formas del logo y a los solapamientos.
