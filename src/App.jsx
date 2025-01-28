import './App.css'
import {BrowserRouter} from 'react-router-dom';
import {ResponsiveContextProvider} from './contexts/ResponsiveContext.jsx';

function App() {
    return (
        <BrowserRouter>
            <ResponsiveContextProvider>
                {/* TODO */}
            </ResponsiveContextProvider>
        </BrowserRouter>
    )
}

export default App
