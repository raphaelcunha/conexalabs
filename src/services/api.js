import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'https://cors-anywhere.herokuapp.com/https://www.receitaws.com.br/v1/cnpj/'
    : 'https://www.receitaws.com.br/v1/cnpj/';

const api = axios.create({
  baseURL,
});

export default api;
