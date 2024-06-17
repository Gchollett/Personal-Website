import { NextPage } from "next";
import Gallary from "../components/gallary";
import Home from "../components/home";
import Interests from "../components/interests";
import Business from "../components/business";
import Projects from "../components/projects/projects";
import ProjectItem from "../components/projects/projectItem";
import LinkPreview from "../components/link-preview";

const Index: NextPage = () => {
    return (
        <>
            <Home/>
            <Gallary/>
            <Interests/>
            <Projects>
                <ProjectItem title="Personal Website" text="As you scroll throught this website, it might interest you to know that it has been completely handmade using React.js.">
                    <LinkPreview url="https://github.com/Gchollett/Personal-Website"/>
                </ProjectItem>
                <ProjectItem title="Token Buddy" text="This was my second personal web app project using React.js. Token Buddy is a token assistant for the trading card game Magic the Gathering.">
                    <LinkPreview url="https://tokenbuddy.netlify.app/"/>
                </ProjectItem>
                <ProjectItem title="Token Buddy Backend" text="This is my backend service for Token buddy that was later replaced by Scryfall's API due to me not wanting to pay :)">
                    <LinkPreview url="https://github.com/Gchollett/TokenBuddyBackend"/>
                </ProjectItem>
                <ProjectItem title="Spinify" text="This was a class project which took was a combination of Spotify and a Record player.">
                    <LinkPreview url="https://github.com/Gchollett/Spinify"/>
                </ProjectItem>
                <ProjectItem title="League of Legends win Predictor" text="This was another class project for my Big Data and Machine Learning class. My teamate and I built a model that is able to predict E-sports Leage of Legends wins based on the first 15 minutes of gameplay.">
                    <LinkPreview url="https://colab.research.google.com/drive/1VdJtJpapqoDjQOO_9eRf3ZoObm9YIUR_"/>
                </ProjectItem>
            </Projects>
            <Business/>
        </>
    );
};

export default Index