import { BottomSideBar } from './BottomSideBar';
import styles from './Explore_Component.module.css';
import { TopSideBar } from './TopSideBar';


function SideBar() {
    return (
        <div className={styles["sideBarMain"]}>
            <div className={styles["sideBarMain1"]}>
               <TopSideBar />
               <BottomSideBar />
            </div>
        </div>
    )
}

export { SideBar }