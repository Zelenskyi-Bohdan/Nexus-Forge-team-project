'use strict'

import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],

    slidesPerView: 1, 
  spaceBetween: 16,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    addIcons: false,
  },

  breakpoints: {
    // Tablet (768px+)
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    // Desktop (1440px+)
    1440: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
    });