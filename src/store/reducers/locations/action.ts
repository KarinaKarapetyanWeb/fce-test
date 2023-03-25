import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { ApiRoute } from "../../../const";
import { ILocation } from "../../../types/locations";
import { AppDispatch, State } from "../../../types/state";
import { ILocationParams, ILocationResponse } from "./types";

export const fetchLocationsList = createAsyncThunk<
  ILocation[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>("locations/fetchLocationsList", async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<ILocationResponse>(ApiRoute.LocationList);
  return data.data;
});

export const fetchLocationsListByIp = createAsyncThunk<
  ILocation[],
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>("locations/fetchLocationsListByIp", async (ip, { dispatch, extra: api }) => {
  const { data } = await api.post<ILocationResponse>(
    ApiRoute.LocationListByIp,
    {
      ip,
    }
  );
  return data.data;
});

export const saveLocation = createAsyncThunk<
  ILocation[],
  ILocationParams,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>("locations/saveLocation", async (params, { dispatch, extra: api }) => {
  await api.post(`${ApiRoute.SaveLocation}`, {
    ...params,
  });

  const { data: newData } = await api.get<ILocationResponse>(
    ApiRoute.LocationList
  );

  return newData.data;
});
