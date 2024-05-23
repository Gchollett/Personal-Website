import teysa from '../../resources/cards/cmm-688-teysa-karlov.png'
import toggo from '../../resources/cards/cmr-576-toggo-goblin-weaponsmith.png'
import tana from '../../resources/cards/cmr-537-tana-the-bloodsower.png'
import mathas from '../../resources/cards/2x2-523-mathas-fiend-seeker.png'
import extus from '../../resources/cards/stx-323-extus-oriq-overlord.png'
import sol from '../../resources/cards/pip-887-sol-ring.png'

const Magic = () => {
    return(
        <div className="magic-container interest">
            <h2>Magic the Gathering</h2>
            <div className="magic-card">
                <div className="magic-description">
                    <p>
                        Magic is one of my favorite games ever.<br/>
                        It combines a lot of fun themes and IPs into an amazingly complicated card game.<br/>
                        In fact, Magic is so complicated, that it is Turing Complete (Shown in this video by Kyle Hill: <a href="https://www.youtube.com/watch?v=pdmODVYPDLA" target="_blank">Click here to Nerd Out</a>)<br/>
                        My favorite formats are pauper, limited draft, and of course commander.<br/>
                        If you want to check out any of my decks, you can go to my <a href="https://archidekt.com/search/decks?owner=Gmoney7896&ownerexact=true" target="_blank">Archidekt</a>.
                    </p>
                </div>
                <div className='magic-cards'>
                    <img src={teysa.src}/>
                    <img src={toggo.src}/>
                    <img src={tana.src}/>
                    <img src={mathas.src}/>
                    <img src={sol.src}/>
                    <img src={extus.src}/>
                </div>
            </div>
        </div>
    )
}

export default Magic