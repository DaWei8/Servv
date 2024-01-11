/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import RightArrow from "../../assets/icons/arrow-right-alt-rounded.svg";
import StarIcon from "../../assets/icons/star.svg";
// import "./components.scss"

const ProjectCard = (props) => (
  <div className="flex lg:max-w-[200px] md:max-w-[180px] max-w-[180px] w-[150px] md:w-auto p-[10px] flex-auto rounded-[10px] shadow-3xl flex-col ">
    <div className="project-image-and-rating relative flex mb-[6px] ">
      <div className="project-card-rating absolute bottom-0 text-primary-text-color-white rounded-tr-[3px] flex flex-col gap-[1px] bg-[#1846a3b9] w-[45px] h-[45px] items-center justify-center ">
        <img src={StarIcon} alt="" className="project-star w-[16px] " />
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
        className="project-card-image"
      />
    </div>
    <h2 className="project-title text-[16px] font-[600] ">{props.title}</h2>
    <p className="project-description text-[10px] leading-[150%] mb-[8px] ">
      {props.description}
    </p>
    <div className="project-date-and-button flex justify-between items-center ">
      <p className="project-date text-[10px] leading-[150%] p-[5px] bg-pale-blue-grey ">
        {props.date}
      </p>
      <Link
        className=" flex gap-[5px] md:text-[16px] w-fit text-[12px] "
        to=""
        style={{ color: "#0080ff" }}
      >
        View <img src={RightArrow} alt="right arrow" />
      </Link>
    </div>
  </div>
);

export default ProjectCard;
