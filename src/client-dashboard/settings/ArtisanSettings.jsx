/* eslint-disable react/prop-types */
import "./ArtisanSettings.scss";
import personIcon from "../../assets/icons/person-1-icon.svg";
import personAddIcon from "../../assets/icons/person-add-icon.svg";
import securityIcon from "../../assets/icons/security-icon.svg";
import activityIcon from "../../assets/icons/activity-history-icon.svg";
import backButton from "../../assets/icons/prev-arrow.svg";
import rightArrow from "../../assets/icons/arrow-down.svg";
import qrCodeIcon from "../../assets/icons/ri-qr-code-line.svg";
import referralImage from "../../assets/images/referral.png";
import { Link, Route, Routes } from "react-router-dom";
import profilePicture from "../../assets/images/testimonial_1.png";
import { artisanProfileInfo, transactionData2 } from "../../data/Datasets";
import TextBoxCard from "../components/TextBoxCard";
import TransactionItem from "../components/TransactionItem";

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

const ArtisanSettings = () => {
  return (
    <div className="artisan-settings">
      <div className="artisan-settings-container">
        <Routes>
          <Route path="/" exact Component={SettingsHomes} />
          <Route
            path="/personalInformation"
            exact
            Component={PersonalInformationPage}
          />
          <Route
            path="/passwordSecurity"
            exact
            Component={PasswordSecurityPage}
          />
          <Route path="/sendInvite" exact Component={SendInvite} />
          <Route path="/activity" exact Component={Activity} />
        </Routes>
      </div>
    </div>
  );
};

export default ArtisanSettings;

const SettingsCard = (props) => (
  <Link to={props.link} className="settings-card">
    <div className="settings-card-container">
      <img src={props.icon} alt="settings icon" />
      <div className="settings-card-title">{props.title}</div>
    </div>
  </Link>
);

const SettingsHomes = () => (
  <div className="settings-home artisan-settings-container">
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
);

const SettingsChildPage = (props) => (
  <div className="artisan-settings-child-container">
    <div className="artisan-settings-child-heading">
      <Link to="../">
        <img className="back-button" src={backButton} alt="back button" />
      </Link>
      <h4>Settings</h4>
      <img className="right-arrow" src={rightArrow} alt="back button" />
      <p>{props.childLink}</p>
    </div>
    <div className="artisan-settings-child-content">{props.childContent}</div>
  </div>
);

const PasswordSecurityPage = () => (
  <SettingsChildPage
    childLink="Password & Security"
    childContent={
      <div className="password-security-container">
        <div className="profile-information-section">
          <h2 className="profile-information-heading">Password & Security</h2>
          <div className="profile-information-content">
            <TextBoxCard title="Password" content="**********" />
            <TextBoxCard title="Security code" content="2345" />

            <button className="change-password">Change Password</button>
          </div>
        </div>
        <div className="two-factor-auth">
          <h2 className="profile-information-heading">
            Two Factor Authentication
          </h2>
          <div className="profile-information-content">
            <h3>Enable Two-Factor Authentication</h3>
            <p>
              1. To enable 2FA, you need to install an authenticator app like
              Authy, or Google Authenticator.
            </p>
            <p>
              2. Scan the QR code shown below with your authenticator app. If
              you can’t scan this barcode, enter the text code (Nue99PSH) on the
              authenticator app.
            </p>
            <img src={qrCodeIcon} alt="" />
          </div>
        </div>
      </div>
    }
  />
);

const PersonalInformationPage = () => (
  <SettingsChildPage
    childLink="Personal Information"
    childContent={
      <div className="profile-information-container">
        <div className="profile-information-picture-section">
          <img
            src={profilePicture}
            alt="profile image"
            className="profile-image"
          />
          <p>
            You can only change your profile picture once in a year(or 6 months)
          </p>
        </div>
        <div className="profile-information-section">
          <h2 className="profile-information-heading">Personal Information</h2>
          <div className="profile-information-content">
            <TextBoxCard
              title="First name"
              content={artisanProfileInfo[0].firstName}
            />
            <TextBoxCard
              title="Last name"
              content={artisanProfileInfo[0].lastName}
            />

            <TextBoxCard
              title="Other name"
              content={artisanProfileInfo[0].otherName}
            />
            <TextBoxCard
              title="Country"
              content={artisanProfileInfo[0].country}
            />
          </div>
        </div>
      </div>
    }
  />
);

const Activity = () => (
  <SettingsChildPage
    childLink="Activity"
    childContent={
      <div className="activity-container">
        <h2>Activity Log</h2>
        <TransactionItem
          date="Date"
          activity="Activity"
          description="Description"
          status="Status"
        />
        {transactionData2.map((content, index) => (
          <TransactionItem
            key={index}
            date={content.date}
            activity={content.activity}
            description={content.description}
            status={content.status}
          />
        ))}
      </div>
    }
  />
);

const SendInvite = () => (
  <SettingsChildPage
    childLink="Send Invite"
    childContent={
      <div className="send-invite-container">
        <h2 className="heading">Send Invite</h2>
        <img src={referralImage} alt="referral image" />
        <div className="copy-referral-section">
          <h2 className="copy-referral-heading">Copy Referral Link:</h2>
          <p className="referral-link">
            https://savvy.com/invite/a98fjjs9292dfx
          </p>
        </div>
      </div>
    }
  />
);
