import useClient from "../../hooks/useClient";
import { useEffect, useState } from "react";

const discogsToken = "VMRLDPYrGhJxnmJLQgQclUUszlVoxBsYZRpqowhb";

const Records = () => {
    const [albums,setAlbums] = useState([])
    const client = useClient()
    useEffect(() => {
        client.get(`https://api.discogs.com/users/Gmoney7896/collection/folders/0/releases?token=${discogsToken}&sort=artist`)
        .then((response)=>{
            setAlbums(response.data.releases.map((data : any)=>{return data.basic_information?.cover_image}))
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])
    return (
        <div className="records-containter interest">
            <h1>Vinyl Collection</h1>
            <div className="records-card">
                <div className="records-description">
                    <p>
                        These are all of the Vinyl records I currently have in my collection.<br/>
                        I integrated with my Discogs account in order to update them automatically when I add a new recods to my account's collection.<br/>
                        This is just my current collection, you can always come and check for updates!
                    </p>
                </div>
                <div className="roladex">
                    {albums.map((record,i)=>{return(<div className="roladex-item" key={i}><img key={i} src={record}/></div>)})}
                </div>
            </div>
        </div>
    )
}

export default Records