import { useEffect, useState } from 'react'
import olReliable from '../../resources/OlReliable.png'


const Dnd = () => {
    const [showImage,setShowImage] = useState(false)
    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth > 750){
                setShowImage(true)
            }else{
                setShowImage(false)
            }
        }
        handleResize()
        window.addEventListener('resize',handleResize)
        return () => {
            window.removeEventListener('resize',handleResize)
        }
    },[])
    return(
        <div className="dnd-container interest">
            <h2>DnD</h2>
            <div className='dnd-card'>
                <div className='dnd-description'>
                    <p>
                        Dungeons and Dragons is one of my favorite hobies.<br/>
                        Between the world building, collective storytelling, and teamwork, I find that it helps build a lot of useful skills in a fun way.<br/>
                        This is also where I get to flex my creativity the most with said worldbuilding, character creation, and homebrewing.<br/>
                        Here I have all of my DnD homebrews and ideas for those interested.<br/>
                        I have also put links to the resources that I use a lot for campaign creation, homebrewing, and running sessions.
                    </p>
                    <h3>Homebrew</h3>
                    <p>These are some of my current homebrews that I have worked on over the past years and that I think are ready for the world to see.</p>
                    <h4>The Leech</h4>
                    <p>
                        Have you ever had such a powerful yearning for something that you could never fulfill?<br/>
                        Did this ultimate desire drive you to the brink of insanity, causing you to hurt everything and everyone around you?<br/>
                        If the answer to these questions is yes, then the <a href="https://homebrewery.naturalcrit.com/share/H24a4bnyQjk1" target="_blank">Leech Class</a> is for you!
                    </p>
                    <h4>Mizzletrix's Magical Gifts</h4>
                    <p>
                        Mizzletrix is a collector and curator of many magical items.<br/>
                        Luckily, he keeps an inventory of all the magic items he has ever come across and heard of.<br/>
                        This list is being genrously provided by him for this website: <a href="https://docs.google.com/document/d/1PSmzBh9P1ZYUkAnIytHadBWu3Y4ZZ_PdpLJyK0RX9bI/edit?usp=sharing" target="_blank">Mizzletrix's Magic Compendium</a>.
                    </p>
                    <h3>Resources</h3>
                    <p>
                        These are some of my absolute game changing services to use when workshoping for Dnd.<br/>
                        They are a DM's best friends and I could not do it without them.<br/>
                        <a href="https://obsidian.md/" target="_blank">Obsidian</a> - my favorite tool for note taking.<br/>
                        <a href="https://watabou.itch.io/medieval-fantasy-city-generator" target="_blank">Watabou Fantasy City Generator</a> - The easiest way to create a town/city/kingdom map<br/>
                        <a href="http://www.giffyglyph.com/monstermaker/app/" target="_blank">Giffyglyph</a> - An awesome and stress free way to make homebrew creatures.
                    </p>
                </div>
                {showImage?
                <figure>
                        <div className="home-image-container">
                            <img src={olReliable.src}/>
                        </div><br/>
                        <figcaption>Drawing of Ol' Reliable done by me.</figcaption>
                </figure>
                :
                <></>
                }
            </div>
        </div>
    )
}

export default Dnd