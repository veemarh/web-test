import {createContext, useContext} from 'react';
import {useMediaQuery} from 'react-responsive';

export const ResponsiveContext = createContext(undefined);

export const ResponsiveContextProvider = ({children}) => {
    const isDesktop = useMediaQuery({minWidth: 992});
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = !isDesktop && !isMobile;

    return (
        <ResponsiveContext.Provider value={{isDesktop, isMobile, isTablet}}>
            {children}
        </ResponsiveContext.Provider>
    );
};

export const useResponsiveContext = () => useContext(ResponsiveContext);
