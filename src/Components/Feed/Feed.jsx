import React, { useEffect, useState } from "react";
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
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3500/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    const postData = {
      name: "Prem Thatikonda",
      description: "B.Tech Student",
      message: input,
      avatar:
        "https://i.pinimg.com/564x/97/bb/06/97bb067e30ff6b89f4fbb7b9141025ca.jpg",
    };

    fetch("http://localhost:3500/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setPosts((prevPosts) => [data, ...prevPosts]);
        setInput("");
      })
      .catch((error) => console.log("Error:", error));

    console.log(posts);
  };

  return (
    <div className={styles.feed}>
      <div className={styles.feed__postContainer}>
        <div className={styles.feed__input}>
          <FontAwesomeIcon icon={faPenToSquare} />
          <form action="">
            <input
              type="text"
              placeholder="Try writing with AI"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" onClick={sendPost}>
              Send
            </button>
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

      {posts.map((post, index) => (
        <Post
          key={index}
          name={post.name}
          description={post.description}
          message={post.message}
          photoURL={post.avatar}
        />
      ))}
    </div>
  );
}

export default Feed;
