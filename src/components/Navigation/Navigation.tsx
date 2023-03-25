import React from "react";
import { Screen } from "../../const";
import { useActions } from "../../hooks/useActions";
import Button from "../Common/Button/Button";
import styles from "./Navigation.module.scss";

interface NavigationProps {}

const Navigation: React.FunctionComponent<NavigationProps> = () => {
  const { setScreen } = useActions();

  const handleNavBtnClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    if (evt.currentTarget.dataset.name) {
      setScreen(evt.currentTarget.dataset.name as Screen);
    }
  };

  return (
    <nav className={styles.navigation}>
      <Button type="button" data-name={Screen.Map} onClick={handleNavBtnClick}>
        Open Map
      </Button>
      <Button
        appearance="ghost"
        type="button"
        data-name={Screen.Locations}
        onClick={handleNavBtnClick}
      >
        Show locations
      </Button>
    </nav>
  );
};

export default Navigation;
