import styles from "./default-button.module.css";

export default function DefaultButton({image, text}) {
    return (
        <button className={`${styles.defaultButton} ${text ? styles.withText : styles.withIcon}`}>
            {image &&
                <div className={styles.plusButton}>
                    <img className={styles.vector} src={image} alt={image.toString()}/>
                </div>}
            {text && <span>{text}</span>}
        </button>
    )
}
