export enum NameSpace {
  Step = "STEP",
  User = "User",
  Locations = "LOCATIONS",
}

export enum Step {
  Main = "Main",
  Map = "Map",
  Locations = "Locations",
  Error = "Error",
}

export enum ApiRoute {
  LocationList = "/location-list",
  LocationListByIp = "/location-list-by-ip",
  SaveLocation = "/save-location",
}

export const IP_URL = "https://api.db-ip.com/v2/free/self";

export const REQUEST_TIMEOUT = 5000;

export const BACKEND_URL = "https://dev-sso.transparenterra.com/api";
