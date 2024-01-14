import router from "next/router"
import { useEffect, useState } from "react";
import { getURL } from "next/dist/shared/lib/utils";

const Menu = () => {
    const [currentPage, setCurrentPage] = useState("/")
    useEffect(() => setCurrentPage(() => getURL()))
    return (
        <div className="menu">
            <button className={"Buttons"} onClick={() => router.push("/interests")}>{currentPage === "/interests" ? <u>Interests</u> : "Interests"}</button>
            <button className={"Buttons"} onClick={() => router.push("/business")}>{currentPage === "/business" ? <u>Business</u> : "Business"}</button>
            <button className={"Buttons"} onClick={() => router.push("/gallary")}>{currentPage === "/gallary" ? <u>Gallary</u> : "Gallary"}</button>
            {/* <button className="Buttons" onClick={() => router.push("/projects")}>{currentPage === "/projects"?<u>Projects</u>:"Projects"}</button> */}
        </div>
    )
}

export default Menu