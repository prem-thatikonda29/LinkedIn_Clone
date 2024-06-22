import React, { useEffect } from "react";
import styles from "./Sidebar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);

  // useEffect(() => {
  //   console.log(user);
  // }, []);

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
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=3074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="profile bg"
          className={styles.bgImage}
        />
        <img
          src={user.image}
          alt="Profile pic"
          className={styles.sidebar__avatar}
        />
        <h2>{user.name}</h2>
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
        {recentItem("reactjs")}
        {recentItem("business")}
        {recentItem("design")}
      </div>
    </div>
  );
}

export default Sidebar;
