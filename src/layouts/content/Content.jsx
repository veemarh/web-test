import styles from "./content.module.css";
import DefaultButton from "../../components/default-button/default-button.jsx";
import Form from "./Form.jsx";

export default function Content() {
    return (
        <section className={styles.content}>
            <header className={styles.subheadingAndPadding}>
                <div className={styles.leftSide}>
                    <h2 className={styles.subheadingTitle}>Подзадача</h2>
                    <DefaultButton text="Создать"/>
                </div>
                <div className={styles.rightSide}>
                    <DefaultButton text="Сохранить"/>
                    <DefaultButton text="Сохранить и выйти"/>
                </div>
            </header>
            <article className={styles.paddingForm}>
                <h1 className={`${styles.mainTitle} ${styles.overflowText}`}>STSK0004783 На инциденте, запросе, проблеме,
                    в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller</h1>
                <Form/>
            </article>
        </section>
    )
}
