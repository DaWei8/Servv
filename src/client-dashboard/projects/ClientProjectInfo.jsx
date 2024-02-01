/* eslint-disable react/prop-types */
// import { projectContent, clientProfileInfo } from "../../data/Datasets";
import Projects from "./Projects";
import ProjectChildPage from "./ProjectChildPage";
import ProjectNav from "./ProjectNav";

export default function ClientProjectInfo () {
  return (
    <ProjectChildPage
      childLink={"Project Name"}
      childContent={
        <div className="flex flex-col flex-auto ">
          <div className=" flex items-center "></div>
          <ProjectNav />
          <div className=" flex flex-col py-[20px] gap-[20px] ">
            <Projects title="Ongoing" />
            <Projects title="Past Jobs" />
          </div>
        </div>
      }
    />
  );
}

