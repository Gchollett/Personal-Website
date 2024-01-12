import { NextPage } from "next";
import FlipImage from "../components/flip-image";
import bestie from "../resources/gallary/Bestie.png"
import meAndBae from "../resources/gallary/MeAndBae.png"
import pug from "../resources/gallary/Pug.png"
import fountainDunk2 from "../resources/gallary/FountatinDunk2.png"
import leeroy from "../resources/gallary/Leeroy.png"
import hsGraduation from "../resources/gallary/HsGradutation.png"

const Gallary: NextPage = () => {
    return (
        <>
            <h1>Gallary</h1>
            <p>
                This is my Gallary. <br/>
                It's just some pictures of me and some friends that I think best represents me.
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
        </>
    );
};

export default Gallary