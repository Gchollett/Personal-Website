import { useEffect, useState } from 'react';

const CookiePopup = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent','accepted')
        setShowPopup(false);
    }

    const handleReject = () => {
        setShowPopup(false);
    }

    useEffect(() => {
        if(localStorage.getItem('cookie-consent') !== 'accepted'){
            setShowPopup(true);
        }
    })

    return (
        <>
        {showPopup && (
            <div className="cookie-popup">
            <h1>This website uses cookies</h1>
            <p>By clicking accept, you agree to our use of cookies.</p>
            <button onClick={handleAccept}>Accept</button>
            <button onClick={handleReject}>Reject</button>
            </div>
        )}
        </>
    );
};

export default CookiePopup;