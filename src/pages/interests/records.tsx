import { NextPage } from "next";
import Roladex, { RoladexItem } from "../../components/roladex";
import useClient from "../../hooks/useClient";
import { useState } from "react";

const discogsToken = "VMRLDPYrGhJxnmJLQgQclUUszlVoxBsYZRpqowhb";

const Records:NextPage = () => {
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
        <>
            <h1>Vinyl Collection</h1>
            <p>
                These are all of the Vinyl records I currently have in my Discogs collection.<br/>
                Hover over them to pull them and have a look. Make sure to put them back afterwards. :)
            </p>
            <Roladex>
                {albums.map((record,i)=>{return(<RoladexItem key={i}><img key={i} src={record}/></RoladexItem>)})}
            </Roladex>
        </>
    )
}

export default Records