'use strict'

import axios from 'axios';

axios.defaults.baseURL = "https://wedding-photographer.b.goit.study/api";

export async function getFeedbacks(limit = 10, page = 1) {
  const response = await axios.get('/feedbacks', {
    params: {
      limit,
      page,
    },
  });

  return response.data;
}


// ------------------------------------------------------------------------------------------------
// Portfolio
// ------------------------------------------------------------------------------------------------


const BASE_URL = 'https://wedding-photographer.b.goit.study/api';

export async function fetchCategories() {
  const response = await fetch(`${BASE_URL}/categories`);
  if (!response.ok) throw new Error(`Помилка HTTP: ${response.status}`);
  return await response.json();
}

export async function fetchPhotos(categoryId, page = 1, limit = 9) {
  const categoryParam = categoryId !== 'all' ? `&categoryId=${categoryId}` : '';
  const url = `${BASE_URL}/wedding-photos?page=${page}&limit=${limit}${categoryParam}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Помилка HTTP: ${response.status}`);
  return await response.json();
}

export async function createOrder(payload) {
  const response = await axios.post('/orders', payload);
  return response.data;
}
