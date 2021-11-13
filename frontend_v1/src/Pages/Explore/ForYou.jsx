import BasicTabs from "../../Components/Explore_Components/LinkTab";
import { SideBar } from "../../Components/Explore_Components/SideBar";
// import { Navbar } from "../../Components/Navbar/Navbar";
import styles from "./ForYou.module.css"

function ForYou () {
    return (
        <>
        {/* <Navbar page = {"home"} /> */}
        <div className={styles["mainFor"]}>
            
            <div className={styles["mainSubFor"]}>
                <div className={styles["mainSubFor_II"]}> 
                    <div className={styles["mainSubFor_III"]}>
                        <BasicTabs />
                    </div>
                </div>
                <div>
                    <SideBar />
                </div>
            </div>

        </div>
        </>
    )
}

export { ForYou };