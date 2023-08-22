import logo from "../../assets/Images/jlogo.png"
import { MenuItems } from "../../constants/MenuItems"
import "./Footer.scss"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__container">
                <img src={logo} alt="Jaume Campderrós" />
                <div className="footer__container--content">
                    <ul>
                        {MenuItems.map((item) => (
                            <li className={item.className} key={item.key}>
                                <a href={item.path}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                    <span>Jaume Campderrós © 2022</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
