import React, { useEffect } from "react";
import { Screen } from "../../const";
import useAppSelector from "../../hooks/useAppSelector";
import { getScreen } from "../../store/reducers/screen/selectors";
import Locations from "../Locations/Locations";
import Navigation from "../Navigation/Navigation";
import Map from "../Map/Map";
import styles from "./App.module.scss";
import { useActions } from "../../hooks/useActions";
import Message from "../Common/Message/Message";

function App() {
  const screen = useAppSelector(getScreen);
  const { fetchIp, setScreen } = useActions();

  const handleOkBtnClick = () => setScreen(Screen.Main);

  const showApp = () => {
    switch (screen) {
      case Screen.Main:
        return <Navigation />;
      case Screen.Map:
        return <Map />;
      case Screen.Locations:
        return <Locations />;
      case Screen.Error:
        return (
          <Message
            title="Error"
            text="Something went wrong try again"
            onBtnClick={handleOkBtnClick}
          />
        );
      case Screen.Success:
        return (
          <Message
            title="Success"
            text="Location have been saved!"
            onBtnClick={handleOkBtnClick}
          />
        );
      default:
        return <Navigation />;
    }
  };

  useEffect(() => {
    fetchIp();
  }, []);

  return <div className={styles.app}>{showApp()}</div>;
}

export default App;
