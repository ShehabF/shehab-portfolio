import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/s-high-resolution-logo-white-on-transparent-background.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faEnvelope, faFolder, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className="sidebar">
        <Link className="logo" to="/">
            <img src={LogoS} alt="logo" />
            <span className="name">Shehab</span>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink
                exact="true"
                activeclassname="active"
                className="about-link"
                to="/about"
            >
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink
                exact="true"
                activeclassname="active"
                className="contact-link"
                to="/contact"
            >
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            <NavLink
                exact="true"
                activeclassname="active"
                className="portfolio-link"
                to="/portfolio"
            >
                <FontAwesomeIcon icon={faFolder} color="#4d4d4e" />
            </NavLink>
            <NavLink
                exact="true"
                activeclassname="active"
                className="gallery-link"
                to="/gallery"
            >
                <FontAwesomeIcon icon={faCamera} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/shehab-farooqui-a99993171/"
                >
                    <FontAwesomeIcon className='anchor-icon' icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/ShehabF"
                >
                    <FontAwesomeIcon className='anchor-icon' icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar
