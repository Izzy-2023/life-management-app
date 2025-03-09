import axios from 'axios';

const API_URL = 'https://life-management-backend.onrender.com/';

const api = axios.create({
  baseURL: API_URL,
});

// Add a request interceptor to include JWT in headers
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
