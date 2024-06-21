import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1>This is the header</h1>

      <div className="header__left">
        <img src="" alt="" />
        <div className="header__search"> 
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right"></div>
    </header>
  );
}

export default Header;
