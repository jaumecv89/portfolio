export interface IProject {
    title: string
    image: {
        url: string
    }
    text: string
    techStack: string[]
    websiteUrl: string
    githubUrl?: string
}

export interface IProjects {
    projects: IProject[]
}
