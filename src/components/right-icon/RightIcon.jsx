import styles from "./right-icon.module.css";

export default function RightIcon({src, alt}) {
    return (
        <div className={styles.rightIcon}>
            <button className={styles.microButton}>
                <img className={styles.vector} src={src} alt={alt}/>
            </button>
        </div>
    )
}
