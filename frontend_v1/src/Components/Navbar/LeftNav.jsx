import React from "react";
import styles from "./Navbar.module.css";
import { tumblr_icon } from "./TumblrIcon";
import { useHistory } from "react-router-dom";
import SearchBar from "../Navbar1st/SearchBox";

export const LeftNav = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <div className={styles.left_nav_container}>
      <div className={styles.tumblr_icon_container} onClick={handleClick}>
        {tumblr_icon("white")}
      </div>
      <div className={styles.search_container}>
        <SearchBar />
      </div>
    </div>
  );
};
