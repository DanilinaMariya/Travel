const headerButton = document.querySelector('.header__button');
const headerNav = document.querySelector('.nav__list--header');

const onHeaderButtonClick = () =>{
  if (headerButton.classList.contains('header__button--activ')) {
    headerButton.classList.remove('header__button--activ');
    headerNav.classList.remove('nav__list--open');
  }else {
    headerButton.classList.add('header__button--activ');
    headerNav.classList.add('nav__list--open');
  }
};

headerButton.addEventListener('click', onHeaderButtonClick);
