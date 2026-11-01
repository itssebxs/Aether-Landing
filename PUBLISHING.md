# Publicar releases y actualizar la landing

Este procedimiento aplica a Aether Desktop, Aether Mobile y al sitio público. La carpeta padre del proyecto no tiene un repositorio Git: `landing/` sí es un repositorio separado (`itssebxs/Aether-Landing`, rama `main`). Compilar localmente no publica una release ni actualiza la landing.

## Orden obligatorio

1. Lee `AGENTS.md`, `docs/AI_WORKFLOW.md`, `desktop/README.md`, `mobile/README.md`, `releases/CURRENT.md` y las notas de la versión. Respeta la regla de conservar datos, preferencias y credenciales.
2. Prepara y compila los artefactos aprobados. Actualiza la versión de Windows en `desktop/src/infrastructure/ui/dashboard_gui.py` y `desktop/installer/AetherSetup.iss`. No cambies la versión de Android ni recompiles el APK si Android no cambió; reutiliza solo el APK vigente indicado por `CURRENT.md`.
3. Deja en `releases/` únicamente el EXE/instalador y APK vigentes. Actualiza las notas, `releases/CURRENT.md` y `CHANGELOG.md` con tamaños y SHA-256 calculados sobre los archivos finales.
4. Publica primero la release en `itssebxs/Aether-Landing`, con etiqueta `Aether-<versión>`. Carga los nombres exactos que aparecen en `CURRENT.md`; publica la release, no la dejes como borrador.
5. Verifica por API que la etiqueta devuelve la release publicada, que cada asset tiene estado `uploaded`, tamaño esperado y digest SHA-256 esperado. Comprueba que la URL pública de cada descarga responde HTTP 200.
6. Solo después de que ambos assets funcionen, actualiza `landing/index.html` en todos los botones y el enlace a la página de release. Actualiza `landing/README.md` y el copy del estado del producto si cambió alguna capacidad. No añadas EXE/APK al historial Git de la landing.
7. Entra a `landing/`, revisa el diff, crea un commit y haz `git push origin main`. No inicialices un repositorio en la carpeta padre del proyecto.
8. Verifica que el estado de Vercel para el commit quedó `success` y que `https://aetherbeta.vercel.app/` sirve la versión nueva, los dos nombres de archivo vigentes y los enlaces de descarga esperados.

Si no se pudo crear la release o cargar cualquier archivo, no publiques la landing con enlaces a una release inexistente. Completa la carga antes de cambiar los enlaces; comunica claramente cualquier bloqueo que no se pueda resolver.

## Git y credenciales

- Usa el Git Credential Manager ya configurado en Windows; nunca pidas ni pegues tokens en el chat, archivos fuente o argumentos visibles. No imprimas la salida de `git credential fill`.
- Este equipo puede devolver `Access denied [0x5]` al leer Windows Credential Manager desde un proceso aislado. Si pasa, solicita la ejecución autenticada autorizada mediante el mecanismo de escalación disponible y mantén el token solo en memoria del proceso. No concluyas que las credenciales faltan sin comprobar fuera del sandbox.
- La conexión GitHub de Codex puede escribir archivos de texto, pero no necesariamente crea releases ni adjunta binarios. Comprueba las herramientas disponibles; un commit de la landing no equivale a una release con assets.
- Los assets se suben a GitHub Releases con los endpoints oficiales de creación de release y carga de assets. No se suben al repositorio como archivos Git, ni se copian a Vercel.

## Release publicada actualmente

- Release: <https://github.com/itssebxs/Aether-Landing/releases/tag/Aether-2.4.8>
- Landing: <https://aetherbeta.vercel.app/>
- Windows: `AetherSetup-2.4.8-x64.exe`, 120.957.704 bytes; SHA-256 `B57498DEED378321ED90C21F5610B308B6BDD7F945F3231445B0AB3E4141EE55`.
- Android: `Aether-Android-2026-11-01.apk`, 91.975.521 bytes; SHA-256 `DA5F11913CA744C5F68BE8F6F3C50421800CC5CDDF62C19B3C24352109B21F1F`.

## Limpieza segura de builds

Cuando no haya compilaciones activas y el usuario pida limpieza, se pueden borrar solo las salidas regenerables documentadas en `docs/AI_WORKFLOW.md`: `desktop/build/`, `desktop/dist/`, `mobile/build/`, `mobile/.dart_tool/`, `mobile/android/.gradle/`, `mobile/ios/Flutter/ephemeral/`, cachés `__pycache__/` y `.pyc`. Revisa cada ruta absoluta antes de borrar.

Conserva `desktop/.venv/`, `desktop/bin/`, código, assets fuente, archivos lock, configuración personal y `.env`, `releases/CURRENT.md`, los paquetes y la nota de versión vigentes, y la carpeta de datos de usuario `%APPDATA%\\AetherElite\\`. No mantengas paquetes o notas locales de versiones antiguas: el historial público de releases está en GitHub. No borres la instalación elegida por el usuario. Mantén el video final `Aether-Presentacion-2.mp4` en la raíz del proyecto si sigue siendo el material de presentación vigente.
