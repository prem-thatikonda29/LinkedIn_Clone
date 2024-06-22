import React from "react";
import styles from "./Widgets.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faCircle } from "@fortawesome/free-solid-svg-icons";

function Widgets() {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className={styles.widgets__article}>
        <div className={styles.widget__article__left}>
          <FontAwesomeIcon icon={faCircle} size="xs"/>
        </div>
        <div className={styles.widget__article__right}>
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };
  return (
    <div className={styles.widgets}>
      <div className={styles.widgets__header}>
        <h2>LinkedIn news</h2>
        <FontAwesomeIcon icon={faInfoCircle} size="lg" />
      </div>
      {newsArticle("React is killing me", "Top news from ITM")}
      {newsArticle("Demo Days postponed!", "Students happy")}
      {newsArticle("Chutti dedo :(", "The voice of all kids")}
    </div>
  );
}

export default Widgets;
