/* eslint-disable react/prop-types */
import "./ArtisanSettings.scss";
import personIcon from "../../assets/icons/person-1-icon.svg";
import personAddIcon from "../../assets/icons/person-add-icon.svg";
import securityIcon from "../../assets/icons/security-icon.svg";
import activityIcon from "../../assets/icons/activity-history-icon.svg";
import { Link } from "react-router-dom";

const ArtisanSettings = () => {
  return (
    <div className="artisan-settings">
      <div className="artisan-settings-container">
        <h1 className="artisam-settings-heading">Settings</h1>
        <div className="artisan-settings-content">
          {settingsContent.map((content, index) => (
            <SettingsCard
              key={index}
              icon={content.icon}
              title={content.title}
              link={content.link}
            />
          ))}
        </div>
      </div>
    </div>
  );};

export default ArtisanSettings;

const SettingsCard = (props) => (
  <Link to={props.link} className="settings-card">
    <div className="settings-card-container">
      <img src={props.icon} alt="settings icon" />
      <div className="settings-card-title">{props.title}</div>
    </div>
  </Link>
);

const settingsContent = [
  {
    icon: personIcon,
    title: "Personal Information",
    link: "./personalInformation",
  },
  {
    icon: personAddIcon,
    title: "Password & Security",
    link: "./passwordSecurity",
  },
  {
    icon: securityIcon,
    title: "Send Invite",
    link: "./sendInvite",
  },
  {
    icon: activityIcon,
    title: "Activity",
    link: "./activity",
  },
];
