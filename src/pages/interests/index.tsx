import { NextPage } from "next";

const Interests: NextPage = () => {
    return (
        <>
            <h1>My Interests</h1>
            <p>
                I am many things. Above all, I am a nerd. Here are some of my nerdy interests: <br/><br/>
                    <a href="https://archidekt.com/search/decks?owner=Gmoney7896&ownerexact=false" target="_blank">Magic the Gathering</a> 
                    <br/><a href="/interests/dnd">Dnd</a>
                    <br/><a href="/interests/funkos">Funko Pops</a>
                    <br/>Legos
                    <br/><a href="https://letterboxd.com/tarterbruh/films/" target="_blank">Movies</a>
                    <br/>Shows
                    <br/>Video Games
                    <br/><a href="/interests/records">Vinyl Records</a>
                    <br/><a href="https://github.com/Gchollett" target="_blank">Coding</a>
                    <br/>Game Design
            </p>
        </>
    );
};

export default Interests