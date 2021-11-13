// import { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import styles from './Explore_Component.module.css';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';

const dataArr = [
    {
        "id": 1,
        "title": "movies",
        "imgs": ["Images/im_1.jpg","Images/im_2.jpg"]
    },
    {
        "id": 2,
        "title": "nba",
        "imgs": ["Images/im_3.jpg","Images/im_4.jpg"]
    },
    {
        "id": 3,
        "title": "cricket",
        "imgs": ["Images/im_5.jpg","Images/im_6.jpg"]
    },
    {
        "id": 4,
        "title": "succession",
        "imgs": ["Images/im_7.jpg","Images/im_8.jpg"]
    },
    {
        "id": 5,
        "title": "drawing",
        "imgs": ["Images/im_9.jpg","Images/im_10.jpg"]
    },
    {
        "id": 6,
        "title": "film",
        "imgs": ["Images/im_11.jpg","Images/im_12.jpg"]
    },
    {
        "id": 7,
        "title": "people",
        "imgs": ["Images/im_13.png","Images/im_14.jpg"]
    },
    {
        "id": 8,
        "title": "animals",
        "imgs": ["Images/im_15.jpg","Images/im_16.jpg"]
    },
    {
        "id": 9,
        "title": "basketball",
        "imgs": ["Images/im_17.jpg","Images/im_18.png"]
    },
    {
        "id": 10,
        "title": "kobe bryant",
        "imgs": ["Images/im_19.jpg","Images/im_20.jpg"]
    },
    {
        "id": 11,
        "title": "olympics",
        "imgs": ["Images/im_21.jpg","Images/im_22.jpg"]
    },
    {
        "id": 12,
        "title": "lol",
        "imgs": ["Images/im_23.jpg","Images/im_24.jpg"]
    },
    {
        "id": 13,
        "title": "technology",
        "imgs": ["Images/im_25.jpg","Images/im_26.jpg"]
    },
]

const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${randomColor}`;
};



function CarousDiv () {

    // const [text, setToggleText] = useState(false);
    // const toggleText = () => {
    //     setToggleText((el) => (
    //         el === false ? "Follow" : "Unfollow"
    //     ));
    // }

    return (
        <div className={styles["CarMain"]}>
            <div className={styles["CarSubMain"]}>
                <div className={styles["CarSubMain1"]}>
                    <Carousel itemsToScroll={3} itemsToShow={5} pagination={false}>
                        {dataArr.map((e) => (
                         <div key={e.id} className={styles["CarArrMain"]}>
                             <div className={styles["CarArrMain1"]}>
                                 <div className={styles["CarArrMain2"]} style={{
                                     backgroundColor: generateColor()
                                 }}>
                                     <div className={styles["CarArrMain3"]}>
                                       <span>#{e.title}</span>  
                                     </div>
                                     <div className={styles["CarImgMain"]}>
                                         <div className={styles["CarImgMain1"]}>
                                             <div className={styles["CarImgMain2"]}>
                                                 <img src={e.imgs[0]} alt="image_1" />
                                             </div>
                                         </div>
                                         <div className={styles["CarImgMain3"]}>
                                             <div className={styles["CarImgMain4"]}>
                                                 <img src={e.imgs[1]} alt="image_2" />
                                             </div>
                                         </div>
                                     </div>
                                      <button   className={styles["CarArrMain5"]}
                                        // onClick={() => {
                                        //     toggleText(e.id)
                                        // }}
                                      >
                                       <span  className={styles["CarArrButt1"]}>
                                          <span className={styles["CarArrButt2"]}>Follow</span>
                                       </span>
                                      </button>
                                 </div>
                             </div>
                         </div>
                        ))}
                      
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export { CarousDiv }