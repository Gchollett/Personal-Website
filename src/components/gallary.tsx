import FlipImage from "./flip-image"
import bestie from "../resources/gallary/Bestie.png"
import meAndBae from "../resources/gallary/MeAndBae.png"
import pug from "../resources/gallary/Pug.png"
import fountainDunk2 from "../resources/gallary/FountatinDunk2.png"
import leeroy from "../resources/gallary/Leeroy.png"
import hsGraduation from "../resources/gallary/HsGradutation.png"

const Gallary = () => {
    return (
        <div id="gallary" className="gallary-container">
            <h1>Gallary</h1>
            <div className="gallary-card">
                <p className="gallary-description">
                    Welcome to my Gallary! <br/>
                    This is like a museum of small moments in my life that best represent me.<br/>
                    I think anyone can get a gentle grasp of who I am by just a short scroll through here!<br/>
                </p>
                <div className="gallary">
                    <div className="gallary-inner">
                        <FlipImage src={meAndBae.src}>
                            <p>My girlfriend and I failing to make a heart around Leeroy!</p>
                        </FlipImage>
                        <FlipImage src={bestie.src}>
                            <p>My bestfriend and I after my second bday dunk!</p>
                        </FlipImage>
                        <FlipImage src={pug.src}>
                            <p>My pug Penelope {"<"}3</p>
                        </FlipImage>
                        <FlipImage src={fountainDunk2.src}>
                            <p>A group photo of my friends and I after my second dunk!</p>
                        </FlipImage>
                        <FlipImage src={hsGraduation.src}>
                            <p>Me at my high school graduation!</p>
                        </FlipImage>
                        <FlipImage src={leeroy.src}>
                            <p>Leeroy and I on the first day at Trinity!</p>
                        </FlipImage>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallary