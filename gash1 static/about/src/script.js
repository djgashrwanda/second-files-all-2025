document.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.scroll-animation');
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            element.classList.add('visible');
        }
    });
});
