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