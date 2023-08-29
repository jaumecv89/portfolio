import { getAllJobs } from "../../graphql/Queries"
import ExperienceElement from "../ExperienceElement/ExperienceElement"
import "./ExperienceList.scss"

const ExperienceList = () => {
    let { loading, error, data } = getAllJobs()
    const jobs = data?.jobs.length ? data.jobs : []

    if (loading)
        return <p className="text-center">Loading experience list...</p>

    if (error)
        return <p className="text-center">Error loading the experience list.</p>

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
                    websiteUrl={item.websiteUrl}
                />
            ))}
        </div>
    )
}

export default ExperienceList
