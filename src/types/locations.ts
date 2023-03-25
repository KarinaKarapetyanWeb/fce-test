export interface ILocation {
  coord_x: string;
  coord_y: string;
  created_at: string;
  id: string;
  ip: string;
  updated_at: string;
}

export interface IPosition {
  lat: number;
  lng: number;
}

export interface ICoordinates {
  x: number;
  y: number;
}

export interface IStringCoordinates {
  x: string;
  y: string;
}
