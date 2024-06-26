import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';

new Swiper ('.reviews__swiper', {
  modules: [Navigation],
  loop: false,
  simulateTouch: true,
  slidesPerView: 'auto',
  spaceBetween: 10,

  breakpoints: {
    768: {
      spaceBetween: 30,
    },
    1440: {
      spaceBetween: 120,
      simulateTouch: false,
      centeredSlides: false,
    }
  },

  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
  }
}
);
