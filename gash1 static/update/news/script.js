// Sample news data
const newsData = [
    { id: 1, title: "GS Kiziguro TSS Celebrates Community Day", date: "2024-10-12", description: "Students actively engaged in community service...", img: "https://via.placeholder.com/600x400" },
    { id: 2, title: "Graduation Ceremony for Levels 3 to 5", date: "2024-09-20", description: "Graduates celebrated their achievements...", img: "https://via.placeholder.com/600x400" },
    { id: 3, title: "New Computer Lab Inaugurated", date: "2024-08-05", description: "New facilities opened to support ICT learning...", img: "https://via.placeholder.com/600x400" },
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
// Toggle the navigation menu on small devices
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show'); // Toggle the 'show' class to display or hide the menu
});
