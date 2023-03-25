import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosInstance } from "axios";
import { IP_URL } from "../../../const";
import { AppDispatch, State } from "../../../types/state";

export const fetchIp = createAsyncThunk<
  string,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>("user/fetchIp", async (_arg, { dispatch, extra: api }) => {
  const { data } = await axios.get(IP_URL);
  return data.ipAddress;
});
