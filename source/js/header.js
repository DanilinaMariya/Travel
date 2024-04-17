const headerButton = document.querySelector('.header__button');
const headerNav = document.querySelector('.header_nav');
const body = document.querySelector('body');
const headerLink = document.querySelectorAll('.nav__link--header');

const onHeaderButtonClick = () =>{
  if (headerButton.classList.contains('header__button--activ')) {
    headerButton.classList.remove('header__button--activ');
    headerNav.classList.remove('header_nav--open');
    body.classList.remove('overlay');
  }else {
    headerButton.classList.add('header__button--activ');
    headerNav.classList.add('header_nav--open');
    body.classList.add('overlay');
  }
};

const onHeaderLinkClick = () => {
  headerButton.classList.remove('header__button--activ');
  headerNav.classList.remove('header_nav--open');
  body.classList.remove('overlay');
};

headerLink.forEach((el) => {
  el.addEventListener('click', onHeaderLinkClick);
});

headerButton.addEventListener('click', onHeaderButtonClick);
