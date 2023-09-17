import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type props = {
    darkMode : Dispatch<SetStateAction<boolean>>
}

const CookiePopup = (props : props) => {
    const [showPopup, setShowPopup] = useState(false);
    const [rejected, setRejected] = useState(false);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent','accepted')
        setShowPopup(false);
        props.darkMode(true);
    }

    const handleReject = () => {
        setShowPopup(false);
        setRejected(true);
    }

    useEffect(() => {
        if(localStorage.getItem('cookie-consent') !== 'accepted' && !rejected){
            setShowPopup(true);
        }
    })

    return (
        <>
        {showPopup && (
            <div className="cookie-popup">
            <h1>This website uses cookies</h1>
            <p>By clicking accept, you agree to our use of cookies.</p>
            <p>It Unlocks Dark Mode 🤩</p>
            <button onClick={handleAccept}>Accept</button>
            <button onClick={handleReject}>Reject</button>
            </div>
        )}
        </>
    );
};

export default CookiePopup;