import TotalBalance from "../components/TotalBalance";
import MakeDeposit from "./MakeDeposit";

export default function PaymentMethods() {
  return (
    <div className="dashboard-balance flex flex-col gap-[20px]  ">
      <h2 className="text-[20px] font-[600] text-primary-text-color-black">
        Payment Methods
      </h2>
      <div className="dashboard-balance-collection flex flex-row flex-auto flex-wrap md:gap-[20px] gap-[10px] ">
        <TotalBalance />
        <MakeDeposit />
      </div>
    </div>
  );
}

