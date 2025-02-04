import aboutImg from "../../assets/images/about_image.jpg"
import TitleElement from "../../components/title-element/TitleElement"
import { Titles } from "../../constants/titles"
import "./About.scss"

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__content">
        <img
          src={aboutImg}
          alt="Myself, Jaume, at George Town, Malaysia"
          className="about__image"
        />
        <div className="about__text-container">
          <div className="about__text-wrapper">
            <div className="about__text-content">
              <TitleElement
                title={Titles.about.title}
                subtitle={Titles.about.subtitle}
              />
              <p>
                👋 Hello! I'm Jaume, a <strong>Frontend Engineer</strong> with
                over <strong>5 years of experience</strong>, specializing in{" "}
                <strong>React, TypeScript, and modern web technologies</strong>.
                I focus on building{" "}
                <strong>high-performance, scalable, and accessible</strong> web
                applications.
              </p>
              <p>
                I earned my{" "}
                <strong>Bachelor's degree in Computer Science</strong> from the{" "}
                <a
                  href="https://www.ub.edu/web/portal/en/"
                  target="_blank"
                  rel="noreferrer"
                  className="about__link"
                >
                  University of Barcelona
                </a>
                , where I built a strong foundation in software engineering and
                UI development.
              </p>
              <p>
                Most recently, I worked as a <strong>Frontend Engineer</strong>{" "}
                at{" "}
                <a
                  href="https://www.quantion.com/en/"
                  target="_blank"
                  rel="noreferrer"
                  className="about__link"
                >
                  Quantion
                </a>
                , contributing to projects for{" "}
                <a
                  href="https://www.lufthansa.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="about__link"
                >
                  Lufthansa Airlines
                </a>
                . I developed <strong>React</strong> applications, optimized
                performance, and ensured maintainable code with{" "}
                <strong>TypeScript, testing, and CI/CD automation</strong>.
              </p>
              <p>
                Previously, at{" "}
                <a
                  href="https://www.gi-de.com/en/"
                  target="_blank"
                  rel="noreferrer"
                  className="about__link"
                >
                  Giesecke+Devrient
                </a>
                , I worked with <strong>Angular, and TypeScript</strong>,
                improving UI performance and implementing{" "}
                <strong>testing strategies</strong> to ensure stability.
              </p>
              <p>
                I'm passionate about{" "}
                <strong>
                  modern UI design, best practices, and building scalable
                  applications
                </strong>
                . Have a look at my portfolio, and let's create something
                exceptional together! 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
