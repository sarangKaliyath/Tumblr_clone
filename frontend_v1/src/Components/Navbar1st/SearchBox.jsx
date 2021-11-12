import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';


const useStyles = makeStyles((theme) => ({

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.45),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.35),
    },
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    zIndex:"10",
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    opacity: .8
  },
  inputRoot: {
    color: 'white',
  },
  inputInput: {
    transition: theme.transitions.create('width'),
    '&::placeholder':{
     color:'white',
     opacity:1,
    },
    '&:focus': {
        backgroundColor: alpha(theme.palette.common.white, 0.5),
        '&::placeholder':{
            color:'black',
            opacity:.8,
           },
           color:'black',
           opacity: .8
      }, 
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  
}));

export default function SearchBox() {
  const classes = useStyles();
 

  return (
    <div className={classes.grow}>
      
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
                  placeholder="Search Tumblr"
                  style={{paddingLeft:"40px"}}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              fullWidth={true}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
    </div>
  );
}