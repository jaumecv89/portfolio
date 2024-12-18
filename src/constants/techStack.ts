import angular from "../assets/Icons/icon-angular.svg"
import azuredevops from "../assets/Icons/icon-azuredevops.svg"
import bitbucket from "../assets/Icons/icon-bitbucket.svg"
import confluenceicon from "../assets/Icons/icon-confluence.svg"
import css from "../assets/Icons/icon-css.svg"
import docker from "../assets/Icons/icon-docker.svg"
import dotnet from "../assets/Icons/icon-dotnet.svg"
import firebase from "../assets/Icons/icon-firebase.svg"
import git from "../assets/Icons/icon-git.svg"
import github from "../assets/Icons/icon-github.svg"
import graphql from "../assets/Icons/icon-graphql.svg"
import html from "../assets/Icons/icon-html.svg"
import jasmineicon from "../assets/Icons/icon-jasmine.svg"
import java from "../assets/Icons/icon-java.svg"
import javascript from "../assets/Icons/icon-javascript.svg"
import jenkinsicon from "../assets/Icons/icon-jenkins.svg"
import jesticon from "../assets/Icons/icon-jest.svg"
import jiraicon from "../assets/Icons/icon-jira.svg"
import juniticon from "../assets/Icons/icon-junit.svg"
import karmaicon from "../assets/Icons/icon-karma.svg"
import mysql from "../assets/Icons/icon-mysql.svg"
import netlify from "../assets/Icons/icon-netlify.svg"
import nextjs from "../assets/Icons/icon-nextjs.svg"
import react from "../assets/Icons/icon-react.svg"
import sass from "../assets/Icons/icon-sass.svg"
import shadcn from "../assets/Icons/icon-shadcn.svg"
import sonarqubeicon from "../assets/Icons/icon-sonarqube.svg"
import springboot from "../assets/Icons/icon-spring.svg"
import supabase from "../assets/Icons/icon-supabase.svg"
import tailwind from "../assets/Icons/icon-tailwind.svg"
import typescript from "../assets/Icons/icon-typescript.svg"
import vercelicon from "../assets/Icons/icon-vercel.svg"
import vite from "../assets/Icons/icon-vite.svg"
import vitest from "../assets/Icons/icon-vitest.svg"
import wordpress from "../assets/Icons/icon-wordpress.svg"
import zustand from "../assets/Icons/icon-zustand.svg"
import aem from "../assets/Icons/icon-aem.svg"
import storybook from "../assets/Icons/icon-storybook.svg"
import bootstrap from "../assets/Icons/icon-bootstrap.svg"

const TechStack = {
  REACT: { name: "React", icon: react },
  TYPESCRIPT: { name: "TypeScript", icon: typescript },
  TAILWINDCSS: { name: "Tailwind CSS", icon: tailwind },
  VITE: { name: "Vite", icon: vite },
  VITEST: { name: "Vitest", icon: vitest },
  GRAPHQL: { name: "GraphQL", icon: graphql },
  WORDPRESS: { name: "WordPress", icon: wordpress },
  NEXTJS: { name: "NextJS", icon: nextjs },
  HTML: { name: "HTML", icon: html },
  CSS: { name: "CSS", icon: css },
  JAVASCRIPT: { name: "JavaScript", icon: javascript },
  MYSQL: { name: "MySQL", icon: mysql },
  FIREBASE: { name: "Firebase", icon: firebase },
  GITHUB: { name: "GitHub", icon: github },
  GIT: { name: "Git", icon: git },
  BITBUCKET: { name: "Bitbucket", icon: bitbucket },
  ANGULAR: { name: "Angular", icon: angular },
  DOCKER: { name: "Docker", icon: docker },
  JAVA: { name: "Java", icon: java },
  JEST: { name: "Jest", icon: jesticon },
  NETLIFY: { name: "Netlify", icon: netlify },
  SPRINGBOOT: { name: "Spring Boot", icon: springboot },
  AZUREDEVOPS: { name: "Azure DevOps", icon: azuredevops },
  DOTNET: { name: ".NET", icon: dotnet },
  SCSS: { name: "SCSS", icon: sass },
  JASMINE: { name: "Jasmine", icon: jasmineicon },
  JENKINS: { name: "Jenkins", icon: jenkinsicon },
  JIRA: { name: "Jira", icon: jiraicon },
  JUNIT: { name: "JUnit", icon: juniticon },
  KARMA: { name: "Karma", icon: karmaicon },
  SONARQUBE: { name: "SonarQube", icon: sonarqubeicon },
  VERCEL: { name: "Vercel", icon: vercelicon },
  CONFLUENCE: { name: "Confluence", icon: confluenceicon },
  SUPABASE: { name: "Supabase", icon: supabase },
  SHADCN: { name: "Shadcn", icon: shadcn },
  ZUSTAND: { name: "Zustand", icon: zustand },
  AEM: { name: "AEM", icon: aem },
  STORYBOOK: { name: "Storybook", icon: storybook },
  BOOTSRAP: { name: "Bootstrap", icon: bootstrap },
} as const

export default TechStack
