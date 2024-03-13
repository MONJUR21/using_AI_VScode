/* script.js */

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    const section = document.querySelector(event.target.hash);
    section.scrollIntoView({ behavior: 'smooth' });
  });
});