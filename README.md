# 22 — experiencia de cumpleaños

Página de cumpleaños interactiva en HTML + CSS + JS puro (sin frameworks, sin build). Abre `index.html` en cualquier navegador y funciona.

## Cómo personalizarla

Todo el contenido editable vive en un solo lugar: **`js/script.js`**, dentro del objeto `CONFIG` al principio del archivo.

1. **Nombre**: cambia `name: "Nombre"` por el nombre real. Aparece en la pantalla final ("Feliz cumpleaños, ___").
2. **Fecha de nacimiento (opcional)**: si pones `birthDate: "AAAA-MM-DD"`, la pantalla de cumpleaños calcula automáticamente los días y horas vividos. Si lo dejas en `null`, esa fila simplemente no se muestra.
3. **Las 22 razones**: edita el array `things` — cada una tiene `title` y `text`. Puedes agregar, quitar o reordenar tarjetas; el contador "x / 22" se ajusta solo si cambias cuántas hay.
4. **Los 22 deseos**: edita el array `wishes`, una frase por línea.
5. **Fotos**: coloca tus imágenes en `assets/fotos/` (por ejemplo `foto1.jpg`, `foto2.jpg`...) y ajusta el array `photos` con la ruta y una frase corta para cada una. Si una imagen no existe todavía, la tarjeta muestra un marco vacío en su lugar — no rompe la página.
6. **Carta**: el texto completo está en `letter` (usa comillas invertidas, así que puedes escribir varios párrafos con líneas en blanco entre ellos).
7. **Música**: agrega un archivo `.mp3` en `assets/music/` con el nombre `song.mp3` (o cambia la ruta en `index.html`, línea del `<audio>`). La música empieza al presionar "Abrir mi regalo", así evita el bloqueo de autoplay de los navegadores. El botón redondo abajo a la izquierda permite pausar o reanudar en cualquier momento.

## Estructura

```
cumple-22/
├── index.html          → estructura de las 7 pantallas
├── css/style.css        → paleta, tipografía, layout y animaciones
├── js/script.js         → CONFIG (contenido) + toda la lógica
├── assets/fotos/         → tus fotos
├── assets/music/         → tu canción
└── README.md
```

## Detalles de diseño

- Tipografía: **Cormorant Garamond** (títulos) + **Inter** (texto), cargadas desde Google Fonts.
- Paleta: crema, rosa suave, rosa vino, grafito y un dorado discreto — pensada para sentirse elegante, no infantil.
- La navegación es por capítulos (no scroll infinito): cada pantalla es un "momento" que se abre con el botón correspondiente. Los puntos de la derecha muestran el progreso y permiten saltar entre capítulos ya vistos.
- Funciona bien en móvil (probablemente donde se abrirá primero).
- Respeta `prefers-reduced-motion`: si el sistema de quien lo abre tiene animaciones reducidas activadas, las animaciones decorativas se desactivan automáticamente.

## Publicarla para compartir el link

Cualquiera de estas opciones sirve (todas son gratuitas):
- **Netlify Drop** (netlify.com/drop): arrastra la carpeta `cumple-22` y te da un link al instante.
- **GitHub Pages**: sube la carpeta a un repositorio y actívalo en Settings → Pages.
- **Vercel**: importa la carpeta como proyecto estático.

No necesitas configurar nada especial: es HTML estático, funciona en cualquiera de estos servicios tal cual.
