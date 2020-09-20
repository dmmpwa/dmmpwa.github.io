class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `Copyright &copy; Gilberto Pachecco Gallegos`;
  }
}
customElements.define("mi-footer", MiFooter);
