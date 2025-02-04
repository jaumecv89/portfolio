import { Jobs } from "../types/job"
import TechStack from "./techStack"

const jobs: Jobs = [
  {
    company: "Quantion",
    date: "May, 2022",
    position: "Frontend Engineer",
    website: "https://www.quantion.com",
    description:
      "Worked on several frontend projects for Lufthansa Airlines, including a loyalty program platform and a chatbot assistant for customer support. Took part in a new project from the ground up, making key decisions in frontend design, architecture, and development. Built microfrontends and managed them in Adobe Experience Manager (AEM) for scalability and maintainability. Kept close communication with other teams to ensure everything ran smoothly and aligned with project goals.",
    technologies: [
      TechStack.REACT,
      TechStack.TYPESCRIPT,
      TechStack.JAVASCRIPT,
      TechStack.SCSS,
      TechStack.BOOTSRAP,
      TechStack.VITE,
      TechStack.VITEST,
      TechStack.STORYBOOK,
      TechStack.AEM,
      TechStack.SONARQUBE,
      TechStack.DOCKER,
      TechStack.GIT,
      TechStack.AZUREDEVOPS,
      TechStack.JIRA,
    ],
  },
  {
    company: "Giesecke+Devrient",
    date: "May, 2020",
    position: "Frontend Engineer",
    website: "https://www.gi-de.com",
    description:
      "Built and maintained internal web applications with a focus on creating intuitive and responsive user interfaces. Translated Figma designs into pixel-perfect web apps using Angular, TypeScript, and Angular Material. Collaborated with teams from different areas to ensure the frontend aligned with user needs and technical requirements. Stepped up as Scrum Master when needed to keep the team organized and projects on track.",
    technologies: [
      TechStack.ANGULAR,
      TechStack.TYPESCRIPT,
      TechStack.JAVASCRIPT,
      TechStack.CSS,
      TechStack.JASMINE,
      TechStack.JENKINS,
      TechStack.SONARQUBE,
      TechStack.DOCKER,
      TechStack.GIT,
      TechStack.BITBUCKET,
      TechStack.JIRA,
    ],
  },
  {
    company: "VIP District",
    date: "Sep, 2019",
    position: "Frontend Developer",
    website: "https://vipdistrict.com",
    description:
      "Developed new features and improved the frontend for one of the top employee engagement platforms. Focused on creating a visually appealing and user-friendly interface using React, JavaScript, and SCSS. Collaborated closely with the team to implement solutions that balanced user needs and technical requirements.",
    technologies: [
      TechStack.REACT,
      TechStack.TYPESCRIPT,
      TechStack.JAVASCRIPT,
      TechStack.CSS,
      TechStack.JEST,
      TechStack.JENKINS,
      TechStack.SONARQUBE,
      TechStack.DOCKER,
      TechStack.GIT,
    ],
  },
]

export default jobs
