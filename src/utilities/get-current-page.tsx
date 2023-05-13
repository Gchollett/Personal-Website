import { useRouter } from "next/router";

const getCurrentPage = (currentPage:string) => {
    switch(currentPage) {
        case "/interests":
            return [<u>Interests</u>,"Business","Gallary","Garrett's Website"]
            case "/business":
                return ["Interests",<u>Business</u>,"Gallary","Garrett's Website"]
            case "/gallary":
            return ["Interests","Business",<u>Gallary</u>,"Garrett's Website"]
        default:
            return ["Interests","Business","Gallary",<u>Garrett's Website</u>]
    }
}

export default getCurrentPage