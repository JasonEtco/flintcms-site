const header = document.querySelector('.header');
const headerOverlay = document.querySelector('.header__overlay');
const navButton = document.querySelector('.nav__button');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    header.classList.add('has-scrolled');
  } else {
    header.classList.remove('has-scrolled');
  }
});

if (navButton && header && headerOverlay) {
  navButton.addEventListener('click', () => {
    header.classList.toggle('is-active');
  });

  headerOverlay.addEventListener('click', () => {
    header.classList.remove('is-active');
  });
}

const homeBtns = Array.from(document.querySelectorAll('.js-home-btn'));
if (homeBtns) {
  const homeBlocks = Array.from(document.querySelectorAll('.js-home-block'));

  homeBtns.forEach((el, i) => el.addEventListener('click', () => {
    homeBtns.forEach((blk, o) => {
      if (o === i) {
        blk.classList.add('is-active');
      } else {
        blk.classList.remove('is-active');
      }
    });

    homeBlocks.forEach((blk, o) => {
      if (o === i) {
        blk.classList.add('is-active');
      } else {
        blk.classList.remove('is-active');
      }
    });
  }));
}