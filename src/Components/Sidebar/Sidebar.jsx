import React, { useEffect } from "react";
import styles from "./Sidebar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => {
    return (
      <div className={styles.sidebar__recentItem}>
        <span className={styles.sidebar__hash}>#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__top}>
        <img
          src={user?.bannerImage}
          alt="profile bg"
          className={styles.bgImage}
        />
        <img
          src={user?.image}
          alt="Profile pic"
          className={styles.sidebar__avatar}
        />
        <h2>{user?.name}</h2>
        <h4>{user?.headline?.slice(0, 25) + "..."}</h4>
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
        {recentItem("reactjs")}
        {recentItem("business")}
        {recentItem("design")}
      </div>
    </div>
  );
}

export default Sidebar;
