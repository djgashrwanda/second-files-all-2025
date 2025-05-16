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
 // Particle generation  hero
 const particleContainer = document.querySelector('.hero-particles');
 for (let i = 0; i < 500; i++) {
     const particle = document.createElement('div');
     particle.classList.add('particle');
     particle.style.left = `${Math.random() * 100}%`;
     particle.style.animationDelay = `${Math.random() * 1}s`;
     particle.style.animationDuration = `${Math.random() * 5 + 3}s`;
     particleContainer.appendChild(particle);
 }


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
