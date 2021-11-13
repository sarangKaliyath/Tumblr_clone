import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from './Explore_Component.module.css';
import BasicMenu from './MoreButton';
import { CarousDiv } from './Corocards'
import { PostData } from './FetchData';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  
  
  return (
    <Box sx={{ width: '100%' }}
     className={styles["mainBox"]}>

      <Box sx={{ borderBottom: 1, borderColor: '#21374F' }}
        className={styles["mainBoxSub"]}>

        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">

          <Tab label="For You 💖" {...a11yProps(0)}  style={{
            color: "white",
            fontSize: "18px",
            fontWeight: "600",
            textTransform: "capitalize"
        }}   className={styles["Tab1"]}/>
          <Tab label="Trending 🚀" {...a11yProps(1)} style={{
            color: "white",
            fontSize: "18px",
            fontWeight: "600",
            textTransform: "capitalize"
        }}  className={styles["Tab2"]}/>
          <Tab label="Staff Picks 🌟" {...a11yProps(2)} style={{
            color: "white",
            fontSize: "18px",
            fontWeight: "600",
            textTransform: "capitalize"
        }}  className={styles["Tab3"]}/>
          <BasicMenu />

        </Tabs>

      </Box>
      <TabPanel value={value} index={0}
       className={styles["TabPanel_0"]}
      >
        <div style = {{
            width: "105%",
            // border: "1px solid yellow",
            marginLeft: "-2%",
            paddingRight: "4%"
        }}>
          <CarousDiv />
          <PostData />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}
        className={styles["TabPanel_1"]}
      >
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}
         className={styles["TabPanel_2"]}
      >
        <div style = {{
            width: "105%",
            height: "auto",
            // border: "1px solid yellow",
            marginLeft: "-2%",
            paddingRight: "4%"
        }}>
         <CarousDiv />
        </div>
      </TabPanel>
    </Box>
  );
}
