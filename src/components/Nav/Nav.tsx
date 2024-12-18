import { Twirl as Hamburger } from "hamburger-react"
import { useEffect, useRef, useState } from "react"
import { Link, scroller } from "react-scroll"
import { MenuItems } from "../../constants/menuItems"
import MobileNav from "../mobile-nav/MobileNav"
import "./Nav.scss"

const Nav = () => {
  const burgerMenuRef = useRef<HTMLDivElement>(null)
  const [toggle, setToggle] = useState(false)
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    scrolled > 150 ? setVisible(true) : setVisible(false)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
    setToggle(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible)
    return () => {
      window.removeEventListener("scroll", toggleVisible)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = toggle ? "hidden" : "unset"
  }, [toggle])

  return (
    <div className={`nav-container ${visible && "nav-container--visible"}`}>
      <nav className="nav">
        {toggle && (
          <MobileNav setToggle={setToggle} burgerMenuRef={burgerMenuRef} />
        )}
        <div className="nav__menu">
          {MenuItems.map((item, index) => (
            <Link key={index} to={item.path} smooth={true}>
              {item.title}
            </Link>
          ))}
        </div>
        <button onClick={scrollToTop} className="nav__logo">
          <strong>Jaume</strong> Campderros
        </button>
        <button
          onClick={() =>
            scroller.scrollTo("contact", {
              smooth: true,
            })
          }
          className="nav__contact"
        >
          Hit me up
        </button>
        <div className="nav__burger" ref={burgerMenuRef}>
          <Hamburger
            toggled={toggle}
            toggle={setToggle}
            color="#ffff"
            duration={0.5}
          />
        </div>
      </nav>
    </div>
  )
}

export default Nav
