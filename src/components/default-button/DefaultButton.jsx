import styles from "./default-button.module.css";

export default function DefaultButton({image, text, option = "base"}) {
    return (
        <button
            className={`${styles.defaultButton} ${text ? styles.withText : styles.withIcon} ${styles[option]}`}>
            {image &&
                <div className={styles.plusButton}>
                    <img className={styles.vector} src={image} alt={image.toString()}/>
                </div>}
            {text && <span
                className={`${styles.buttonText} ${option === "primary" ? styles.primaryButtonText : styles.baseButtonText}`}>{text}</span>}
        </button>
    )
}
