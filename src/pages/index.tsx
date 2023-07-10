import { NextPage } from "next";
import firstDunk from '../resources/gallary/FountainDunk1.png'

const Home: NextPage = () => {
    return (
        <>
            <h1>Main Page</h1>
            <p>
                <strong>Welcome to my Website!</strong> <br/>
                My name is Garrett James Bridger Chollett. <br/>
                I'm currently a student at Trinity University, double majoring in computer science and mathematics.        
            </p>
            <figure>
                <div className="container">
                    <img src={firstDunk.src}/>
                </div>
                <figcaption><strong>&uarr;</strong></figcaption>
                <figcaption>That is me!</figcaption>
            </figure>
        </>
    );
};

export default Home