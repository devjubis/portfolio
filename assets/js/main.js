const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
  links.forEach(link => {
    link.classList.toggle('fade');
  });
});
