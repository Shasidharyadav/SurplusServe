import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const login = async (credentials) => {
  const { data } = await API.post('/users/login', credentials);
  return data;
};

export const signup = async (userInfo) => {
  const { data } = await API.post('/users/signup', userInfo);
  return data;
};

export const addFoodItem = async (foodItem, token) => {
  const { data } = await API.post('/fooditems', foodItem, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const getFoodItems = async () => {
  const { data } = await API.get('/fooditems');
  return data;
};
