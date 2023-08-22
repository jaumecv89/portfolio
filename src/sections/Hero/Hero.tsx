import { Link } from "react-scroll"
import heroImage from "../../assets/Images/heroimage.jpg"
import "./Hero.scss"

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__container">
                <div className="hero__container--content">
                    <h3>
                        {`👋 Hey, I'm `}
                        <span>Jaume</span>!
                    </h3>
                    <h1>I'm a software engineer and web developer</h1>
                    <p>
                        I love to code and design <span>solid</span> and{" "}
                        <span>scalable</span> products for a great user
                        experience.
                    </p>
                    <Link to="#work" smooth={true} className="hero__container--content__button">
                        Check out my work
                    </Link>
                </div>
                <div className="hero__container--image">
                    <img src={heroImage} alt="Jaume Campderros" />
                </div>
            </div>
        </section>
    )
}

export default Hero
