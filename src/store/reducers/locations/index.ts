import { createSlice } from "@reduxjs/toolkit";
import { NameSpace } from "../../../const";
import { getLocationsWithCoords } from "../../../utils/location";
import {
  fetchLocationsList,
  fetchLocationsListByIp,
  saveLocation,
} from "./action";
import { ILocationsState } from "./types";

const initialState: ILocationsState = {
  locations: {
    list: [],
    isLoading: false,
    isError: false,
  },
  locationsByIp: {
    list: [],
    isLoading: false,
    isError: false,
  },
  location: {
    isLoading: false,
    isError: false,
  },
};

const reducer = createSlice({
  name: NameSpace.Locations,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchLocationsList.pending, (state) => {
        state.locations.isLoading = true;
        state.locations.isError = false;
      })
      .addCase(fetchLocationsList.fulfilled, (state, action) => {
        state.locations.list = getLocationsWithCoords(action.payload);
        state.locations.isLoading = false;
      })
      .addCase(fetchLocationsList.rejected, (state) => {
        state.locations.isLoading = false;
        state.locations.isError = true;
      })

      .addCase(fetchLocationsListByIp.pending, (state) => {
        state.locationsByIp.isLoading = true;
        state.locationsByIp.isError = false;
      })
      .addCase(fetchLocationsListByIp.fulfilled, (state, action) => {
        state.locationsByIp.list = action.payload;
        state.locationsByIp.isLoading = false;
      })
      .addCase(fetchLocationsListByIp.rejected, (state) => {
        state.locationsByIp.isLoading = false;
        state.locationsByIp.isError = true;
      })

      .addCase(saveLocation.pending, (state) => {
        state.location.isLoading = true;
        state.location.isError = false;
      })
      .addCase(saveLocation.fulfilled, (state) => {
        state.location.isLoading = false;
      })
      .addCase(saveLocation.rejected, (state) => {
        state.location.isLoading = false;
        state.location.isError = true;
      });
  },
});

export default reducer;
