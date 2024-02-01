/* eslint-disable react/prop-types */
import backButton from "../../assets/icons/prev-arrow.svg";
import rightArrow from "../../assets/icons/arrow-down.svg";
import { Link } from "react-router-dom";

const ProjectChildPage = (props) => {
  return (
    <div className=" flex flex-col w-full gap-[20px] ">
      <div className=" flex items-center gap-[10px] ">
        <Link to="../">
          <img className=" w-[30px] " src={backButton} alt="back button" />
        </Link>
        <h2 className=" text-[20px] text-main-color font-[600] ">Projects</h2>
        <img className="right-arrow" src={rightArrow} alt="back button" />
        <p>{props.childLink}</p>
      </div>
      <div className="">{props.childContent}</div>
    </div>
  );
};

export default ProjectChildPage;
