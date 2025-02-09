// script.js
document.addEventListener('DOMContentLoaded', function () {
  const galleryImages = document.querySelectorAll('.gallery-image');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('close');

  // Open lightbox when an image is clicked
  galleryImages.forEach((image) => {
    image.addEventListener('click', () => {
      lightbox.style.display = 'block';
      lightboxImg.src = image.src;
    });
  });

  // Close lightbox when the close button is clicked
  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  // Close lightbox when clicking outside the image
  lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
      lightbox.style.display = 'none';
    }
  });
});