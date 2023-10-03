import axios, { AxiosError, AxiosRequestConfig } from 'axios';

import { NotificationType, Methods } from '../config';
import addNotification from './addNotification';

export interface RequestConfig extends AxiosRequestConfig {
  resource: string;
  method?: Methods;
  formData?: boolean;
}

const apiUrl = import.meta.env.VITE_API_BASE_URL;

axios.interceptors.response.use(
  async (response) => response,
  async (error: AxiosError) => {
    if (!error.response && error.message) {
      addNotification({
        content: error.message,
        type: NotificationType.ERROR,
      });
    }

    if (error.response) {
      addNotification({
        content: JSON.stringify(error.response),
        type: NotificationType.ERROR,
      });
    }

    return Promise.reject(error);
  }
);

const request = async <T>({
  resource,
  method = Methods.GET,
  transformResponse,
  headers,
  data,
  formData,
  responseType,
  ...requestConfig
}: RequestConfig): Promise<T> => {
  const url = `${apiUrl}/${resource}`;

  const { data: response } = await axios<T>({
    method,
    url,
    headers,
    data,
    ...requestConfig,
  });

  return response;
};

export default request;
