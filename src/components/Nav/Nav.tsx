import { Twirl as Hamburger } from "hamburger-react"
import { useEffect, useState } from "react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import logo from "../../assets/Images/jlogo.png"
import { MenuItems } from "../../constants/MenuItems"
import { SocialMedia } from "../../constants/SocialMedia"
import MobileNav from "../MobileNav/MobileNav"
import "./Nav.scss"

const Nav = () => {
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        toggle
            ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflow = "unset")
    }, [toggle])

    return (
        <div className="nav">
            {toggle && <MobileNav setToggle={setToggle} />}
            <div className="nav__container">
                <div className="nav__container--logo">
                    <img src={logo} alt="Jaume Campderrós" />
                    <span>Jaume Campderrós</span>
                </div>
                <div className="nav__container--menu">
                    <ul className="nav__container--menu__left">
                        {MenuItems.map((item) => (
                            <li key={item.key}>
                                <a href={item.path}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="nav__container--menu__right">
                        <a href={SocialMedia.linkedin}>
                            <FaLinkedinIn />
                        </a>
                        <a href={SocialMedia.github}>
                            <FaGithub />
                        </a>
                    </div>
                </div>
                <div className="nav__container--burger">
                    <Hamburger
                        toggled={toggle}
                        toggle={setToggle}
                        color="#ffff"
                        duration={0.5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Nav
