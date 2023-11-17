import ProjectCard from "./ProjectCard";
import { projectContent } from "../../data/Datasets";
import "./components.scss"

const RecentProjects = () => (
  <div className="recent-projects">
    <div className="recent-projects-container">
      <h2 className="heading">Recent Projects</h2>
      <div className="recent-projects-collection">
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
);


export default RecentProjects;