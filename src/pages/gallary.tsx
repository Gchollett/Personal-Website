import { NextPage } from "next";
import { useRouter } from "next/router";
import fountainDunk1 from "../resources/FountainDunk1.png"
import bestie from "../resources/Bestie.png"
import meAndBae from "../resources/MeAndBae.png"
import pug from "../resources/Pug.png"
import fountainDunk2 from "../resources/FountatinDunk2.png"
import leeroy from "../resources/Leeroy.png"
import hsGraduation from "../resources/HsGradutation.png"
import flipImage from "../components/flip-image";
const Gallary: NextPage = () => {
    const router = useRouter(); 
    return (
        <div>
            <div>
            <h1>Gallary</h1>
            <p>
                This is my Gallary. <br/>
                It's just some pictures of me and some friends that I think best represents me.
            </p>
            <div className="gallary">
                {/* {flipImage(fountainDunk1.src,(
                    <h1>First Fountain Dunk</h1>
                ))} */}
                {flipImage(meAndBae.src,(
                    <p>My girlfirend and I failing to make a heart around Leeroy!</p>
                ))}
                {flipImage(bestie.src,(
                    <p>My bestfriend and I after my second bday dunk!</p>
                ))}
                {flipImage(pug.src,(
                    <p>My pug Penelope {"<"}3</p>
                ))}
                {flipImage(fountainDunk2.src,(
                    <p>A group photo of my friends and I after my second dunk!</p>
                ))}
                {flipImage(hsGraduation.src,(
                    <p>Me at my high school graduation!</p>
                ))}
                {flipImage(leeroy.src,(
                    <p>Leeroy and I on the first day at Trinity!</p>
                ))}
            </div>
            </div>
        </div>
    );
};

export default Gallary