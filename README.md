# Portfolio — Nahuel Ibarra

Sitio estático (HTML + SCSS/CSS) para portfolio de ilustración y diseño web.
Pensado para hostear en GitHub Pages sin build step: el CSS ya viene
compilado en `styles/style.css`.

## Estructura

```
index.html                 → inicio
paginas/ilustracion.html   → galería de ilustración + "trabajo en proceso" (revista)
paginas/diseno-web.html    → proyecto El Visitante
paginas/contacto.html      → formulario de contacto (estático, sin backend)

scss/                      → fuente SCSS organizada en partials
  utilities/                 variables y mixins
  base/                       tipografía y reset/base
  layout/                     header, nav, footer
  components/                 botones, hero, galería, proyecto, formulario
  main.scss                   entry point que importa todo

styles/style.css           → CSS compilado (el que consumen los .html)
img/ilustracion/           → piezas propias
img/revista/                → avances de la revista de heavy metal
img/site/                  → assets del proyecto El Visitante
```

## Cómo editar

1. Instalá dart-sass si no lo tenés: `npm install -g sass` (o usá `npx sass`).
2. Editá los archivos en `scss/`.
3. Recompilá desde la carpeta del proyecto:
   ```
   npx sass scss/main.scss styles/style.css --no-source-map --style=expanded
   ```
4. Los `.html` ya apuntan a `styles/style.css`, no hace falta tocar nada más.

## Textos e imágenes

Los textos de cada página (bio, descripciones de proyectos, copy de "trabajo
en proceso") son un punto de partida — pensados para que los reescribas con
tu propia voz. Las imágenes están en `img/ilustracion/` y `img/revista/`;
para sumar o sacar piezas de la galería, duplicá un bloque `.galeria__pieza`
en `paginas/ilustracion.html` y cambiá imagen + textos.

## Hostear en GitHub Pages

1. Subí esta carpeta como raíz del repo (o de la rama `gh-pages`).
2. En GitHub → Settings → Pages, elegí la rama y la carpeta raíz.
3. Listo, `index.html` queda como página de inicio.
