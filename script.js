// Initialize topbar behaviour once the element with id="tb" exists
function initTopbar() {
  const bar = document.getElementById('tb');
  if (!bar) {
    // Try again on the next frame until the element is available
    requestAnimationFrame(initTopbar);
    return;
  }

  let lastScroll = 0;

  // Hide/show on scroll direction
  window.addEventListener('scroll', () => {
    const current = window.scrollY;

    if (current > lastScroll) {
      bar.classList.add('hide');
    } else {
      bar.classList.remove('hide');
    }

    lastScroll = current;
  }, { passive: true });

  // Add/remove "scrolled" class when approaching the bottom
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const triggerPoint = document.body.scrollHeight * 0.6;

    if (scrollPosition >= triggerPoint) {
      bar.classList.add('scrolled');
    } else {
      bar.classList.remove('scrolled');
    }
  }, { passive: true });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTopbar);
} else {
  initTopbar();
}
