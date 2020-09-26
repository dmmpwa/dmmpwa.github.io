/* Este archivo debe estar colocado en la carpeta raíz del sitio.
 * cualquier cambio en el contenido de este archivo hace que el service worker
 * se reinstale. Normalmente se cambia el número en el nombre del caché cuando
 * cambia el contenido de los archivos. Espera 11 minutos después de hacer los
 * cambios en tu sitio, para depués actualizar este archivo. */
const CACHE = "dmppwa-1.00";

/**  Archivos requeridos para que la aplicación funcione fuera de línea. */
const ARCHIVOS = [
  "cmp/mi-footer.js",
  "css/estilos.css",
  "img/icono256.png",
  "img/icono1024.png",
  "img/icono2048.png",
  "js/registraServiceWorker.js",
  "favicon.ico",
  "index.html",
  "manifest.json",
  '/'
];

self.addEventListener("install", evt => {
  console.log("Service Worker instalado.");
  // Realiza la instalación: carga los archivos requeridos en la caché.
  evt.waitUntil(cargaCache());
});

// Toma de la caché archivos solicitados. Si no están en caché, se descargan.
self.addEventListener("fetch", evt => {
  if (evt.request.method === "GET") {
    evt.respondWith(usaCache(evt));
  }
});

self.addEventListener("activate", () => console.log("Service Worker activo."));

async function cargaCache() {
  console.log("Intentando cargar cache: " + CACHE);
  const cache = await caches.open(CACHE);
  await cache.addAll(ARCHIVOS);
  console.log("Cache cargado: " + CACHE);
}

async function usaCache(evt) {
  const cache = await caches.open(CACHE);
  const response = await cache.match(evt.request, { ignoreSearch: true });
  if (response) {
    return response;
  } else {
    return fetch(evt.request);
  }
}