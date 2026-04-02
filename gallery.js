const hub = document.getElementById('photo-hub');
const viewer = document.getElementById('desktop-viewer');
const viewerImg = document.getElementById('viewer-img');
const closeBtn = document.getElementById('close-btn');
const total = 40;

for (let i = 1; i <= total; i++) {
    const img = document.createElement('img');
    img.src = `kuvat/galleria/${i}.jpeg`;
    
    img.onclick = function() {
        const isDesktop = window.innerWidth > 1024; // Check screen size

        if (isDesktop) {
            // Desktop Split Screen Magic
            viewer.style.display = 'block';
            viewerImg.src = this.src;
            hub.style.width = '50%'; // Pushes gallery to the right
        } else {
            // Mobile Expansion Magic
            const isExpanded = this.classList.contains('mobile-expanded');
            
            // Shrink any currently expanded mobile images
            document.querySelectorAll('.gallery-grid img').forEach(el => {
                el.classList.remove('mobile-expanded');
            });

            if (!isExpanded) {
                this.classList.add('mobile-expanded');
                this.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    };
    hub.appendChild(img);
}

// Closing the desktop viewer
closeBtn.onclick = function() {
    viewer.style.display = 'none';
    hub.style.width = '100%'; // Gallery takes back the whole screen
};