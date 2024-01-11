// import TransactionItem from "../components/TransactionItem";
import { transactionData } from "../../data/Datasets";
import TransactionItem from "./TransactionItem";
// import "./components.scss"

const RecentTransactions = () => {
  return (
    <div className="recent-transactions-container flex flex-col gap-[20px] lg:max-w[60%] ">
      <h2 className="heading text-[20px] font-[600] text-primary-text-color-black  ">
        Recent Transactions
      </h2>
      <table className="recent-transactions-collection flex-auto flex-col gap-[12px] ">
        <thead className="transaction-item flex-auto flex-col gap-[12px] ">
          <tr className="flex px-[10px] bg-[#B4CCFC1A] items-center md:text-[16px] text-[12px] justify-between">
            <th className="transaction-date md:w-[80px] w-[80px] h-[40px] flex items-center ">
              Date
            </th>
            <th className="transaction-activity md:w-[150px] w-[120px] h-[40px] flex items-center ">
              Activity
            </th>
            <th className="transaction-description text-clip md:w-[150px] w-[50px] h-[40px] md:flex items-center hidden ">
              Description
            </th>
            <th className="transaction-description md:w-[150px] w-[50px] h-[40px] flex justify-center items-center md:hidden ">
              ...
            </th>
            <th className="transaction-status md:w-[150px] w-[100px] h-[40px] flex items-center justify-end ">
              Status
            </th>
          </tr>
        </thead>
        <tbody className=" flex flex-col gap-[10px] pt-[10px] ">
          {transactionData.map((content, index) => (
            <TransactionItem
              key={index}
              date={content.date}
              activity={content.activity}
              description={content.description}
              status={content.status}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentTransactions;

/* eslint-disable react/prop-types */
// import "./components.scss";
