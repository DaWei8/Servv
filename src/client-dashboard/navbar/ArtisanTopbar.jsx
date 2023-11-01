import "./ArtisanTopbar.scss";
import searchIcon from "../../assets/icons/search-icon.svg";
import { Link } from "react-router-dom";
import servvLogo from "../../assets/icons/servv-logo-dk.svg";

import chatIcon from "../../assets/icons/messages-3.svg";

const ArtisanTopbar = () => {
  return (
    <div className="artisan-topbar">
      <div className="artisan-topbar-container">
        <Link to="/artisanDashboard">
        <div className="company-logo">
          <img src={servvLogo} alt="servv logo" className="servv-logo" />
        </div>
        </Link>
        <div className="artisan-topbar-right">
          <ArtisanSearchBar />
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

const ArtisanSearchBar = () => (
  <div className="search__bar">
    <div className="search__bar-container">
      <input type="text" placeholder="Search..." />
      <div className="search-button">
        <img src={searchIcon} alt="Search Icon" />
      </div>
    </div>
  </div>
);
