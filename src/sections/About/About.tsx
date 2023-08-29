import { Link } from "react-scroll"
import aboutImg from "../../assets/Images/about_image.jpg"
import TitleElement from "../../components/TitleElement/TitleElement"
import { Titles } from "../../constants/Titles"
import "./About.scss"

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about__wrapper">
                <img
                    src={aboutImg}
                    alt="Myself, Jaume, at George Town, Malaysia"
                    className="about__wrapper--image"
                />
                <div className="about__wrapper--container">
                    <div className="about__wrapper--container__wrapper">
                        <div className="about__wrapper--container__wrapper--content">
                            <TitleElement
                                title={Titles.about.title}
                                subtitle={Titles.about.subtitle}
                            />
                            <p>
                                Hello! I'm Jaume. A full stack developer and
                                software engineer with expertise primarily
                                focused in front-end development. My life's
                                mission is to transform user-focused designs
                                into websites or applications that run blazing
                                fast.
                            </p>
                            <p>
                                I completed my university degree at the{" "}
                                <a
                                    href="https://www.ub.edu/web/portal/en/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="about__link"
                                >
                                    University of Barcelona
                                </a>{" "}
                                in 2020. Currently, I'm working as a software
                                engineer at{" "}
                                <a
                                    href="https://www.quantion.com/en/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="about__link"
                                >
                                    Quantion
                                </a>
                                , contributing my web development experience to
                                craft various customer-centric solutions.
                            </p>
                            <p>
                                Before joining Quantion, I served as a software
                                engineer at{" "}
                                <a
                                    href="https://www.gi-de.com/en/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="about__link"
                                >
                                    G+D Mobile Security
                                </a>
                                , contributing to the development of full-stack
                                RESTful microservices and client-oriented
                                products.
                            </p>
                            <p>
                                Previously, I held the role of a system and
                                network administrator for several years. During
                                this time, I managed Windows and Linux servers,
                                handled networking tasks, oversaw IP telephony,
                                and adeptly resolved day-to-day challenges to
                                ensure smooth operations.
                            </p>
                            <p>
                                Have a closer look at my{" "}
                                <Link to="experience" smooth={true}>
                                    working history
                                </Link>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
