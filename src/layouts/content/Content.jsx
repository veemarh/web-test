import styles from "./content.module.css";
import DefaultButton from "../../components/default-button/DefaultButton.jsx";
import Form from "./Form.jsx";
import {useRef, useState} from "react";
import {useResponsiveContext} from "../../contexts/ResponsiveContext.jsx";

export default function Content({navigatorVisible}) {
    const [shadow, setShadow] = useState(false);
    const containerRef = useRef(null);
    const {isMobile} = useResponsiveContext();

    const handleScroll = () => {
        if (containerRef.current.scrollTop > 0) {
            setShadow(true);
        } else {
            setShadow(false);
        }
    };

    return (
        <section
            className={`${styles.content} ${navigatorVisible ? styles.withNavigatorVisible : styles.withNavigatorInvisible}`}>
            <header
                className={`${styles.subheadingAndPadding} ${shadow ? styles.shadow : ""} ${navigatorVisible ? styles.withNavigatorVisible : styles.withNavigatorInvisible}`}>
                <div className={`${styles.leftSide} ${isMobile && styles.mobileSide}`}>
                    <h2 className={styles.subheadingTitle}>Подзадача</h2>
                    <DefaultButton text="Создать"/>
                </div>
                {!isMobile && <div className={styles.rightSide}>
                    <DefaultButton text="Сохранить" primary={true}/>
                    <DefaultButton text="Сохранить и выйти"/>
                </div>}
            </header>
            <article ref={containerRef} onScroll={handleScroll} className={styles.paddingForm}>
                <h1 className={`${styles.mainTitle} ${styles.overflowText}`}>STSK0004783 На инциденте, запросе,
                    проблеме,
                    в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller</h1>
                <Form/>
            </article>
        </section>
    )
}
