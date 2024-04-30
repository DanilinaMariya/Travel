import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
const swiper = document.querySelector('.adv__conteiner');
const swipperWrapper = document.querySelector('.adv__list');
const swiperSlide = document.querySelectorAll('.adv__item');
const mediaQuerySize = 1440;

const initSwiperAdv = () => {
  new Swiper ('.adv__conteiner', {
    modules: [Navigation],
    loop: true,
    simulateTouch: false,
    slidesPerView: 'auto',
    slidesPerGroup: 2,
    loopAddBlankSlides: false,
    loopAdditionalSlides: 0,
    spaceBetween: 30,

    navigation: {
      nextEl: '.adv__button--next',
      prevEl: '.adv__button--prev',
    }
  }
  );
};

const addSwiperAdvClass = () => {
  swiper.classList.add('swiper');
  swipperWrapper.classList.add('swiper-wrapper');
  swiperSlide.forEach((el) => {
    el.classList.add('swiper-slide');
  });
};


if (document.body.clientWidth >= mediaQuerySize) {
  addSwiperAdvClass();
  initSwiperAdv();
}
