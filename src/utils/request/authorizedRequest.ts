import axios, { AxiosInstance } from 'axios';
import { stringify } from 'query-string';

const authorizedRequest: AxiosInstance = axios.create({
  baseURL: '',

  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) => stringify(params, { arrayFormat: 'separator' }),
});

authorizedRequest.interceptors.request.use((config) => {
  return config;
});

authorizedRequest.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    throw error;
  },
);

export default authorizedRequest;
