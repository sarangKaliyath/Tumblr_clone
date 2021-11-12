import React from "react";
import { UserDrawer } from "./UserDrawer";
import styles from "./Navbar.module.css";
// import { LoginButton } from "../Buttons/LoginButton";
import { Button } from "@mui/material";
import { AiFillHome } from "react-icons/ai";
import { IoCompassOutline, IoFlash } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { RiWechat2Fill } from "react-icons/ri";
import { TiUser } from "react-icons/ti";
import { MdModeEdit } from "react-icons/md";

const button_style = [
  { text: "Log in", color: "#00CF35", mLeft: "0%", mRight: "2%" },
  { text: "Sign up", color: "#00B8FF", mLeft: "0%", mRight: "2%" },
];

export const RightNav = ({ page }) => {
  return page === "login" ? (
    <div className={styles.right_nav_container}>
      {button_style.map(({ text, color, mRight, mLeft }) => {
        return (
          <Button
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
          >
            {text}
          </Button>
        );
      })}
    </div>
  ) : page === "home" ? (
    <div className={styles.right_nav_container}>
      <div>
        <AiFillHome size={25} />
      </div>
      <div>
        <IoCompassOutline size={30} />
      </div>
      <div>
        <IoIosMail size={30} />
      </div>
      <div>
        <RiWechat2Fill size={30} />
      </div>
      <div>
        <IoFlash size={25} />
      </div>
      <div>
        <UserDrawer />
      </div>
      <div>
        <MdModeEdit size={25} />
      </div>
    </div>
  ) : (
    <></>
  );
};
