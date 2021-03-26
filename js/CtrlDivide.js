import { msg } from "../lib/movil.js";

const REQUERIDO = "*Requerido";
const REQUERIDO_NO_0 =
  "*Requerido, no 0";
const NO_0 = "No puede ser 0";

const form =
  document.querySelector("form");
/** @type {HTMLInputElement} */
const inA =
  document.querySelector("#inA");
/** @type {HTMLOutputElement} */
const msgA =
  document.querySelector("#msgA");
/** @type {HTMLInputElement} */
const inB =
  document.querySelector("#inB");
/** @type {HTMLOutputElement} */
const msgB =
  document.querySelector("#msgB");

inA.addEventListener("input",
  () =>
    msg(inA, msgA, REQUERIDO));
inB.addEventListener("input",
  validaB);
form.addEventListener(
  "submit", divide);

function validaB() {
  const b = inB.valueAsNumber;
  if (isNaN(b) || b !== 0) {
    inB.setCustomValidity("");
  } else {
    inB.setCustomValidity(NO_0);
  }
  msg(inB, msgB, REQUERIDO_NO_0);
}

/** @param {Event} evt */
function divide(evt) {
  try {
    evt.preventDefault();
    if (inA.validity.valid &&
      inB.validity.valid) {
      const a = inA.valueAsNumber;
      const b = inB.valueAsNumber;
      form.outSalida.value =
        a / b;
    } else {
      form.outSalida.value = "";
    }
  } catch (e) {
    console.error(e);
    form.outSalida.value =
      e.message;
  }
}