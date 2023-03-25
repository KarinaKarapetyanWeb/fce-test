import React from "react";
import { Step } from "../../const";
import { useActions } from "../../hooks/useActions";
import Button from "../Common/Button/Button";
import styles from "./Navigation.module.scss";

interface NavigationProps {}

const Navigation: React.FunctionComponent<NavigationProps> = ({}) => {
  const { setStep } = useActions();

  const handleNavBtnClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    if (evt.currentTarget.dataset.name) {
      setStep(evt.currentTarget.dataset.name as Step);
    }
  };

  return (
    <nav className={styles.navigation}>
      <Button type="button" data-name={Step.Map} onClick={handleNavBtnClick}>
        Open Map
      </Button>
      <Button
        appearance="ghost"
        type="button"
        data-name={Step.Locations}
        onClick={handleNavBtnClick}
      >
        Show locations
      </Button>
    </nav>
  );
};

export default Navigation;
