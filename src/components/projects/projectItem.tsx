import { PropsWithChildren } from "react";

const ProjectItem = ({title,text,children} : PropsWithChildren<{title:String,text:String}>) => {
    return(
    <div className="project-container">
        <h2>{title}</h2>
        <div className="project-housing">
            <p className="project-description">{text}</p>
            {children}
        </div>
    </div>
    )
}

export default ProjectItem