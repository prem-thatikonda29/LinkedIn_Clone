import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; // Import useDispatch
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./HeaderOptions.module.css";
import { selectUser, logout } from "../../features/userSlice"; // Import logout action

function HeaderOptions({ avatar, Icon, title }) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user from localStorage
    localStorage.removeItem("user");
    // Dispatch the logout action
    dispatch(logout());
    navigate("/login");
  };

  const getLink = () => {
    switch (title) {
      case "Me":
        return "/profile";
      case "My Network":
        return "/network";
      default:
        return "#"; // Default link if no matching case
    }
  };

  return (
    <div className={styles.header_option_wrapper}>
      {title === "Notifications" ? (
        <div className={styles.header_option} onClick={handleLogout}>
          {Icon && (
            <FontAwesomeIcon
              icon={Icon}
              className={styles.header_option_icon}
            />
          )}
          {avatar && user?.email[0]}
          <h3 className={styles.header_option_title}>{title}</h3>
        </div>
      ) : (
        <Link to={getLink()} className={styles.header_option}>
          {Icon && (
            <FontAwesomeIcon
              icon={Icon}
              className={styles.header_option_icon}
            />
          )}
          {avatar && user?.email[0]}
          <h3 className={styles.header_option_title}>{title}</h3>
        </Link>
      )}
    </div>
  );
}

export default HeaderOptions;
