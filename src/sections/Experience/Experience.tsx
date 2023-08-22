import ExperienceList from "../../components/ExperienceList/ExperienceList"
import TitleElement from "../../components/TitleElement/TitleElement"
import { Titles } from "../../constants/Titles"
import "./Experience.scss"

const Experience = () => {
    return (
        <section id="experience" className="experience">
            <div className="experience__container">
                <TitleElement
                    title={Titles.experience.title}
                    subtitle={Titles.experience.subtitle}
                />
                <ExperienceList />
            </div>
        </section>
    )
}

export default Experience
