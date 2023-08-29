export interface IJob {
    company: string
    date: string
    position: string
    websiteUrl: string
    description: string
    technologies: string[]
}

export interface IJobs {
    jobs: IJob[]
}
