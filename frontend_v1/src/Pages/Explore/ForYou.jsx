import BasicTabs from "../../Components/Explore_Components/LinkTab";
import { SideBar } from "../../Components/Explore_Components/SideBar";
import styles from "./ForYou.module.css"

function ForYou () {
    return (
        <>
        <div className={styles["mainFor"]}>
             
            <div className={styles["mainSubFor"]}>
                <div className={styles["mainSubFor_II"]}> 
                    <div className={styles["mainSubFor_III"]}>
                        <BasicTabs />
                    </div>
                </div>
                <div className={styles["mainSubFor_IV"]}>
                    <SideBar />
                </div>
            </div>

        </div>
        </>
    )
}

export { ForYou };