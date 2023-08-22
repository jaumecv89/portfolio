import ProjectElement from "../../components/ProjectElement/ProjectElement"
import TitleElement from "../../components/TitleElement/TitleElement"
import { Projects } from "../../constants/Projects"
import { Titles } from "../../constants/Titles"
import "./Work.scss"

const Work = () => {
    return (
        <div id="work" className="work">
            <div className="work__container">
                <TitleElement
                    title={Titles.work.title}
                    subtitle={Titles.work.subtitle}
                />
                {Projects.map((project, index) => (
                    <ProjectElement
                        key={index}
                        imageUrl={project.imageUrl}
                        title={project.title}
                        text={project.text}
                        techStack={project.techStack}
                        links={project.links}
                        position={index % 2 === 0}
                        index={index}
                    />
                ))}
            </div>
        </div>
    )
}

export default Work
