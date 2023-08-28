import { Link } from "react-scroll"
import logo from "../../assets/Images/jlogo.png"
import { MenuItems } from "../../constants/MenuItems"
import "./Footer.scss"

const Footer = () => {
    return (
        <section id="footer" className="footer">
            <div className="footer__container">
                <img src={logo} alt="Jaume Campderrós" />
                <div className="footer__container--menu">
                    {MenuItems.map((item) => (
                        <Link to={item.path} smooth={true} key={item.path}>
                            {item.title}
                        </Link>
                    ))}
                </div>
                <hr />
                <div className="footer__container--copyright">
                    © 2023 Jaume Campderros
                </div>
            </div>
        </section>
    )
}

export default Footer
