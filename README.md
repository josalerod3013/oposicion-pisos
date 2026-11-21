# Pisos · App de estudio

App web instalable (PWA) para estudiar el temario de camarera de pisos con resúmenes, tests, simulacros y tarjetas. Funciona sin conexión y guarda el progreso en el propio móvil.

Todo el código está en `docs/`. No hace falta compilar nada.

## Probar en el ordenador

```sh
cd docs
python -m http.server 8765
```

Abre http://localhost:8765.

## Publicar e instalar en el móvil

Para poder instalar una PWA, tiene que estar servida por HTTPS. Hay dos opciones:

- **Netlify Drop**: arrastra la carpeta `docs/` a https://app.netlify.com/drop.
- **GitHub Pages** (lo que se usa ahora): se sirve la carpeta `docs/` de la rama `main`. Cada `git push` actualiza la web en 1-2 minutos.

En el móvil:

- **Android (Chrome)**: abre la URL y pulsa «Instalar».
- **iPhone (Safari)**: toca Compartir y luego «Añadir a pantalla de inicio».

## Añadir o corregir contenido

- `docs/data/temario.js`: los resúmenes de cada tema.
- `docs/data/preguntas.js`: las preguntas. El formato es `[enunciado, [CORRECTA, …], explicación, página]`. Añade las preguntas nuevas **al final** de la lista de su tema para no descolocar el progreso guardado.
- `docs/data/tarjetas.js`: las tarjetas de repaso, con el formato `[concepto, definición]`.

Cada vez que publiques cambios, sube la versión `VERSION` en `docs/sw.js` para que los móviles descarguen la nueva.

Los PDF de los libros no se suben, porque tienen copyright. La app solo contiene resúmenes y preguntas de elaboración propia.
