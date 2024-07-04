import React from "react";
import styles from "./Modal.module.css";

export const Modal = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
