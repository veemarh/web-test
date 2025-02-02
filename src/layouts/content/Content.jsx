import styles from "./content.module.css";
import DefaultButton from "../../components/default-button/DefaultButton.jsx";
import Form from "./Form.jsx";
import {useEffect, useRef, useState} from "react";
import {useResponsiveContext} from "../../contexts/ResponsiveContext.jsx";
import {useModal} from "../../hooks/useModal.jsx";
import Modal from "../../components/modal/Modal.jsx";
import cross from "/cross.svg"

export default function Content({navigatorVisible, isForm = false, onClose}) {
    const [shadow, setShadow] = useState(false);
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const {isMobile} = useResponsiveContext();
    const {isOpen, openModal, closeModal} = useModal();
    const extraContentProps = isMobile || isForm ? {"data-mobile": true} : {};
    const extraHeaderProps = isForm ? {"data-form-header": true} : {};

    const handleScroll = () => {
        if (containerRef.current.scrollTop > 0) {
            setShadow(true);
        } else {
            setShadow(false);
        }
    };

    useEffect(() => {
        if (isOpen && contentRef.current && !isForm) {
            contentRef.current.setAttribute("data-hidden", true);
        } else if (contentRef.current) {
            contentRef.current.removeAttribute("data-hidden");
        }
    }, [isOpen, isForm]);

    return (
        <section ref={contentRef} {...extraContentProps}
                 className={`${styles.content} ${navigatorVisible ? styles.withNavigatorVisible : styles.withNavigatorInvisible} ${isOpen && !isForm && styles.hidden}`}>
            <header {...extraHeaderProps}
                    className={`${styles.subheadingAndPadding} ${shadow ? styles.shadow : ""} ${navigatorVisible ? styles.withNavigatorVisible : styles.withNavigatorInvisible}`}>
                <div className={`${styles.leftSide} ${isMobile && styles.mobileSide}`}>
                    <h2 className={styles.subheadingTitle}>Подзадача</h2>
                    {!isForm && <DefaultButton text="Создать" onClick={openModal}/>}
                </div>
                <div className={styles.rightSide}>
                    {(!isMobile || isForm) &&
                        <>
                            {!isMobile
                                ? <DefaultButton text="Сохранить" option="primary"/>
                                : <DefaultButton image={cross} onClick={onClose}/>}
                            {!isMobile && (isForm
                                ? <DefaultButton text="Отменить" onClick={onClose}/>
                                : <DefaultButton text="Сохранить и выйти"/>)
                            }
                        </>
                    }
                </div>
            </header>
            <article ref={containerRef} onScroll={handleScroll} className={styles.paddingForm}>
                <h1 className={`${styles.mainTitle} ${styles.overflowText}`}>
                    {isForm
                        ? "Новая запись"
                        : "STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller"
                    }</h1>
                <Form/>
                {isMobile && isForm && (
                    <div className={styles.mobileFormButtons}>
                        <DefaultButton text="Сохранить" option="primary"/>
                        <DefaultButton text="Отменить" onClick={onClose}/>
                    </div>
                )}
            </article>
            <Modal isOpen={isOpen} onClose={closeModal}>
                <Content isForm={true} onClose={closeModal}/>
            </Modal>
        </section>
    )
}
