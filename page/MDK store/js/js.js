document.addEventListener('DOMContentLoaded', function () {
  customElements.define('textbox-xl', class extends HTMLElement {
    constructor() {
      super();
      // const a = this.getAttribute('a');
      const title = this.getAttribute('title');
      const color = this.getAttribute('color');
      const bgcolor = this.getAttribute('bgcolor');
      const bgcolor2 = this.getAttribute('bgcolor2');
      const more = this.getAttribute('more');
      const more2 = this.getAttribute('more2');
      const content = this.innerHTML;
      this.innerHTML = `
        <table class="textbox" style="margin: 10px; width: calc(100% - 20px); border: 1px solid ${bgcolor}; ${more}">
          <thead ${more2}>
            <tr>
              <td style="background-color: ${bgcolor}; color: ${color}; font-weight: bold;">
                <span><strong>${title}</strong></span>
              </td>
            </tr>
          </thead>
          <tr>
            <td style="background-color: ${bgcolor2};">
              ${content}
            </td>
          </tr>
        </table>
      `;
    }
  });
});
