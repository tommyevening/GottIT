// Smooth scrolling dla linków nawigacyjnych
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animacja nawigacji przy scrollowaniu
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(20, 20, 30, 0.95)'; // Stałe ciemne tło
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)'; // Subtelny cień
    } else {
        header.style.background = 'rgba(20, 20, 30, 0.95)'; // Stałe ciemne tło
        header.style.boxShadow = 'none'; // Brak cienia
    }
});

function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

function redirectToPage(url) {
    window.location.href = url;
}