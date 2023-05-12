import { NextPage } from "next";
import { styles } from "../styles";
import Link from "next/link";
import { useRouter } from "next/router";

const Interests: NextPage = () => {
    const router = useRouter()
    return (
        <div style={styles.main}>
            <header>
                <Link href="/" style={{color:"inherit",textDecoration:"inherit"}}>Garrett's Website</Link>
            </header>
            <h1 style={{textAlign:"center"}}>My Interests</h1>
            <p>
                I have many interests and passions. Many of them are quite nerdy.
            </p>
            <ul>
                    <li><Link href="https://archidekt.com/search/decks?owner=Gmoney7896&ownerexact=false" target="_blank">Magic the Gathering</Link></li>
                    <li>Dnd</li>
                    <li>Funko Pops</li>
                    <li>Legos</li>
                    <li>Movies</li>
                    <li>Video Games</li>
                    <li>Vinyl Records</li>
                    <li>Coding</li>
                    <li>Game Design</li>
                </ul>
            
        </div>
    );
};

export default Interests