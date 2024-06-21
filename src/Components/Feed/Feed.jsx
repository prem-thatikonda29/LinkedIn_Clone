import React from "react";
import styles from "./Feed.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faImage,
  faCalendar,
//   faStickyNote,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";

import InputOption from "./InputOption";

function Feed() {
  return (
    <div className={styles.feed}>
      <div className={styles.feed__postContainer}>
        <div className={styles.feed__input}>
          <FontAwesomeIcon icon={faPenToSquare} />
          <form action="">
            <input type="text" placeholder="Try writing with AI" />
            <button type="submit">Send</button>
          </form>
        </div>

        <div className={styles.feed__postOptions}>
          <InputOption Icon={faImage} title="Media" color="#0A66C2" />
          <InputOption Icon={faCalendar} title="Event" color="#c37d16" />
          <InputOption
            Icon={faNewspaper}
            title="Write article"
            color="#E06847"
          />
        </div>
      </div>
    </div>
  );
}

export default Feed;
