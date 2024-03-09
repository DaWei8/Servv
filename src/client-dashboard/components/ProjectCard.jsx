/* eslint-disable react/prop-types */
// import { useLocation, useNavigate } from "react-router-dom";
import RightArrow from "../../assets/icons/arrow-right-alt-rounded.svg";
import StarIcon from "../../assets/icons/star.svg";
import projectPicture from "../../assets/images/project-picture-frame.png";
// import { useState } from "react";

// import "./components.scss"

const ProjectCard = (props) => {

  return (
    <div className="flex flex-1 lg:min-w-[200px] lg:max-w-[230px] md:min-w-[200px] md:w-[200px] h-full max-w-[180px] min-w-[150px] p-[10px] rounded-[10px] shadow-3xl flex-col ">
      <div className="project-image-and-rating relative flex mb-[6px] ">
        <div className="project-card-rating  group absolute bottom-0 text-primary-text-color-white rounded-tr-[3px] px-[5px] flex flex-row gap-[1px] bg-[#1846a3b9] min-w-[45px] w-fit h-[45px] items-center justify-center ">
          <img src={StarIcon} alt="" className="project-star w-[16px] " />
          <div className="rating h-[15px] flex items-center text-[8px] ">
            <span className=" h-[15px] flex items-center text-[12px] tracking-widest font-[500] ">
              {props.rating || "NaN"}
            </span>
            <p className=" group-hover:flex hidden ">/5.0</p>
          </div>
        </div>
        <img
          src={props.image || projectPicture}
          alt="project card image"
          className="project-card-image w-full max-h-[120px] "
        />
      </div>
      <h2 className="project-title text-[14px] min-h-[40px] max-h-[60px] font-[600] ">
        {props.title}
      </h2>
      <p className="project-description text-[10px] leading-[150%] mb-[8px] ">
        {props.description}
      </p>
      <div className="project-date-and-button flex justify-between items-center ">
        <p className="project-date text-[10px] leading-[150%] p-[5px] bg-pale-blue-grey ">
          {props.date}
        </p>
        <div
          role="button"
          className=" flex gap-[5px] items-center md:text-[14px] w-fit text-[12px] "
          onClick={props.navFunction}
          style={{ color: "#0080ff" }}
        >
          View<img className=" w-[24px] " src={RightArrow} alt="right arrow" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
