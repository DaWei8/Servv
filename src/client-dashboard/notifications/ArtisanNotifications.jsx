import "./ArtisanNotifications.scss"
import servvIcon from "../../assets/icons/servv.svg";
import chatIcon from "../../assets/icons/messages-3.svg";
import { Link } from "react-router-dom";



const ArtisanNotifications = () => {
  return (
    <div className="artisan-notifications">
        <Notifications />
    </div>
  )
}


export default ArtisanNotifications

const Notifications = () => {
  return (
    <div className="message-overlay hidden">
      <div className="message-overlay-heading">
        <h1>Notifications</h1>
        <p>
          <Link>Read all</Link>
        </p>
      </div>
      <div className="message-overlay-container">
        <NotificationCard
          icon={servvIcon}
          message="Allison dabiels just sent you a message"
          time="10m ago"
          stateIcon={chatIcon}
        />
        <NotificationCard
          icon={servvIcon}
          message="Allison dabiels just sent you a message"
          time="10m ago"
          stateIcon={chatIcon}
        />
        <NotificationCard
          icon={servvIcon}
          message="Allison dabiels just sent you a message"
          time="10m ago"
          stateIcon={chatIcon}
        />
      </div>
    </div>
  );
};

const NotificationCard = (props) => {
  return (
    <div className="message-card">
      <div className="message">
        <img src={props.icon} alt="message icon" />
        <div className="message-and-time">
          <p className="message">Allison daniels just sent you a message</p>
          <p className="time">{props.time}</p>
        </div>
        <img src={props.stateIcon} alt="state icon" />
      </div>
    </div>
  );
};
