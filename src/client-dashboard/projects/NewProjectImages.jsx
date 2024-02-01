import { Link } from "react-router-dom";
import addIcon from "../../assets/icons/add.svg";
import cancelRed from "../../assets/icons/cancel-red.svg";
import newProjectImage from "../../assets/images/new-project-image.png";


export default function NewProjectImages () {
  return (
    <div className="min-w-[320px] flex flex-col flex-auto gap-[10px] ">
      <h2 className=" text-[18px] font-[600] ">Project Images</h2>
      <p>Maximum of four Images that are related to your project</p>
      <div className=" flex gap-[10px] ">
        <div className=" relative ">
          <img src={newProjectImage} alt="primary project image" />
          <img
            className=" absolute w-[24px] p-[5px] rounded-[20px] h-[24px] bg-red-500 right-[20px] top-[20px] "
            src={cancelRed}
            alt="cancel icon"
          />
        </div>
        <div className=" flex flex-col gap-[10px] ">
          <div className=" relative ">
            <img
              className=" w-[75px] h-[75px] "
              src={newProjectImage}
              alt="primary project image"
            />
            <img
              className=" absolute w-[24px] p-[5px] rounded-[20px] h-[24px] bg-red-500 right-[10px] top-[10px] "
              src={cancelRed}
              alt="cancel icon"
            />
          </div>
          <div className=" relative ">
            <img
              className=" w-[75px] h-[75px] "
              src={newProjectImage}
              alt="primary project image"
            />
            <img
              className=" absolute w-[24px] p-[5px] rounded-[20px] h-[24px] bg-red-500 right-[10px] top-[10px] "
              src={cancelRed}
              alt="cancel icon"
            />
          </div>
          <div className=" relative w-[75px] h-[75px]  ">
            <img
              className=" opacity-5 "
              src={newProjectImage}
              alt="primary project image"
            />
            <img
              className=" w-[24px] p-[5px] rounded-[20px] h-[24px] bg-primary-button-color-blue absolute right-[10px] top-[10px] "
              src={addIcon}
              alt="cancel icon"
            />
          </div>
        </div>
      </div>
      <div>
        <Link className=" w-fit flex items-center primary-button-blue gap-[10px] ">
          <img className=" w-[14px] " src={addIcon} alt="image for project" />
          <p className=" text-primary-text-color-white ">Add picture</p>
        </Link>
      </div>
    </div>
  );
}