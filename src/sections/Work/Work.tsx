import ProjectList from "../../components/project-list/ProjectList"
import TitleElement from "../../components/title-element/TitleElement"
import { Titles } from "../../constants/titles"
import "./Work.scss"

const Work = () => {
  return (
    <section id="work" className="work">
      <div className="work__container">
        <TitleElement
          title={Titles.work.title}
          subtitle={Titles.work.subtitle}
        />
        <ProjectList />
      </div>
    </section>
  )
}

export default Work
