import { useEffect, useRef } from "react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { Link } from "react-scroll"
import { MenuItems } from "../../constants/menuItems"
import { SocialMedia } from "../../constants/socialMedia"
import "./MobileNav.scss"

type MobileNavProps = {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>
  burgerMenuRef: React.RefObject<HTMLDivElement>
}

const MobileNav = ({ setToggle, burgerMenuRef }: MobileNavProps) => {
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const escFunction = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setToggle(false)
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false)
    return () => {
      document.removeEventListener("keydown", escFunction, false)
    }
  }, [])

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (
        mobileMenuRef.current &&
        burgerMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !burgerMenuRef.current.contains(event.target as Node)
      ) {
        setToggle(false)
      }
    }

    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, [burgerMenuRef, setToggle])

  return (
    <>
      <div className="mobile-nav__overlay" />
      <div className="mobile-nav__navigation" ref={mobileMenuRef}>
        <ul className="mobile-nav__menu">
          {MenuItems.map((item) => (
            <li className="mobile-nav__menu-item" key={item.key}>
              <Link
                to={item.path}
                smooth={true}
                onClick={() => setToggle(false)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <hr />
        <div className="mobile-nav__social">
          Social media
          <div className="mobile-nav__social-icons">
            <a href={SocialMedia.linkedin} onClick={() => setToggle(false)}>
              <FaLinkedinIn />
            </a>
            <a href={SocialMedia.github} onClick={() => setToggle(false)}>
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileNav
