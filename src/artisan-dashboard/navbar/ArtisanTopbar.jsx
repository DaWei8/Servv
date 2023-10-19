import "./ArtisanTopbar.scss";
import { Link } from "react-router-dom";
import servvLogo from "../../assets/icons/servv-logo-dk.svg";
import servvIcon from "../../assets/icons/servv.svg";
import chatIcon from "../../assets/icons/messages-3.svg";
import SearchBar from "../../components/searchBar/SearchBar";

const ArtisanTopbar = () => {
  return (
    <div className="artisan-topbar">
      <div className="artisan-topbar-container">
        <div className="company-logo">
          <img src={servvLogo} alt="servv logo" className="servv-logo" />
        </div>
        <div className="artisan-topbar-right">
          <SearchBar />
          <div className="profile-button">
            <Link to="/authPage">
              <button>
                <div className="profile-button-state inactive"></div>D
              </button>
            </Link>
          </div>
          <div className="artisan-notifications">
            <button>
              <img src={chatIcon} className="artisan-notification" />
            </button>
          </div>
          <MessagesOverlay />
        </div>
      </div>
    </div>
  );
};

export default ArtisanTopbar;

const MessagesOverlay = () => {
  return (
    <div className="message-overlay hidden">
      <div className="message-overlay-container">
        <MessageCard
          icon={servvIcon}
          content="Allison dabiels just sent you a message"
          time="10m ago"
          stateIcon={chatIcon}
        />
        <MessageCard
          icon={servvIcon}
          content="Allison dabiels just sent you a message"
          time="10m ago"
          stateIcon={chatIcon}
        />
        <MessageCard
          icon={servvIcon}
          content="Allison dabiels just sent you a message"
          time="10m ago"
          stateIcon={chatIcon}
        />
      </div>
    </div>
  );
};

const MessageCard = (icon, content, time, stateIcon) => {
  return (
    <div className="message-card">
      <div className="mesage">
        <img src={icon} alt="message icon" />
        <div className="message-and-time">
          <h5>{content}</h5>
          <p>{time}</p>
        </div>
        <img src={stateIcon} alt="state icon" />
      </div>
    </div>
  );
};
