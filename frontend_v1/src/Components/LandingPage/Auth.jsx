import React from "react";
import styles from "./Auth.module.css";
import { Button } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { IoCompassOutline } from "react-icons/io5";

const button_style = [
  { text: "Sign up", color: "#00B8FF" },
  { text: "Log in", color: "#00CF35" },
];

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
  return (
    <div className={styles.container}>
      {button_style.map(({ text, color }) => {
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
