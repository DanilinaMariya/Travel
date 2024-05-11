const formButton = document.querySelector('.form__button');
const formInput = document.querySelectorAll('.form__input');

const onFormButtonClick = () => {
  formInput.forEach((el) => {
    if (!el.classList.contains('form__input--valid')) {
      el.classList.add('form__input--valid');
    }
  });
};

formButton.addEventListener('click', onFormButtonClick);
