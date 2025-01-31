import styles from "./content.module.css";
import Input from "../../components/input/input.jsx";
import Badge from "../../components/badge/badge.jsx";

export default function Form() {
    return (
        <form className={styles.form}>
            <fieldset className={styles.split}>
                <Input title="Ответственный" required={false}>
                    <Badge stroke={true}>Андрей Пивоваров</Badge>
                    <Badge stroke={true}>Максим Галактионов</Badge>
                    <Badge stroke={true}>Алла Лин</Badge>
                    <Badge stroke={true}>Константин Константинопольский Константинович</Badge>
                    <Badge stroke={true}>Игорь Иванченко</Badge>
                    <Badge stroke={true}>Юлия Эйчаровна</Badge>
                </Input>
                <Input title="Ответственный" required={true}>
                    <Badge stroke={true}>Андрей Пивоваров</Badge>
                    <Badge stroke={true}>Максим Галактионов</Badge>
                    <Badge stroke={true}>Алла Лин</Badge>
                    <Badge stroke={true}>Константин Константинопольский Константинович</Badge>
                    <Badge stroke={true}>Игорь Иванченко</Badge>
                    <Badge stroke={true}>Юлия Эйчаровна</Badge>
                    <Badge stroke={true}>Артём Подпрыгайко-Саппортов</Badge>
                    <Badge stroke={true}>Илья Вазнец</Badge>
                    <Badge stroke={true}>Михаил Вортенов</Badge>
                </Input>
            </fieldset>
        </form>
    )
}
