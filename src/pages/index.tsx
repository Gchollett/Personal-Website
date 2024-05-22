import { NextPage } from "next";
import Gallary from "../components/gallary";
import Home from "../components/home";
import Interests from "../components/interests";
import Business from "../components/business";

const Index: NextPage = () => {
    return (
        <>
            <Home/>
            <Gallary/>
            <Interests/>
            <Business/>
        </>
    );
};

export default Index