import angular from "../assets/Icons/icon-angular.svg"
import azuredevops from "../assets/Icons/icon-azuredevops.svg"
import bitbucket from "../assets/Icons/icon-bitbucket.svg"
import css from "../assets/Icons/icon-css.svg"
import docker from "../assets/Icons/icon-docker.svg"
import dotnet from "../assets/Icons/icon-dotnet.svg"
import firebase from "../assets/Icons/icon-firebase.svg"
import git from "../assets/Icons/icon-git.svg"
import github from "../assets/Icons/icon-github.svg"
import graphql from "../assets/Icons/icon-graphql.svg"
import html from "../assets/Icons/icon-html.svg"
import java from "../assets/Icons/icon-java.svg"
import javascript from "../assets/Icons/icon-javascript.svg"
import jesticon from "../assets/Icons/icon-jest.svg"
import mysql from "../assets/Icons/icon-mysql.svg"
import netlify from "../assets/Icons/icon-netlify.svg"
import nextjs from "../assets/Icons/icon-nextjs.svg"
import react from "../assets/Icons/icon-react.svg"
import sass from "../assets/Icons/icon-sass.svg"
import springboot from "../assets/Icons/icon-spring.svg"
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
    wordpress: {
        name: "WordPress",
        icon: wordpress,
    },
    nextjs: {
        name: "NextJS",
        icon: nextjs,
    },
    html: {
        name: "HTML",
        icon: html,
    },
    css: {
        name: "CSS",
        icon: css,
    },
    javascript: {
        name: "JavaScript",
        icon: javascript,
    },
    mysql: {
        name: "MySQL",
        icon: mysql,
    },
    firebase: {
        name: "Firebase",
        icon: firebase,
    },
    github: {
        name: "GitHub",
        icon: github,
    },
    git: {
        name: "Git",
        icon: git,
    },
    bitbucket: {
        name: "Bitbucket",
        icon: bitbucket,
    },
    angular: {
        name: "Angular",
        icon: angular,
    },
    docker: {
        name: "Docker",
        icon: docker,
    },
    java: {
        name: "Java",
        icon: java,
    },
    jest: {
        name: "Jest",
        icon: jesticon,
    },
    netlify: {
        name: "Netlify",
        icon: netlify,
    },
    springboot: {
        name: "Spring Boot",
        icon: springboot,
    },
    azuredevops: {
        name: "Azure DevOps",
        icon: azuredevops,
    },
    dotnet: {
        name: ".NET",
        icon: dotnet,
    },
    scss: {
        name: "SCSS",
        icon: sass,
    },
}
