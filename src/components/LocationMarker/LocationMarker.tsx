import { Icon } from "leaflet";
import React from "react";
import { Marker, useMap } from "react-leaflet";
import useAppSelector from "../../hooks/useAppSelector";
import { getLocations } from "../../store/reducers/locations/selectors";
import { ILocation } from "../../types/locations";
import { icon } from "./icons";

interface LocationMarkerProps {}

const LocationMarker: React.FunctionComponent<LocationMarkerProps> = () => {
  const locations = useAppSelector(getLocations);

  const map = useMap();

  const defaultCustomIcon = new Icon({
    iconUrl: icon,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  return (
    <>
      {locations.map((item: ILocation) => {
        return (
          <Marker
            key={item.id}
            position={map.layerPointToLatLng([
              Number(item.coord_x),
              Number(item.coord_y),
            ])}
            icon={defaultCustomIcon}
          />
        );
      })}
    </>
  );
};

export default React.memo(LocationMarker);
