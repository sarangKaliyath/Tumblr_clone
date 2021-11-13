import styles from './Explore_Component.module.css'
import DataImageList from './ImageData'

function PostData(){
    return (
        <div className={styles["postMain"]}>
            <div className={styles["postSub1"]}>
                <div className={styles["postSub2"]}>
                <DataImageList />
                </div>
            </div>
        </div>
    )
}

export { PostData }