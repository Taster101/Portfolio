import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFileClipboard, faFileImage, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import LogoZgm from '../../assets/images/logo-color.svg'
// import LogoZ from '../../assets/images/logo-no-background.svg'

const Navbar = () => (
<div className= "nav-bar">
    <Link className="logo" to='/'>
        {/* <img src={ LogoZgm } alt='logo' />
        <img src={ LogoZ } alt='logo' /> */}
    </Link>
    <nav>
        <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="project-link" to="/projects">
            <FontAwesomeIcon icon={faFileClipboard} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="resume-link" to="/resume">
            <FontAwesomeIcon icon={faFileImage} color="#4d4d4e" />
        </NavLink>
    </nav>
    <ul>
        <li>
            <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/zack-miller-813042186/'>
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" className="anchor-icon" />
            </a>
        </li>
        <li>
            <a target="_blank" rel='noreferrer' href='https://github.com/ZmCoder2'>
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" className="anchor-icon" />
            </a>
        </li>
    </ul>
</div>
)


export default Navbar;