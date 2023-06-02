import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";

const Business: NextPage = () => {
    return (
        <div>
            <h1>Getting Down to Business</h1>
            <p>
                I am currently a student at Trinity University. <br/>
                Attached is my resume and a link to my <Link href="https://www.linkedin.com/in/garrett-jb-chollett/" target="_blank">LinkedIn</Link>.<br/>
                If I seem like a fit, you can reach out using the following:<br/>
                email: <a href="mailto:garrettchollett@gmail.com">garrettchollett@gmail.com</a><br/>
                cell: <a href="tel:2546617095">(254) 661-7095</a>
            </p>
            <h2>Resume</h2>
            <div>
                <iframe 
                    height={100}
                    className="resume"
                    src="https://docs.google.com/document/d/e/2PACX-1vTzd7MRhq9_2PQX1Uscvc4kHwFFwCHPkH5qIOXILvMrdxvPUcSNGpaQ9qvBHTnTBgpbMnMiL0ifqvva/pub?embedded=true" 
                    id="resume"
                />
            </div>
        </div>
    );
};

export default Business