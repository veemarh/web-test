import styles from "./input.module.css";
import closeCircle from "/close-circle.svg";
import plus from "/plus.svg"
import search from "/search.svg"
import DefaultButton from "../default-button/default-button.jsx";
import RightIcon from "../right-icon/RightIcon.jsx";

export default function Input({title, required, children}) {
    return (
        <div className={styles.input}>
            <div className={styles.inputAndButtonAndLabel}>
                <div className={styles.inputTitle}>
                    {required && <span className={styles.titleStar}>*</span>}
                    <p className={`${styles.titleText} ${styles.overflowText}`}>{title}</p>
                </div>
                <div className={styles.inputAndButton}>
                    <div className={styles.inputSettings}>
                        <RightIcon src={closeCircle} alt="close circle"/>
                        <div className={styles.badgeStroke}>{children}</div>
                    </div>
                    <DefaultButton image={plus}/>
                    <DefaultButton image={search} text="Поиск"/>
                </div>
            </div>
            <div className={styles.fieldMessage}>
                <p className={styles.messageText}>
                    Для созданного изменения существует изменение с аналогичной услугой и КЕ. Возможен конфликт
                </p>
            </div>
        </div>
    )
};
