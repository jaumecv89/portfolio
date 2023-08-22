import { useState } from "react"
import { FaLinkedinIn } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"
import {
	MdOutlineKeyboardArrowLeft,
	MdOutlineKeyboardArrowRight,
} from "react-icons/md"
import "./ExperienceHistoryElement.scss"

interface ExperienceHistoryElementProps {
    name: string
    date: string
    position: string
    url: string
    linkedin: string
    text: string[]
}

const WorkHistoryElement: React.FC<ExperienceHistoryElementProps> = (props) => {
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
                    {props.name}
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
                        {props.text.map((line, key) => {
                            return <li key={key}>{line}</li>
                        })}
                    </>
                </div>
                <div
                    className="experience-element__column-3__links"
                    style={!descriptionOpened ? { display: "none" } : {}}
                >
                    <a href={props.linkedin} target="_blank" rel="noreferrer">
                        <FaLinkedinIn />
                    </a>
                    <a href={props.url} target="_blank" rel="noreferrer">
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

export default WorkHistoryElement
