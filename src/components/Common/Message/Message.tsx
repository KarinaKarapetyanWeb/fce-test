import React from "react";
import BackButton from "../BackButton/BackButton";
import Button from "../Button/Button";
import styles from "./Message.module.scss";

interface MessageProps {
  title: string;
  text: string;
  onBtnClick: () => void;
}

const Message: React.FunctionComponent<MessageProps> = ({
  title,
  text,
  onBtnClick,
}) => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.message}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
        <Button className={styles.submitBtn} type="button" onClick={onBtnClick}>
          ok
        </Button>
        <BackButton className={styles.backBtn} />
      </section>
    </div>
  );
};

export default Message;
