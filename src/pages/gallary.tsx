import { NextPage } from "next";
import { useRouter } from "next/router";

const Gallary: NextPage = () => {
    const router = useRouter();
    return (
        <div>
            <div>
            <h1>Gallary</h1>
            <p>
                This is my Gallary. <br/>
                It's just some pictures of me and some friends that I think best represents me.
            </p>
            </div>
        </div>
    );
};

export default Gallary