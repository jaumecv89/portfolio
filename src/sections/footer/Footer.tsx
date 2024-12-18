import { Link } from "react-scroll"
import logo from "../../assets/images/jlogo.png"
import { MenuItems } from "../../constants/menuItems"
import "./Footer.scss"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="footer">
      <div className="footer__content">
        <img src={logo} alt="Jaume Campderros Logo" className="footer__logo" />
        <div className="footer__menu">
          {MenuItems.map((item) => (
            <Link
              to={item.path}
              smooth={true}
              key={item.path}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <hr className="footer__divider" />
        <div className="footer__copyright">© {currentYear} Jaume Campderros</div>
      </div>
    </footer>
  )
}

export default Footer
