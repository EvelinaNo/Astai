import { useContext } from "react";
import { AuthenticationContext } from "./AuthenticationProvider";


export const AuthenticationSwitcher = () => {
const {logInfo, changelog } = useContext(AuthenticationContext);
    return (
<button onClick={changelog}>Pakeisti į {logInfo === 'Esate prisijungę' ? 'Esate atsijungę' : 'Esate prisijungę'}</button>
    )
};