import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./HeaderOptions.module.css";

function HeaderOptions({ avatar, Icon, title }) {
  return (
    <div className={styles.header_option}>
      {Icon && (
        <FontAwesomeIcon icon={Icon} className={styles.header_option_icon} />
      )}
      {avatar && (
        <img src={avatar} alt="avatar" className={styles.header_option_icon} />
      )}
      <h3 className={styles.header_option_title}>{title}</h3>
    </div>
  );
}

export default HeaderOptions;
