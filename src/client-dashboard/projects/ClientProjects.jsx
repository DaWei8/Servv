/* eslint-disable react/prop-types */
// import "./ClientProjects.scss";
import { projectContent } from "../../data/Datasets";
import ProjectCard from "../components/ProjectCard";

const ClientProjects = () => {
  return (
    <div className="Client-projects">
      <div className="Client-projects-container">
        <h1 className="text-[24px] text-main-color font-[600] mb-[20px]">
          Projects
        </h1>
        <PorjectNav />
        <div className=" flex flex-col gap-[20px] ">
          <Projects title="My Work" />
          <Projects title="Avaialable Jobs" />
        </div>
      </div>
    </div>
  );
};

export default ClientProjects;

const PorjectNav = () => {
  return <div className="project-nav"></div>;
};

const Projects = (props) => (
  <div className="_projects">
    <div className=" flex flex-col gap-[20px] ">
      <h2 className=" text-[20px] font-[600] p-[10px] rounded-[8px] bg-pale-blue-grey  text-primary-text-color-black  ">
        {props.title}
      </h2>
      <div className="_projects-collection">
        <div className=" flex flex-wrap gap-[20px] md:justify-normal justify-center items-center  ">
          {projectContent.map((content, index) => (
            <ProjectCard
              key={index}
              rating={content.rating}
              image={content.displayImage}
              title={content.title}
              description={content.description}
              date={content.date}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);
