import Link from "next/link";
import { FunctionComponent, PropsWithChildren, useEffect, useState} from "react";
import getCurrentPage from "../utilities/get-current-page";
import { getURL } from "next/dist/shared/lib/utils";
import { useRouter } from "next/router";
import fullMoon from '../resources/Moon.png'
import darkMoon from '../resources/DarkMoon.png'
import useBodyClasses from "../hooks/use-body-classes";
import useDarkMode, { changeDarkMode, getLocal } from "../hooks/use-darkMode";

const Layout: FunctionComponent<PropsWithChildren> = ({children}) => {
    const router = useRouter();
    var moon = fullMoon;
    var style = "";
    const [currentPage, setCurrentPage] = useState("/")
    const [dm, setDm] = useState(false);
    const [stuff, setStuff] = useState({moon,style})
    useDarkMode();
    useEffect(() => {
        setStuff({
            moon: JSON.parse(getLocal()).moon,
            style: JSON.parse(getLocal()).style
    })
    },[dm])
    console.log(stuff)
    moon = stuff.moon;
    style = stuff.style;
    useBodyClasses(style)
    const date = new Date().getFullYear();
    useEffect(() => setCurrentPage(() => getURL()))
    const tags = getCurrentPage(currentPage);
    return (
        <div className={style}>
            <header className={"bar "+ style}>
                <Link href="/" style={{color:"inherit",textDecoration:"inherit", fontSize:"20px", fontFamily:"cursive"}}>{tags[3]}</Link>
                <img className="icon" src={moon.src} alt="darkModeIcon" onClick={() => {changeDarkMode({moon,style}); setDm(!dm)}}></img>
                <div style={{textAlign:"center"}}>
                    <button className={style+"Buttons"} onClick={() => router.push("/interests")}>{tags[0]}</button>
                    <button className={style+"Buttons"} onClick={() => router.push("/business")}>{tags[1]}</button>
                    <button className={style+"Buttons"} onClick={() => router.push("/gallary")}>{tags[2]}</button>
                </div>
            </header>
            <div className={style+"card"}>
                {children}
            </div>
            <div style={{paddingTop: "80px"}}></div>
            <footer className={"footer " + style}>
                <h3 style={{marginBottom:"-2px"}}>Fun Links!</h3>
                <div style={{display: "inline-block", paddingBottom: "5px"}}>
                <Link className={style+"Link"} href="https://github.com/Gchollett" target="_blank">gitHub</Link>
                <Link className={style+"Link"} style={{paddingLeft:"10px"}} href="https://www.linkedin.com/in/garrett-jb-chollett/" target="_blank">LinkedIn</Link>
                </div>
                <br/>
                DoubleIt Inc. {date}
            </footer>
        </div>
    )
}

export default Layout