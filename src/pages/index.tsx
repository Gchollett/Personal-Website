import { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
    return (
        <div>
            <h1>Main Page</h1>
            <p>
                <strong>Welcome to my Website!</strong> <br/>
                My name is Garrett James Bridger Chollett. <br/>
                I'm currently a student at Trinity University, double majoring in computer science and mathematics.
            </p>
        </div>
    );
};

export default Home