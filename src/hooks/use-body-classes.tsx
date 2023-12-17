import { useEffect } from "react"

const useBodyClasses = (c : string) => {
    useEffect(() => {
        if(c === ""){document.documentElement.setAttribute("data-them","light")}
        else {document.documentElement.setAttribute("data-them",c);}
    })
}

export default useBodyClasses