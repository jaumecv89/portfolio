import { Twirl as Hamburger } from "hamburger-react"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-scroll"
import { MenuItems } from "../../constants/MenuItems"
import MobileNav from "../MobileNav/MobileNav"
import "./Nav.scss"

const Nav = () => {
    const burgerMenuRef = useRef<HTMLDivElement>(null)
    const [toggle, setToggle] = useState(false)
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop
        scrolled > window.innerHeight - 50
            ? setVisible(true)
            : setVisible(false)
    }

    window.addEventListener("scroll", toggleVisible)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
        setToggle(false)
    }

    useEffect(() => {
        toggle
            ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflow = "unset")
    }, [toggle])

    return (
        <div
            className="nav"
            style={
                visible
                    ? {
                          backgroundColor: "#06091880",
                          backdropFilter: "blur(12px)",
                          borderBottom: "0.5px solid rgb(46 54 79/1)",
                      }
                    : {}
            }
        >
            {toggle && (
                <MobileNav
                    setToggle={setToggle}
                    burgerMenuRef={burgerMenuRef}
                />
            )}
            <div className="nav__container">
                <div className="nav__container--menu">
                    <Link to={MenuItems[0].path} smooth={true}>
                        {MenuItems[0].title}
                    </Link>
                    <Link to={MenuItems[1].path} smooth={true}>
                        {MenuItems[1].title}
                    </Link>
                    <Link to={MenuItems[2].path} smooth={true}>
                        {MenuItems[2].title}
                    </Link>
                </div>
                <div className="nav__container--logo">
                    <a
                        onClick={scrollToTop}
                        className="nav__container--logo__link"
                    >
                        <span>Jaume</span>
                        <span>Campderros</span>
                    </a>
                </div>
                <div className="nav__container--contact">
                    <Link
                        to="contact"
                        smooth={true}
                        className="nav__container--contact__link"
                    >
                        Hit me up
                    </Link>
                </div>
                <div className="nav__container--burger" ref={burgerMenuRef}>
                    <Hamburger
                        toggled={toggle}
                        toggle={setToggle}
                        color="#ffff"
                        duration={0.5}
                        aria-label="Menu"
                    />
                </div>
            </div>
        </div>
    )
}

export default Nav
