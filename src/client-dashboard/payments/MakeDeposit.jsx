import cardIcon from "../../assets/icons/card-pos.svg";
import arrowRightButton from "../../assets/icons/arrow-right-button.svg";
import moneySend from "../../assets/icons/money-send.svg";
import cancelButton from "../../assets/icons/cancel-icon.svg";
import masterCardIcon from "../../assets/icons/master-card-icon.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function MakeDeposit() {
  return (
    <div className=" flex flex-col flex-auto gap-[10px] ">
      <h2 className=" text-[16px] font-[600] ">Make Deposit Using</h2>
      <div className=" flex flex-row gap-[30px] ">
        <DebitCard />
        <BankTransfer />
      </div>
    </div>
  );
}

const DebitCard = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className=" flex flex-col gap-[25px] flex-auto p-[10px] bg-transparent-blue-10 cursor-pointer ">
      <img
        className=" w-[24px] h-[24px] "
        src={cardIcon}
        alt=" debit card icon "
      />
      <div className=" flex flex-row justify-between ">
        <p>Credit/Debit Card</p>
        <img
          onClick={() => setShowForm(!showForm)}
          src={arrowRightButton}
          alt=" arrow right rounded button icon"
        />
      </div>

      <div
        className={
          showForm == true
            ? " absolute w-[600px] bg-primary-button-color-white z-30 rounded-[10px] overflow-hidden shadow-3xl "
            : "hidden"
        }
      >
        <div className=" flex justify-between p-[10px] bg-transparent-blue-10 ">
          <h2 className=" font-[600] ">Make deposit using Card</h2>
          <img
            onClick={() => setShowForm(!showForm)}
            src={cancelButton}
            alt=" cancel button icon "
          />
        </div>
        <div className=" bg-transparent-bg-blur backdrop-blur-xl ">
          <div className=" flex flex-col p-[40px] gap-[20px] ">
            <div>
              <ATMCard />
            </div>
            <div className=" w-full  h-fit flex flex-wrap gap-[20px] ">
              <label
                className=" flex flex-col gap-[5px] flex-auto max-w-[50%] "
                htmlFor=""
              >
                Amount to deposit
                <input
                  type="password"
                  autoComplete="true"
                  name="password"
                  // value={formData.password}
                  // onChange={handleChange}
                  className=" h-[50px] rounded-[5px] bg-transparent border-solid border-[1px] border-primary-tab-select-color "
                />
              </label>
              <label
                className=" flex flex-col gap-[5px] flex-auto max-w-[50%] "
                htmlFor=""
              >
                Credit card number
                <input
                  type="password"
                  autoComplete="true"
                  name="password"
                  // value={formData.password}
                  // onChange={handleChange}
                  className=" h-[50px] rounded-[5px] bg-transparent border-solid border-[1px] border-primary-tab-select-color "
                />
              </label>
              <label
                className=" flex flex-col gap-[5px] flex-auto max-w-[50%] "
                htmlFor=""
              >
                Expiration date
                <input
                  type="password"
                  autoComplete="true"
                  name="password"
                  // value={formData.password}
                  // onChange={handleChange}
                  className=" h-[50px] rounded-[5px] bg-transparent border-solid border-[1px] border-primary-tab-select-color "
                />
              </label>
              <label
                className=" flex flex-col gap-[5px] flex-auto max-w-[50%]  "
                htmlFor=""
              >
                CVV
                <input
                  type="password"
                  autoComplete="true"
                  name="password"
                  // value={formData.password}
                  // onChange={handleChange}
                  className=" h-[50px] rounded-[5px] bg-transparent border-solid border-[1px] border-primary-tab-select-color "
                />
              </label>
            </div>
            <Link
              to={""}
              className=" w-full flex justify-center items-center  mx-auto h-[50px] bg-primary-button-color-blue rounded-[8px] "
            >
              <p className=" text-primary-text-color-white ">Proceed</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const BankTransfer = () => {
  return (
    <div className=" opacity-25 flex flex-col gap-[25px] p-[10px] bg-transparent-blue-10 flex-auto ">
      <img
        className=" w-[24px] h-[24px] "
        src={moneySend}
        alt=" debit card icon "
      />
      <div className=" flex flex-row justify-between ">
        <p>Bank Transfer</p>
        <img src={arrowRightButton} alt=" arrow right rounded button icon" />
      </div>
    </div>
  );
};

const ATMCard = () => {
  return (
    <div className=" flex flex-col gap-[10px] p-[10px] bg-primary-tab-select-color rounded-[10px] ">
      <div className=" flex justify-between items-center text-main-color ">
        Card Name <img src={masterCardIcon} alt="" />{" "}
      </div>
      <p>4325 6543 9856 2332</p>
      <div className=" flex flex-col ">
        <div>
          <h3 className="text-main-color">CVV</h3>
          <p>123</p>
        </div>
        <div className=" flex flex-col ">
          <h3 className="text-main-color">EXP</h3>
          <p>08/24</p>
        </div>
      </div>
    </div>
  );
};
