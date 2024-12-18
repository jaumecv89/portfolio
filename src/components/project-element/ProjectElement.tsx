import { FiExternalLink } from "react-icons/fi"
import { Project } from "../../types/project"
import "./ProjectElement.scss"

type ProjectElementProps = Project & {
  isFeatured?: boolean
}

const ProjectElement = (props: ProjectElementProps) => {
  return (
    <div className="project-card">
      {props.isFeatured && <div className="project-card__badge">Featured</div>}
      <img
        src={props.imageUrl}
        alt={props.title}
        className="project-card__image"
      />
      <div className="project-card__content">
        <h3 className="project-card__title">{props.title}</h3>
        <p className="project-card__text">{props.text}</p>
        <div className="project-card__tech-stack">
          {props.techStack.map((tech, index) => (
            <div key={index} className="project-card__tech">
              <img
                src={tech.icon}
                alt={tech.name}
                className="project-card__tech-icon"
              />
              <span className="project-card__tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
        <div className="project-card__links">
          <a
            href={props.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link"
          >
            <FiExternalLink /> Visit website
          </a>
          {props.githubUrl && (
            <a
              href={props.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
            >
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectElement
