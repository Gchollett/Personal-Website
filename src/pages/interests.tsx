import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

const Interests: NextPage = () => {
    const router = useRouter()
    return (
        <div className="main">
            <h1>My Interests</h1>
            <p>
                I am many things. Above all, I am a nerd. Here are some of my nerdy interests: <br/><br/>
                    <Link href="https://archidekt.com/search/decks?owner=Gmoney7896&ownerexact=false" target="_blank">Magic the Gathering</Link> 
                    <br/>Dnd
                    <br/>Funko Pops
                    <br/>Legos
                    <br/>Movies
                    <br/>Video Games
                    <br/>Vinyl Records
                    <br/>Coding
                    <br/>Game Design
            </p>
        </div>
    );
};

export default Interests