import React, { useEffect, useRef, useState } from "react"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { VscClose } from "react-icons/vsc"
import { TechStack } from "../../constants/TechStack"
import { IProject } from "../../types/Project"
import "./ProjectFilter.scss"

interface ProjectFilterProps {
    projects: IProject[]
    setFilteredProjects: React.Dispatch<React.SetStateAction<IProject[]>>
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({
    projects,
    setFilteredProjects,
}) => {
    const dropdownRef = useRef<HTMLDivElement>(null)

    const techStack: string[] = Object.keys(TechStack)
    const [techStackSelect, setTechStackSelect] = useState<string[]>(techStack)
    const [techStackFilter, setTechStackFilter] = useState<string[]>([])
    const [techListOpen, setTechListOpen] = useState(false)

    const resetFilters = () => {
        setTechStackSelect(techStack)
        setTechStackFilter([])
        setFilteredProjects(projects)
    }

    const handleTechStackFilter = (selectedTech: string) => {
        if (!techStackFilter.includes(selectedTech)) {
            setTechStackFilter((prevFilter) => [...prevFilter, selectedTech])
            setTechStackSelect((prevSelect) =>
                prevSelect.filter((tech) => tech !== selectedTech)
            )
        } else {
            setTechStackFilter((prevFilter) =>
                prevFilter.filter((tech) => tech !== selectedTech)
            )
            setTechStackSelect((prevSelect) => [...prevSelect, selectedTech])
        }
        setTechListOpen(false)
    }

    const removeTechFilter = (techToRemove: string) => {
        setTechStackFilter((prevFilter) =>
            prevFilter.filter((tech) => tech !== techToRemove)
        )
        setTechStackSelect((prevSelect) => [...prevSelect, techToRemove])
    }

    const handleOutsideClick = (event: MouseEvent) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
        ) {
            setTechListOpen(false)
        }
    }

    useEffect(() => {
        const filtered = projects.filter(
            (project) =>
                techStackFilter.length === 0 ||
                techStackFilter.every((tech) =>
                    project.techStack.includes(
                        TechStack[tech].name.replace(" ", "")
                    )
                )
        )
        setFilteredProjects(filtered)
    }, [techStackFilter])

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick)
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick)
        }
    }, [])

    return (
        <div className="project-filter">
            <div
                className="project-filter__button"
                onClick={resetFilters}
                style={{ opacity: techStackFilter.length === 0 ? "1" : "" }}
            >
                All projects
            </div>
            {techStackSelect.length > 0 && (
                <div className="project-filter__select" ref={dropdownRef}>
                    <div
                        className="project-filter__button"
                        onClick={() => setTechListOpen(!techListOpen)}
                        style={{ opacity: techListOpen ? "1" : "" }}
                    >
                        Filter by technology
                        {techListOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </div>
                    {techListOpen && (
                        <div className="project-filter__select--list">
                            {techStackSelect.sort().map((tech) => (
                                <span
                                    key={TechStack[tech].name}
                                    onClick={() => handleTechStackFilter(tech)}
                                >
                                    <img src={TechStack[tech].icon} />
                                    {TechStack[tech].name}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            )}
            {techStackFilter.map((tech) => (
                <div
                    className="project-filter__button"
                    key={tech}
                    onClick={() => removeTechFilter(tech)}
                >
                    <img src={TechStack[tech].icon} />
                    {TechStack[tech].name}
                    <VscClose />
                </div>
            ))}
        </div>
    )
}

export default ProjectFilter
