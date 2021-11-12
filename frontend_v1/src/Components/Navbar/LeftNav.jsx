import React from "react";
import styles from "./Navbar.module.css";
import { tumblr_icon } from "./TumblrIcon";

export const LeftNav = () => {
  return (
    <div className={styles.left_nav_container}>
      <div className={styles.tumblr_icon_container}>{tumblr_icon("black")}</div>
      <div className={styles.search_container}>Space for search bar</div>
    </div>
  );
};
