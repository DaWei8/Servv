import { useState } from "react";
import CustomerAvatar from "../../assets/images/customer-avatar.png";
import WorkerAvatar from "../../assets/images/worker-avatar.png";
// import "./GetStartedSection.css";

const GetStartedSection = () => (
  <section className="lex flex-col w-full gap-[24px] text-primary-text-color-white items-center bg-primary-bg-color-blue py-[80px] md:px-0 px-[20px] justify-center ">
    <div className="flex flex-col md:gap-[20px] gap-[10px] mb-[24px] ">
      <h1 className="text-[28px] md:text-[40px] md:text-center font-semibold ">
        Ready to get Started?
      </h1>
      <p className=" tracking-[6px] gap-[10px] md:text-center md:text-[14px] text-[10px] uppercase ">
        Choose how you want to start
      </p>
    </div>
    <CardRadioField />
    <div className="flex flex-col items-center ">
      <p className="flex flex-col gap-[5px] leading-[27px] text-center mb-[20px] ">
        You are not sure yet? Open an account now
      </p>
      <div className="flex flex-row justify-center gap-[20px] ">
        <button className=" primary-button h-[50px] flex-col items-center justify-center flex ">
          Sign up
        </button>
        <button className=" border-button h-[50px] flex flex-col items-center justify-center hover:bg-[#fff] ">
          Log in
        </button>
      </div>
    </div>
  </section>
);

export default GetStartedSection;

const CardRadioField = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardChange = (cardId) => {
    setSelectedCard(cardId);
  };

  return (
    <div className=" flex flex-col md:flex-row gap-[20px] justify-center items-center mb-[24px] ">
      <SelectionCard
        selection="worker"
        title="Worker"
        avatar={WorkerAvatar}
        selectedCard={selectedCard}
        function={() => handleCardChange("worker")}
      />
      <SelectionCard
        selection="customer"
        title="Customer"
        avatar={CustomerAvatar}
        selectedCard={selectedCard}
        function={() => handleCardChange("customer")}
      />
    </div>
  );
};

const SelectionCard = (props) => {
  return (
    <label className=" flex justify-center w-full max-w-[320px] ">
      <div
        className={
          props.selectedCard === props.selection
            ? "get-started-selected-card flex flex-col items-center bg-primary-button-color-white rounded-[10px] text-main-color overflow-hidden flex-auto "
            : "get-started-card flex flex-col items-center bg-[#b4ccfc2f] rounded-[10px] overflow-hidden flex-auto "
        }
      >
        <img
          className=" max-w-[250px] "
          src={props.avatar}
          alt="avatar"
        />
        <h3 className=" mt-[10px] text-[24px] font-medium my-[10px] ">
          {props.title}
        </h3>
        <input
          type="radio"
          name="cardSelection"
          value={props.selection}
          checked={props.selectedCard === props.selection}
          onChange={props.function}
          className=" mb-[20px] "
        />
      </div>
    </label>
  );
};
