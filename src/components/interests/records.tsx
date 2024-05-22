import Roladex, { RoladexItem } from "../../components/roladex";
import useClient from "../../hooks/useClient";
import { useState } from "react";

const discogsToken = "VMRLDPYrGhJxnmJLQgQclUUszlVoxBsYZRpqowhb";

const Records = () => {
    const [albums,setAlbums] = useState([])
    const client = useClient()
    client.get(`https://api.discogs.com/users/Gmoney7896/collection/folders/0/releases?token=${discogsToken}`)
    .then((response)=>{
        setAlbums(response.data.releases.map((data : any)=>{return data.basic_information?.cover_image}))
    })
    .catch((error)=>{
        console.log(error)
    })
    return (
        <div className="records-containter interest">
            <h1>Vinyl Collection</h1>
            <div className="records-card">
                <div className="records-description">
                    <p>
                        These are all of the Vinyl records I currently have in my collection.<br/>
                        I integrated with my Discogs account in order to update them automatically when I add a new recods to my account's collection.<br/>
                        Hover over them to pull them and have a look. Make sure to put them back afterwards. :)
                    </p>
                </div>
                <Roladex>
                    {albums.map((record,i)=>{return(<RoladexItem key={i}><img key={i} src={record}/></RoladexItem>)})}
                </Roladex>
            </div>
        </div>
    )
}

export default Records