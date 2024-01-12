/* eslint-disable react/prop-types */
// import { useState } from "react";
import ProjectCard from "./ProjectCard";

// import "./components.scss"
// import ProfileButtonType from "./ProfileButtonType";

const ProjectsCategory = (props) => {

  // const [showState, setShowState] = useState(false);

  return (
    <div className="project-category ">
      <div className="flex flex-col gap-[20px] ">
        <h2 className="text-[20px] font-[600] p-[10px] bg-pale-blue-grey  text-primary-text-color-black  ">
          {props.heading}
        </h2>
        <div className="project-category-collection">
          <div className=" flex flex-wrap gap-[20px] ">
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
          {/* <ProfileButtonType buttonLink="/" buttonContent="Add Project" /> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCategory;
