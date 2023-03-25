import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import cn from "classnames";
import { Screen } from "../../../const";
import { useActions } from "../../../hooks/useActions";
import { closeIcon } from "./icons";
import styles from "./BackButton.module.scss";

interface BackButtonProps
  extends Omit<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    "type" | "onClick"
  > {}

const BackButton: React.FunctionComponent<BackButtonProps> = ({
  className,
  ...props
}) => {
  const { setScreen } = useActions();

  const handleBackBtnClick = () => setScreen(Screen.Main);

  return (
    <button
      className={cn(styles.button, className)}
      type="button"
      onClick={handleBackBtnClick}
      aria-label="go back"
      {...props}
    >
      {closeIcon}
    </button>
  );
};

export default BackButton;
