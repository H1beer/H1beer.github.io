// Initialize topbar behaviour once the element with id="tb" exists
function initTopbar() {
  const bar = document.getElementById('tb');
  if (!bar) {
    // Try again on the next frame until the element is available
    requestAnimationFrame(initTopbar);
    return;
  }

  let lastScroll = 0;
  const triggerPoint = window.innerHeight;

  // Hide/show on scroll direction
  window.addEventListener('scroll', () => {
    const current = window.scrollY;

    if (current > lastScroll) {
      bar.classList.add('hide');
    } else {
      bar.classList.remove('hide');
    }

    lastScroll = current;

    if (current >= triggerPoint) {
      bar.classList.add('scrolled');
    } else {
      bar.classList.remove('scrolled');
    }
  }, { passive: true });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initTopbar();
    initHamburger();
  });
} else {
  initTopbar();
  initHamburger();
}

function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');
  
  if (!hamburger || !menu) {
    requestAnimationFrame(initHamburger);
    return;
  }

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      menu.classList.remove('active');
    });
  });

  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
      hamburger.classList.remove('active');
      menu.classList.remove('active');
    }
  });
}


const btn = document.getElementById("mapsbtn");
const wrapper = document.getElementById("maps-wrapper");

let mapLoaded = false;

btn.addEventListener("click", () => {
  wrapper.classList.toggle("active");

  if (!mapLoaded) {
    // Only create iframe once, when first opening
    wrapper.innerHTML = `
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1760.4081755432774!2d24.6392448!3d63.81792349999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468133ba49a4b539%3A0x87501256e5e000c8!2sReisj%C3%A4rventie%20802%2C%2085470%20Sievi!5e0!3m2!1sfi!2sfi!4v1768995455875!5m2!1sfi!2sfi"
        style="width: 100%; height: 100%; border: none; border-radius: 6px;"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    `;
    mapLoaded = true;
  }
  
  // Update button text
  btn.textContent = wrapper.classList.contains("active") ? "Sulje Google Maps" : "Avaa Google Maps";
});