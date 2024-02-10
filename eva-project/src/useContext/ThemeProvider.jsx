import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
const [theme, setTheme] = useState('light'); //light arba dark

const changeTheme = () => {
    setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'));
}

    return (
        <ThemeContext.Provider value={{ theme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
};