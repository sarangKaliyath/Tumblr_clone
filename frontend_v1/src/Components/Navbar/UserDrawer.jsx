import React from "react";
import { useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import { TiUser } from "react-icons/ti";
import { items } from "./UserDrawerIcons";

export const UserDrawer = () => {
  const [show, toggleShow] = useState(null);
  const open = Boolean(show);

  const handleOpen = (e) => {
    toggleShow(e.currentTarget);
  };
  const handleClose = () => {
    toggleShow(null);
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <TiUser size={30} onClick={handleOpen} />
      <Menu
        show={show}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        {items &&
          items.map(({ text, icon }) => {
            return (
              <MenuItem
                style={{ padding: "10px" }}
                onClick={handleClose}
                // size={size}
              >
                {icon}
                {text}
              </MenuItem>
            );
          })}
      </Menu>
    </div>
  );
};
