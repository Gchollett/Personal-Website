import { NextPage } from "next";
import Roladex, { RoladexItem } from "../../components/roladex";

const vinyls = [
    "https://upload.wikimedia.org/wikipedia/en/f/fb/FMacRumours.PNG", //Rumors
    "https://upload.wikimedia.org/wikipedia/en/c/c3/Tyler%2C_the_Creator_-_Flower_Boy.png", //Flower Boy
    "https://img.buzzfeed.com/buzzfeed-static/complex/images/nji2i9pyf3ocnbccuvgc/tyler-the-creator-call-me-if-you-get-lost-album-cover-interview-lead-image.jpg?output-format=jpg&output-quality=auto", //Call Me if You Get Lost
    'https://upload.wikimedia.org/wikipedia/en/e/e2/Man_on_the_Moon_III.png', //Man on the Moon III
    'https://upload.wikimedia.org/wikipedia/en/5/55/LaurynHillTheMiseducationofLaurynHillalbumcover.jpg', //The Miseducation of Lauryn Hill
    'https://upload.wikimedia.org/wikipedia/en/7/70/Childish-gambino-because-the-internet.gif', //Because the Internet
    'https://upload.wikimedia.org/wikipedia/en/f/f6/Kendrick_Lamar_-_To_Pimp_a_Butterfly.png' //To Pimp a Butterfly
]
const Records:NextPage = () => {
    return (
        <>
            <h1>Vinyl Collection</h1>
            <p>
                These are all of the Vinyl records I currently have in my collection.<br/>
                Hover over them to pull them and have a look. Make sure to put them back afterwards. :)
            </p>
            <Roladex>
                {vinyls.map((record,i)=>{return(<RoladexItem key={i}><img key={i} src={record}/></RoladexItem>)})}
            </Roladex>
        </>
    )
}

export default Records