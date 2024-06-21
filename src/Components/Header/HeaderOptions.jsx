import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./HeaderOptions.module.css";

function HeaderOptions({ Icon, title }) {
  return (
    <div className={styles.header_options}>
      {Icon && (
        <FontAwesomeIcon icon={Icon} className={styles.header_options_icon} />
      )}
      <h3 className={styles.header_options_title}>{title}</h3>
    </div>
  );
}

export default HeaderOptions;
