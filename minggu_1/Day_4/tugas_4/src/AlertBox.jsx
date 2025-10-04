import React from "react";
import styles from "./AlertBox.module.css";

function AlertBox({ type, children }) {
  let alertClass = styles.alert;

  switch (type) {
    case "success":
      alertClass += ` ${styles.success}`;
      break;
    case "warning":
      alertClass += ` ${styles.warning}`;
      break;
    case "error":
      alertClass += ` ${styles.error}`;
      break;
  }

  return <div className={alertClass}>{children}</div>;
}

export default AlertBox;
