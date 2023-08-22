import { useState } from "react"
import { FaLinkedinIn } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"
import {
    MdOutlineKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight,
} from "react-icons/md"
import { IJob } from "../../types/Job"
import "./ExperienceElement.scss"

const ExperienceElement: React.FC<IJob> = (props) => {
    const [isHovered, setHovered] = useState(false)
    const [descriptionOpened, setDescriptionOpened] = useState(false)

    const handleClickEvent = () => {
        setDescriptionOpened((current) => !current)
    }

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
                        ? { backgroundColor: "rgba(136, 136, 136, 0.075)" }
                        : {}
                }
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={handleClickEvent}
            >
                <span className="experience-element__column-3__date">
                    {props.date}
                </span>
                <span className="experience-element__column-3__title">
                    {props.company}
                </span>
                <span className="experience-element__column-3__subtitle">
                    {props.position}
                </span>
                <div
                    className={
                        descriptionOpened
                            ? "experience-element__column-3__text experience-element__column-3__text-opened"
                            : "experience-element__column-3__text"
                    }
                >
                    <>
                        {props.text.map((line, key) => (
                            <li key={key}>- {line}</li>
                        ))}
                    </>
                </div>
                <div
                    className="experience-element__column-3__links"
                    style={!descriptionOpened ? { display: "none" } : {}}
                >
                    <a
                        href={props.linkedinUrl}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaLinkedinIn />
                    </a>
                    <a href={props.websiteUrl} target="_blank" rel="noreferrer">
                        <FiExternalLink />
                    </a>
                </div>
                {descriptionOpened ? (
                    <span className="experience-element__column-3__button">
                        <MdOutlineKeyboardArrowLeft />
                        Show Less
                    </span>
                ) : (
                    <span className="experience-element__column-3__button">
                        Show More
                        <MdOutlineKeyboardArrowRight />
                    </span>
                )}
            </div>
        </div>
    )
}

export default ExperienceElement
