import React from "react";
import styles from "./InputOption.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function InputOption({ Icon, title, color }) {
  return (
    <div className={styles.inputOption}>
      <FontAwesomeIcon icon={Icon} style={{ color: color, fontSize: "22px" }} />
      <h4>{title}</h4>
    </div>
  );
}

export default InputOption;
