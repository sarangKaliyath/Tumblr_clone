import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styles from './Explore_Component.module.css';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';


export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div  className={styles["Tab4"]}>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{
            color: "white",
            marginTop: "5%",
            fontSize: "18px",
            fontWeight: "600",
            textTransform: "capitalize",
            marginLeft: "7%"
        }}
       
      >
        <span style={{
            marginRight: "6%"
        }}>More</span> <ArrowDropDownCircleOutlinedIcon/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        
      >
        <MenuItem onClick={handleClose}   style={{
            width: "150px",
            paddingLeft: "50px"
        }}>Text</MenuItem>
        <MenuItem onClick={handleClose}
           style={{
            paddingLeft: "50px"
        }}
        >Photo</MenuItem>
        <MenuItem onClick={handleClose}
           style={{
            paddingLeft: "50px"
        }}
        >GIFs</MenuItem>
        <MenuItem onClick={handleClose}
           style={{
            paddingLeft: "50px"
        }}
        >Qutoes</MenuItem>
        <MenuItem onClick={handleClose}
           style={{
            paddingLeft: "50px"
        }}
        >Chats</MenuItem>
        <MenuItem onClick={handleClose}
           style={{
            paddingLeft: "50px"
        }}
        >Audio</MenuItem>
        <MenuItem onClick={handleClose}
           style={{
            paddingLeft: "50px"
        }}
        >Vidoes</MenuItem>
        <MenuItem onClick={handleClose}
           style={{
            paddingLeft: "50px"
        }}
        >Ask</MenuItem>
      </Menu>
    </div>
  );
}
