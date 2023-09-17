import { useEffect, useState } from "react";
import DarkModeButton from "./dark-mode-button"
import Menu from "./menu"
import Title from "./title"
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
            <Title/>
            <Menu/>
            {darkModeEnabled && <DarkModeButton/>}
        </header>
    )
}

export default Header