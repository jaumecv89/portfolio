import { useState } from "react"
import { TechStack } from "../../constants/TechStack"
import { IJob } from "../../types/Job"
import "./ExperienceElement.scss"

const ExperienceElement: React.FC<IJob> = (props) => {
    const [isHovered, setHovered] = useState(false)

    return (
        <div className="experience-element">
            <div
                className="experience-element__column-1"
                style={isHovered ? { color: "#ffffff" } : {}}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {props.date}
            </div>
            <div className="experience-element__column-2">
                <span
                    style={isHovered ? { border: "2px solid #ffffff" } : {}}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                />
            </div>
            <div
                className="experience-element__column-3"
                style={
                    isHovered
                        ? {
                              backgroundColor: "rgba(136, 136, 136, 0.075)",
                              border: "1px solid rgb(56, 66, 95)",
                          }
                        : {}
                }
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <span className="experience-element__column-3__date">
                    {props.date}
                </span>
                <a
                    href={props.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="experience-element__column-3__title"
                >
                    {props.position} · {props.company}
                </a>
                <p>{props.description}</p>
                {props.technologies.length > 0 && (
                    <ul>
                        {props.technologies.map((tech) => {
                            const techData =
                                TechStack[tech.toLowerCase().replace(" ", "")]
                            return (
                                <li key={tech}>
                                    <img src={techData.icon} />
                                    {techData.name}
                                </li>
                            )
                        })}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default ExperienceElement
