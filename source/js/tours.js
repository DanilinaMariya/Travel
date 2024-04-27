import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';

new Swiper ('.tours__swiper', {
  modules: [Navigation],
  loop: false,
  simulateTouch: true,
  watchSlidesProgress: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1440: {
      slidesPerView: 3,
      simulateTouch: false,
      spaceBetween: 40,
    }
  },

  navigation: {
    nextEl: '.tours__button--next',
    prevEl: '.tours__button--prew',
  }
}
);
