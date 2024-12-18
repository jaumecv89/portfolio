import { useEffect, useRef } from "react"
import { scroller } from "react-scroll"
import "./Hero.scss"

const Hero = () => {
  const followMouseTextRef = useRef<HTMLHeadingElement | null>(null)
  const followMouseBackgroundRef = useRef<HTMLDivElement | null>(null)

  const getMousePos = (evt: MouseEvent) => {
    return {
      x: evt.pageX,
      y: evt.pageY,
    }
  }

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
    const handleMouseMove = (evt: MouseEvent) => moveMouse(evt)

    if (window.innerWidth > 960) {
      document.addEventListener("mousemove", handleMouseMove)
    } else {
      if (followMouseBackgroundRef.current) {
        followMouseBackgroundRef.current.style.backgroundPosition = "center"
      }
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section id="hero" className="hero">
      <div className="hero__background" ref={followMouseBackgroundRef} />
      <div className="hero__container">
        <div className="hero__content">
          <h1 ref={followMouseTextRef}>
            Shaping Ideas through Code Innovation
          </h1>
          <p>
            I'm a software engineer who's passionate about designing and
            developing products for the utmost seamless user experience.
          </p>
          <button
            onClick={() =>
              scroller.scrollTo("work", {
                smooth: true,
              })
            }
            aria-label="Check out my work"
          >
            Check out my work
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
