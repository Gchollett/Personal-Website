import { useEffect, useState } from 'react';

const CookiePopup = () => {
    const [showPopup, setShowPopup] = useState(true);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent','accepted')
        setShowPopup(false);
    }

    const handleReject = () => {
        localStorage.setItem('cookieConsent','rejected')
        setShowPopup(false);
    }

    useEffect(() => {
        setShowPopup(localStorage.getItem('cookieConsent') === 'rejected')
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