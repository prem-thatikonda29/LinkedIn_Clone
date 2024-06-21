import React from "react";
import styles from "./Sidebar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__top}>
        <img src="" alt="" />
        <FontAwesomeIcon icon={faPerson} className={styles.sidebar__avatar} />
        <h2>Prem Thatikonda</h2>
        <h4>thatikondprem072@gmail.com</h4>
      </div>

      <div className={styles.sidebar__stats}>
        <div className={styles.sidebar__stat}>
          <p>Profile viewers</p>
          <p className={styles.sidebar__statNumber}>144</p>
        </div>
        <div className={styles.sidebar__stat}>
          <p>Post impressions</p>
          <p className={styles.sidebar__statNumber}>2121</p>
        </div>
      </div>

      <div className={styles.sidebar__bottom}>
        <p>Recent</p>
      </div>
    </div>
  );
}

export default Sidebar;
