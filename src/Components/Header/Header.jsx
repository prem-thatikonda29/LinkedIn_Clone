import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import HeaderOptions from "./HeaderOptions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faBriefcase,
  faHome,
  faMessage,
  faSearch,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
// import Avatar from "../../assets/avatar.png";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

function Header() {
  const user = useSelector(selectUser);

  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
        <Link to="/home">
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            aria-labelledby="linkedin-icon-title"
          >
            <title id="linkedin-icon-title">LinkedIn Icon</title>
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#0A66C2"
                d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"
              />
            </g>
          </svg>
        </Link>
        <div className={styles.header__search}>
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className={styles.header__right}>
        <HeaderOptions Icon={faHome} title="Home" />
        <HeaderOptions Icon={faUserGroup} title="My Network" link="/network" />
        <HeaderOptions Icon={faBriefcase} title="Jobs" />
        <HeaderOptions Icon={faMessage} title="Messaging" />
        <HeaderOptions Icon={faBell} title="Notifications" />
        <HeaderOptions avatar={false} title="Me" />
      </div>
    </header>
  );
}

export default Header;
