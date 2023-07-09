import { NextPage } from "next";
import Roladex, { RoladexItem } from "../components/roladex";
import FMacRumors from '../resources/Records/FMacRumours.png'
import CMIYGL from '../resources/Records/Call Me if You Get Lost Record.jpg'


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
                    <img src={FMacRumors.src}></img>
                </RoladexItem>
                <RoladexItem>
                    <img src={CMIYGL.src}></img>
                </RoladexItem>
            </Roladex>
        </>
    )
}

export default Records