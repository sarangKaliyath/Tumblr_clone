import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./Navbar.module.css";
import { button_style } from "./Button_style";
import { Button } from "@mui/material";
// import { home_icons } from "./TumblrIcon";
import { AiFillHome } from "react-icons/ai";
import { IoCompassOutline, IoFlash, IoLogOutOutline } from "react-icons/io5";
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
      {/* {home_icons.map((icon, index) => {
        return <div key={index} icon=== >{icon}</div>;
      })} */}
      <div style={{
        cursor: "pointer",
        color: "white"
      }}><AiFillHome size={25} 
         onClick = {()=> history.push("/home")}
         style={{
          cursor: "pointer"
        }}
        className={styles.home}
      /></div>
      <div><IoCompassOutline size={30}
        onClick = {()=> history.push("/explore")}
        style={{
          cursor: "pointer"
        }}
        className={styles.explore}
      /></div>
      <div
        className={styles.mail}
      ><IoIosMail size={30} /></div>
      <div
        className={styles.fill}
      ><RiWechat2Fill size={30} /></div>
      <div
        className={styles.flash}
      ><IoFlash size={25} /></div>
      <div
        className={styles.edit}
      > <MdModeEdit size={25} /></div>
      <div
        className={styles.logout}
      ><IoLogOutOutline size={30} 
        onClick = {()=> history.push("/")}
        style={{
          cursor: "pointer"
        }}
      /></div>

    </div>
  ) : page === "explore" ?(

    <div className={styles.right_nav_container}>
    {/* {home_icons.map((icon, index) => {
      return <div key={index} icon=== >{icon}</div>;
    })} */}
    <div style={{
      cursor: "pointer",
    }}><AiFillHome size={25} 
       onClick = {()=> history.push("/home")}
       style={{
        cursor: "pointer"
      }}
      className={styles.home}
    /></div>
    <div><IoCompassOutline size={30}
      onClick = {()=> history.push("/explore")}
      style={{
        cursor: "pointer",
        color: "white"
      }}
      className={styles.explore}
    /></div>
    <div
    className={styles.mail}
    ><IoIosMail size={30} /></div>
    <div
      className={styles.fill}
    ><RiWechat2Fill size={30} /></div>
    <div
      className={styles.flash}
    ><IoFlash size={25} /></div>
    <div
      className={styles.edit}
    > <MdModeEdit size={25} /></div>
    <div
      className={styles.logout}
    ><IoLogOutOutline size={30} 
      onClick = {()=> history.push("/")}
      style={{
        cursor: "pointer"
      }}
     
    /></div>

  </div>

  ): (
    <></>
  );
};
