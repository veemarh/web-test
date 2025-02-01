import styles from "./navigator.module.css"
import NavigatorTab from "./NavigatorTab.jsx";
import star from "/star.svg"
import sidebar from "/sidebar.svg"
import filter from "/filter.svg";
import pin from "/pin.svg";
import link from "/link.svg";
import Category from "./Category.jsx";
import InputSettings from "../../components/input-settings/InputSettings.jsx";
import DefaultButton from "../../components/default-button/DefaultButton.jsx";

export default function Navigator({navigatorVisible, toggleNavigator}) {
    return (
        <div className={styles.navigatorContainer}>
            <nav className={styles.navigator}>
                <NavigatorTab onClick={toggleNavigator} image={sidebar}/>
                <NavigatorTab image={star}/>
            </nav>
            {
                navigatorVisible && <div className={styles.listAndFilter}>
                    <div className={styles.filter}>
                        <div className={styles.searchAndIcon}>
                            <InputSettings placeholder="Поиск по меню" icon={filter} alt="filter" leftIcon={link}/>
                            <DefaultButton image={pin}/>
                        </div>
                    </div>
                    <div className={styles.listNavigator}>
                        <Category name="Моя работа"/>
                        <Category name="Структура портала"/>
                    </div>
                </div>
            }
        </div>
    )
}
