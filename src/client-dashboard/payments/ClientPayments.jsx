/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";

import AdvertSection from "../components/AdvertCard";

import RecentTransactions from "../components/RecentTransactions";
import PaymentMethods from "./PaymentMethods";

const ClientPayments = () => {
  return (
    <div className="flex flex-col w-screen ">
      <h1 className="text-[24px] text-main-color font-[600] mb-[20px]">
        Bills and Payments
      </h1>
      <div className=" flex flex-row gap-[20px] h-full w-full  ">
        <div className="flex flex-col gap-[20px] flex-auto ">
          <PaymentMethods />
          <RecentTransactions />
        </div>
        <AdvertSection />
      </div>
    </div>
  );
};

export default ClientPayments;
