
function scrollToSection(id) {
const element = document.getElementById(id);
if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
}
}


document.addEventListener('DOMContentLoaded', () => {
const elements = document.querySelectorAll('.animate-fade');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('visible');
    }
    });
}, { threshold: 0.1 });

elements.forEach(el => observer.observe(el));
});
