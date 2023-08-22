import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import FullMatchImg from "../assets/Images/fullmatchtv.jpg";
import ElenaIsaImg from "../assets/Images/elenaisayoga.jpg";
import PortfolioImg from "../assets/Images/portfolio.jpg";
import ProtaHouseImg from "../assets/Images/protahouse.jpg";
import ViajandoConJotaImg from "../assets/Images/viajandoconjota.jpg";

export const Projects = [
	{
		title: "Elena Isa - Yoga teacher",
		imageUrl: ElenaIsaImg,
		text: "This project is dedicated to showcasing Elena Isa's yoga services and providing valuable resources to her students. The website has been designed and built using React, Typescript, Vite, Vitest, and Tailwind CSS, and incorporates various additional features such as animation, smooth scrolling, icons, email functionality, and integration with Hygraph CMS where Elena can easily manage her next yoga events.",
		techStack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Vitest", "GraphQL"],
		links: [
			{
				icon: <FiExternalLink />,
				link: "https://elenaisa.netlify.app/",
			},
			{
				icon: <FaGithub />,
				link: "https://github.com/jaumecv89/elena-isa-yoga",
			},
		],
	},
	{
		title: "Personal Portfolio",
		imageUrl: PortfolioImg,
		text: "This is my personal portfolio, designed and coded by me. This project was made with React an JavaScript. The intention was to learn and practice more about those technologies and to have a place where I can show my personal works.",
		techStack: ["React", "JavaScript", "SCSS"],
		links: [
			{
				icon: <FiExternalLink />,
				link: "https://jaumecampderros.com/",
			},
			{
				icon: <FaGithub />,
				link: "https://github.com/jaumecv89/portfolio",
			},
		],
	},
	{
		title: "Viajando con Jota",
		imageUrl: ViajandoConJotaImg,
		text: "My personal blog where I write all my travel experiences around the world. This blog was made with Wordpress, HTML and CSS and it has been focused to have a perfect SEO optmization.",
		techStack: ["Wordpress", "HTML", "CSS"],
		links: [
			{
				icon: <FiExternalLink />,
				link: "https://viajandoconjota.com/",
			},
		],
	},
	{
		title: "Prota House",
		imageUrl: ProtaHouseImg,
		text: "Project for a well renowned real estate company located in Barcelona, Spain. This work consisted in the re-design of the whole brand and website using Wordpress, migration into a new modern hosting (including the database with all the listings), creation and managing of backups.",
		techStack: ["Wordpress", "HTML", "CSS"],
		links: [
			{
				icon: <FiExternalLink />,
				link: "https://www.protahouse.com/",
			},
		],
	},
	{
		title: "Full Match TV",
		imageUrl: FullMatchImg,
		text: "This personal project was designed to upload and stream on-demand full sport games when they are finished. The website was full developed with Wordpress.",
		techStack: ["Wordpress", "HTML", "CSS"],
		links: [
			{
				icon: <FiExternalLink />,
				link: "http://fullmatchtv.com/",
			},
		],
	},
];
