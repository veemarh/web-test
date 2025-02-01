import styles from "./input.module.css";
import plus from "/plus.svg"
import search from "/search.svg"
import date from "/date.svg"
import DefaultButton from "../default-button/DefaultButton.jsx";
import Icon from "../icon/Icon.jsx";
import InputSettings from "../input-settings/InputSettings.jsx";

export default function Input({type = "text", name, placeholder, icon, alt = "icon", leftIcon, leftAlt = "icon", title = "New field", required = false, buttons = [""], children}) {
    return (
        <div className={styles.input}>
            <div className={styles.inputAndButtonAndLabel}>
                <div className={styles.inputTitle}>
                    {required && <span className={styles.titleStar}>*</span>}
                    <p className={`${styles.titleText} ${styles.overflowText}`}>{title}</p>
                </div>
                <div className={styles.inputAndButton}>
                    {
                        type === "badge"
                            ? <div className={`${styles.inputSettings} ${icon && styles.withIcon}`}>
                                {icon && <Icon float="right" src={icon} alt={alt}/>}
                                <div className={styles.badgeStroke}>{children}</div>
                            </div>
                            : <InputSettings type={type} placeholder={placeholder} name={name} icon={icon} alt={alt} leftIcon={leftIcon} leftAlt={leftAlt}/>
                    }
                    {buttons.includes("plus") && <DefaultButton image={plus}/>}
                    {buttons.includes("search") && <DefaultButton image={search}/>}
                    {buttons.includes("date") && <DefaultButton image={date}/>}
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
