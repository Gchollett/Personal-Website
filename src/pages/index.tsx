import { NextPage } from "next";
import { styles } from "../styles";
import Link from "next/link";
import { useRouter } from "next/router";

const Home: NextPage = () => {
    const router = useRouter();
    return (
        <div style={styles.main}>
            <header>
                <Link href="/" style={{color:"inherit",textDecoration:"inherit"}}>Garrett's Website</Link>
            </header>
            <h1 style={{textAlign: "center"}}>Main Page</h1>
            <p style={{textAlign:"center"}}>
                <strong>Welcome to my Website!</strong> <br/>
                My Name is Garrett James Bridger Chollett. <br/>
                I'm currently a student at Trinity University, double majoring in computer science and mathematics.
            </p>
            <button onClick={() => router.push("/interests")}>Interests</button>
            <br/>
            <Link href="https://github.com/Gchollett" target="_blank">gitHub</Link>
        </div>
    );
};

export default Home