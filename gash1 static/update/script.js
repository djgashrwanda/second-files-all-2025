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

  // Sample news data
const newsData = [
  { id: 1, title: "GS Kiziguro TSS Enter Classes final", date: "2024-11-15", description: "On 2024-11-15, GS Kiziguro TSS witnessed an exciting final match between Level 5 and Senior 3, where Level 5 emerged victorious with a 2-0 win. The goals were scored by Gashema Francis, and Tuyiringirimana Ndagijimana, showcasing their incredible skills and teamwork. The match drew a large crowd of enthusiastic students and staff, all cheering passionately for their respective teams. After the final whistle, the Level 5 team celebrated their well-deserved victory with pride, marking another memorable day in the school's sports history. The principal congratulated both teams for their sportsmanship and effort, encouraging all students to continue participating in extracurricular activities that build camaraderie and character. This thrilling match will undoubtedly inspire many students to hone their talents and strive for excellence both on and off the field.", img: "https://i.ibb.co/kBcnVSF/image1.jpg" },
  { id: 2, title: "there Student Happy To Touching the Cup for the First Time in There Life", date: "2024-11-15", description: "For the first time in the history of GS Kiziguro TSS, students have experienced the thrill of touching a championship cup. The school recently participated in the Inter-School Sports Tournament, where the talented team triumphed in the basketball finals. The excitement in the air was palpable as the students lifted the shiny trophy, a symbol of their dedication, teamwork, and resilience. “This is the happiest moment of my life!” exclaimed Jean Claude Mugisha, the team captain, with tears of joy. “We worked hard, trained every evening, and now we’ve made our school proud.” The school organized a celebratory event to honor the team, with cheering students and proud parents in attendance. The Principal of GS Kiziguro TSS praised the players, saying: This victory is not just about sports it's about the power of perseverance and unity. We are proud to have such talented students. Many students, like Grace Uwimana, who cheered from the stands, shared their excitement: “Watching our team win was magical! I’ve never been this proud to be a part of GS Kiziguro TSS.” The trophy has found its home in the school’s main hall, a shining reminder of what can be achieved through hard work and determination. This victory is expected to inspire more students to join extracurricular activities and showcase their talents. Join the Winning Team! At GS Kiziguro TSS, we believe in holistic education that nurtures both academics and extracurricular excellence. Whether you’re passionate about sports, arts, or technology, there’s a place for you to shine.", img: "https://i.ibb.co/SyKvC6K/image.jpg" },
  { id: 3, title: "", date: "2024-08-05", description: "New facilities opened to support ICT learning...", img: "https://via.placeholder.com/600x400" },
  { id: 4, title: "STEM Workshops for Students", date: "2024-07-15", description: "Hands-on STEM activities organized for students...", img: "https://via.placeholder.com/600x400" },
  
  // Add more sample data as needed
];

let currentPage = 1;
const itemsPerPage = 3;

// Render news items
function renderNews(data) {
  const newsGrid = document.getElementById("newsGrid");
  newsGrid.innerHTML = "";
  data.forEach(news => {
      const newsItem = document.createElement("div");
      newsItem.className = "news-item";
      newsItem.innerHTML = `
          <img src="${news.img}" alt="${news.title}">
          <h3>${news.title}</h3>
          <p>${new Date(news.date).toDateString()}</p>
          <p>${news.description}</p>
          <a href="#">Read more &rarr;</a>
      `;
      newsGrid.appendChild(newsItem);
  });
}

// Paginate and filter news items
function filterNews() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  let filteredNews = newsData.filter(news => news.title.toLowerCase().includes(searchInput));
  renderPaginatedNews(filteredNews);
}

// Render paginated news
function renderPaginatedNews(data) {
  const start = (currentPage - 1) * itemsPerPage;
  const paginatedData = data.slice(start, start + itemsPerPage);
  renderNews(paginatedData);
  renderPagination(data.length);
}

// Render pagination buttons
function renderPagination(totalItems) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";
  for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement("button");
      button.innerText = i;
      button.className = i === currentPage ? "active" : "";
      button.onclick = () => {
          currentPage = i;
          filterNews();
      };
      pagination.appendChild(button);
  }
}

// Initial load
window.onload = function() {
  filterNews();
};
// show learn more button
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

const section = document.getElementById("background-section");

// Array of background images
const images = [
  "https://i.ibb.co/hLF0gzT/image1.jpg",
  "https://i.ibb.co/kBcnVSF/image.jpg",
  "https://i.ibb.co/mTF8kqs/image3.jpg",
  "https://i.ibb.co/DWkTrr4/image4.jpg"
  
];
let currentIndex = 0;

// Function to swap background images
function swapBackgroundImage() {
  section.style.backgroundImage = `url(${images[currentIndex]})`;
  currentIndex = (currentIndex + 1) % images.length;
}

// Initial background set
swapBackgroundImage();

// Change background every 5 seconds
setInterval(swapBackgroundImage, 5000);