import "./ClientTopbar.scss";

import { Link } from "react-router-dom";
import servvLogo from "../../assets/icons/servv-logo-dk.svg";
import ArtisanSearchBar from "./ClientSearchbar";
import chatIcon from "../../assets/icons/messages-3.svg";

const ClientTopbar = () => {
  return (
    <div className="artisan-topbar">
      <div className="artisan-topbar-container">
        <Link to="/artisanDashboard">
        <div className="company-logo">
          <img src={servvLogo} alt="servv logo" className="servv-logo" />
        </div>
        </Link>
        <div className="artisan-topbar-right">
          <div className="artisan-sb">
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

export default ClientTopbar;
  


