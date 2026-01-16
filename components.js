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
                        <img src="kuvat/putkiwattilogoval.png" alt="Putkiwatti">
                    </div>
                    <div class="tb-lnk">
                        <div>

                        </div>
                        <div>

                        </div>
                        <div>
                            <a href=""><p>Jotain</p></a>
                        </div>
                        <div id="galleria">
                            <a href="galleria.html"><p>Galleria</p></a>
                        </div>
                        <div id="yhteys">
                            <a href="yhteys.html"><p>Yhteystiedot</p></a>
                        </div>
                        <div id="soita">
                            <img id="call" src="kuvat/call.png" alt="Soita">
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