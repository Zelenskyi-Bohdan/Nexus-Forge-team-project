const scrollUpBtn = document.querySelector('.scroll-up');


let hideTimer;

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollUpBtn.classList.add('is-shown');

    clearTimeout(hideTimer);

    hideTimer = setTimeout(() => {
      scrollUpBtn.classList.remove('is-shown');
    }, 2000);
  } else {
    scrollUpBtn.classList.remove('is-shown');
  }
});

scrollUpBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
     behavior: 'smooth'
  });
});
