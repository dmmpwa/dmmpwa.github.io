class MiNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<ul>
        <li>
          <a href="index.html">
            <span class=
                "material-icons">
              home
            </span>
            Inicio
          </a>
        </li>
        <li>
          <a href="gps.html">
            <span class=
                "material-icons">
              location_searching
            </span>
            GPS
          </a>
        </li>
        <li>
          <a href="archivos.html">
            <span class=
                "material-icons">
              attach_file
            </span>
            Archivos
          </a>
        </li>
        <li>
          <a href="ayuda.html">
            <span class=
                "material-icons">
              help
            </span>
            Ayuda
          </a>
        </li>
      </ul>`;
  }
}
customElements.define(
  "mi-nav", MiNav);