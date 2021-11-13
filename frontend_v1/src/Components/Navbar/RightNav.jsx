import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./Navbar.module.css";
import { button_style } from "./Button_style";
import { Button } from "@mui/material";
import { home_icons } from "./TumblrIcon";

export const RightNav = ({ page }) => {
  const history = useHistory();

  const handleClick = (link) => {
    history.push(link);
  };

  return page === "login" ? (
    <div className={styles.right_nav_container}>
      {button_style.map(({ text, color, mRight, mLeft, link }) => {
        return (
          <Button
            key={text}
            size="medium"
            variant="contained"
            style={{
              textTransform: "none",
              margin: `0% ${mRight} 0% ${mLeft}`,
              backgroundColor: color,
              minWidth: "10%",
              fontWeight: 700,
              color: "black",
            }}
            onClick={() => {
              handleClick(link);
            }}
          >
            {text}
          </Button>
        );
      })}
    </div>
  ) : page === "home" ? (
    <div className={styles.right_nav_container}>
      {home_icons.map((icon, index) => {
        return <div key={index}>{icon}</div>;
      })}
    </div>
  ) : (
    <></>
  );
};
