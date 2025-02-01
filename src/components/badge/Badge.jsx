import styles from './badge.module.css';
import union from '/union.svg'

export default function Badge({children, stroke}) {
    return (
        <div className={styles.badge}>
            <p className={`${styles.commonText} ${styles.overflowText}`}>{children}</p>
            {stroke && <img className={styles.img} src={union} alt="union"/>}
        </div>
    )
};
