import React from "react";
import styles from "./SectionD.module.css";

export const SectionD = () => {
  return (
    <div id="d" className={styles.container}>
      <div className={styles.image}>
        <img src="./tumblr_D.png" alt="" />
      </div>
      <div className={styles.text}>
        <h1>
          You already know <br /> how this works.
        </h1>
        <p>
          Once you follow a blog, all of its posts show up in <br /> your
          dashboard, just like you’d expect. See <br /> something great? Reblog
          it to your own blog. Add <br /> commentary if you like. Make it your
          own. Other <br /> people will do the same to your posts. That’s how
          <br />
          you meet people here.
        </p>
      </div>
    </div>
  );
};
