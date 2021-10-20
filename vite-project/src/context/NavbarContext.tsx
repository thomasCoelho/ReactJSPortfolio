import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive'


export const NavbarContext = React.createContext({} as any);

const NavbarContextProvider = ({children} :any) => {
    const desktop = useMediaQuery({ query: '(min-width: 992px)' })
    const [sideBarVisible, setSideBarVisible] = useState<boolean>(desktop)
    return(
        <NavbarContext.Provider value={{
            sideBarVisible,
            setSideBarVisible
        }}>
            {children}
        </NavbarContext.Provider>
    )
}

export default NavbarContextProvider