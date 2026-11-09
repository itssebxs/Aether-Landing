# Aether — Tu PC y tu teléfono, en un mismo flujo

**Aether** es el producto de software de Luis Shagñay que conecta un PC con Windows y un teléfono Android bajo una misma cuenta: el escritorio se organiza en Windows (aplicaciones, enlaces y comandos) y el teléfono actúa como compañero del PC, con control remoto del puntero (RemotePad), vista de la pantalla del PC y gestión de los equipos guardados.

Este repositorio contiene la **landing pública** de Aether y es el canal oficial de distribución de sus instaladores mediante **GitHub Releases**. La aplicación en sí (Desktop y Mobile) se desarrolla en repositorios/carpetas separadas; este repo no compila la app: publica su sitio y sus descargas.

- 🌐 **Sitio:** https://aetherbeta.vercel.app
- ⬇️ **Release vigente:** [Aether-2.4.10](https://github.com/itssebxs/Aether-Landing/releases/tag/Aether-2.4.10) — Windows 2.4.10 · Android 0.1.2+3

---

## El problema que resuelve

Quien trabaja todo el día frente a su PC acumula aplicaciones, enlaces y comandos dispersos, y cuando se aleja del escritorio pierde acceso a ese entorno: no puede lanzar un comando, revisar la pantalla ni despertar el equipo desde el teléfono. Aether unifica ambas cosas: una biblioteca organizada en Windows y un compañero móvil que mantiene el PC alcanzable y controlable desde Android, con la misma cuenta en ambos extremos.

## Qué hace Aether (según el propio producto)

- **Biblioteca en Windows** — Aether Desktop clasifica aplicaciones y enlaces en categorías y abre comandos y módulos desde su biblioteca/panel de Comandos.
- **RemotePad** — Desde Android, el teléfono controla el puntero del PC.
- **Equipos y presencia** — Equipos guardados y presencia en tiempo real por PC, con la misma cuenta en ambos dispositivos.
- **Wake-on-LAN** — Encendido remoto del PC cuando la configuración del equipo y de la red lo permiten.
- **Mirar PC** *(nivel Elite)* — Transmite la pantalla del PC al teléfono (Windows → Android) con el punto del cursor de Windows integrado en el video, para poder seguirlo al trabajar.
- **Ver Móvil** *(experimental)* — Proyección de la pantalla del teléfono hacia Windows (Android → Windows). La transmisión se inicia en el móvil con permiso de captura de pantalla y el toque remoto requiere activar el servicio de accesibilidad de Aether.

### Límites declarados (sin humo)

- **Aether Drive** está **en desarrollo**: el acceso aparece bloqueado; el almacenamiento y la gestión de archivos aún **no** están implementados.
- El **control completo del móvil desde Windows no está disponible**; el toque remoto solo existe durante la proyección experimental de Android a Windows.
- Aether Desktop solicita permisos de administrador (para controlar aplicaciones elevadas); Windows puede mostrar el aviso de UAC. El inicio automático usa una tarea elevada y abre Aether minimizado en la bandeja del sistema. El escritorio seguro de UAC/consentimiento no es controlable remotamente.

## Las dos aplicaciones

| | Aether Desktop | Aether Mobile |
|---|---|---|
| Plataforma | Windows (x64) | Android |
| Versión vigente | 2.4.10 (instalador `AetherSetup-2.4.10-x64.exe`) | 0.1.2+3 (APK `Aether-Android-0.1.2-3.apk`) |
| Tecnología (según el repo) | Python (panel de escritorio) e instalador Inno Setup | Flutter/Dart |
| Distribución | GitHub Releases de este repositorio | GitHub Releases de este repositorio |

## Este repositorio (la landing)

Sitio estático sin build: HTML, CSS y JavaScript planos.

- `index.html` — la página: producto, funciones, **estado honesto del producto** («Qué está listo / Qué sigue») y descargas oficiales.
- `style.css` — diseño grafito y violeta de Aether.
- `script.js` — comportamiento del sitio.
- `assets/` — recursos gráficos: incluye una captura real del panel Comandos de Aether Desktop y el icono original de la app Android.
- `PUBLISHING.md` — procedimiento oficial y obligatorio de publicación de releases y actualización de la landing.
- `README.md` — notas del repositorio.

La landing incluye una vista HTML de la pantalla de inicio de Aether Mobile derivada del código real de la app (su jerarquía, textos y acciones), no una maqueta genérica.

## Cómo se publica una release

El flujo completo está normado en [`PUBLISHING.md`](PUBLISHING.md). En resumen: se compilan y verifican primero los artefactos (instalador de Windows y APK), se publica la release en GitHub con sus dos assets (verificando nombre, tamaño y SHA-256), **y solo después** se actualizan los enlaces de la landing y se hace push a `main`, que despliega el sitio en Vercel. Los binarios nunca se añaden al historial Git de este repositorio.

## Estado

Producto en **beta pública**: Aether-2.4.10 es la release vigente, con Desktop y Mobile funcionales en sus capacidades declaradas arriba.

---

Desarrollado por **Luis Shagñay** — diseño, desarrollo y publicación de Aether. Más proyectos en su [portafolio](https://luisshagnay.vercel.app/proyectos).
