import { PropsWithChildren } from "react"


const Projects = ({children} : PropsWithChildren) => {
    return (
        <div id="projects" className="projects-container">
            <h1>Projects</h1>
            <p className="projects-description">These are my personal/school projects to display my skills.</p>
            <div className="projects-housing">
                {children}
            </div>
        </div>
    )
}

export default Projects