document.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.scroll-animation');
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            element.classList.add('visible');
        }
    });
});


// this form handling

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

  // about us section addition
  
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

  function toggleDetails(element) {
      const details = element.querySelector('.details');
      details.classList.toggle('show');
  }
  function toggleInfo(element) {
    const info = element.querySelector('.info');
    info.classList.toggle('show');
}
function toggleDetail() {
  const extraDetails = document.querySelector('.extra-details');
  extraDetails.classList.toggle('show');
}