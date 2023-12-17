
const getCurrentPage = (currentPage:string) => {
    switch(true) {
        case currentPage.includes("/interests"):
            return [<u>Interests</u>,"Business","Gallary","Garrett's Website"]
        case currentPage.includes("/business"):
            return ["Interests",<u>Business</u>,"Gallary","Garrett's Website"]
        case currentPage.includes("/gallary"):
            return ["Interests","Business",<u>Gallary</u>,"Garrett's Website"]
        default:
            return ["Interests","Business","Gallary",<u>Garrett's Website</u>]
    }
}

export default getCurrentPage