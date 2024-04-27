import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';

new Swiper ('.instructors__swiper', {
  modules: [Navigation],
  loop: false,
  simulateTouch: true,
  watchSlidesProgress: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 20,
      simulateTouch: false,
    }
  },

  navigation: {
    nextEl: '.instructors__button--next',
    prevEl: '.instructors__button--prev',
  }
}
);
