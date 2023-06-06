import { FunctionComponent, PropsWithChildren } from "react";

const Roladex: FunctionComponent<PropsWithChildren> = ({children}) => {
    return (
        <div className="roladex">
            {children}
        </div>
    )
}

export const RoladexItem: FunctionComponent<PropsWithChildren> = ({children}) => {
    return (
        <div className="roladex-item">
            {children}
        </div>
    )
}

export default Roladex