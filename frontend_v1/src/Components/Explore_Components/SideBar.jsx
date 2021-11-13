import styles from './Explore_Component.module.css';

const sideBarData = [
    {
        "src": "https://64.media.tumblr.com/fddea9583eb9e1db269cfe63ed95206c/88f60f770c0b14e6-15/s640x960/69917d214b3a6b99bc20a7907adb2c24d01ece8c.jpg",
        "title": "#health & fitness",
        "num": "77",
        "id": 1
    },
    {
        "src": "https://64.media.tumblr.com/5a535e3ab607b07933070a2b580398c6/af734c5787f22b36-ff/s640x960/7491e48cdd572760c98b31427d4baccb84299c2f.jpg",
        "title": "#funny",
        "num": "2265",
        "id": 2
        
    },
    {
        "src": "https://64.media.tumblr.com/45e6115932a64e9670241f918043cc92/308b82d755ba00c6-d1/s640x960/9465d51e76484fd43f46e30a60745d8c59268055.jpg",
        "title": "#musicians",
        "num": "30",
        "id": 3
    },
    {
        "src": "https://64.media.tumblr.com/39183a6d54f1987c844c15374c6be3af/dc2eba203f84e72d-a3/s640x960/898b134263155b4a6a57b94f1daa28529530f03e.jpg",
        "title": "#sports",
        "num": "542",
        "id": 4
    }
]


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

function SideBar() {
    return (
        <div className={styles["sideBarMain"]}>
            <div className={styles["sideBarMain1"]}>
                <div className={styles["sideBarMain2"]}>
                    <div className={styles["sideBarMain3"]}>
                        <span>Following</span>
                        <button className={styles["sideBarMain4"]}>
                            <span>Edit</span>
                        </button>
                    </div>
                    <div className={styles["sideBarMain5"]}>
                        {sideBarData.map((e) => (
                              <div className={styles["sideBarMain5_1"]} key={e.id}>
                              <div className={styles["sideBarMain6"]}>
                                  <div className={styles["sideBarMain7"]}>
                                      <img src={e.src} alt="image_alt" />
                                  </div>
                              </div>
                          
                              <div className={styles["sideBarMain8"]}>
                                  <div className={styles["sideBarMain9"]}>{e.title}</div>
                                  <div className={styles["sideBarMain10"]}> <b>{e.num}</b> recent posts</div>
                              </div>
                          </div>
                        ))}
                      
                    </div>
                    <div className={styles["sideBarMain11"]}>
                        <button className={styles["sideBarMain12"]}>
                            <span>Show more tags</span>
                        </button>
                    </div>
                </div>

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
            </div>
        </div>
    )
}

export { SideBar }