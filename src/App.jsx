import './App.css'
import {BrowserRouter} from 'react-router-dom';
import {ResponsiveContextProvider} from './contexts/ResponsiveContext.jsx';
import PageScreen from "./pages/page-screen.jsx";

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
