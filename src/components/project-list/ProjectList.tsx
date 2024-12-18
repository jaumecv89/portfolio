import { useState } from "react"
import projects from "../../constants/projects"
import { Projects } from "../../types/project"
import ProjectElement from "../project-element/ProjectElement"
import ProjectFilter from "../project-filter/ProjectFilter"
import "./ProjectList.scss"

const ProjectList = () => {
  const [filteredProjects, setFilteredProjects] = useState<Projects>(projects)

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
              imageUrl={project.imageUrl}
              text={project.text}
              techStack={project.techStack}
              websiteUrl={project.websiteUrl}
              githubUrl={project.githubUrl}
              isFeatured={index === 0}
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
