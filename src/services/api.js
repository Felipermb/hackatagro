import axios from 'axios';

const apiBase = axios.create({
  baseURL: 'https://gw-dev.obiebank.banfico.com/obie-aisp/v3.1/aisp',
});

export { apiBase };
