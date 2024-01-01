/* eslint-disable react/prop-types */
import "./ArtisanDashboard.scss";
import ArtisanSearchBar from "../navbar/ArtisanSearchBar";
import Notifications from "../components/Notifications";
import RecentTransactions from "../components/RecentTransactions";
import RecentProjects from "../components/RecentProjects";
import Statistics from "../components/Statistics";
import DashboardBalance from "./DashboardBalance";

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
            <DashboardBalance />
            <RecentProjects />
            <RecentTransactions />
          </div>
          <div className="artisan-dashboard-rightside">
            <Notifications />
            <Notifications />
            {/* <Statistics /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisanDashboard;



