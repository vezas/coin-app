import axios from 'axios';
import { toast } from 'react-toastify';

const createAxiosInstance = (baseURL: string) => {
  const instance = axios.create({ baseURL });

  instance.interceptors.response.use(
    (response) => response.data,
    (error) => {
      toast.error(error.message, {
        position: 'bottom-right',
        theme: 'colored'
      });
      return Promise.reject(error);
    }
  );

  return instance;
};

export const coinGeckoApi = createAxiosInstance(`https://api.coingecko.com/api/v3/`);
