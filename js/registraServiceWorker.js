/* invoca a registraServiceWorker instalar la aplicación en el caché del
 * navegador. No se espera a que termine el registro. */
registraServiceWorker();
/** Registra un service worker para instalar la aplicación en el
 * caché del navegador. La palabra reservada async indica que no espera
 * a que termine y libera el registro de activación que lo llamó. */
async function registraServiceWorker() {
  try {
    /* Registra el service worker y espera que termine. El service worker debe
     * estar en la carpeta public. La palabra await indica que espera a que
     * termine y solo puede usarse en una función async. */
    const registro = await navigator.serviceWorker.register("sw.js");
    // Registro correcto y se muestra en la consola.
    console.log("Service Worker registrado.");
    console.log(registro);
  } catch (e) {
    // Hubo un error en el registro.
    muestraError(e);
  }
}
/** Procesa una excepción y muestra un mensaje de error.
 * @param {Error} e descripción del error. */
function muestraError(e) {
  console.log(e);
  alert(e.message);
}