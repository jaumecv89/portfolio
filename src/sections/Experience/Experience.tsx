import { useState } from "react"
import { MdExpandMore } from "react-icons/md"
import ExperienceHistoryElement from "../../components/ExperienceHistoryElement/ExperienceHistoryElement"
import TitleElement from "../../components/TitleElement/TitleElement"
import { ExperienceList } from "../../constants/ExperienceList"
import { Titles } from "../../constants/Titles"
import "./Experience.scss"

const Experience = () => {
    const experiencePerRow = 3
    const [next, setNext] = useState(experiencePerRow)

    const handleMoreExperience = () => {
        setNext(next + experiencePerRow)
    }

    return (
        <div id="experience" className="experience">
            <div className="experience__container">
                <TitleElement
                    title={Titles.experience.title}
                    subtitle={Titles.experience.subtitle}
                />
                {ExperienceList?.slice(0, next)?.map((item, index) => {
                    return (
                        <ExperienceHistoryElement
                            key={index}
                            name={item.name}
                            date={item.date}
                            position={item.position}
                            text={item.text}
                            url={item.url}
                            linkedin={item.linkedin}
                        />
                    )
                })}
                {next < ExperienceList?.length && (
                    <button
                        className="experience__container--load-more-button"
                        onClick={handleMoreExperience}
                    >
                        Load More <MdExpandMore />
                    </button>
                )}
            </div>
        </div>
    )
}

export default Experience
