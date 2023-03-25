import { LeafletMouseEvent, Icon } from "leaflet";
import React, { useState } from "react";
import { useMapEvents, Marker } from "react-leaflet";
import { ICoordinates, IPosition } from "../../types/locations";
import { icon } from "./icons";

interface UserMarkerProps {
  setCoordinates: React.Dispatch<React.SetStateAction<null | ICoordinates>>;
}

const UserMarker: React.FunctionComponent<UserMarkerProps> = ({
  setCoordinates,
}) => {
  const [position, setPosition] = useState<null | IPosition>(null);

  const map = useMapEvents({
    click(evt: LeafletMouseEvent) {
      setPosition(evt.latlng);
      setCoordinates(evt.containerPoint);
    },
  });

  const defaultCustomIcon = new Icon({
    iconUrl: icon,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  return position === null ? null : (
    <Marker position={position} icon={defaultCustomIcon}></Marker>
  );
};

export default UserMarker;
