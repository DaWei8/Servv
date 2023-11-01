/* eslint-disable react/prop-types */

import ProfileButtonType from "./ProfileButtonType";
import ProjectCard from "./ProjectCard";

import "./components.scss"

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