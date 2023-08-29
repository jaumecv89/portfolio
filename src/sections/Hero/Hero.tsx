import { useEffect, useRef } from "react"
import { Link } from "react-scroll"
import "./Hero.scss"

function getMousePos(evt: MouseEvent) {
    return {
        x: evt.pageX,
        y: evt.pageY,
    }
}

const Hero = () => {
    const followMouseTextRef = useRef<HTMLHeadingElement | null>(null)
    const followMouseBackgroundRef = useRef<HTMLDivElement | null>(null)

    const moveMouse = (evt: MouseEvent) => {
        const pos = getMousePos(evt)
        if (followMouseTextRef.current) {
            followMouseTextRef.current.style.backgroundPosition = `${pos.x}px ${pos.y}px`
        }
        if (followMouseBackgroundRef.current) {
            followMouseBackgroundRef.current.style.backgroundPosition = `calc(50% + ${
                pos.x / 100
            }px) calc(50% + ${pos.y / 100}px)`
        }
    }

    useEffect(() => {
        if (window.innerWidth > 960) {
            document.addEventListener("mousemove", moveMouse)
        } else {
            if (followMouseBackgroundRef.current) {
                followMouseBackgroundRef.current.style.backgroundPosition =
                    "center"
            }
        }
        return () => {
            document.removeEventListener("mousemove", moveMouse)
        }
    }, [])

    return (
        <section id="hero" className="hero">
            <div className="hero__background" ref={followMouseBackgroundRef} />
            <div className="hero__container">
                <div className="hero__container--content">
                    <h1 ref={followMouseTextRef}>
                        Pioneering the Future with Lines of Code
                    </h1>
                    <p>
                        I'm a software engineer who's passionate about{" "}
                        <span>designing</span> and <span>developing</span>{" "}
                        products for the utmost seamless user experience.
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
