const thumbs = document.querySelectorAll(".thumbs img");
const previewImg = document.querySelector("#preview img");

function selectImage(img) {
  // Remove active state from all thumbnails
  thumbs.forEach(t => t.classList.remove("active"));

  // Set active thumbnail
  img.classList.add("active");

  // Update large image
  previewImg.src = img.src;
}

// Set first image as active by default
thumbs[0].classList.add("active");

function scrollThumbs(direction) {
  document.getElementById("thumbs").scrollLeft += direction * 200;
}