import styles from './Explore_Component.module.css';


const sideBarData1 = [
    {
        "src": "https://64.media.tumblr.com/a22f746a12577ce0b98dd66a5bd87262/c467450c2e749786-c9/s64x64u_c1/711679edd438d21b49aa0ef7da74e3b0c3cc5348.jpg",
        "title": "Art&Evil",
        "num": "Art&Evil",
        "id": 1
    },
    {
        "src": "https://64.media.tumblr.com/avatar_c940573d4267_64.pnj",
        "title": "Netflixa",
        "num": "NETFLIXA",
        "id": 2
        
    },
    {
        "src": "https://64.media.tumblr.com/0279425c444d6a00221ed3c60775d4d4/0aed9085fcac2d84-ca/s64x64u_c1/7993b0e8b6e57138f2404f3a9e9bee067bf6117c.pnj",
        "title": "Spicycod",
        "num": "renn's art blog",
        "id": 3
    },
    {
        "src": "https://64.media.tumblr.com/avatar_149077d9f9a4_64.pnj",
        "title": "abondonwave",
        "num": "abondonWAVE",
        "id": 4
    }
]


function BottomSideBar(){
    return (
        <div className={styles["sideBarMain2"]}>
        <div className={styles["sideBarMain3"]}>
            <span>Check out these blogs</span>
            {/* <button className={styles["sideBarMain4"]}>
                <span>Edit</span>
            </button> */}
        </div>
        <div className={styles["sideBarMain5-2"]}>
            {sideBarData1.map((e) => (
                <div className={styles["sideBarMain15"]} key={e.id}>
                    <div className={styles["sideBarMain16"]}>
                        <div className={styles["sideBarMain17"]}>
                            <span className={styles["sideBarMain18"]}>
                                <span className={styles["sideBarMain19"]}>
                                    <div className={styles["sideBarMain20"]}>
                                        <div className={styles["sideBarMain21"]}>
                                            <div className={styles["sideBarMain22"]}>
                                                <div className={styles["sideBarMain23"]}>
                                                    <div className={styles["sideBarMain24"]}>
                                                        <div className={styles["sideBarMain25"]}>
                                                            <div className={styles["sideBarMain26"]}>
                                                                <img src={e.src} alt="img" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles["sideBarMain27"]}>
                                                <div className={styles["sideBarMain28"]}>
                                                    <span>
                                                        {e.title}
                                                    </span>
                                                </div>
                                                <div className={styles["sideBarMain29"]}>
                                                    {e.num}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </span>
                            <div className={styles["sideBarMain13"]}>
                              <button className={styles["sideBarMain14"]}>
                                <span>Follow</span>
                              </button>
                            </div>
                        </div>
                    </div>
                </div>
          
            ))}
          
        </div>
        <div className={styles["sideBarMain11"]}>
            <button className={styles["sideBarMain12"]}>
                <span>Show more blogs</span>
            </button>
        </div>
    </div>
    )
}

export { BottomSideBar };