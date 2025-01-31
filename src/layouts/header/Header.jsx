import styles from "./header.module.css";
import RightIcon from "../../components/right-icon/RightIcon.jsx";
import searchInput from "/search-input.svg";
import avatar from "/img.png";
import settings from "/settings.svg";
import logoName from "/logo-name.svg";
import logoCircle from "/logo-circle.svg";
import DefaultButton from "../../components/default-button/default-button.jsx";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.logoName} src={logoName}/>
                <img className={styles.logoCircle} src={logoCircle}/>
            </div>
            <div className={styles.searchAndAvatarAndSettings}>
                <div className={styles.searchAndAvatar}>
                    <label>
                        <input placeholder="Поиск" className={`${styles.inputSettings} ${styles.inputText}`}/>
                        <RightIcon src={searchInput} alt="search"/>
                    </label>
                    <div className={styles.avatarAndName}>
                        <div className={styles.avatar}>
                            <img className={styles.personalImage} src={avatar} alt="avatar"/>
                        </div>
                        <span>Максим Галактионов</span>
                    </div>
                </div>
                <DefaultButton image={settings}/>
            </div>
        </header>
    )
}
