import { IProject } from "../../types/Project"
import "./ProjectElement.scss"

const ProjectElement: React.FC<IProject> = (props) => {
    return (
        <div className="project-element">
            <div className="project-element__image">
                <a href={props.websiteUrl} target="_blank" rel="noreferrer">
                    <img src={props.image.url} alt={props.title} />
                    <div className="project-element__image-overlay" />
                </a>
            </div>
            <div className="project-element__content">
                <a
                    href={props.websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-element__content-title"
                >
                    {props.title}
                </a>
                <span className="project-element__content-text">
                    {props.text}
                </span>
                <div className="project-element__content-tech">
                    {props.techStack.map((tech, index) => (
                        <span key={index}>{tech}</span>
                    ))}
                </div>
                <div className="project-element__content-links">
                    <a
                        href={props.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                    ></a>
                </div>
            </div>
        </div>
    )
}

export default ProjectElement
