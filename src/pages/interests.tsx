import { NextPage } from "next";
import Link from "next/link";

const Interests: NextPage = () => {
    return (
        <>
            <h1>My Interests</h1>
            <p>
                I am many things. Above all, I am a nerd. Here are some of my nerdy interests: <br/><br/>
                    <Link href="https://archidekt.com/search/decks?owner=Gmoney7896&ownerexact=false" target="_blank">Magic the Gathering</Link> 
                    <br/>Dnd
                    <br/><a href="/funkos">Funko Pops</a>
                    <br/>Legos
                    <br/>Movies
                    <br/>Video Games
                    <br/><a href="/records">Vinyl Records</a>
                    <br/>Coding
                    <br/>Game Design
            </p>
        </>
    );
};

export default Interests