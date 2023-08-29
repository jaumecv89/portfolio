import { useCallback, useEffect, useRef } from "react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { Link } from "react-scroll"
import { MenuItems } from "../../constants/MenuItems"
import { SocialMedia } from "../../constants/SocialMedia"
import "./MobileNav.scss"

interface MobileNavProps {
    setToggle: React.Dispatch<React.SetStateAction<boolean>>
    burgerMenuRef: React.RefObject<HTMLDivElement>
}

const MobileNav: React.FC<MobileNavProps> = ({ setToggle, burgerMenuRef }) => {
    const mobileMenuRef = useRef<HTMLDivElement>(null)

    const escFunction = useCallback((event: any) => {
        if (event.key === "Escape") {
            setToggle(false)
        }
    }, [])

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false)
        return () => {
            document.removeEventListener("keydown", escFunction, false)
        }
    }, [])

    useEffect(() => {
        const listener = (event: any) => {
            if (
                mobileMenuRef.current &&
                burgerMenuRef.current &&
                !mobileMenuRef.current.contains(event.target) &&
                !burgerMenuRef.current.contains(event.target)
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
    }, [])

    return (
        <>
            <div className="nav__mobile--overlay" />
            <div className="nav__mobile--navigation" ref={mobileMenuRef}>
                {MenuItems.map((item) => (
                    <li className={item.className} key={item.key}>
                        <Link
                            to={item.path}
                            smooth={true}
                            onClick={() => setToggle(false)}
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
                <hr />
                <div className="nav__mobile--navigation__social">
                    Social media
                    <div className="nav__mobile--navigation__social--icons">
                        <a
                            href={SocialMedia.linkedin}
                            onClick={() => setToggle(false)}
                        >
                            <FaLinkedinIn />
                        </a>
                        <a
                            href={SocialMedia.github}
                            onClick={() => setToggle(false)}
                        >
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileNav
