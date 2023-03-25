import { ILocation } from "../types/locations";

export const getLocationsWithCoords = (array: ILocation[]): ILocation[] => {
  return array.filter(
    (item: ILocation) =>
      !Number.isNaN(Number(item.coord_x)) && !Number.isNaN(Number(item.coord_y))
  );
};
