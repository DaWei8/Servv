import "./ArtisanTopbar.scss";

import { Link } from "react-router-dom";
import servvLogo from "../../assets/icons/servv-logo-dk.svg";
// import menuIcon from "../../assets/icons/hamburger-menu.svg";
import chatIcon from "../../assets/icons/messages-3.svg";
import ArtisanSearchBar from "./ArtisanSearchBar";

const ArtisanTopbar = () => {
  return (
    <div className="artisan-topbar">
      <div className="artisan-topbar-container">
        {/* <div className="artisan-hamburger-menu">
          <img
            src={menuIcon}
            alt="servv logo"
            className="hamburger-menu-icon"
          />
        </div> */}

        <div className="artisan-company-logo">
          <Link to="/artisanDashboard">
            <img src={servvLogo} alt="servv logo" className="servv-logo" />
          </Link>
        </div>
        <div className="artisan-topbar-right">
          <div className="artisan-topbar-search">
            <ArtisanSearchBar />
          </div>
          <div className="artisan-notifications">
            <button>
              <img src={chatIcon} className="artisan-notification" />
            </button>
          </div>
          <div className="profile-button">
            <Link to="/artisanProfile">
              <button>
                <div className="profile-button-state inactive"></div>D
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisanTopbar;
