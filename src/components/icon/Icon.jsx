import styles from "./icon.module.css";

export default function Icon({float = "right", src, alt}) {
    return (
        <div className={styles[`${float}Icon`]}>
            <button className={styles.microButton}>
                <img className={styles.vector} src={src} alt={alt}/>
            </button>
        </div>
    )
}
