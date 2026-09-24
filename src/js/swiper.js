'use strict'

import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

import { getFeedbacks } from './api.js';

const feedbacksList = document.querySelector('.feedbacks-list');

export function createFeedbackMarkup(feedbacks) {
  return feedbacks
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
}

export async function renderFeedbacks() {
  try {
    const data = await getFeedbacks();

    feedbacksList.innerHTML = createFeedbackMarkup(data.feedbacks);
  } catch (error) {
    console.error('Failed to fetch feedbacks:', error);
  }
}

export function initSwiper() {
  new Swiper('.swiper', {
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
}