import styles from "./navigator.module.css"

export default function NavigatorTab({image, onClick}) {
    return (
        <div className={styles.navigatorTab}>
            <div className={styles.tabButton} onClick={onClick}>
                <img className={styles.tabImage} src={image} alt="navigator tab"/>
            </div>
        </div>
    )
}
