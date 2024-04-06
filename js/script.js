document.addEventListener("DOMContentLoaded", function () {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/content/sidebar.html', true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var sidebarElements = document.querySelectorAll('#sidebar');
      for (var i = 0; i < sidebarElements.length; i++) {
        sidebarElements[i].innerHTML = xhr.responseText;
      }
    }
  };
  xhr.send();
});

function performSearch() {
  var searchTerm = document.getElementById('searchInput').value;
  var selectedEngine = document.getElementById('searchEngine').value;
  var searchUrl = selectedEngine + encodeURIComponent(searchTerm);
  window.open(searchUrl, '_blank');
  return false;
}


document.addEventListener('DOMContentLoaded', function () {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.querySelector('.grid-container2').classList.add('mobile-disable');
  }
  customElements.define('text-box', class extends HTMLElement {
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
        <a name="${title}"></a>
        <table class="textbox" style="border: 1px solid ${bgcolor}; ${more}">
          <thead ${more2}>
            <tr>
              <td style="background-color: ${bgcolor}; color: ${color}; font-weight: bold;">
                <h3><strong>${title}</strong></h3>
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

function highlightElement(elementId) {
  var element = document.getElementById(elementId);
  element.classList.add('highlight'); // 添加高亮类

  setTimeout(function () {
    element.classList.remove('highlight'); // 移除高亮类
  }, 5000); // 2秒后移除高亮类
}
