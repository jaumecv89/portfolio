import { useEffect, useState } from "react"
import { getAllProjects } from "../../graphql/Queries"
import ProjectElement from "../ProjectElement/ProjectElement"
import ProjectFilter from "../ProjectFilter/ProjectFilter"
import "./ProjectList.scss"

const ProjectList = () => {
    const { loading, error, data } = getAllProjects()
    const projects = data?.projects.length ? data.projects : []

    const [filteredProjects, setFilteredProjects] = useState(projects)

    useEffect(() => {
        setFilteredProjects(projects)
    }, [projects])

    if (loading) return <p className="text-center">Loading projects list...</p>

    if (error)
        return <p className="text-center">Error loading the projects list.</p>

    return (
        <div className="project-list">
            <ProjectFilter
                projects={projects}
                setFilteredProjects={setFilteredProjects}
            />
            <div className="project-list__container">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project, index) => (
                        <ProjectElement
                            key={index}
                            title={project.title}
                            image={project.image}
                            text={project.text}
                            techStack={project.techStack}
                            websiteUrl={project.websiteUrl}
                            githubUrl={project.githubUrl}
                        />
                    ))
                ) : (
                    <p className="project-list__container--error">
                        No projects found with the selected filters.
                    </p>
                )}
            </div>
        </div>
    )
}

export default ProjectList
