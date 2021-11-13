import React from "react";
import styles from "./SectionF.module.css";
import { Auth } from "../Auth";

export const SectionF = () => {
  return (
    <div id="f" className={styles.container}>
      <h1>Okay, it’s not actually hard to</h1>
      <h1>explain.</h1>
      <p>We lied. But now you understand this thing. So come on in.</p>
      <div className={styles.auth}>
        <Auth />
      </div>
      <div className={styles.links}>Posted by random</div>
    </div>
  );
};
