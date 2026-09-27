const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const closeButton = document.querySelector('.close-btn');
const mobileMenuLinks = document.querySelectorAll('.mob-nav-link');
const bookButton = document.querySelector('.mob-book-btn');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.add('is-open');
     document.body.classList.add('no-scroll');
});

closeButton.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
});

mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  });
});

bookButton.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
});