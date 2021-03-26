class CampoDinámico extends HTMLElement {
  connectedCallback() {
    this.addEventListener(
      "focus",
      () => this.analiza(), true);
    this.addEventListener(
      "focusout",
      () => this.analiza(), true);
    setTimeout(() => {
      /**
       * @private
       * @type {HTMLInputElement|
            HTMLTextAreaElement|
            HTMLSelectElement|
            HTMLOutputElement} */
      this._componente =
        this.querySelector(
          `input,
          textarea,
          select,
          output`);
      this.analiza();
    }, 100);
  }
  analiza() {
    if (!this._componente.
      validity.badInput &&
      this._componente.value.
        length === 0) {
      this._componente.classList.
        remove("valor");
    } else {
      this._componente.classList.
        add("valor");
    }
  }
}
customElements.define(
  "campo-dinamico",
  CampoDinámico);