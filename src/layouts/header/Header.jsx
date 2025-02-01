import styles from "./header.module.css";
import searchInput from "/search-input.svg";
import avatar from "/img.png";
import settings from "/settings.svg";
import logoName from "/logo-name.svg";
import logoCircle from "/logo-circle.svg";
import DefaultButton from "../../components/default-button/DefaultButton.jsx";
import InputSettings from "../../components/input-settings/InputSettings.jsx";
import {useResponsiveContext} from "../../contexts/ResponsiveContext.jsx";
import sidebar from "/sidebar.svg";

export default function Header() {
    const {isMobile} = useResponsiveContext();

    return (
        <header className={styles.header}>
            {isMobile
                ? <DefaultButton option="secondary" image={sidebar}/>
                : <div className={styles.logo}>
                    <img className={styles.logoName} src={logoName} alt="logo"/>
                    <img className={styles.logoCircle} src={logoCircle} alt="logo"/>
                </div>
            }
            <div className={styles.searchAndAvatarAndSettings}>
                <div className={styles.searchAndAvatar}>
                    {!isMobile && <InputSettings placeholder="Поиск" icon={searchInput} alt="search"/>}
                    <div className={styles.avatarAndName}>
                        <div className={styles.avatar}>
                            <img className={styles.personalImage} src={avatar} alt="avatar"/>
                        </div>
                        {!isMobile && <span>Максим Галактионов</span>}
                    </div>
                </div>
                <DefaultButton image={settings}/>
            </div>
        </header>
    )
}
