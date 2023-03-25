import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import { useActions } from "../../hooks/useActions";
import BackButton from "../Common/BackButton/BackButton";
import styles from "./Map.module.scss";
import Button from "../Common/Button/Button";
import useAppSelector from "../../hooks/useAppSelector";
import {
  getLocationLoading,
  getLocations,
  getLocationsLoading,
} from "../../store/reducers/locations/selectors";
import { getIp } from "../../store/reducers/user/selectors";
import Loader from "../Common/Loader/Loader";
import { ICoordinates, ILocation } from "../../types/locations";
import UserMarker from "../UserMarker/UserMarker";
import LocationMarker from "../LocationMarker/LocationMarker";

interface MapProps {}

const Map: React.FunctionComponent<MapProps> = () => {
  const { fetchLocationsList, saveLocation } = useActions();
  const [coordinates, setCoordinates] = useState<null | ICoordinates>(null);
  const locations = useAppSelector(getLocations);
  const locationsLoading = useAppSelector(getLocationsLoading);
  const locationSaving = useAppSelector(getLocationLoading);
  const ip = useAppSelector(getIp);

  useEffect(() => {
    fetchLocationsList();
  }, []);

  const handleSaveBtnClick = () => {
    if (coordinates && ip) {
      saveLocation({ ip: ip, coord_x: coordinates.x, coord_y: coordinates.y });
    }
  };

  const isSaveBtnDisabled = locationsLoading || locationSaving || !coordinates;

  return (
    <section className={styles.map}>
      <h2 className={styles.title}>Transparenterra community map</h2>
      <div className={styles.wrapper}>
        {locationsLoading && <Loader />}
        {!locationsLoading && (
          <MapContainer
            className={styles.leafletMap}
            center={{ lat: 51.505, lng: -0.09 }}
            zoom={13}
            scrollWheelZoom={false}
            zoomControl={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <UserMarker setCoordinates={setCoordinates} />

            {!locationsLoading &&
              locations.length !== 0 &&
              locations.map((item: ILocation) => {
                return (
                  <LocationMarker
                    key={item.id}
                    coordinates={{
                      x: item.coord_x,
                      y: item.coord_y,
                    }}
                  />
                );
              })}
            <ZoomControl position="bottomright" />
          </MapContainer>
        )}
      </div>
      <Button
        className={styles.saveBtn}
        type="button"
        onClick={handleSaveBtnClick}
        disabled={isSaveBtnDisabled}
      >
        {locationSaving ? "Saving..." : "Save"}
      </Button>
      <BackButton className={styles.backBtn} disabled={locationSaving} />
    </section>
  );
};

export default Map;
