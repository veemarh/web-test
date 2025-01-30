import styles from "./default-button.module.css";

export default function DefaultButton({image}) {
    return (
        <button className={styles.defaultButton}>
            <div className={styles.plusButton}>
                <img className={styles.vector} src={image} alt={image.toString()}/>
            </div>
        </button>
    )
}
