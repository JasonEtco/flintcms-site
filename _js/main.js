const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    header.classList.add('has-scrolled');
  } else {
    header.classList.remove('has-scrolled');
  }
})

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