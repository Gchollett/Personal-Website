import { ChangeEventHandler, useEffect, useState } from "react"
import lightMoon from "../resources/Moon.png"
import darkMoon from "../resources/DarkMoon.png"

const setDark = () => {
    if(localStorage.getItem("cookie-consent") === "accepted"){
        localStorage.setItem("theme","dark");
        document.documentElement.setAttribute("data-theme","dark");
    }
}

const setLight = () => {
    if(localStorage.getItem("cookie-consent") === "accepted"){
        localStorage.setItem("theme","light");
        document.documentElement.setAttribute("data-theme","light");
    }
}

const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
    if(e.target.checked) {
        setDark();
    } else {
        setLight();
    }
}

const DarkModeButton = () => {
    const[defaultDark,setDefaultDark] = useState(false)
    const[darkMode,setDarkMode] = useState(false)
    useEffect(()=> {
        const storedTheme = localStorage.getItem("theme");
    
        const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme:dark)").matches;
    
        setDefaultDark(storedTheme === "dark" || (storedTheme === null && prefersDark))

        if (defaultDark) {
            setDark();
            var box = document.getElementById('darkMode')
            // @ts-ignore
            box.checked = box.checked
        }
    })
    return (
        <div className="toggle-theme-wrapper">
            <div className={"toggle-theme"}>
                <input
                    type="checkbox"
                    id="darkMode"
                    onChange={toggleTheme}
                    defaultChecked={defaultDark}
                /><label htmlFor="darkMode"><img className="check-box" src={darkMoon.src}></img></label>
            </div>
        </div>
    )
}

export default DarkModeButton;