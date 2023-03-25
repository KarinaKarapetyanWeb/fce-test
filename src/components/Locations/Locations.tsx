import React, { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import useAppSelector from "../../hooks/useAppSelector";
import {
  getLocationsByIp,
  getLocationsByIpLoading,
} from "../../store/reducers/locations/selectors";
import { getIp } from "../../store/reducers/user/selectors";
import { ILocation } from "../../types/locations";
import BackButton from "../Common/BackButton/BackButton";
import Loader from "../Common/Loader/Loader";
import styles from "./Locations.module.scss";

interface LocationsProps {}

const Locations: React.FunctionComponent<LocationsProps> = () => {
  const { fetchLocationsListByIp } = useActions();
  const ip = useAppSelector(getIp);
  const locationsByIp = useAppSelector(getLocationsByIp);
  const locationsByIpLoading = useAppSelector(getLocationsByIpLoading);

  useEffect(() => {
    if (ip) {
      fetchLocationsListByIp(ip);
    }
  }, []);

  return (
    <section className={styles.locations}>
      <h2 className={styles.title}>List of locations</h2>

      {locationsByIpLoading && (
        <div className={styles.loaderWrapper}>
          <Loader />
        </div>
      )}
      {!locationsByIpLoading && locationsByIp.length === 0 && (
        <p className={styles.text}>
          No locations available, please add your first marker to the map.
        </p>
      )}
      {!locationsByIpLoading && locationsByIp.length !== 0 && (
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Ip</th>
                <th>Coord_x</th>
                <th>Coord_y</th>
              </tr>
            </thead>
            <tbody>
              {locationsByIp.map((location: ILocation) => (
                <tr key={location.id}>
                  <td>{location.ip}</td>
                  <td>{location.coord_x}</td>
                  <td>{location.coord_y}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <BackButton className={styles.backBtn} />
    </section>
  );
};

export default Locations;
