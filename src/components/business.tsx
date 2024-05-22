import Link from "next/link";
import { useEffect } from "react";

const Business = () => {
    return (
        <div id="business" className="business-container">
            <h1>Getting Down to Business</h1>
            <p className="business-preface">This portion of my page is dedicated to the professional side of me.<br/> The working man if I may.</p>
            <div className="business-card">
                <div className="business-description">
                    <p>
                        I am currently a student at Trinity University. <br/>
                        Attached is my resume and a link to my <Link href="https://www.linkedin.com/in/garrett-jb-chollett/" target="_blank">LinkedIn</Link>.<br/>
                        If I seem like a fit, you can reach out using the following:<br/>
                        email: <a href="mailto:garrettchollett@gmail.com">garrettchollett@gmail.com</a><br/>
                        cell: <a href="tel:2546617095">(254) 661-7095</a>
                    </p>
                </div>
                <div className="business-resume-container">
                    <h2>Resume</h2>
                    <div className="resume-container">
                        <iframe 
                            className="resume"
                            src="https://docs.google.com/document/d/e/2PACX-1vTzd7MRhq9_2PQX1Uscvc4kHwFFwCHPkH5qIOXILvMrdxvPUcSNGpaQ9qvBHTnTBgpbMnMiL0ifqvva/pub?embedded=true" 
                            id="thisthing"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Business