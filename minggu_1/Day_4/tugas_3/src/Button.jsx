import React from "react";
import styles from "./Button.module.css";

function Button({ type, children }) {
  const className =
    type === "primary" ? styles.primary : styles.default;

  return <button className={className}>{children}</button>;
}

export default Button;
