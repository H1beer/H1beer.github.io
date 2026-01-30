/* HOW TO USE:
   1. Add <script src="components.js"></script> to your HTML <head>.
   2. Use these tags anywhere in your <body>:
      <site-element type="topbar"></site-element>
      <site-element type="footer"></site-element>
      <site-element type="sidebar"></site-element>
      <site-element type="newsletter"></site-element>
      <site-element type="banner"></site-element>
      <site-element type="socials"></site-element>
*/

class MySiteElements extends HTMLElement {
    connectedCallback() {
        const type = this.getAttribute('type');

        if (type === 'topbar') {
            this.innerHTML = `
                <div class="tb" id="tb">
            <div class="tb-logo">
                <a href="index.html">
                    <img src="kuvat/putkiwattilogoval.png" alt="Putkiwatti">
                </a>
            </div>
            <div class="burger">
                <button class="hamburger" id="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div class="tb-lnk" id="menu">
                <div>

                </div>
                <div>

                </div>
                <div>
                    <a href="index.html"><p>Aloitus</p></a>
                </div>
                <div id="galleria">
                    <a href="galleria.html"><p>Galleria</p></a>
                </div>
                <div id="yhteys">
                    <a href="yhteys.html"><p>Yhteystiedot</p></a>
                </div>
            </div>
        </div>
            `;
        } 

        if (type === 'footer') {
            this.innerHTML = `
                <footer>Footer Content</footer>
            `;
        }

        if (type === 'sidebar') {
            this.innerHTML = `
                <aside>Sidebar Content</aside>
            `;
        }

        if (type === 'newsletter') {
            this.innerHTML = `
                <section>Newsletter Signup</section>
            `;
        }

        if (type === 'banner') {
            this.innerHTML = `
                <header>Banner Content</header>
            `;
        }

        if (type === 'socials') {
            this.innerHTML = `
                <div class="social-icons">Social Links</div>
            `;
        }
    }
}

customElements.define('site-element', MySiteElements);