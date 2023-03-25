import axios, { AxiosError, AxiosInstance } from "axios";
import { BACKEND_URL, REQUEST_TIMEOUT, Screen } from "../const";
import { store } from "../store";
import { setScreen } from "../store/reducers/screen";

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{ error: string }>) => {
      if (error.response) {
        store.dispatch(setScreen(Screen.Error));
      }

      throw error;
    }
  );

  return api;
};
