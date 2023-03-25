import { Icon, latLng, PointExpression } from "leaflet";
import React from "react";
import { Marker, useMap } from "react-leaflet";
import { IStringCoordinates } from "../../types/locations";
import { icon } from "./icons";

interface LocationMarkerProps {
  coordinates: IStringCoordinates;
}

const LocationMarker: React.FunctionComponent<LocationMarkerProps> = ({
  coordinates,
}) => {
  const map = useMap();

  const defaultCustomIcon = new Icon({
    iconUrl: icon,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  return (
    <Marker
      position={map.layerPointToLatLng([
        Number(coordinates.x),
        Number(coordinates.y),
      ])}
      icon={defaultCustomIcon}
    />
  );
};

export default LocationMarker;
