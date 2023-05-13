import fullMoon from '../resources/Moon.png'
import darkMoon from '../resources/DarkMoon.png'
import { useEffect } from 'react';
import { StaticImageData } from 'next/image';

const useDarkMode = () => {
    useEffect(() => {
        if(localStorage.getItem("darkMode") === null){
            var darkMode = {
                moon: fullMoon,
                style: ""
            }
            localStorage.setItem("darkMode",JSON.stringify(darkMode))
        }   
    })
}


export const changeDarkMode = (current: {moon: StaticImageData,style: string}) => {
    var ret = {
        moon: fullMoon,
        style: ""
    }
    if(current.style == ""){
        ret.moon = darkMoon
        ret.style = "darkMode"
    }
    console.log(ret)
    localStorage.setItem("darkMode",JSON.stringify(ret))
}

export const getLocal = () => {
    const local = localStorage.getItem("darkMode")
    if( local === null){
        return JSON.stringify({
            moon: fullMoon,
            style: ""
        })
    }else{
        return local
    }
}

export default useDarkMode