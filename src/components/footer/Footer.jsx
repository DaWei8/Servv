import "./Footer.css";
import Logo from "../../assets/icons/servv-logo-dk.svg";
import TwitterIcon from "../../assets/icons/twitter.svg";
import LinkedinIcon from "../../assets/icons/linkedin.svg";

const Footer = () => (
  <div className="footer-section">
    <div className="footer-container">
      <div className="footer-company">
        <div className="footer-company-logo">
          <img src={Logo} alt="company logo" />
        </div>
        <div className="footer-company-description">
          Our platform is designed to be simple and intuitive, making it easy
          for anyone to find the right artisan for their needs.
        </div>
      </div>
      <div className="footer-links">
        <div className="footer-link-section">
          <h3 className="footer-link-section-head">About</h3>
          <ul className="footer-link-item">
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-link-section">
          <h3 className="footer-link-section-head">For Clients</h3>
          <ul className="footer-link-item">
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
          </ul>
        </div>
        <div className="footer-link-section">
          <h3 className="footer-link-section-head">For Workers</h3>
          <ul className="footer-link-item">
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
          </ul>
        </div>

        <div className="footer-link-section">
          <h3 className="footer-link-section-head">Company</h3>
          <ul className="footer-link-item">
            <li>About</li>
            <li>CLients</li>
            <li>Workers</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="footer-link-section">
          <h3 className="footer-link-section-head">Legal</h3>
          <ul className="footer-link-item">
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Partnerships</li>
          </ul>
        </div>
        <div className="footer-link-section">
          <h3 className="footer-link-section-head">Socials</h3>
          <ul className="footer-link-item">
            <a href="https://twitter.com/theartisanmrkt">
              <li>Twitter</li>
            </a>
            <a href="https://twitter.com/theartisanmrkt">
              <li>Linkedin</li>
            </a>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <p className="copyright">© 2023 Servv. All rights reserved.</p>
      <ul>
        <a href="https://twitter.com/theartisanmrkt">
          <li>
            <img src={TwitterIcon} alt="Twitter Icon" />
          </li>
        </a>
        <a href="https://twitter.com/theartisanmrkt">
          {" "}
          <li>
            <img src={LinkedinIcon} alt="LinkedinIcon" />
          </li>
        </a>
      </ul>
    </div>
  </div>
);
export default Footer;
