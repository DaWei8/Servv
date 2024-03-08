/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
// import { useAuth } from "../../authentication/context/AuthContext";
import axios from "axios";

const Projects = (props) => {
  const userId = localStorage.getItem("userId");
  const [storedProjects, setStoredProjects] = useState([]);
  const url = "http://localhost:5000/api/projects";

  useEffect(() => {
    axios
      .get(url, userId)
      .then((response) => setStoredProjects(response.data))
      .catch((error) => console.log(error));
  }, []);

  console.log(userId, storedProjects);

  return (
    <div className="_projects">
      <div className=" flex flex-col gap-[20px] ">
        <h2 className=" text-[18px] font-[600] p-[10px] rounded-[8px] bg-pale-blue-grey  text-primary-text-color-black ">
          {props.title}
        </h2>
        <div className="_projects-collection">
          <div className=" flex flex-wrap gap-[20px] md:justify-normal justify-start items-center  ">
            {storedProjects.map((content, index) => (
              <ProjectCard
                key={index}
                rating={content.rating}
                image={content.image}
                title={content.title}
                description={content.description}
                date={content.date.slice(0, 10)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
