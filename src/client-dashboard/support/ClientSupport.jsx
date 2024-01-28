/* eslint-disable react/prop-types */

import { useState } from "react";
import { liveChatOptions } from "../../data/Datasets";

const ClientSupport = () => {
  return (
    <div className="Client-support">
      <div className="Client-support-container">
        <h1 className="text-[24px] text-main-color font-[600] mb-[20px]">
          Live Chat & Support
        </h1>
        <div className=" flex md:max-w-[350px]">
          <StartLiveChat />
        </div>
      </div>
    </div>
  );
};

export default ClientSupport;

const StartLiveChat = () => {
  return (
    <div className="start-live-chat">
      <div className=" flex flex-col gap-[10px] ">
        <h3 className="text-[20px] font-[600]  rounded-[8px] text-primary-text-color-black">
          Select specific option
        </h3>
        <div className=" flex flex-col ">
          <form className=" flex flex-col gap-[10px] w-full " action="submit" method="post">
            {liveChatOptions.map((content, index) => (
              <TextBoxCardSelection
                key={index}
                title={content.title}
                content={content.description}
              />
            ))}
            <button className=" primary-button-blue h-[50px] mt-[10px] ">Start Live Chat</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const TextBoxCardSelection = (props) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelection = (selection) => {
    setSelectedOption(selection);
  };
  return (
    <div className=" flex items-center justify-between p-[10px] gap-[10px] rounded-[10px] shadow-md ">
      <div className=" flex flex-col gap-[5px] ">
        <h3 className=" font-[700] ">{props.title}</h3>
        <p>{props.content}</p>
      </div>
      <input
        type="radio"
        name={props.title}
        value={props.content}
        checked={selectedOption === props.title}
        onChange={() => handleSelection(props.title)}
        className=" bg-primary-button-color-blue w-[15px] h-[15px] border-[1px] border-solid border-primary-bg-color-white accent-primary-button-color-blue "
      />
    </div>
  );
};
