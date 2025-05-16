// Handle Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const contact = document.getElementById("contact").value;
    const description = document.getElementById("description").value;

    const confirmationMessage = `
        Thank you for contacting us!<br>
        Your Name: ${name}<br>
        Your Email or Phone Number: ${contact}<br>
        Your Description: ${description}
    `;

    document.getElementById("confirmationMessage").innerHTML = confirmationMessage;
});

// Image Background Carousel
const images = [
    "https://i.ibb.co/qdNYG0P/image1.jpg",
    "https://i.ibb.co/3mSynTt/image2.jpg",
    "https://i.ibb.co/8BwzXcZ/image3.jpg"
];
let currentIndex = 0;

function swapBackgroundImage() {
    document.getElementById("background-section").style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(swapBackgroundImage, 5000);
swapBackgroundImage();

// Mobile Dropdown Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('active');
});

// Toggle 'About Us' Sections
document.getElementById('principles-btn').addEventListener('click', function() {
    const moreContent = document.getElementById('principles-more');
    moreContent.style.display = moreContent.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('mission-btn').addEventListener('click', function() {
    const moreContent = document.getElementById('mission-more');
    moreContent.style.display = moreContent.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('values-btn').addEventListener('click', function() {
    const moreContent = document.getElementById('values-more');
    moreContent.style.display = moreContent.style.display === 'none' ? 'block' : 'none';
});
