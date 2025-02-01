import styles from "./navigator.module.css"
import arrow from "/arrow.svg"
export default function Category({name}) {
    return (
        <div className={styles.category}>
            <div className={styles.inputContent}>
                <div className={styles.icon}>
                    <button className={styles.iconInner}>
                        <img className={styles.iconImg} src={arrow} alt="icon"/>
                    </button>
                </div>
                <span className={styles.categoryName}>{name}</span>
            </div>
        </div>
    )
}
