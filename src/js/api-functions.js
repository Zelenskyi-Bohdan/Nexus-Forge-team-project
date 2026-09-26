import axios from 'axios';

const API_URL = 'https://wedding-photographer.b.goit.study/api';

export const getCategories =  async () => {
  const response = await axios.get(
    `${API_URL}/categories`,
  );
  return response.data;
};

export const createOrder = async (payload) => {
  const response = await axios.post(
    `${API_URL}/orders`,
    payload
  );
  return response.data;
}