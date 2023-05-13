import { useEffect } from "react"

const useBodyClasses = (c : string) => {
    useEffect(() => {
        if(c === ""){document.body.classList.remove("darkMode")}
        else {document.body.classList.add(c);}
    })
}

export default useBodyClasses