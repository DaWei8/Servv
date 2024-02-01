/* eslint-disable react/prop-types */
import { projectContent } from "../../data/Datasets";
import ProjectCard from "../components/ProjectCard";

const Projects = (props) => {
  return (
    <div className="_projects">
      <div className=" flex flex-col gap-[20px] ">
        <h2 className=" text-[20px] font-[600] p-[10px] rounded-[8px] bg-pale-blue-grey  text-primary-text-color-black ">
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
};

export default Projects;
