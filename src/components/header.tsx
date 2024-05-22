import { useEffect, useState } from "react";
import DarkModeButton from "./dark-mode-button"
import Menu from "./menu"
import CookiePopup from "./cookie-popup";

const Header = () => {
    const [darkModeEnabled, setDarkModeEnabled] = useState(true);
    useEffect(() => {
        if(localStorage.getItem('cookie-consent') !== 'accepted'){
            setDarkModeEnabled(false);
        }
    })
    return (
        <header>
            <CookiePopup darkMode={setDarkModeEnabled}/>
            <h4 className="title">Garrett Chollett</h4>
            <Menu/>
            {darkModeEnabled && <DarkModeButton/>}
        </header>
    )
}

export default Header