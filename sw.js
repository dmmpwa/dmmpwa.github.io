// @ts-nocheck
/* Este archivo debe estar
 * colocado en la carpeta raíz del
 * sitio.
 * 
 * Cualquier cambio en el
 * contenido de este archivo hace
 * que el service worker se
 * reinstale.
 * 
 * Normalmente se cambia el número
 * en el nombre del caché cuando
 * cambia el contenido de los
 * archivos.
 * 
 * Cuando uses GitHub Pages espera
 * 11 minutos después de hacer los
 * cambios en tu sitio, para
 * depués actualizar este archivo.
 */
const CACHE = "dmppwa-1.000";

/** Archivos requeridos para que
 * la aplicación funcione fuera de
 * línea. */
const ARCHIVOS = [
  "cmp/mi-nav.js",
  "css/campo.css",
  "css/estilos.css",
  "css/mi-nav.css",
  "img/icono256.png",
  "img/icono1024.png",
  "img/icono2048.png",
  "js/agent.js",
  "js/CtrlDivide.js",
  "js/regSw.js",
  "archivos.html",
  "ayuda.html",
  "favicon.ico",
  "gps.html",
  "index.html",
  "LICENSE",
  "README.md",
  "site.webmanifest",
  '/'
];

self.addEventListener("install",
  evt => {
    console.log("sw instalado.");
    /* Realiza la instalación.
     * Carga los archivos
     * requeridos en la caché. */
    evt.waitUntil(cargaCache());
  });

/* Toma los archivos solicitados
 * de la caché; si no los
 * encuentra, se descargan. */
self.addEventListener("fetch",
  evt => {
    if (evt.request.method ===
      "GET") {
      evt.respondWith(
        usaCache(evt));
    }
  });

self.addEventListener("activate",
  () =>
    console.log("sw activo."));

async function cargaCache() {
  console.log(
    "Intentando cargar cache",
    CACHE);
  const cache =
    await caches.open(CACHE);
  await cache.addAll(ARCHIVOS);
  console.log("Cache", CACHE,
    "cargado");
}

async function usaCache(evt) {
  const cache =
    await caches.open(CACHE);
  const response =
    await cache.match(evt.request,
      { ignoreSearch: true });
  if (response) {
    return response;
  } else {
    return fetch(evt.request);
  }
}