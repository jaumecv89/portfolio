import { Jobs } from "../types/job"
import TechStack from "./techStack"

const jobs: Jobs = [
  {
    company: "Quantion",
    date: "May, 2022",
    position: "Software Engineer",
    website: "https://www.quantion.com",
    description:
      "Worked on several projects for Lufthansa Airlines, including a loyalty program platform and a chatbot assistant for customer support. Took part in a new project from the ground up, making key decisions in design, architecture, and development. Kept close communication with other teams to ensure everything ran smoothly and aligned with project goals.",
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
      TechStack.JAVA,
      TechStack.SPRINGBOOT,
      TechStack.JUNIT,
      TechStack.DOTNET,
      TechStack.JENKINS,
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
    position: "Software Engineer",
    website: "https://www.gi-de.com",
    description:
      "Built internal web applications that helped meet client needs efficiently. Worked across both frontend and backend tasks to make sure everything looked good and worked well. Collaborated with teams from different areas to keep the workflow smooth and the results on point. Stepped up as Scrum Master when needed to keep the team organized and projects on track.",
    technologies: [
      TechStack.ANGULAR,
      TechStack.TYPESCRIPT,
      TechStack.JAVASCRIPT,
      TechStack.CSS,
      TechStack.BOOTSRAP,
      TechStack.JASMINE,
      TechStack.JAVA,
      TechStack.SPRINGBOOT,
      TechStack.JUNIT,
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
    date: "Sep, 2018",
    position: "Frontend Developer",
    website: "https://vipdistrict.com",
    description:
      "Developed new features and improved the frontend for one of the top employee engagement platforms. Focused on making everything easy to use and visually appealing, while also helping out with some backend tasks. Worked closely with the team to find solutions that balanced user needs and technical requirements.",
    technologies: [
      TechStack.REACT,
      TechStack.JAVASCRIPT,
      TechStack.SCSS,
      TechStack.JEST,
      TechStack.SPRINGBOOT,
      TechStack.JUNIT,
      TechStack.MYSQL,
      TechStack.JENKINS,
      TechStack.SONARQUBE,
      TechStack.DOCKER,
      TechStack.GIT,
    ],
  },
]

export default jobs
