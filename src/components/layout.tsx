import Link from "next/link";
import { FunctionComponent, PropsWithChildren, useEffect, useState} from "react";
import Head from "next/head";
import Logo from "../resources/Logo.png"
import DarkModeButton from "./dark-mode-button";
import Menu from "./menu";
import Title from "./title";
import CookiePopup from "./cookie-popup";
import Footer from "./footer";

const Layout: FunctionComponent<PropsWithChildren> = ({children}) => {
    return (
        <div>
            <Head>
                <title>Garrett's Website</title>
                <link rel="icon" href={Logo.src}></link>
            </Head>
            <CookiePopup/>
            <div className="bar">
                <Title/>
                <Menu/>
                <DarkModeButton/>
            </div>
            <div className="card">
                {children}
            </div>
            <div style={{paddingTop: "100px"}}></div>
            <Footer/>
        </div>
    )
}

export default Layout