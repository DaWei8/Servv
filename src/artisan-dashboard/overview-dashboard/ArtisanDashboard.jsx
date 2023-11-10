/* eslint-disable react/prop-types */
import "./ArtisanDashboard.scss";
import ArtisanSearchBar from "../navbar/ArtisanSearchBar";
import BalanceCard from "../components/BalanceCard";
import TotalBalance from "../components/TotalBalance";
import Notifications from "../components/Notifications";
import RecentTransactions from "../components/RecentTransactions";
import RecentProjects from "../components/RecentProjects";
import Statistics from "../components/Statistics";

// import ArtisanSidebar from "../navbar/ArtisanSidebar";

const ArtisanDashboard = () => {
  return (
    <div className="artisan-dashboard">
      <div className="artisan-dashboard-container">
        <h1 className="dashboard-heading">Dashboard</h1>
        <div className="mobile-show search-bar">
          <ArtisanSearchBar />
        </div>
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

export default ArtisanDashboard;

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




