import ProjectList from "../../components/ProjectList/ProjectList"
import TitleElement from "../../components/TitleElement/TitleElement"
import { Titles } from "../../constants/Titles"
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
