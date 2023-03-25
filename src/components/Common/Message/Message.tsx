import React from "react";
import BackButton from "../BackButton/BackButton";
import Button from "../Button/Button";
import styles from "./Message.module.scss";

interface MessageProps {
  title: string;
  text: string;
  onClose: () => void;
}

const Message: React.FunctionComponent<MessageProps> = ({
  title,
  text,
  onClose,
}) => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.message}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
        <Button className={styles.submitBtn} type="button" onClick={onClose}>
          ok
        </Button>
        <BackButton className={styles.backBtn} />
      </section>
    </div>
  );
};

export default Message;
