import { FunctionComponent, PropsWithChildren, useEffect, useState} from "react";
import Head from "next/head";
import Logo from "../resources/Logo.png"
import Footer from "./footer";
import Header from "./header";

const Layout: FunctionComponent<PropsWithChildren> = ({children}) => {
    return (
        <>
            <Head>
                <title>Garrett's Website</title>
                <link rel="icon" href={Logo.src}></link>
            </Head>
            <Header/>
            <div className="card">
                {children}
            </div>
            <div style={{paddingTop: "110px"}}></div>
            <Footer/>
        </>
    )
}

export default Layout