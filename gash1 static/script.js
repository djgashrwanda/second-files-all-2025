// JavaScript for handling form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way
  
    // Get form values
    const name = document.getElementById("name").value;
    const contact = document.getElementById("contact").value;
    const description = document.getElementById("description").value;
  
    // Display confirmation message
    const confirmationMessage = `
      Thank you for contacting us!<br>
      Your Name: ${name}<br>
      Your Email or Phone Number: ${contact}<br>
      Your Description: ${description}
    `;
  
    document.getElementById("confirmationMessage").innerHTML = confirmationMessage;
  });



  const section = document.getElementById("background-section");

// Array of background images



// about us section 
document.getElementById('principles-btn').addEventListener('click', function() {
  var moreContent = document.getElementById('principles-more');
  if (moreContent.style.display === "none") {
    moreContent.style.display = "block";
  } else {
    moreContent.style.display = "none";
  }
});

document.getElementById('mission-btn').addEventListener('click', function() {
  var moreContent = document.getElementById('mission-more');
  if (moreContent.style.display === "none") {
    moreContent.style.display = "block";
  } else {
    moreContent.style.display = "none";
  }
});

document.getElementById('values-btn').addEventListener('click', function() {
  var moreContent = document.getElementById('values-more');
  if (moreContent.style.display === "none") {
    moreContent.style.display = "block";
  } else {
    moreContent.style.display = "none";
  }
});




//

// show learn more button
document.getElementById('principles-gash').addEventListener('click', function() {
  var moreContent = document.getElementById('principles-more');
  if (moreContent.style.display === "none") {
    moreContent.style.display = "block";
  } else {
    moreContent.style.display = "none";
  }
});

document.getElementById('mission-gash').addEventListener('click', function() {
  var moreContent = document.getElementById('mission-more');
  if (moreContent.style.display === "none") {
    moreContent.style.display = "block";
  } else {
    moreContent.style.display = "none";
  }
});

// Function to toggle the visibility of the video when the button is clicked
function toggleVideo() {
  var videoSection = document.getElementById("video-section");
  // Check if the video section is currently visible or hidden
  if (videoSection.style.display === "block") {
      videoSection.style.display = "none"; // Hide the video if it's visible
  } else {
      videoSection.style.display = "block"; // Show the video if it's hidden
  }
}
 // Particle generation  hero
 const particleContainer = document.querySelector('.hero-particles');
 for (let i = 0; i < 500; i++) {
     const particle = document.createElement('div');
     particle.classList.add('particle');
     particle.style.left = `${Math.random() * 100}%`;
     particle.style.animationDelay = `${Math.random() * 5}s`;
     particle.style.animationDuration = `${Math.random() *  + 3}s`;
     particleContainer.appendChild(particle);
 }



 // Toggle the navigation menu on small devices
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show'); // Toggle the 'show' class to display or hide the menu
});


// video section 
