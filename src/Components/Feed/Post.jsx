import React, { forwardRef } from "react";
import styles from "./Post.module.css";

import InputOption from "./InputOption";
import Avatar from "../../assets/avatar.png";
import {
  faCommentAlt,
  faRepeat,
  faShare,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

const Post = forwardRef(({ name, description, photoURL, message }, ref) => {
  return (
    <div ref={ref} className={styles.post}>
      <div className={styles.post__header}>
        <img src={photoURL} alt="" className={styles.avatar} />
        <div className={styles.post__info}>
          <h2>{name}</h2>
          <p>{description.length > 90 ? description.slice(0,90) + "..." : description}</p>
        </div>
      </div>

      <div className={styles.post__body}>
        <p>{message}</p>
      </div>

      <div className={styles.post__buttons}>
        <InputOption Icon={faThumbsUp} title="Like" color="grey" />
        <InputOption Icon={faCommentAlt} title="Comment" color="grey" />
        <InputOption Icon={faRepeat} title="Repost" color="grey" />
        <InputOption Icon={faShare} title="Share" color="grey" />
      </div>
    </div>
  );
});

export default Post;
