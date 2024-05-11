import Swiper from 'swiper';
import {Pagination} from 'swiper/modules';
import 'swiper/css';

new Swiper ('.hero__swiper', {
  modules: [Pagination],
  loop: true,
  simulateTouch: true,
  watchSlidesProgress: true,

  breakpoints: {
    1440: {
      simulateTouch: false,
    }
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
    bulletElement: 'button',
  },
}
);
