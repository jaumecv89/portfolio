import { useState } from "react"
import { MdExpandMore } from "react-icons/md"
import { getAllJobs } from "../../graphql/Queries"
import ExperienceElement from "../ExperienceElement/ExperienceElement"
import "./ExperienceList.scss"

const ExperienceList = () => {
    let { loading, error, data } = getAllJobs()
    const jobs = data?.jobs.length ? data.jobs : []

    const experiencePerRow = 3
    const [next, setNext] = useState(experiencePerRow)

    const handleMoreExperience = () => {
        setNext(next + experiencePerRow)
    }

    if (loading)
        return <p className="text-center">Loading experience list...</p>

    if (error)
        return <p className="text-center">Error loading the experience list.</p>

    return (
        <div className="experience-list">
            {jobs
                ?.slice(0, next)
                ?.map((item, index) => (
                    <ExperienceElement
                        key={index}
                        company={item.company}
                        date={item.date}
                        position={item.position}
                        text={item.text}
                        websiteUrl={item.websiteUrl}
                        linkedinUrl={item.linkedinUrl}
                    />
                ))}
            {next < jobs?.length && (
                <button
                    className="experience-list__button"
                    onClick={handleMoreExperience}
                >
                    Load More <MdExpandMore />
                </button>
            )}
        </div>
    )
}

export default ExperienceList
