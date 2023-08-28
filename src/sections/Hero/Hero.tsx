import { Link } from "react-scroll"
import "./Hero.scss"

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero__container">
                <div className="hero__container--content">
                    <h1>I'm a software engineer and web developer</h1>
                    <p>
                        I love to code and design <span>solid</span> and <span>scalable</span> products
                        for a great user experience.
                    </p>
                    <Link
                        to="work"
                        smooth={true}
                        className="hero__container--content__button"
                    >
                        Check out my work
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Hero
