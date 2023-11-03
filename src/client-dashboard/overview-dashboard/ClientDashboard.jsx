/* eslint-disable react/prop-types */
import "./ClientDashboard.scss";
import SeeMore from "../../assets/icons/see-more.svg";
import { Link } from "react-router-dom";
import RightArrow from "../../assets/icons/arrow-right-alt-rounded.svg";
import StarIcon from "../../assets/icons/star.svg";
import servvIcon from "../../assets/icons/servv.svg";
import chatIcon from "../../assets/icons/messages-3.svg";
import { projectContent, transactionData } from "../../data/Datasets";
// import ArtisanSidebar from "../navbar/ArtisanSidebar";

const ClientDashboard = () => {
  return (
    <div className="artisan-dashboard">
      <div className="artisan-dashboard-container">
        <h1 className="dashboard-heading">Dashboard</h1>
        <div className="dashboard-content">
          <div className="artisan-dashboard-leftside">
            <DashboardYourBalance />
            <RecentProjects />
            <RecentTransactions />
          </div>
          <div className="artisan-dashboard-rightside">
            <Notifications />
            <Notifications />
            <Statistics />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;

const DashboardYourBalance = () => {
  return (
    <div className="dashboard-balance">
      <h2 className="your-balance-heading">Your Balance</h2>
      <div className="dashboard-balance-collection">
        <TotalBalance />
        <BalanceCard title="First Work Profile" balance="$5,000.83" />
        <BalanceCard title="First Work Profile" balance="$5,000.83" />
        <BalanceCard title="First Work Profile" balance="$5,000.83" />
      </div>
    </div>
  );
};

const BalanceCard = (props) => {
  return (
    <div className="balance-card">
      <h3 className="title">{props.title}</h3>
      <p>Balance</p>
      <h1 className="balance">{props.balance}</h1>
      <p>
        <Link to="">
          See more <img src={SeeMore} alt="link to another page" />
        </Link>
      </p>
    </div>
  );
};

const TotalBalance = () => {
  return (
    <div className="total-balance-card">
      <p className="title">Total balance</p>
      <h1 className="balance">$201,000.83</h1>
      <p>
        <Link to="">
          See more <img src={SeeMore} alt="link to another page" />
        </Link>
      </p>
    </div>
  );
};

const RecentProjects = () => (
  <div className="recent-projects">
    <div className="recent-projects-container">
      <h2 className="heading">Recent Projects</h2>
      <div className="recent-projects-collection">
        {projectContent.map((content, index) => (
          <ProjectCard
            key={index}
            rating={content.rating}
            image={content.displayImage}
            title={content.title}
            description={content.description}
            date={content.date}
          />
        ))}
      </div>
    </div>
  </div>
);

const ProjectCard = (props) => (
  <div className="project-card">
    <div className="project-card-container">
      <div className="project-image-and-rating">
        <div className="project-card-rating">
          <img src={StarIcon} alt="" className="project-star" />
          <p className="rating">
            <span>{props.rating}</span>/5.0
          </p>
        </div>
        <img
          src={props.image}
          alt="project card image"
          className="project-card-image"
        />
      </div>
      <h2 className="project-title">{props.title}</h2>
      <p className="project-description">{props.description}</p>
      <div className="project-date-and-button">
        <p className="project-date">{props.date}</p>
        <button>
          <Link to="" style={{ color: "#0080ff" }}>
            View <img src={RightArrow} alt="right arrow" />
          </Link>
        </button>
      </div>
    </div>
  </div>
);

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
      <div className="message-card-container">

        <img className="message-icon" src={props.icon} alt="message icon" />
        <div className="message-and-time">
          <p className="message">{props.message}</p>
          <p className="time">{props.time}</p>
        </div>
        <img className="state-icon" src={props.stateIcon} alt="state icon" />
      </div>
    </div>
  );
};

const Statistics = () => {
  return <div className="statistics">Statistics</div>;
};

const RecentTransactions = () => {
  return (
    <div className="recent-transactions">
      <div className="recent-transactions-container">
        <h2 className="heading">Recent Transactions</h2>
        <div className="recent-transactions-collection">
          <div className="recent-transaction-collection-header">
            <TransactionItem
              // style={{ color: "#AFB0B1", background: "trans" }}
              date="Date"
              activity="Activity"
              description="Description"
              status="Status"
            />
          </div>
          {transactionData.map((content, index) => (
            <TransactionItem
              key={index}
              date={content.date}
              activity={content.activity}
              description={content.description}
              status={content.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const TransactionItem = (props) => {
  return (
    <div className="transaction-item">
      <div className="transaction-date">{props.date}</div>
      <div className="transaction-activity">{props.activity}</div>
      <div className="transaction-description">{props.description}</div>
      <div className="transaction-status">{props.status}</div>
    </div>
  );
};
