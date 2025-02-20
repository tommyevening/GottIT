// smoothScrolling.js

// Modyfikacja dla wszystkich linków nawigacyjnych
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const element = document.querySelector(this.getAttribute('href'));
        const headerOffset = 70; // Wysokość headera
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// Animacja nawigacji przy scrollowaniu
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(20, 20, 30, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    } else {
        header.style.background = 'rgba(20, 20, 30, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Funkcja dla menu mobilnego
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Funkcja przekierowania
function redirectToPage(url) {
    window.location.href = url;
}

// Obsługa przycisku "Dowiedz się więcej"
document.querySelector('.hero-buttons .btn.secondary:last-child').addEventListener('click', function(e) {
    e.preventDefault();
    const aboutSection = document.querySelector('#about');
    const headerOffset = 70; // Ta sama wysokość co header
    const elementPosition = aboutSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
});

