import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export const ThemeSwitcher = () => {
    const { theme, changeTheme } = useContext(ThemeContext);
    return <button onClick={changeTheme}>Change app theme to {theme === 'light' ? 'dark' : 'light'}</button>;
};

