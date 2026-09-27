'use strict'

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, A11y } from 'swiper/modules';

import { getFeedbacks } from './api.js';

function initSwiper() {
  new Swiper('.swiper', {
    modules: [Navigation, Pagination, A11y],

    slidesPerView: 1,
    spaceBetween: 16,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
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
}

const feedbacksList = document.querySelector('.feedbacks-list');
const loader = document.querySelector('#portfolio-loader');

async function renderFeedbacks() {
  loader.classList.remove('is-hidden');

  try {
    const data = await getFeedbacks();

    feedbacksList.innerHTML = data.feedbacks
      .map(
      ({ _id, name, descr }) => `
        <li class="feedbacks-list-card swiper-slide" data-id="${_id}">
          <p class="feedbacks-card-description">
            ${descr}
          </p>

          <p class="feedbacks-card-author">
            ${name}
          </p>
        </li>
      `
    )
    .join('');
  } catch (error) {
    console.error('Failed to fetch feedbacks:', error);

     iziToast.error({
    title: 'Error',
    message: 'Failed to load feedbacks. Please try again later.',
    position: 'topRight',
  });
  } finally {
    loader.classList.add('is-hidden');
  }
}

async function init() {
  await renderFeedbacks();
  initSwiper();
}

init();