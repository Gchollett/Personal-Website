import Link from "next/link";
import { FunctionComponent, PropsWithChildren, useEffect, useState} from "react";
import getCurrentPage from "../utilities/get-current-page";
import { getURL } from "next/dist/shared/lib/utils";
import { useRouter } from "next/router";
import useBodyClasses from "../hooks/use-body-classes";
import useDarkMode, { changeDarkMode, getLocal } from "../hooks/use-darkMode";
import Head from "next/head";
import Logo from "../resources/Logo.png"

const Layout: FunctionComponent<PropsWithChildren> = ({children}) => {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState("/")
    const [dmState, setDmState] = useState(false);
    const [darkMode, setDarkMode] = useState(useDarkMode())
    useEffect(() => {
        setDarkMode({
            moon: JSON.parse(getLocal()).moon,
            style: JSON.parse(getLocal()).style
    })
    },[dmState])
    useBodyClasses(darkMode.style)
    const date = new Date().getFullYear();
    useEffect(() => setCurrentPage(() => getURL()))
    const tags = getCurrentPage(currentPage);
    return (
        <div className={darkMode.style}>
            <Head>
                <title>Garrett's Website</title>
                <link rel="icon" href={Logo.src}></link>
            </Head>
            <header className={"bar "+ darkMode.style}>
                <Link href="/" style={{paddingLeft: "15px",color:"inherit",textDecoration:"inherit", fontSize:"20px", fontFamily:"cursive"}}>{tags[3]}</Link>
                <img className="icon" src={darkMode.moon.src} alt="darkModeIcon"  onClick={() => {changeDarkMode(darkMode); setDmState(!dmState)}}></img>
                <div style={{textAlign:"center"}}>
                    <button className={darkMode.style+"Buttons"} onClick={() => router.push("/interests")}>{tags[0]}</button>
                    <button className={darkMode.style+"Buttons"} onClick={() => router.push("/business")}>{tags[1]}</button>
                    <button className={darkMode.style+"Buttons"} onClick={() => router.push("/gallary")}>{tags[2]}</button>
                </div>
            </header>
            <div className={darkMode.style+"card"}>
                {children}
            </div>
            <div style={{paddingTop: "80px"}}></div>
            <footer className={"footer " + darkMode.style}>
                <h3 style={{marginBottom:"-2px"}}>Fun Links!</h3>
                <div style={{display: "inline-block", paddingBottom: "5px"}}>
                <Link className={darkMode.style+"Link"} href="https://github.com/Gchollett" target="_blank">gitHub</Link>
                <Link className={darkMode.style+"Link"} style={{paddingLeft:"10px"}} href="https://www.linkedin.com/in/garrett-jb-chollett/" target="_blank">LinkedIn</Link>
                </div>
                <br/>
                DoubleIt Inc. {date}
            </footer>
        </div>
    )
}

export default Layout