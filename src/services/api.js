import axios from 'axios';

// Load API URL from .env file
const API_URL = import.meta.env.VITE_API_URL;

// Axios instance
const api = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fetch posts using async/await
export const getPosts = async () => {
  try {
    const response = await api.get('');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch posts');
  }
};

export default api;
