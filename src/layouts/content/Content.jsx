import styles from "./content.module.css";
import DefaultButton from "../../components/default-button/DefaultButton.jsx";
import Form from "./Form.jsx";
import {useRef, useState} from "react";
import {useResponsiveContext} from "../../contexts/ResponsiveContext.jsx";
import {useModal} from "../../hooks/useModal.jsx";
import Modal from "../../components/modal/Modal.jsx";

export default function Content({navigatorVisible}) {
    const [shadow, setShadow] = useState(false);
    const containerRef = useRef(null);
    const {isMobile} = useResponsiveContext();
    const {isOpen, openModal, closeModal} = useModal();

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
                    <h2 className={styles.subheadingTitle}>Подзадачи</h2>
                    <DefaultButton text="Создать" onClick={openModal}/>
                </div>
                {!isMobile && <div className={styles.rightSide}>
                    <DefaultButton text="Сохранить" option="primary"/>
                    <DefaultButton text="Сохранить и выйти"/>
                </div>}
            </header>
            <article ref={containerRef} onScroll={handleScroll} className={styles.paddingForm}>
                <h1 className={`${styles.mainTitle} ${styles.overflowText}`}>STSK0004783 На инциденте, запросе,
                    проблеме,
                    в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller</h1>
                <Form/>
            </article>
            <Modal isOpen={isOpen} onClose={closeModal}>
                TODO
            </Modal>
        </section>
    )
}
