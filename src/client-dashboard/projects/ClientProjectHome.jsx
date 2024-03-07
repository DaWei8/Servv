import { Link } from "react-router-dom";
import addIcon from "../../assets/icons/add.svg";

import Projects from "./Projects";
import ProjectNav from "./ProjectNav";

const ClientProjectHome = () => {
  return (
    <div className="flex flex-col flex-auto ">
      <div className=" flex justify-between items-center ">
        <h1 className="text-[24px] text-main-color font-[600] mb-[20px]">
          Projects
        </h1>
        <Link
          to={"./newproject"}
          className=" primary-button-blue flex gap-[5px] items-center "
        >
          <img className=" w-[14px] " src={addIcon} alt=" add icon " />
          <p className=" text-primary-text-color-white ">New project</p>
        </Link>
      </div>
      <ProjectNav />
      <div className=" flex flex-col py-[20px] gap-[20px] ">
        <Projects title="All Projects" />
        {/* <Projects title="Past Jobs" /> */}
      </div>
    </div>
  );
}

export default ClientProjectHome