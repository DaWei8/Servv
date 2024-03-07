/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import RightArrow from "../../assets/icons/arrow-right-alt-rounded.svg";
import StarIcon from "../../assets/icons/star.svg";
import projectPicture from "../../assets/images/project-picture-frame.png";

// import "./components.scss"

const ProjectCard = (props) => (
  <div className="flex lg:max-w-[230px] md:max-w-[180px] h-full max-w-[180px] w-[150px] md:w-auto p-[10px] flex-auto rounded-[10px] shadow-3xl flex-col ">
    <div className="project-image-and-rating relative flex mb-[6px] ">
      <div className="project-card-rating  group absolute bottom-0 text-primary-text-color-white rounded-tr-[3px] px-[5px] flex flex-row gap-[1px] bg-[#1846a3b9] min-w-[45px] w-fit h-[45px] items-center justify-center ">
        <img src={StarIcon} alt="" className="project-star w-[16px] " />
        <p className="rating h-[15px] flex items-center text-[8px] ">
          <span className=" h-[15px] flex items-center text-[12px] tracking-widest font-[500] ">
            {props.rating || "NaN"}
          </span>
          <p className=" group-hover:flex hidden " >/5.0</p>
        </p>
      </div>
      <img
        src={props.image || projectPicture}
        alt="project card image"
        className="project-card-image w-full "
      />
    </div>
    <h2 className="project-title text-[14px] min-h-[40px] max-h-[60px] font-[600] ">{props.title}</h2>
    <p className="project-description text-[10px] leading-[150%] mb-[8px] ">
      {props.description}
    </p>
    <div className="project-date-and-button flex justify-between items-center ">
      <p className="project-date text-[10px] leading-[150%] p-[5px] bg-pale-blue-grey ">
        {props.date}
      </p>
      <Link
        className=" flex gap-[5px] md:text-[14px] w-fit text-[12px] "
        to=""
        style={{ color: "#0080ff" }}
      >
        View <img className=" w-[24px] " src={RightArrow} alt="right arrow" />
      </Link>
    </div>
  </div>
);

export default ProjectCard;
