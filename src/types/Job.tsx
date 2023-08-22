export interface IJob {
    company: string
    date: string
    position: string
    websiteUrl: string
    linkedinUrl: string
    text: string[]
}

export interface IJobs {
    jobs: IJob[]
}
