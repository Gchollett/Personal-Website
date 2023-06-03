import { FunctionComponent, ReactNode } from "react"

type Props = {
    src : string,
    children? : ReactNode
}

const FlipImage : FunctionComponent<Props> = (props) => {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={props.src}></img>
                </div>
                <div className="flip-card-back">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default FlipImage