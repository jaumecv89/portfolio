import { FaGithub } from "react-icons/fa"
import { LuExternalLink } from "react-icons/lu"
import { TechStack } from "../../constants/TechStack"
import { IProject } from "../../types/Project"
import "./ProjectElement.scss"

const ProjectElement: React.FC<IProject> = (props) => {
    return (
        <div className="project-element">
            <img src={props.image.url} alt={props.title} />
            <div className="project-element__content">
                <a
                    href={props.websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-element__content--title"
                >
                    {props.title}
                </a>
                <p className="project-element__content--text">{props.text}</p>
                <div className="project-element__content--tech">
                    {props.techStack.map((item, index) => (
                        <div
                            key={index}
                            className="project-element__content--tech__item"
                        >
                            <img
                                src={
                                    (TechStack as any)[item.toLowerCase()]?.icon
                                }
                                alt={
                                    (TechStack as any)[item.toLowerCase()]?.name
                                }
                            />
                            {(TechStack as any)[item.toLowerCase()]?.name}
                        </div>
                    ))}
                </div>
                <div className="project-element__content--links">
                    {props.githubUrl && (
                        <a
                            href={props.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaGithub />
                            Github
                        </a>
                    )}
                    <a href={props.websiteUrl} target="_blank" rel="noreferrer">
                        <LuExternalLink />
                        Website
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectElement
