import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { StatusCodes } from "http-status-codes";
import { BACKEND_URL, REQUEST_TIMEOUT, Step } from "../const";
import { store } from "../store";
import { setStep } from "../store/reducers/step";

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{ error: string }>) => {
      if (error.response) {
        store.dispatch(setStep(Step.Error));
      }

      throw error;
    }
  );

  return api;
};
