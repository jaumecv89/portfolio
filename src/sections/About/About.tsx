import { FaAngular, FaJava, FaReact, FaSass, FaWordpress } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import { SiSpringboot, SiTypescript } from "react-icons/si"
import TitleElement from "../../components/TitleElement/TitleElement"
import { Titles } from "../../constants/Titles"
import "./About.scss"

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about__container">
                <TitleElement
                    title={Titles.about.title}
                    subtitle={Titles.about.subtitle}
                />
                <div className="about__container--content">
                    <div className="about__container--content__text">
                        <p>
                            Hello! I'm Jaume, a full stack developer and
                            software engineer who recently focused in front-end
                            development. My mission is to translate
                            user-focussed designs into websites or applications
                            that run blazing fast.
                        </p>
                        <p>
                            My interest in web development started back in 2020
                            when I finished my university degree in the{" "}
                            <a
                                href="https://www.ub.edu/web/portal/en/"
                                target="_blank"
                                rel="noreferrer"
                                className="about__link"
                            >
                                University of Barcelona
                            </a>
                            .
                        </p>
                        <p>
                            I'm currently working as a software engineer at{" "}
                            <a
                                href="https://www.quantion.com/en/"
                                target="_blank"
                                rel="noreferrer"
                                className="about__link"
                            >
                                Quantion
                            </a>{" "}
                            where I help develop different customer oriented
                            solutions with my web development experience.
                        </p>
                        <p>
                            Prior to Quantion, I worked as a software engineer
                            at{" "}
                            <a
                                href="https://www.gi-de.com/en/"
                                target="_blank"
                                rel="noreferrer"
                                className="about__link"
                            >
                                G+D Mobile Security
                            </a>{" "}
                            where I helped to develop full-stack RESTful
                            microservices. Take a closer look at my{" "}
                            <a href="#experience" className="about__link">
                                working history
                            </a>
                            .
                        </p>
                        <p>
                            In a past life, I was a system and network
                            administrator for several years, where I was working
                            with Windows and Linux servers, networking, IP
                            telephony and solving day to day problems.
                        </p>
                    </div>
                    <div className="about__container--content__image" />
                </div>
            </div>
        </section>
    )
}

export default About
