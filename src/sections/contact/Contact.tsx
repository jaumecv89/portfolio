import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import ContactForm from "../../components/contact-form/ContactForm"
import TitleElement from "../../components/title-element/TitleElement"
import { SocialMedia } from "../../constants/socialMedia"
import { Titles } from "../../constants/titles"
import "./Contact.scss"

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <TitleElement
          title={Titles.contact.title}
          subtitle={Titles.contact.subtitle}
        />
        <div className="contact__container--text">
          I'm always looking for new projects and opportunities, that's why my
          inbox is always open. Whether you have a question or just want to say
          hi, I'll try my best to get back to you!
        </div>
        <ContactForm />
        <div className="contact__container--social">
          <span>You can also contact me through social networks.</span>
          <div className="contact__container--social__icons">
            <a
              href={SocialMedia.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Linkedin"
            >
              <FaLinkedinIn />
            </a>
            <a
              href={SocialMedia.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Github"
            >
              <FaGithub />
            </a>
            <a
              href={SocialMedia.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href={SocialMedia.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
