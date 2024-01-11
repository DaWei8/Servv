
import servvLogo from "../../assets/icons/servv-logo-dk.svg";
import TwitterIcon from "../../assets/icons/twitter.svg";
import LinkedinIcon from "../../assets/icons/linkedin.svg";

export const FooterDashboard = () => {
  return (
    <div className="footer-dashboard-section max-w-full mt-auto bg-dark-bg flex text-primary-text-color-white items-center gap-[20px] justify-center ">
      <div className="footer-dashboard-container">
        <div className="footer-dashboard-company">
          <div className="footer-dashboard-company-logo">
            <img src={servvLogo} alt="company logo" className=" h-[50px] " />
          </div>
        </div>
      </div>

      <div className="footer-dashboard-bottom flex gap-[10px] ">
        <p className="footer-dashboard-copyright">© 2023 Servv. All rights reserved.</p>
        <ul className=" flex gap-[20px] " >
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
