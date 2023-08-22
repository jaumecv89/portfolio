import { gql, useQuery } from "@apollo/client"
import { IJobs } from "../types/Job"
import { IProjects } from "../types/Project"

export const GET_JOBS_QUERY = gql`
    {
        jobs {
            company
            date
            position
            websiteUrl
            linkedinUrl
            text
        }
    }
`

export const GET_PROJECTS_QUERY = gql`
    {
        projects {
            title
            text
            techStack
            image {
                url
            }
            websiteUrl
            githubUrl
        }
    }
`

export const getAllJobs = () => {
    const { data, loading, error } = useQuery<IJobs>(GET_JOBS_QUERY)
    return { data, loading, error }
}

export const getAllProjects = () => {
    const { data, loading, error } = useQuery<IProjects>(GET_PROJECTS_QUERY)
    return { data, loading, error }
}
