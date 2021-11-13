import BasicTabs from "../../Components/Explore_Components/LinkTab";
import { Navbar } from "../../Components/Navbar/Navbar";
import styles from "./ForYou.module.css"

function ForYou () {
    return (
        <div className={styles["mainFor"]}>
            <Navbar page = {"home"} />
            <div className={styles["mainSubFor"]}>
                <div className={styles["mainSubFor_II"]}> 
                    <div className={styles["mainSubFor_III"]}>
                        <BasicTabs />
                    </div>
                </div>
                <div> </div>
            </div>

        </div>
    )
}

export { ForYou };