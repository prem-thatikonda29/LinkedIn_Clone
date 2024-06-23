import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; // Import useDispatch
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./HeaderOptions.module.css";
import { selectUser, logout } from "../../features/userSlice"; // Import logout action

function HeaderOptions({ avatar, Icon, title }) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Clear user from localStorage
    localStorage.removeItem("user");
    // Dispatch the logout action
    dispatch(logout());
  };

  return (
    <div className={styles.header_option_wrapper}>
      {title === "Me" ? (
        <Link to="/profile" className={styles.header_option}>
          <div>
            {/* <img src={user.image} className={styles.header_option_icon} alt="" /> */}
            {avatar && user?.email[0]}
            <h3 className={styles.header_option_title}>{title}</h3>
          </div>
        </Link>
      ) : (
        <div
          className={styles.header_option}
          onClick={title === "Notifications" ? handleLogout : null}
        >
          {Icon && (
            <FontAwesomeIcon
              icon={Icon}
              className={styles.header_option_icon}
            />
          )}
          {avatar && user?.email[0]}
          <h3 className={styles.header_option_title}>{title}</h3>
        </div>
      )}
    </div>
  );
}

export default HeaderOptions;
