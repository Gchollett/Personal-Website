import { getURL } from "next/dist/shared/lib/utils"
import Link from "next/link"
import { useEffect, useState } from "react"


const Title = () => {
    const [currentPage, setCurrentPage] = useState("/")
    useEffect(() => setCurrentPage(() => getURL()))
    return (
        <Link href="/" className="title">{currentPage === "/" ? <u>Garrett's Website</u> : "Garrett's Website"}</Link>
    )
}

export default Title