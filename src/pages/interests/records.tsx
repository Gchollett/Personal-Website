import { NextPage } from "next";
import Roladex, { RoladexItem } from "../../components/roladex";

const FMacRumors = "https://upload.wikimedia.org/wikipedia/en/f/fb/FMacRumours.PNG"
const FlowerBoy = "https://upload.wikimedia.org/wikipedia/en/c/c3/Tyler%2C_the_Creator_-_Flower_Boy.png"
const CMIYGL = "https://img.buzzfeed.com/buzzfeed-static/complex/images/nji2i9pyf3ocnbccuvgc/tyler-the-creator-call-me-if-you-get-lost-album-cover-interview-lead-image.jpg?output-format=jpg&output-quality=auto"
const MoM3 = 'https://upload.wikimedia.org/wikipedia/en/e/e2/Man_on_the_Moon_III.png'
const MELH = 'https://upload.wikimedia.org/wikipedia/en/5/55/LaurynHillTheMiseducationofLaurynHillalbumcover.jpg'
const BTI = 'https://upload.wikimedia.org/wikipedia/en/7/70/Childish-gambino-because-the-internet.gif'
const TPAB = 'https://upload.wikimedia.org/wikipedia/en/f/f6/Kendrick_Lamar_-_To_Pimp_a_Butterfly.png'
const Records:NextPage = () => {
    return (
        <>
            <h1>Vinyl Collection</h1>
            <p>
                These are all of the Vinyl records I currently have in my collection.<br/>
                Hover over them to pull them and have a look. Make sure to put them back afterwards. :)
            </p>
            <Roladex>
                <RoladexItem>
                    <img src={FMacRumors}></img>
                </RoladexItem>
                <RoladexItem>
                    <img src={CMIYGL}></img>
                </RoladexItem>
                <RoladexItem>
                    <img src={FlowerBoy}></img>
                </RoladexItem>
                <RoladexItem>
                    <img src={MoM3}></img>
                </RoladexItem>
                <RoladexItem>
                    <img src={MELH}></img>
                </RoladexItem>
                <RoladexItem>
                    <img src={BTI}></img>
                </RoladexItem>
                <RoladexItem>
                    <img src={TPAB}></img>
                </RoladexItem>
            </Roladex>
        </>
    )
}

export default Records