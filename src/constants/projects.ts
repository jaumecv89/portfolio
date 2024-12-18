import elenaIsaImage from "../assets/images/elenaisa.jpg"
import jaumeCampderrosImage from "../assets/images/jaumecampderros.jpg"
import packerNomadsImage from "../assets/images/packernomads.jpg"
import protaHouseImage from "../assets/images/protahouse.jpg"
import { Projects } from "../types/project"
import TechStack from "./techStack"

const projects: Projects = [
  {
    title: "Packer Nomads",
    imageUrl: packerNomadsImage,
    text: "A personal project designed to simplify travel planning and packing. This app allows users to create, organize, and manage trips with ease, generating tailored packing lists for a stress-free experience. With its solid foundation, it has the potential to grow into a comprehensive travel tool for users worldwide.",
    techStack: [
      TechStack.NEXTJS,
      TechStack.TYPESCRIPT,
      TechStack.TAILWINDCSS,
      TechStack.SHADCN,
      TechStack.ZUSTAND,
      TechStack.SUPABASE,
      TechStack.GITHUB,
      TechStack.VERCEL,
    ],
    websiteUrl: "https://packernomads.com",
  },
  {
    title: "Elena Isa - Yoga Instructor",
    imageUrl: elenaIsaImage,
    text: "A client-requested personal website designed to showcase services, classes, and events. The platform provides a professional and welcoming space for clients to explore offerings and connect with the instructor. With a focus on clarity and user experience, it reflects the client’s unique brand and helps grow their online presence.",
    techStack: [
      TechStack.REACT,
      TechStack.TYPESCRIPT,
      TechStack.TAILWINDCSS,
      TechStack.VITE,
      TechStack.VITEST,
      TechStack.GRAPHQL,
      TechStack.GITHUB,
      TechStack.NETLIFY,
    ],
    websiteUrl: "https://elenaisa.com",
  },
  {
    title: "Personal Portfolio",
    imageUrl: jaumeCampderrosImage,
    text: "A thoughtfully crafted showcase of my professional journey, projects, and achievements. Designed to provide recruiters and developers with a seamless, engaging experience while exploring my work, it reflects my dedication to clean design and attention to detail.",
    techStack: [
      TechStack.REACT,
      TechStack.TYPESCRIPT,
      TechStack.SCSS,
      TechStack.VITE,
      TechStack.VITEST,
      TechStack.GITHUB,
      TechStack.NETLIFY,
    ],
    websiteUrl: "https://jaumecampderros.com",
  },
  {
    title: "Prota House - Real Estate",
    imageUrl: protaHouseImage,
    text: "A complete website redesign for a real estate client, aimed at modernizing their digital presence and improving property browsing. Focused on user accessibility and a polished experience, the platform helps clients showcase their listings professionally and securely.",
    techStack: [TechStack.WORDPRESS, TechStack.CSS],
    websiteUrl: "https://www.protahouse.com",
  },
]

export default projects
