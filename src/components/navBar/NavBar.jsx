import logo from "../../assets/icons/servv-logo-dk.jpg";
import logoMb from "../../assets/icons/servv-logo-mb.jpg";
import hamburger from "../../assets/icons/hamburger-menu.svg";
import "./NavBar.css";

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
        <li>Home</li>
        <li>About</li>
        <li>For you</li>
        <li>Support</li>
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
