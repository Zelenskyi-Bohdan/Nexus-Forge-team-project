'use strict'

import { getFeedbacks } from './api.js';

const feedbacksList = document.querySelector('.feedbacks-list');

export async function renderFeedbacks() {
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
    .join('');;
  } catch (error) {
    console.error('Failed to fetch feedbacks:', error);
  }
}