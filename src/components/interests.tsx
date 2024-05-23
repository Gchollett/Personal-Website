import { useEffect, useState } from "react"
import Dnd from "./interests/dnd"
import Records from "./interests/records"
import Legos from "./interests/legos"
import Magic from "./interests/magic"

const Interests = () => {
    const [interest,setInterest] = useState("")
    const renderSwitch = (s : String) => {
        switch(s) {
            case "dnd":
                return (<Dnd/>)
            case "mtg":
                return (<Magic/>)
            case "vinyl":
                return (<Records/>)
            case "funko":
                return(<></>)
            case "legos":
                return(<Legos/>)
            default:
                return (<Dnd/>)
        }
    }
    const [shortenNames,setShortenNames] = useState(false)
    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth <= 750){
                setShortenNames(true)
            }else{
                setShortenNames(false)
            }
        }
        handleResize()
        window.addEventListener('resize',handleResize)
        return () => {
            window.removeEventListener('resize',handleResize)
        }
    },[])
    return (
        <div id="interests" className="interests-container">
            <h1>My Interests</h1>
            <p className="interest-description">Here are a few of the nerdy things I am into!</p>
            <div className="interest-nav">
                <p onClick={()=>setInterest('dnd')}>DnD</p>
                <p onClick={()=>setInterest('mtg')}>{shortenNames?"Mtg":"Magic the Gathering"}</p>
                <p onClick={()=>setInterest('vinyl')}>{shortenNames?"Records":"Vinyl Records"}</p>
                {/* <p onClick={()=>setInterest('funko')}>Funko Pops</p> */}
                <p onClick={()=>setInterest('legos')}>Legos</p>
            </div>
            <div>
                {renderSwitch(interest)}
            </div>
        </div>
    )
}

export default Interests