import styles from "./navigator.module.css"

export default function NavigatorTab({image}) {
    return (
        <div className={styles.navigatorTab}>
            <div className={styles.tabButton}>
                <img className={styles.tabImage} src={image} alt="navigator tab"/>
            </div>
        </div>
    )
}
