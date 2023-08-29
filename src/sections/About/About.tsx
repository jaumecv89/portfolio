import { Link } from "react-scroll"
import TitleElement from "../../components/TitleElement/TitleElement"
import { Titles } from "../../constants/Titles"
import aboutImg from "../../assets/Images/about_image.jpg"
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
                                Hello! I'm Jaume, a full stack developer and
                                software engineer who recently focused in
                                front-end development. My mission is to
                                translate user-focussed designs into websites or
                                applications that run blazing fast.
                            </p>
                            <p>
                                My interest in web development started back in
                                2020 when I finished my university degree in the{" "}
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
                                Prior to Quantion, I worked as a software
                                engineer at{" "}
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
                                <Link to="experience" smooth={true}>
                                    working history
                                </Link>
                                .
                            </p>
                            <p>
                                In a past life, I was a system and network
                                administrator for several years, where I was
                                working with Windows and Linux servers,
                                networking, IP telephony and solving day to day
                                problems.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
