/* eslint-disable react/prop-types */
// import "./ArtisanProjects.scss";
// import { projectContent } from "../../data/Datasets";
import { useState, useEffect } from "react";
import axios from "axios";
import ProjectCard from "../components/ProjectCard";

const ArtisanProjects = () => {
  return (
    <div className="artisan-projects flex flex-auto">
      <div className="artisan-projects-container flex flex-auto flex-col ">
        <h1 className="text-[24px] text-main-color font-[600] mb-[20px]">
          Projects
        </h1>
        <PorjectNav />
        <div className=" flex flex-col gap-[20px] w-full ">
          <Projects title="My Work" />
          <Projects title="Avaialable Jobs" />
        </div>
      </div>
    </div>
  );
};

export default ArtisanProjects;

const PorjectNav = () => {
  return <div className="project-nav"></div>;
};

const Projects = (props) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/projects")
      .then(response => setProjects(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="_projects flex flex-auto w-full ">
      <div className=" flex flex-auto flex-col gap-[20px] ">
        <h2 className=" flex flex-auto text-[20px] font-[600] p-[10px] text-primary-text-color-black  ">
          {props.title}
        </h2>
        <div className="_projects-collection">
          <div className=" flex flex-wrap gap-[20px] md:justify-normal justify-center items-center  ">
            {projects.map(project => (
              <ProjectCard
                key={project._id}
                rating={project.rating}
                image={`${(project.displayImage)}`}
                title={project.title}
                description={project.description}
                date={project.date.slice(0,10)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
