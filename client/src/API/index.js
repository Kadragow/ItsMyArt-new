import axios from 'axios';
import { API_BASE_URL, ACCESS_TOKEN } from '../constants/constants';

export const sendRequest = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

sendRequest.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);

    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
  },
  (error) => {
    if (
      (window.location.pathname.includes('login') ||
        window.location.pathname.includes('register')) &&
      error?.response?.status === 401
    ) {
      return;
    }
    if (error?.response?.status === 401) {
      window.location.href = '/login';
      return;
    }

    console.log(error?.response.data);
    throw error;
  }
);

export const api = {
  login: (body) => sendRequest.post('/auth/login', body),
  register: (body) => sendRequest.post('/auth/register', body),

  getAllPosts: ({ page, limit }) =>
    sendRequest.get(`/posts?page=${page}&limit=${limit}`),
};
