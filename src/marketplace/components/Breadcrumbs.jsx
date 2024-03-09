/* eslint-disable react/prop-types */
import backButton from "../../assets/icons/prev-arrow.svg";
import rightArrow from "../../assets/icons/arrow-down.svg";
import { Link } from "react-router-dom";

export default function Breadcrumbs(props) {
  return (
    <div className=" max-w-[1134px] flex items-center gap-[10px] flex-auto w-full ">
      <Link to="../">
        <img className=" w-[20px] " src={backButton} alt="back button" />
      </Link>
      <h2 className=" md:text-[12px] text-[10px] text-primary-text-color-black font-[500] ">
        {props.heading}
      </h2>
      <img className="right-arrow" src={rightArrow} alt="back button" />
      <div className=" md:text-[12px] text-[10px] ">{props.childLink}</div>
      <img className="right-arrow" src={rightArrow} alt="back button" />
      <div className=" md:text-[12px] text-[10px] ">{props.grandChildLink}</div>
    </div>
  );
}
