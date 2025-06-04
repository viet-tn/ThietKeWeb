const closeButton = document.querySelector('.header__menu--close');
const openButton = document.querySelector('.header__menu--bar');
const headerMenu = document.querySelector('.header__menu');

closeButton.addEventListener('click', () => {
  headerMenu.classList.add('hide');
  headerMenu.classList.remove('show');
});
openButton.addEventListener('click', () => {
  headerMenu.classList.add('show');
  headerMenu.classList.remove('hide');
});

const MENU_ITEMS = document.querySelectorAll('.header__menu--item');
const PAGES = document.querySelectorAll('.page');

MENU_ITEMS.forEach((item, index) => {
  item.addEventListener('click', () => {
    PAGES.forEach((child) => {
      child.classList.remove('show');
      child.classList.add('hide');
    });
    PAGES[index].classList.add('show');
    PAGES[index].classList.remove('hide');
  });
});
