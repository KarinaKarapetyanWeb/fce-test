export enum NameSpace {
  Screen = "SCREEN",
  User = "USER",
  Locations = "LOCATIONS",
}

export enum Screen {
  Main = "Main",
  Map = "Map",
  Locations = "Locations",
  Error = "Error",
  Success = "Success",
}

export enum ApiRoute {
  LocationList = "/location-list",
  LocationListByIp = "/location-list-by-ip",
  SaveLocation = "/save-location",
}

export const IP_URL = "https://api.db-ip.com/v2/free/self";

export const REQUEST_TIMEOUT = 5000;

export const LONDON_CITY_CENTER = { lat: 51.505, lng: -0.09 };

export const DEFAULT_ZOOM_LEVEL = 13;

export const BACKEND_URL = "https://dev-sso.transparenterra.com/api";
