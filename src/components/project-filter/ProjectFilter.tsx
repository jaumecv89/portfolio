import React, { useEffect, useRef, useState } from "react"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { VscClose } from "react-icons/vsc"
import { Projects } from "../../types/project"
import "./ProjectFilter.scss"

type ProjectFilterProps = {
  projects: Projects
  setFilteredProjects: React.Dispatch<React.SetStateAction<Projects>>
}

const ProjectFilter = ({
  projects,
  setFilteredProjects,
}: ProjectFilterProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null)

  const techStack: Tech[] = []
  const [techStackSelect, setTechStackSelect] = useState<Tech[]>(techStack)
  const [techStackFilter, setTechStackFilter] = useState<Tech[]>([])
  const [techListOpen, setTechListOpen] = useState(false)

  const resetFilters = () => {
    setTechStackSelect(techStack)
    setTechStackFilter([])
    setFilteredProjects(projects)
  }

  const handleTechStackFilter = (selectedTech: Tech) => {
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

  const removeTechFilter = (techToRemove: Tech) => {
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
    projects.filter((project) => {
      project.techStack.forEach((tech) => {
        if (!techStack.includes(tech)) {
          techStack.push(tech)
        }
      })
    })
  }, [techStack])

  useEffect(() => {
    const filtered = projects.filter(
      (project) =>
        techStackFilter.length === 0 ||
        techStackFilter.every((tech) => project.techStack.includes(tech))
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
      {techStackFilter.length > 0 && (
        <div className="project-filter__button" onClick={resetFilters}>
          Clear filters
          <VscClose />
        </div>
      )}
      {techStackSelect.length > 0 && (
        <div className="project-filter__select" ref={dropdownRef}>
          <div className="project-filter__button-dropdown">
            <div
              className="project-filter__button"
              onClick={() => setTechListOpen(!techListOpen)}
              style={{ opacity: techListOpen ? "1" : "" }}
            >
              Filter by technology
              {techListOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
          </div>
          {techListOpen && (
            <div className="project-filter__select--list">
              {techStackSelect.sort().map((tech) => (
                <span
                  key={tech.name}
                  onClick={() => handleTechStackFilter(tech)}
                >
                  <img src={tech.icon} />
                  {tech.name}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
      {techStackFilter.map((tech) => (
        <div
          className="project-filter__button"
          key={tech.name}
          onClick={() => removeTechFilter(tech)}
        >
          <img src={tech.icon} />
          {tech.name}
          <VscClose />
        </div>
      ))}
    </div>
  )
}

export default ProjectFilter
