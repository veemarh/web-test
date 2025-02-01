import styles from "./header.module.css";
import searchInput from "/search-input.svg";
import avatar from "/img.png";
import settings from "/settings.svg";
import logoName from "/logo-name.svg";
import logoCircle from "/logo-circle.svg";
import DefaultButton from "../../components/default-button/DefaultButton.jsx";
import InputSettings from "../../components/input-settings/InputSettings.jsx";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.logoName} src={logoName}/>
                <img className={styles.logoCircle} src={logoCircle}/>
            </div>
            <div className={styles.searchAndAvatarAndSettings}>
                <div className={styles.searchAndAvatar}>
                    <InputSettings placeholder="Поиск" icon={searchInput} alt="search"/>
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
