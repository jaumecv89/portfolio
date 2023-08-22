import { getAllProjects } from "../../graphql/Queries"
import ProjectElement from "../ProjectElement/ProjectElement"
import "./ProjectList.scss"

const ProjectList = () => {
    let { loading, error, data } = getAllProjects()
    const projects = data?.projects.length ? data.projects : []

    if (loading) return <p className="text-center">Loading projects list...</p>

    if (error)
        return <p className="text-center">Error loading the projects list.</p>

    return (
        <div className="project-list">
            {projects.map((project, index) => (
                <ProjectElement
                    key={index}
                    title={project.title}
                    image={project.image}
                    text={project.text}
                    techStack={project.techStack}
                    websiteUrl={project.websiteUrl}
                    githubUrl={project.githubUrl}
                />
            ))}
        </div>
    )
}

export default ProjectList
