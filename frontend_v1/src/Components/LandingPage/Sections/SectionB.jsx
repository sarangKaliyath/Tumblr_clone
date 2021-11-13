import React from "react";
import styles from "./SectionB.module.css";

export const SectionB = () => {
  return (
    <div id="b" className={styles.container}>
      <div>What is Tumblr?</div>

      <div className={styles.image}>
        <img src="./tumblr_B.png" alt="" />
      </div>

      <div className={styles.text}>
        <h1>
          Tumblr is so easy to use <br /> that it’s hard to explain.
        </h1>
        <p>
          We made it really, really simple for people to make a blog and put
          whatever <br /> they want on it. Stories, photos, GIFs, TV shows,
          links, quips, dumb jokes, <br /> smart jokes, Spotify tracks, mp3s,
          videos, fashion, art, deep stuff. Tumblr <br /> is 536 million
          different blogs, filled with literally whatever.
        </p>
      </div>
    </div>
  );
};
