import React, { useState } from "react";
import styles from "./Feed.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faImage,
  faCalendar,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";

import InputOption from "./InputOption";
import Post from "./Post";

function Feed() {
  const [posts, setPosts] = useState(null);


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

      {/* POSTS */}

      {posts.map((post)=>{
        return(
            
        )
      })}
      <Post
        name="Prem Thatikonda"
        description="B.Tech Student"
        message="I am thriled to anounce.."
        photoURL="https://i.pinimg.com/564x/7e/31/39/7e3139628dcf14f1cc53ac5b192877eb.jpg"
      />
    </div>
  );
}

export default Feed;
