import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';

new Swiper ('.gallery__swiper', {
  modules: [Navigation],
  loop: true,
  simulateTouch: true,
  spaceBetween: 5,
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
      loop: false,
      slidesPerView: 5,
      simulateTouch: false,
    }
  },

  navigation: {
    nextEl: '.gallery__button--next',
    prevEl: '.gallery__button--prev',
  }
}
);
