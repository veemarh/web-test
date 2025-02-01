import Content from "../layouts/content/Content.jsx";
import Header from "../layouts/header/Header.jsx";
import Navigator from "../layouts/navigator/Navigator.jsx";
import {useState} from "react";

export default function PageScreen() {
    const [isNavigatorVisible, setIsNavigatorVisible] = useState(true);

    const toggleNavigator = () => {
        setIsNavigatorVisible(prev => !prev);
    };

    return (
        <>
            <Header/>
            <Navigator navigatorVisible={isNavigatorVisible} toggleNavigator={toggleNavigator}/>
            <Content navigatorVisible={isNavigatorVisible}/>
        </>
    )
}
