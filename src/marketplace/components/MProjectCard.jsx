/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import RightArrow from "../../assets/icons/arrow-right-alt-rounded.svg";
import StarIcon from "../../assets/icons/star.svg";
// import { useEffect, useState } from "react";
// import axios from "axios";

const MProjectCard = (props) => (
  <div className="flex max-w-[170px] md:max-w-[220px] flex-grow md:p-[10px] p-[4px] rounded-[4px] shadow-3xl flex-col ">
    <div className=" relative  rounded-[4px] flex mb-[6px] overflow-hidden ">
      <div role="button" className="  group absolute bottom-0 text-primary-text-color-white rounded-tr-[3px] px-[5px] flex flex-row gap-[1px] bg-[#1846a3b9] min-w-[45px] w-fit h-[45px] items-center justify-center ">
        <img src={StarIcon} alt="" className="project-star w-[16px] " />
        <div className="rating h-[15px] flex items-center text-[8px] ">
          <span className=" h-[15px] flex items-center text-[12px] tracking-widest font-[500] ">
            {props.rating || "NaN"}
          </span>
          <p className=" group-hover:flex hidden text-[10px] ">/5.0</p>
        </div>
      </div>
      <img
        src={props.image}
        alt="project card image"
        className="project-card-image w-full h-[100px] "
      />
    </div>
    <div className=" flex gap-[10px] ">
      <img
        src={props.profileImage}
        className=" lg:hidden flex max-w-[38px] max-h-[38px] w-auto h-auto border-solid border-[2px] border-default-green rounded-[50%] "
        alt="profile image"
      />
      <div>
        <h2 className="project-title text-[14px] font-[600] ">{props.title}</h2>
        <p className="project-description text-[10px] leading-[150%] mb-[8px] ">
          {props.artisanName}
        </p>
      </div>
    </div>
    <p className="project-description text-[10px] leading-[150%] mb-[8px] ">
      {props.description}
    </p>
    <div className="project-date-and-button flex justify-between items-end ">
      <div className=" flex flex-col">
        <p className=" leading-[120%] text-[10px]">Price</p>
        <p className="project-date text-[16px]  font-[600] ">
          {props.price}
        </p>
      </div>
      <Link
        className=" flex gap-[1px] md:text-[16px] w-fit group "
        to="../category/workerskillpage"
        style={{ color: "#0080ff" }}
      >
        <p className=" text-[14px] group-hover:text-[15px] ">View</p>
        <img
          src={RightArrow}
          className=" group-hover:w-[23px] "
          alt="right arrow"
        />
      </Link>
    </div>
  </div>
);

export default MProjectCard;
