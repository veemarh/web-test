import Content from "../layouts/content/Content.jsx";
import Header from "../layouts/header/Header.jsx";
import Navigator from "../layouts/navigator/Navigator.jsx";
import {useState} from "react";
import {useResponsiveContext} from "../contexts/ResponsiveContext.jsx";

export default function PageScreen() {
    const [isNavigatorVisible, setIsNavigatorVisible] = useState(true);
    const {isMobile} = useResponsiveContext();

    const toggleNavigator = () => {
        setIsNavigatorVisible(prev => !prev);
    };

    return (
        <>
            <Header/>
            {!isMobile && <Navigator navigatorVisible={isNavigatorVisible} toggleNavigator={toggleNavigator}/>}
            <Content navigatorVisible={isNavigatorVisible}/>
        </>
    )
}
