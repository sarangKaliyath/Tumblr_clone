import React from "react";
import styles from "./SectionC.module.css";

export const SectionC = () => {
  return (
    <div id="c" className={styles.container}>
      <div className={styles.text}>
        <h1>Tumblr is blogs.</h1>
        <p>
          Turns out that when you make it easy to create interesting things,
          that’s <br /> exactly what people do. All those great, random blogs your
          friends send <br /> you, those are Tumblr blogs. We’ll help you find and
          follow blogs like that, <br /> and we’ll help other people find and follow
          yours.
        </p>
      </div>

      <div className={styles.image}>
        <img src="./tumblr_C.png" alt="" />
      </div>
    </div>
  );
};
