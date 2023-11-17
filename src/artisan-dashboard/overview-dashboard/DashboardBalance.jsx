import BalanceCard from "../components/BalanceCard";
import TotalBalance from "../components/TotalBalance";
import "./ArtisanDashboard.scss";



const DashboardBalance = () => {
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
      
export default DashboardBalance      