import ClientProjectSubSection from "../components/ClientProjectSubSection";
import NewProjectImages from "./NewProjectImages";
import ProjectChildPage from "./ProjectChildPage";
import ProjectStatusCard from "./ProjectStatusCard";
import projectImage from "../../assets/images/project-picture-frame.png";
import NewProjectRequirements from "./NewProjectRequirements";
import NewProjectDescription from "./NewProjectDescription";


const ClientProjectNewProject = () => {
  return (
    <ProjectChildPage
      childLink={"Project Name"}
      childContent={
        <div className="flex flex-col flex-auto ">
          <div className=" flex flex-auto flex-col py-[20px] gap-[20px] ">
            <ClientProjectSubSection
              title="Project Name"
              childrenContent={
                <div className=" flex flex-wrap flex-auto flex-row gap-[20px] px-[10px] ">
                  <div className=" flex flex-1 ">
                    <NewProjectImages />
                  </div>
                  <div className=" flex flex-1 ">
                    <NewProjectDescription />
                    {/* <NewProjectRequiremen /> */}
                  </div>
                  <div className=" flex flex-1 ">
                   <NewProjectRequirements />
                  
                  </div>
                </div>
              }
            />
            <ClientProjectSubSection
              title="Project Status"
              childrenContent={
                <div className=" flex flex-wrap flex-auto flex-row gap-[10px] px-[10px] ">
                  <div className=" flex flex-1 ">
                    <ProjectStatusCard
                      rating={"4.0"}
                      image={projectImage}
                      title={"Home Refurbishing"}
                      date={"10 Dec"}
                    />
                  </div>
                </div>
              }
            />
          </div>
        </div>
      }
    />
  );
}


export default ClientProjectNewProject