import styles from "./pages.module.css"
import Content from "../layouts/content/Content.jsx";
import Header from "../layouts/header/Header.jsx";
import Navigator from "../layouts/navigator/Navigator.jsx";

export default function PageScreen() {
    return (
        <div className={styles.layout}>
            <Header/>
            <Navigator/>
            <Content/>
        </div>
    )
}
