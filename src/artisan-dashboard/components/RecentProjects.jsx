// import ProjectCard from "./ProjectCard";
import { projectContent } from "../../data/Datasets";
import ProjectCard from "./ProjectCard";
// import "./components.scss"

const RecentProjects = () => (
  <div className="flex flex-col gap-[20px]">
    <h2 className="text-[20px] font-[600] p-[10px] bg-pale-blue-grey  text-primary-text-color-black ">
      Recent Projects
    </h2>
    <div className="flex md:justify-normal flex-row flex-wrap md:gap-[20px] gap-[10px] ">
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
);

export default RecentProjects;
