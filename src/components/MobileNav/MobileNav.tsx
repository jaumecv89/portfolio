import { useCallback, useEffect, useRef } from "react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { Link } from "react-scroll"
import { MenuItems } from "../../constants/MenuItems"
import { SocialMedia } from "../../constants/SocialMedia"
import "./MobileNav.scss"

interface MobileNavProps {
    setToggle: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileNav: React.FC<MobileNavProps> = ({ setToggle }) => {
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
                !mobileMenuRef.current ||
                mobileMenuRef.current.contains(event.target)
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
    }, [mobileMenuRef])

    return (
        <>
            <div className="nav__mobile--overlay" ref={mobileMenuRef} />
            <div className="nav__mobile--navigation">
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
