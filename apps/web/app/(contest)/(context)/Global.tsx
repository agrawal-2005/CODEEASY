"use client"

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

interface ContextProps{
    loggedIn: boolean,
    setLoggedIn: Dispatch<SetStateAction<boolean>>,
    userId: any,
    setUserId: Dispatch<SetStateAction<any>>,
    theme: any,
    setTheme: Dispatch<SetStateAction<any>>
}

const GlobalContext = createContext<ContextProps>({
    loggedIn: false,
    setLoggedIn: (): boolean => false,
    userId: ``,
    setUserId: (): any => ``,
    theme: ``,
    setTheme: (): any => ``
})

export const GlobalContextProvider = ({children}) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [userId, setUserId] = useState("");
    const [theme, setTheme] = useState("vs-dark");

    return(
        <GlobalContext.Provider value = {{loggedIn, setLoggedIn, userId, setUserId, theme, setTheme}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)