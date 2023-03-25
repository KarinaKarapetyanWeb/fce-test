import { NameSpace } from "../../../const";
import { ILocation } from "../../../types/locations";
import { State } from "../../../types/state";

export const getLocations = (state: State): ILocation[] =>
  state[NameSpace.Locations].locations.list;
export const getLocationsLoading = (state: State): boolean =>
  state[NameSpace.Locations].locations.isLoading;
export const getLocationsError = (state: State): boolean =>
  state[NameSpace.Locations].locations.isError;

export const getLocationsByIp = (state: State): ILocation[] =>
  state[NameSpace.Locations].locationsByIp.list;
export const getLocationsByIpLoading = (state: State): boolean =>
  state[NameSpace.Locations].locationsByIp.isLoading;
export const getLocationsByIpError = (state: State): boolean =>
  state[NameSpace.Locations].locationsByIp.isError;

export const getLocationLoading = (state: State): boolean =>
  state[NameSpace.Locations].location.isLoading;
export const getLocationError = (state: State): boolean =>
  state[NameSpace.Locations].location.isError;
