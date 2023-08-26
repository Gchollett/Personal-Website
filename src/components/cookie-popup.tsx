import { FunctionComponent, useEffect, useState } from 'react';
import 'reactjs-popup'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

type Props = {
    cookieConsent: string | null,
}
const CookiePopup : FunctionComponent<Props> = (props) => {
    if(props.cookieConsent === null){
        return (
            <>
                <Popup open modal>
                    <>
                        <div>
                            Do you want cookies?
                        </div>
                        <div>
                            <button onClick={()=>{
                                localStorage.setItem('cookieConsent','true');
                            }}>Yes!</button>
                            <button onClick={() => {close()}}>No.</button>
                        </div>
                    </>
                </Popup>
            </>
        )
    } else {
        return (<></>)
    }
}

export default CookiePopup