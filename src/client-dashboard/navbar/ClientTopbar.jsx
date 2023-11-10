import "./ClientTopbar.scss";

import { Link } from "react-router-dom";
import servvLogo from "../../assets/icons/servv-logo-dk.svg";
import ClientSearchBar from "./ClientSearchbar";
import chatIcon from "../../assets/icons/messages-3.svg";

const ClientTopbar = () => {
  return (
    <div className="client-topbar">
      <div className="client-topbar-container">
        <Link to="/clientDashboard">
        <div className="company-logo">
          <img src={servvLogo} alt="servv logo" className="servv-logo" />
        </div>
        </Link>
        <div className="client-topbar-right">
          <div className="client-sb">
          <ClientSearchBar />
          </div>
          
          <div className="client-notifications">
            <button>
              <img src={chatIcon} className="client-notification" />
            </button>
          </div>
          <div className="profile-button">
            <Link to="/clientProfile">
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
  


