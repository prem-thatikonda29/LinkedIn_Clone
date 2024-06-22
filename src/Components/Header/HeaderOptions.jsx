import React from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./HeaderOptions.module.css";
import { logout } from "../../features/userSlice";

function HeaderOptions({ avatar, Icon, title }) {
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
      onClick={title === "Me" ? handleLogout : null} // Attach the logout handler to the "Me" option
    >
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
