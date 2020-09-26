class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `Copyright &copy; Gilberto Pacheco Gallegos`;
  }
}
customElements.define("mi-footer", MiFooter);