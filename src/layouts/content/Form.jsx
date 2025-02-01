import styles from "./content.module.css";
import Input from "../../components/input/Input.jsx";
import Badge from "../../components/badge/Badge.jsx";
import closeCircle from "/close-circle.svg";

export default function Form() {
    return (
        <form className={styles.form}>
            <fieldset className={styles.split}>
                <Input type="text" title="Тема" required={true}/>
                <Input type="text" title="Статус" required={false}/>
            </fieldset>
            <fieldset className={styles.split}>
                <Input type="text" title="Описание" required={false}/>
                <Input type="text" title="Продукт" required={false} buttons={["search"]}/>
            </fieldset>
            <fieldset className={styles.split}>
                <Input type="text" title="Рабочие заметки" required={true}/>
                <Input type="text" title="Приоритет" required={false}/>
            </fieldset>
            <fieldset className={styles.split}>
                <Input title="Ответственный" required={false} type="badge" icon={closeCircle} alt="close-circle" buttons={["plus", "search"]}>
                    <Badge stroke={false}>Константин Константинопольский</Badge>
                </Input>
                <Input title="Группа" required={false} type="badge" icon={closeCircle} alt="close-circle" buttons={["plus", "search"]}>
                    <Badge stroke={false}>Support Group</Badge>
                </Input>
            </fieldset>
            <Input type="text" title="Комментарии" required={false}/>
            <Input title="Согласующие" required={false} type="badge" icon={closeCircle} alt="close-circle" buttons={["plus", "search"]}>
                <Badge stroke={true}>Андрей Пивоваров</Badge>
                <Badge stroke={true}>Максим Галактионов</Badge>
                <Badge stroke={true}>Алла Лин</Badge>
                <Badge stroke={true}>Константин Константинопольский Константинович</Badge>
            </Input>
            <fieldset className={styles.split}>
                <Input type="date" title="Когда открыто" required={false} buttons={["date"]}/>
                <Input type="date" title="Когда создано" required={false} buttons={["date"]}/>
            </fieldset>
            <fieldset className={styles.split}>
                <Input type="badge" title="Кем открыто" required={false} icon={closeCircle} alt="close-circle" buttons={["plus", "search"]}>
                    <Badge stroke={false}>Андрей Пивоваров</Badge>
                </Input>
                <Input type="badge" title="Кем создано" required={false} icon={closeCircle} alt="close-circle" buttons={["plus", "search", "calendar"]}>
                    <Badge stroke={false}>Андрей Пивоваров</Badge>
                </Input>
            </fieldset>
        </form>
    )
}
