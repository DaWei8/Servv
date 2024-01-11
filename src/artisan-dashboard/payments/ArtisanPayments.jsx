/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";

import AdvertSection from "../components/AdvertCard";

import RecentTransactions from "../components/RecentTransactions";
import DashboardBalance from "../overview-dashboard/DashboardBalance";

const ArtisanPayments = () => {
  return (
    <div className="flex flex-col w-full ">
      <h1 className="text-[24px] text-main-color font-[600] mb-[20px]">
        Payments
      </h1>
      <div className=" flex flex-row gap-[20px] h-full   ">
        <div className="flex flex-col gap-[20px] ">
          <DashboardBalance />
          <RecentTransactions />
        </div>
        <AdvertSection />
      </div>
    </div>
  );
};

export default ArtisanPayments;
