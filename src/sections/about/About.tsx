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
                👋 Hello! I'm Jaume, a full-stack software engineer with over{" "}
                <strong>6 years of experience</strong>, specializing in{" "}
                <strong>front-end development</strong>. I focus on transforming
                user-centric designs into high-performance, scalable
                applications that deliver seamless user experiences.
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
                , where I developed a strong foundation in software engineering
                principles.
              </p>
              <p>
                Most recently, I worked as a <strong>Software Engineer</strong>{" "}
                at{" "}
                <a
                  href="https://www.quantion.com/en/"
                  target="_blank"
                  rel="noreferrer"
                  className="about__link"
                >
                  Quantion
                </a>
                , where I contributed to several projects for{" "}
                <a
                  href="https://www.lufthansa.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="about__link"
                >
                  Lufthansa Airlines
                </a>
                , including developing a new project from scratch. I
                collaborated closely with international teams, solving design,
                architecture, and development challenges while ensuring
                high-quality, maintainable code using{" "}
                <strong>React, TypeScript, and SCSS</strong>. I also optimized
                workflows with tools like <strong>SonarQube</strong> and{" "}
                <strong>Azure DevOps pipelines</strong> to streamline
                development and deployment.
              </p>
              <p>
                Before that, I contributed to the development of full-stack
                RESTful microservices and intuitive client-focused products at{" "}
                <a
                  href="https://www.gi-de.com/en/"
                  target="_blank"
                  rel="noreferrer"
                  className="about__link"
                >
                  Giesecke+Devrient Mobile Security
                </a>
                .
              </p>
              <p>
                Have a look at my portfolio and let's create something amazing
                together! 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
