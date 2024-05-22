import { useEffect, useState } from "react"

const key = "key 2d4e5f9c51f1f1962f78a7d685ad0064"
// const username = "Gchollett"
// const password = "Dogsarecool!"
const token = "12353e9bca6e3c1355c5509cec65b57cb489c3a593708ad10e12c603b9af43c1"

type lego = {
    set: {
        set_img_url: string
    }
}

const Legos = () => {
    const def : lego[] = []
    const [legos,setLegos] = useState(def)
    useEffect(() => {
        fetch(`https://rebrickable.com/api/v3/users/${token}/sets/`,{
            method: "GET",
            headers: {Authorization:key},
        }).then(res => res.json()).then(res => {console.log(res);setLegos(res.results)})
    },[])
    return (
        <div className="lego-container interest">
            <h2>Legos</h2>
            <div className="lego-card">
                <div className="lego-description">
                    <p>
                    I have loved Legos since I was a child.<br/>
                    A lot of my older sets have been torn assunder and the pieces thrown in a huge bin, leaving me with only a few sets I have collected over the past years.<br/>
                    I believe Legos have been fostering creativity and problem solving in me since I could use my hands.<br/>
                    They definetely played a big part in who I am today.<br/>
                    These are my current Lego sets stored in my Rebrickable account.
                    </p>
                </div>
                <div className="lego-image-container">
                    {
                        legos.slice(0,legos.length/2)?.map((l,i) => {
                            return(<img className="lego-image" key={i} src={l.set.set_img_url}/>)
                        })
                    }
                </div>
                <div className="lego-image-container">
                    {
                        legos.slice(legos.length/2,legos.length)?.map((l,i) => {
                            return(<img className="lego-image" key={i} src={l.set.set_img_url}/>)
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Legos