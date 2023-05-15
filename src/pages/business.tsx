import { NextPage } from "next";
import Link from "next/link";
import { useEffect } from "react";

const Business: NextPage = () => {
    var screenWidth = 1280;
    useEffect(() => {
        screenWidth = screen.availWidth;
    })
    return (
        <div>
            <h1>Getting Down to Business</h1>
            <p>
                I am currently a student at Trinity University. <br/>
                Attached is my resume and a link to my <Link href="https://www.linkedin.com/in/garrett-jb-chollett/" target="_blank">LinkedIn</Link>.<br/>
                If I seem like a fit, you can reach out using the following:<br/>
                email: garrettchollett@gmail.com<br/>
                cell: (254) 661-7095
            </p>
            <h2>Resume</h2>
            <iframe 
                src="https://docs.google.com/document/d/e/2PACX-1vTzd7MRhq9_2PQX1Uscvc4kHwFFwCHPkH5qIOXILvMrdxvPUcSNGpaQ9qvBHTnTBgpbMnMiL0ifqvva/pub?embedded=true" 
                height={"1312px"} 
                width={screenWidth-450}
                style={{display: "inline-block", margin: "0 auto", border: "none"}}
                />
        </div>
    );
};

export default Business