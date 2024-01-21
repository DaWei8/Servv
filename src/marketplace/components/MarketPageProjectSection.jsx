/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const MarketPageProjectSection = (props) => {
  return (
    <div className={props.bgSettings}>
      <div className="max-w-[1134px]">
        <div className=" flex justify-between items-center ">
          <h2 className=" text-[24px] font-[600]  ">{props.categoryTitle}</h2>
          <Link to={props.exploreLink}>
            <p>Explore Category</p>
          </Link>
        </div>
        <div className=" pt-[20px] pb-[40px] gap-[20px] justify-between flex flex-auto ">
          {props.projectList}
        </div>
      </div>
    </div>
  );
};

export default MarketPageProjectSection;
