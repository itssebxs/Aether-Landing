# Landing de Aether

Sitio estático adaptable. `index.html`, `style.css`, `script.js` y `assets/` contienen el sitio; no ejecutan ni compilan la aplicación.

## Publicación

- Repositorio independiente de la aplicación: `itssebxs/Aether-Landing`, rama `main`.
- Sitio público configurado por el repositorio: <https://aetherbeta.vercel.app/>. El despliegue web se activa al publicar cambios en `main`, si la conexión del proyecto de Vercel sigue habilitada.
- `landing/.git` es su repositorio Git; el directorio padre no tiene un repositorio Git común.

## Descargas vigentes

Los dos botones usan los assets de la release GitHub `Aether-2.4.3`:

- Windows x64: `AetherSetup-2.4.3-x64.exe`, instalador versionado 2.4.3.
- Android: `Aether-Android-2026-10-30.apk`, versión interna `0.1.0+1`.

Los enlaces solo funcionan cuando ambos assets se han publicado en esa release. Verifica nombres, tamaños y SHA-256 contra `../releases/CURRENT.md` antes de actualizarlos. Los binarios no deben añadirse al historial Git de la landing.

## Estado de funciones

La fuente de verdad es el código de `../desktop/` y `../mobile/`, no las ilustraciones ni el copy de marketing. Drive está pendiente. El espejo Android → PC y el toque remoto en ese espejo son experimentales: la transmisión se inicia en el móvil con permiso de captura y el toque requiere activar el servicio de accesibilidad de Aether. El control general del móvil desde el PC no está disponible. Revisa el código y conserva estas limitaciones al editar el texto público.

La página sigue el diseño grafito y violeta de Aether. `assets/aether-desktop-commands.webp` es una captura real del panel Comandos de Aether Desktop, recortada para excluir el perfil local. La vista `mobile-home-ui` en `index.html` sigue la jerarquía, textos, tokens, colores y acciones de `mobile/lib/features/home/home_screen.dart` y `mobile/lib/core/themes/aether_theme.dart`; es una vista HTML derivada del código, no una captura de Android. El teléfono usa los controles reales de Inicio y no contiene una pantalla genérica. `assets/aether-mobile-app.png` es el icono original de Android.
