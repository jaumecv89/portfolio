import angular from "../assets/icons/icon-angular.svg"
import azuredevops from "../assets/icons/icon-azuredevops.svg"
import bitbucket from "../assets/icons/icon-bitbucket.svg"
import confluenceicon from "../assets/icons/icon-confluence.svg"
import css from "../assets/icons/icon-css.svg"
import docker from "../assets/icons/icon-docker.svg"
import dotnet from "../assets/icons/icon-dotnet.svg"
import firebase from "../assets/icons/icon-firebase.svg"
import git from "../assets/icons/icon-git.svg"
import github from "../assets/icons/icon-github.svg"
import graphql from "../assets/icons/icon-graphql.svg"
import html from "../assets/icons/icon-html.svg"
import jasmineicon from "../assets/icons/icon-jasmine.svg"
import java from "../assets/icons/icon-java.svg"
import javascript from "../assets/icons/icon-javascript.svg"
import jenkinsicon from "../assets/icons/icon-jenkins.svg"
import jesticon from "../assets/icons/icon-jest.svg"
import jiraicon from "../assets/icons/icon-jira.svg"
import juniticon from "../assets/icons/icon-junit.svg"
import karmaicon from "../assets/icons/icon-karma.svg"
import mysql from "../assets/icons/icon-mysql.svg"
import netlify from "../assets/icons/icon-netlify.svg"
import nextjs from "../assets/icons/icon-nextjs.svg"
import react from "../assets/icons/icon-react.svg"
import sass from "../assets/icons/icon-sass.svg"
import shadcn from "../assets/icons/icon-shadcn.svg"
import sonarqubeicon from "../assets/icons/icon-sonarqube.svg"
import springboot from "../assets/icons/icon-spring.svg"
import supabase from "../assets/icons/icon-supabase.svg"
import tailwind from "../assets/icons/icon-tailwind.svg"
import typescript from "../assets/icons/icon-typescript.svg"
import vercelicon from "../assets/icons/icon-vercel.svg"
import vite from "../assets/icons/icon-vite.svg"
import vitest from "../assets/icons/icon-vitest.svg"
import wordpress from "../assets/icons/icon-wordpress.svg"
import zustand from "../assets/icons/icon-zustand.svg"
import aem from "../assets/icons/icon-aem.svg"
import storybook from "../assets/icons/icon-storybook.svg"
import bootstrap from "../assets/icons/icon-bootstrap.svg"

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
