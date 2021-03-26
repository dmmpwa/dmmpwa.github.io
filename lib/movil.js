/* Recupera la descripción del
 * navegador en que se ejecuta
 * este código. */
export const USER_AGENT =
  navigator.userAgent ||
  navigator.vendor ||
  window["opera"];
if (/android/i.test(USER_AGENT)) {
  document.body.classList
    .add("android");
}
if (/iPad|iPhone|iPod|Mac/.
  test(USER_AGENT) &&
  !window.MSStream) {
  document.body.classList.
    add('ios');
}
/**
 * @param {HTMLInputElement|
          HTMLTextAreaElement|
          HTMLSelectElement|
          HTMLOutputElement} e
 * @param {HTMLOutputElement} out
 * @param {string} ok
 */
export function msg(e, out, ok) {
  if (e.validity.valid) {
    out.value = ok;
  } else {
    out.value =
      e.validationMessage;
  }

}