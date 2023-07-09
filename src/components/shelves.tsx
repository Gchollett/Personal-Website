import { FunctionComponent, PropsWithChildren, ReactNode } from "react";

type Props = {
    src : string,
    children? : ReactNode
}

const Shelf : FunctionComponent<PropsWithChildren> = ({children}) => {
    return (
        <div className="shelf">
            {children}
        </div>
    )
}

export const ShelfItem : FunctionComponent<Props> = (prop) => {
    return (
        <div className="shelfItem">
            <img src={prop.src}></img>
        </div>
    )
}

export default Shelf