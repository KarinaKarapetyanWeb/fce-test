import React, { useEffect } from "react";
import { Step } from "../../const";
import useAppSelector from "../../hooks/useAppSelector";
import { getStep } from "../../store/reducers/step/selectors";
import Locations from "../Locations/Locations";
import Navigation from "../Navigation/Navigation";
import Map from "../Map/Map";
import styles from "./App.module.scss";
import { useActions } from "../../hooks/useActions";
import Message from "../Common/Message/Message";

function App() {
  const step = useAppSelector(getStep);
  const { fetchIp, setStep } = useActions();

  const handleCloseBtnClick = () => setStep(Step.Main);

  const showApp = () => {
    switch (step) {
      case Step.Main:
        return <Navigation />;
      case Step.Map:
        return <Map />;
      case Step.Locations:
        return <Locations />;
      case Step.Error:
        return (
          <Message
            title="Error"
            text="Something went wrong try again"
            onClose={handleCloseBtnClick}
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
