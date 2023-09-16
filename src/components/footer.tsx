import Link from "next/link"
import gitHubLight from "../resources/github-mark/github-mark-white.png"
import linkedIn from "../resources/LinkedIn-Logos/LI-In-Bug.png"
import gitHubDark from "../resources/github-mark/github-mark.png"
import { ChangeEventHandler, useEffect, useState } from "react";

const Footer = () => {
    const date = new Date().getFullYear();
    return(
        <footer className={"footer"}>
            <h3 style={{marginBottom:"-2px"}}>Fun Links!</h3>
            <div style={{display: "inline-block", paddingBottom: "5px"}}>
            <Link href="https://github.com/Gchollett" target="_blank"><img src={gitHubLight.src}></img></Link>
            <Link style={{paddingLeft:"10px"}} href="https://www.linkedin.com/in/garrett-jb-chollett/" target="_blank"><img src={linkedIn.src}/></Link>
            </div>
            <br/>
            DoubleIt Inc. {date}
        </footer>
    )
}

export default Footer