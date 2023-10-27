import "./FooterDashboard.scss";
import servvLogo from "../../assets/icons/servv-logo-dk.svg";
import TwitterIcon from "../../assets/icons/twitter.svg";
import LinkedinIcon from "../../assets/icons/linkedin.svg";

export const FooterDashboard = () => {
  return (
    <div className="footer-dashboard-section">
      <div className="footer-dashboard-container">
        <div className="footer-dashboard-company">
          <div className="footer-dashboard-company-logo">
            <img src={servvLogo} alt="company logo" />
          </div>
        </div>
      </div>

      <div className="footer-dashboard-bottom">
        <p className="footer-dashboard-copyright">© 2023 Servv. All rights reserved.</p>
        <ul>
          <li>
            <img src={TwitterIcon} alt="Twitter Icon" />
          </li>
          <li>
            <img src={LinkedinIcon} alt="LinkedinIcon" />
          </li>
        </ul>
      </div>
    </div>
  );
};
