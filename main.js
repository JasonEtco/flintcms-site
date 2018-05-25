var header = document.querySelector('.header');
var headerOverlay = document.querySelector('.header__overlay');
var navButton = document.querySelector('.nav__button');
var nav = document.querySelector('.nav');
var docsNav = document.querySelector('.docs-nav');
var docsNavButton = document.querySelector('.docs-nav__button');
var docsNavClose = document.querySelector('.docs-nav__close');

window.addEventListener('scroll', function () {
  if (window.scrollY > 400) {
    header.classList.add('has-scrolled');
  } else {
    header.classList.remove('has-scrolled');
  }
});

if (navButton && header && headerOverlay) {
  navButton.addEventListener('click',function () {
    header.classList.toggle('is-active');
  });

  headerOverlay.addEventListener('click',function () {
    header.classList.remove('is-active');
  });
}

if (docsNavButton && docsNav && docsNavClose) {
  docsNavButton.addEventListener('click',function () {
    docsNav.classList.add('is-active');
  });

  docsNavClose.addEventListener('click',function () {
    docsNav.classList.remove('is-active');
  });
}

const homeBtns = Array.from(document.querySelectorAll('.js-home-btn'));
if (homeBtns) {
  const homeBlocks = Array.from(document.querySelectorAll('.js-home-block'));

  homeBtns.forEach(function (el, i) {
    el.addEventListener('click',function () {
      homeBtns.forEach(function (blk, o) {
        if (o === i) {
          blk.classList.add('is-active');
        } else {
          blk.classList.remove('is-active');
        }
      });

      homeBlocks.forEach(function (blk, o) {
        if (o === i) {
          blk.classList.add('is-active');
        } else {
          blk.classList.remove('is-active');
        }
      });
    })
  });
}