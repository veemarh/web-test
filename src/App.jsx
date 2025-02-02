import {ResponsiveContextProvider} from './contexts/ResponsiveContext.jsx';
import PageScreen from "./pages/PageScreen.jsx";

function App() {
    return (
        <ResponsiveContextProvider>
            <PageScreen/>
        </ResponsiveContextProvider>
    )
}

export default App
