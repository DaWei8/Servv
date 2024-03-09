/* eslint-disable react/prop-types */
import projectImage from "../../assets/images/project-picture-frame.png";
import starIcon from "../../assets/icons/star.svg";
import { useState } from "react";
import RateProjectStatusCard from "./RateProjectStatusCard";


export default function ProjectStatusCard (props) {
  const [showRateCard, setShowRateCard] = useState(false);

  return (
    <div className="flex relative lg:max-w-[300px] bg-primary-bg-color-white flex-auto gap-[10px] md:max-w-[180px] max-w-[180px] w-[150px] md:w-auto p-[10px] flex- h-fit rounded-[10px] shadow-3xl flex-col ">
      <div className="project-image-and-rating relative flex mb-[6px] ">
        <div className="project-card-rating absolute bottom-0 text-primary-text-color-white rounded-tr-[3px] flex flex-col gap-[1px] bg-[#1846a3b9] w-[45px] h-[45px] items-center justify-center ">
          <img src={starIcon} alt="" className="project-star w-[16px] " />
          <p className="rating h-[15px] flex items-center text-[8px] ">
            <span className=" h-[15px] flex items-center text-[12px] tracking-widest font-[500] ">
              {props.rating}
            </span>
            /5.0
          </p>
        </div>
        <img
          src={props.image}
          alt="project card image"
          className=" w-full flex flex-auto max-h-[150px] "
        />
      </div>
      <h2 className=" text-[16px] font-[600] ">{props.title}</h2>
      <div className=" flex justify-between items-center ">
        <p className=" text-[10px] leading-[150%] rounded-[8px] p-[5px] bg-pale-blue-grey ">
          {props.date}
        </p>
        <div className=" text-[10px] bg-default-green p-[8px] rounded-[8px] ">
          {props.status}
        </div>
      </div>
      <button
        onClick={() => setShowRateCard(true)}
        className=" flex items-center justify-center primary-button-blue gap-[10px] "
      >
        <p className=" text-primary-text-color-white ">Give Rating</p>
      </button>
      {showRateCard == true ? (
        <div className=" absolute  bottom-0 z-[100] ">
          <RateProjectStatusCard
            showCard={showRateCard}
            rating={props.rating}
            image={projectImage}
            title={props.title}
            date={props.date}
          />
        </div>
      ) : (
        <div className=" hidden "></div>
      )}
    </div>
  );
}