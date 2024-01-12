import BalanceCard from "../components/BalanceCard";
import TotalBalance from "../components/TotalBalance";
// import "./ArtisanDashboard.scss";



const DashboardBalance = () => {
        return (
          <div className="dashboard-balance flex flex-col gap-[20px]  ">
            <h2 className="text-[20px] font-[600] text-primary-text-color-black">Your Balance</h2>
            <div className="dashboard-balance-collection flex flex-row flex-wrap md:gap-[20px] gap-[10px] ">
              <TotalBalance />
              <BalanceCard title="First Work Profile" balance="$10,000.83" />
              <BalanceCard title="First Work Profile" balance="$5,000.83" />
              <BalanceCard title="First Work Profile" balance="$5,000.83" />
            </div>
          </div>
        );
      };
      
export default DashboardBalance      