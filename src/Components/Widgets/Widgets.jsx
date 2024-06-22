import React from "react";
import styles from "./Widgets.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

function Widgets() {
  return (
    <div className={styles.widgets}>
      <div className={styles.widgets__header}>
        <h2>LinkedIn news</h2>
        <FontAwesomeIcon icon={faInfoCircle} />
      </div>
    </div>
  );
}

export default Widgets;
