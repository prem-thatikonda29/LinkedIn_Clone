import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./HeaderOptions.module.css";
import { logout, selectUser } from "../../features/userSlice";

function HeaderOptions({ avatar, Icon, title }) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    if (title === "Me") {
      // Clear user from localStorage
      localStorage.removeItem("user");
      // Dispatch the logout action
      dispatch(logout());
    }
  };

  return (
    <div
      className={styles.header_option}
      onClick={title === "Me" ? handleLogout : null}
    >
      {Icon && (
        <FontAwesomeIcon icon={Icon} className={styles.header_option_icon} />
      )}
      {avatar &&
        // <img
        //   src={user.image}
        //   alt="avatar"
        //   className={styles.header_option_icon}
        // />
        user?.email[0]}
      <h3 className={styles.header_option_title}>{title}</h3>
    </div>
  );
}

export default HeaderOptions;
