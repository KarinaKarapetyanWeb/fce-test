import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Loader.module.scss";

interface LoaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Loader: React.FunctionComponent<LoaderProps> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn(styles.ldsRoller, className)}
      {...props}
      aria-label="loading"
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
