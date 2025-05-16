 /**   // JavaScript for handling form submission
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
  **/
  // handling form
  /** 
  document.getElementById('registrationForm').addEventListener("submit", function(event) {
    event.preventDefault();
  

  const iname=document.getElementById('name').value;
  const fi_name=document.getElementById('fname').value;
  const f_id=document.getElementById('id').value;
  const f_Number=document.getElementById('number').value;
  const s_level=document.getElementById('level').value;
   
  const confirmationMessage = 
  THANK YOU <br>
  Now you are finish to Submite your registration<br/>
  Student name : ${iname}<br/>
  your parent name : ${fi_name}<br/>
  ;

document.getElementById("confirmationMessage").innerHTML = confirmationMessage;
  });

  **/


  // academic section 

  // Department information for the modal
const departmentInfo = {
  nursery: {
      title: "Nursery Department",
      description: "Our nursery program offers a safe, nurturing environment where children learn foundational skills through play-based activities."
  },
  primary: {
      title: "Primary School (P1-P6)",
      description: "Our primary school focuses on building core literacy, numeracy, and critical thinking skills, preparing students for lifelong learning."
  },
  secondary: {
      title: "Secondary School (S1-S3)",
      description: "The secondary program provides a broad curriculum that covers essential subjects, preparing students for further academic or vocational paths."
  },
  level3csa: {
      title: "Level 3 - Computer Systems Administration (CSA)",
      description: "This course introduces the basics of computer systems and networks, providing hands-on training in support and maintenance."
  },
  level3sod: {
      title: "Level 3 - Software Development (SOD)",
      description: "Explore introductory coding concepts and basic software development practices in a beginner-friendly environment."
  },
  level4csa: {
      title: "Level 4 - Computer Systems Administration (CSA)",
      description: "Delve into advanced networking, system security, and support processes to equip students with practical IT skills."
  },
  level4sod: {
      title: "Level 4 - Software Development (SOD)",
      description: "Strengthen coding and design skills while working on real-world projects, emphasizing teamwork and technical proficiency."
  },
  level5csa: {
      title: "Level 5 - Computer Systems Administration (CSA)",
      description: "Advanced training in system security, network infrastructure, and cloud computing for aspiring IT professionals."
  },
  level5sod: {
      title: "Level 5 - Software Development (SOD)",
      description: "Master software development methodologies and advanced coding techniques, preparing students for industry challenges."
  }
};

// Function to open the modal and display department information
function showMoreInfo(departmentKey) {
  const modal = document.getElementById("infoModal");
  document.getElementById("modalTitle").innerText = departmentInfo[departmentKey].title;
  document.getElementById("modalDescription").innerText = departmentInfo[departmentKey].description;
  modal.style.display = "flex";
}

// Function to close the modal
function closeModal() {
  document.getElementById("infoModal").style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
  const modal = document.getElementById("infoModal");
  if (event.target === modal) {
      closeModal();
  }
};
