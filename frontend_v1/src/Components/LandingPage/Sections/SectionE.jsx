import React from "react";
import styles from "./SectionE.module.css";

export const SectionE = () => {
  return (
    <div id="e" className={styles.container}>
      <div className={styles.image}>
        <img src="./tumblr_E.png" alt="" />
      </div>
      <div className={styles.text}>
        <h1>
          Seriously, put anything <br /> you want here.
        </h1>
        <p>
          Seven post types to get you started. Your brain can do the rest. This
          thing <br /> is yours. Use it however you like.
        </p>
      </div>
    </div>
  );
};
