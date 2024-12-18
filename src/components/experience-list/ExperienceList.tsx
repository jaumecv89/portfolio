import jobs from "../../constants/jobs"
import ExperienceElement from "../experience-element/ExperienceElement"
import "./ExperienceList.scss"

const ExperienceList = () => {
  return (
    <div className="experience-list">
      {jobs.map((item, index) => (
        <ExperienceElement
          key={index}
          company={item.company}
          date={item.date}
          position={item.position}
          description={item.description}
          technologies={item.technologies}
          website={item.website}
        />
      ))}
    </div>
  )
}

export default ExperienceList
