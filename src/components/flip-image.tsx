import { ReactNode } from "react"

const flipImage = (imageSrc : string, content : ReactNode) => {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={imageSrc}></img>
                </div>
                <div className="flip-card-back">
                    {content}
                </div>
            </div>
        </div>
    )
}

export default flipImage