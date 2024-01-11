/* eslint-disable react/prop-types */

import ProfileButtonType from "./ProfileButtonType";
import ProjectCard from "./ProjectCard";

// import "./components.scss"

const ProjectsCategory = (props) => (
  <div className="project-category">
    <div className="project-category-container">
      <h2 className="heading">{props.heading}</h2>
      <p className="supporting-text">
        {props.supportText}
      </p>
      <div className="project-category-collection">
        <div className="project-category-collection-cards">
          {props.projectContent.map((content, index) => (
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
        <ProfileButtonType buttonLink="/" buttonContent="Add Project" />
      </div>
    </div>
  </div>
);



export default ProjectsCategory;


const Projects = (props) => (
  <div className="_projects">
    <div className=" flex flex-col gap-[20px] ">
      <h2 className=" text-[20px] font-[600] p-[10px] rounded-[8px] bg-pale-blue-grey  text-primary-text-color-black  ">
        {props.title}
      </h2>
      <div className="_projects-collection">
        <div className=" flex flex-wrap gap-[20px] ">
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
