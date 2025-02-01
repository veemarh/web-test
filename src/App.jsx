import {BrowserRouter} from 'react-router-dom';
import {ResponsiveContextProvider} from './contexts/ResponsiveContext.jsx';
import PageScreen from "./pages/PageScreen.jsx";

function App() {
    return (
        <BrowserRouter>
            <ResponsiveContextProvider>
                <PageScreen/>
            </ResponsiveContextProvider>
        </BrowserRouter>
    )
}

export default App
