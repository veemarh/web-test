import styles from "./input-settings.module.css";
import Icon from "../icon/Icon.jsx";

export default function InputSettings({type = "text", name, placeholder, icon, alt = "icon", leftIcon, leftAlt = "icon"}) {
    return (
        <label>
            {leftIcon && <Icon float="left" src={leftIcon} alt={leftAlt}/>}
            <input type={type} name={name} placeholder={placeholder}
                   className={`${styles.inputSettings} ${styles.inputText} ${icon && styles.right} ${leftIcon && styles.left}`}/>
            {icon && <Icon float="right" src={icon} alt={alt}/>}
        </label>
    )
}
