import React from "react";
import { useHistory } from "react-router-dom";
import { UserDrawer } from "./UserDrawer";
import styles from "./Navbar.module.css";
import { button_style } from "./Button_style";
import { Button } from "@mui/material";
import { AiFillHome } from "react-icons/ai";
import { IoCompassOutline, IoFlash } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { RiWechat2Fill } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";

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
