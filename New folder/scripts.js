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