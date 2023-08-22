import { useEffect, useState } from "react"
import "./ProjectElement.scss"

interface ProjectElementProps {
    position: boolean
    links: {
        icon: JSX.Element
        link: string
    }[]
    imageUrl: string
    title: string
    text: string
    techStack: string[]
    index: number
}

const ProjectElement: React.FC<ProjectElementProps> = ({
    position,
    links,
    imageUrl,
    title,
    text,
    techStack,
    index,
}) => {
    const [pos, setPos] = useState("")
    const justifyContent = position ? "left" : "right"
    const textAlign = position ? "right" : "left"
    const alignItems = position ? "flex-end" : "flex-start"

    useEffect(() => {
        position ? setPos("right") : setPos("left")
    }, [position])

    return (
        <div className="project-element" style={{ justifyContent }}>
            <div className="project-element__image">
                <a href={links[0].link} target="_blank" rel="noreferrer">
                    <img src={imageUrl} alt={title} />
                    <div className="project-element__image-overlay" />
                </a>
            </div>
            <div
                className="project-element__content"
                style={{ textAlign, alignItems, [pos]: 0 }}
            >
                {index === 0 && (
                    <span className="project-element__content-subtitle">
                        Latest Project
                    </span>
                )}
                <a
                    href={links[0].link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-element__content-title"
                >
                    {title}
                </a>
                <span className="project-element__content-text">{text}</span>
                <div className="project-element__content-tech">
                    {techStack.map((tech, index) => (
                        <span key={index}>{tech}</span>
                    ))}
                </div>
                <div className="project-element__content-links">
                    {links.map((link, index) => (
                        <a
                            href={link.link}
                            target="_blank"
                            rel="noreferrer"
                            key={index}
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectElement
