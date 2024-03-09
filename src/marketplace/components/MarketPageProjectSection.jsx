/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import rightArrow from "../../assets/icons/arrow-down.svg";

const MarketPageProjectSection = (props) => {
  return (
    <div className=" flex flex-col gap-[5px] w-full items-center ">
      <div className=" flex flex-col gap-[5px]  ">
        <div className=" flex justify-between items-center ">
          <h2 className=" text-[16px] font-[600]  ">{props.categoryTitle}</h2>
          <Link
            to={props.exploreLink}
            className=" flex flex-row items-center gap-[4px] "
          >
            <p className=" text-[12px] ">Explore category</p>
            <img className="right-arrow" src={rightArrow} alt="back button" />
          </Link>
        </div>
        <div className=" md:gap-[10px] gap-[8px] justify-between flex flex-auto flex-wrap ">
          {props.projectList}
        </div>
      </div>
    </div>
  );
};

export default MarketPageProjectSection;
