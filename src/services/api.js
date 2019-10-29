import axios from 'axios';

const api = axios.create({
  baseURL: 'http://159.89.53.154',
});

export default api;
