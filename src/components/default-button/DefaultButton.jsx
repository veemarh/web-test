import styles from "./default-button.module.css";

export default function DefaultButton({image, text, primary = false}) {
    return (
        <button className={`${styles.defaultButton} ${text ? styles.withText : styles.withIcon} ${primary && styles.primary}`}>
            {image &&
                <div className={styles.plusButton}>
                    <img className={styles.vector} src={image} alt={image.toString()}/>
                </div>}
            {text && <span className={`${styles.buttonText} ${primary ? styles.primaryButtonText : styles.baseButtonText}`}>{text}</span>}
        </button>
    )
}
