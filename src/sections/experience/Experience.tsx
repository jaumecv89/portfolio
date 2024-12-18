import { AiOutlineArrowRight } from "react-icons/ai"
import resume from "../../assets/documents/resume.pdf"
import ExperienceList from "../../components/experience-list/ExperienceList"
import TitleElement from "../../components/title-element/TitleElement"
import { Titles } from "../../constants/titles"
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
        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          className="experience__container--resume"
        >
          <span>View full résumé</span>
          <AiOutlineArrowRight />
        </a>
      </div>
    </section>
  )
}

export default Experience
