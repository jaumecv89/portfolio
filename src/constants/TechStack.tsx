import graphql from "../assets/Icons/icon-graphql.svg"
import nextjs from "../assets/Icons/icon-nextjs.svg"
import react from "../assets/Icons/icon-react.svg"
import sass from "../assets/Icons/icon-sass.svg"
import tailwind from "../assets/Icons/icon-tailwind.svg"
import typescript from "../assets/Icons/icon-typescript.svg"
import vite from "../assets/Icons/icon-vite.svg"
import vitest from "../assets/Icons/icon-vitest.svg"
import wordpress from "../assets/Icons/icon-wordpress.svg"

interface Tech {
    name: string
    icon: string
}

export const TechStack: Record<string, Tech> = {
    react: {
        name: "React",
        icon: react,
    },
    typescript: {
        name: "TypeScript",
        icon: typescript,
    },
    tailwindcss: {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    vite: {
        name: "Vite",
        icon: vite,
    },
    vitest: {
        name: "Vitest",
        icon: vitest,
    },
    graphql: {
        name: "GraphQL",
        icon: graphql,
    },
    sass: {
        name: "Sass",
        icon: sass,
    },
    wordpress: {
        name: "WordPress",
        icon: wordpress,
    },
    nextjs: {
        name: "NextJS",
        icon: nextjs,
    },
}
