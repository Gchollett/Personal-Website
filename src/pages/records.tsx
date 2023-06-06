import { NextPage } from "next";
import Roladex, { RoladexItem } from "../components/roladex";
import FMacRumors from '../resources/Records/FMacRumours.png'

const Records:NextPage = () => {
    return (
        <>
            <h1>Vinyl Collection</h1>
            <p>
                These are all of the Vinyl records I have currenlts collected.
            </p>
            <Roladex>
                <RoladexItem>
                    <img src={FMacRumors.src}></img>
                </RoladexItem>
            </Roladex>
        </>
    )
}

export default Records