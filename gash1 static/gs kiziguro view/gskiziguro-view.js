// Hero section image rotation
const heroImages = [
  "https://i.ibb.co/QrD6Y2X/image1.jpg",
  "https://i.ibb.co/Sc58PPp/image2.jpg",
  "https://i.ibb.co/FH6tV1S/image3.jpg"
];
let heroIndex = 0;
const heroImage = document.getElementById("currentHeroImage");

function cycleHeroImages() {
  heroIndex = (heroIndex + 1) % heroImages.length;
  heroImage.src = heroImages[heroIndex];
}

setInterval(cycleHeroImages, 5000);

// Rotating images within each section
document.querySelectorAll('.image-box').forEach(box => {
  const rotatingImages = box.querySelectorAll('.rotating-image');
  let imageIndex = 0;

  function rotateBoxImages() {
    rotatingImages.forEach(img => img.classList.remove('active'));
    rotatingImages[imageIndex].classList.add('active');
    imageIndex = (imageIndex + 1) % rotatingImages.length;
  }

  setInterval(rotateBoxImages, 5000);
  rotateBoxImages();
});

// Zoom functionality
const modal = document.getElementById("zoomModal");
const modalImage = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];

document.querySelectorAll('.rotating-image').forEach(img => {
  img.onclick = function () {
    modal.style.display = "block";
    modalImage.src = this.src;
    captionText.innerHTML = this.alt;
  };
});

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
