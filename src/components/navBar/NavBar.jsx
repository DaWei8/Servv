import logo from "../../assets/icons/servv-logo-dk.jpg";
import logoMb from "../../assets/icons/servv-logo-mb.jpg";
import hamburger from "../../assets/icons/hamburger-menu.svg";
import "./NavBar.css";
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="navbar">
    <div className="navbar__container">
      <div className="logo__container">
        <img src={logo} alt="Servv Logo" />
      </div>
      <div className="logo__container-mb">
        <img src={logoMb} alt="Servv Logo" />
      </div>
      <ul className="navbar__menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/for">For you</Link></li>
        <li><Link to="/support">Support</Link></li>
      </ul>
      <div className="profile__button">
        <button>D
        <div className="profile__state inactive"></div>
        </button>
      </div>
      <div className="navbar__hamburger__menu" >
        <img src={hamburger} alt="hamburger menu icon" />
      </div>
    </div>
  </div>
);

export default NavBar;
