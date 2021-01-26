const REQUERIDO =
  "Requerido, 1 decimal";
const SER_DEC = `Debe ser
  un número de 1 decimal.`;
const NO_0 = "No puede ser 0.";

/** @type {HTMLFormElement} */
const forma = document["forma"];

forma.addEventListener(
  "submit", divide);

/** @param {Event} evt */
function divide(evt) {
  try {
    evt.preventDefault();
    forma.a.classList.
      remove("error");
    forma.b.classList.
      remove("error");
    forma.msgA.value = REQUERIDO;
    forma.msgB.value = REQUERIDO;
    const a =
      parseFloat(forma.a.value);
    const b =
      parseFloat(forma.b.value);
    let error = false;
    if (isNaN(a)) {
      error = true;
      forma.inA.classList.
        add("error");
      forma.msgA.value = SER_DEC;

    }
    if (isNaN(b)) {
      error = true;
      forma.inB.classList.
        add("error");
      forma.msgB.value = SER_DEC;
    } else if (b === 0) {
      error = true;
      forma.inB.classList.
        add("error");
      forma.msgB.value = NO_0;
    }
    if (error) {
      forma.outSalida.value = "";
    } else {
      forma.outSalida.value =
        a / b;
    }
  } catch (e) {
    console.error(e);
    forma.outSalida.value =
      e.message;
  }
}