import { createContext, useState } from "react";

export const AuthenticationContext = createContext();
export const AuthenticationProvider = ({children}) => {
    const [logInfo, setLogInfo] = useState('Esate prisijungę'); //Esate prisijungę arba Esate atsijungę

    const changelog = () => {
        setLogInfo((prevState) => (prevState === 'Esate prisijungę' ? 'Esate atsijungę': 'Esate prisijungę'));
    }
    return (
        <AuthenticationContext.Provider value={{ logInfo, changelog }}>
            {children}
        </AuthenticationContext.Provider>
    )
};