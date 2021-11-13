import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./Auth.module.css";
import { button_style } from "../Navbar/Button_style";
import { Button } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { IoCompassOutline } from "react-icons/io5";

const auth_button_style = [
  {
    text: "Continue with Google",
    icon: <FcGoogle className={styles.icons} size={"20px"} />,
  },
  {
    text: "Continue with Apple",
    icon: (
      <AiFillApple
        className={styles.icons}
        size={"20px"}
        style={{ color: "black" }}
      />
    ),
  },
];

export const Auth = () => {
  const arr = button_style.reverse();

  const history = useHistory();

  const handleClick = (link) => {
    history.push(link);
  };

  return (
    <div className={styles.container}>
      {arr.map(({ text, color, link }) => {
        return (
          <Button
            variant="contained"
            size="large"
            style={{
              margin: "0% 0% 4% 0%",
              backgroundColor: color,
              textTransform: "none",
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

      <div className={styles.line_container}>
        <div className={styles.line}></div>
        <div className={styles.line_text_box}>or </div>
        <div className={styles.line}></div>
      </div>

      <div className={styles.terms_container}>
        By continuing with the options below, you agree to Tumblr’s Terms of
        Service and have read the Privacy Policy
      </div>

      {auth_button_style.map(({ text, icon }) => {
        return (
          <Button
            variant="contained"
            size="large"
            style={{
              textTransform: "none",
              margin: "2% 0%",
              display: "flex",
              backgroundColor: "#FFFFFF",
              color: "black",
              fontWeight: 700,
            }}
          >
            {icon} {text}
          </Button>
        );
      })}

      <div className={styles.trending_text}>
        <IoCompassOutline size={30} className={styles.icons} />
        Here's what's trending
      </div>
    </div>
  );
};
