/* eslint-disable react/prop-types */
import { transactionData2 } from "../../data/Datasets";
import TransactionItem from "../components/TransactionItem";

const ClientHistory = () => {
  return (

      <div className=" flex flex-col w-screen flex-auto ">
        <h1 className="text-[24px] text-main-color font-[600] mb-[20px]">
          History
        </h1>
        <div className="flex flex-auto">
          <Transactions />
        </div>
      </div>

  );
};

export default ClientHistory;

const Transactions = () => {
  return (
    <div className="flex flex-col w-full gap-[10px] ">
      <h2 className="text-[20px] font-[600] text-primary-text-color-black">
        Transaction History
      </h2>
      <table className="flex-auto flex-col gap-[12px] ">
        <thead className=" flex-auto flex-col ">
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
          {transactionData2.map((content, index) => (
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
