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