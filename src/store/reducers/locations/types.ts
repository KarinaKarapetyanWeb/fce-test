import { ILocation } from "../../../types/locations";

export interface ILocationsState {
  locations: {
    list: ILocation[];
    isLoading: boolean;
    isError: boolean;
  };
  locationsByIp: {
    list: ILocation[];
    isLoading: boolean;
    isError: boolean;
  };
  location: {
    isLoading: boolean;
    isError: boolean;
  };
}

export interface ILocationParams {
  ip: string;
  coord_x: number;
  coord_y: number;
}

export interface ILocationResponse {
  data: ILocation[];
}
