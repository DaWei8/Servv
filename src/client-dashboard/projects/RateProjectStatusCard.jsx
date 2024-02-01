/* eslint-disable react/prop-types */
import starIcon from "../../assets/icons/star.svg";
import cancelIcon from "../../assets/icons/cancel-icon-black.svg";
import { useState } from "react";
import StarRating from "../../components/starRating";
import { Link } from "react-router-dom";

export default function RateProjectStatusCard (props) {
  const [showRateCard, setShowRateCard] = useState(true);

  return showRateCard == props.showCard ? (
    <div className="flex w-[450px] bg-primary-bg-color-white gap-[10px] md:w-auto p-[10px] flex- h-fit rounded-[10px] shadow-3xl flex-col ">
      <div className=" flex justify-between text-[20px] font-[600] ">
        Rate Project
        <img
          onClick={() => setShowRateCard(!showRateCard)}
          src={cancelIcon}
          className=" cursor-pointer "
          alt=" cancel icon "
        />
      </div>
      <div className=" object-cover relative flex mb-[6px] ">
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
          className=" w-fit h-[150px] flex flex-auto "
        />
      </div>
      <h2 className=" text-[16px] font-[600] ">{props.title}</h2>
      <div className=" flex justify-between items-center ">
        <p className=" text-[10px] leading-[150%] rounded-[8px] p-[5px] bg-pale-blue-grey ">
          {props.date}
        </p>
        <div className=" text-[10px] bg-default-green p-[8px] rounded-[8px] ">
          Completed
        </div>
      </div>
      <div className=" flex flex-col gap-[5px] ">
        <h3 className=" text-[14px] font-[600] ">Leave a Review</h3>
        <input
          placeholder="Enter your review"
          className=" min-h-[100px] text-[12px] flex border-[1px] bg-primary-bg-color-white rounded-[10px] border-solid border-primary-button-color-blue flex-col gap-[6px] p-[8px] shadow-3xl "
        />
      </div>
      <p className=" text-[12px] ">
        Let others know how good the service was (*required)
      </p>
      <div className=" flex items-center justify-center py-[6px] bg-transparent-blue-10 ">
        <StarRating number={5} />
      </div>
      <Link className=" flex items-center justify-center primary-button-blue gap-[10px] ">
        <p className=" text-primary-text-color-white ">Submit Rating</p>
      </Link>
    </div>
  ) : (
    <div></div>
  );
}
