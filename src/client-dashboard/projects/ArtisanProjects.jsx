/* eslint-disable react/prop-types */
import "./ArtisanProjects.scss";
import { projectContent } from "../../data/Datasets";
import RightArrow from "../../assets/icons/arrow-right-alt-rounded.svg";
import StarIcon from "../../assets/icons/star.svg";
import { Link } from "react-router-dom";

const ArtisanProjects = () => {
  return (
    <div className="artisan-projects">
      <div className="artisan-projects-container">
        <h1 className="artisan-projects-heading">Projects</h1>
        <PorjectNav />
        <div className="artisan-projects-content">
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

const Projects = (props) => (
  <div className="_projects">
    <div className="_projects-container">
      <h2 className="heading">{props.title}</h2>
      <div className="_projects-collection">
        <div className="_projects-collection-cards">
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

const ProjectCard = (props) => (
  <div className="project-card">
    <div className="project-card-container">
      <div className="project-image-and-rating">
        <div className="project-card-rating">
          <img src={StarIcon} alt="" className="project-star" />
          <p className="rating">
            <span>{props.rating}</span>/5.0
          </p>
        </div>
        <img
          src={props.image}
          alt="project card image"
          className="project-card-image"
        />
      </div>
      <h2 className="project-title">{props.title}</h2>
      <p className="project-description">{props.description}</p>
      <div className="project-date-and-button">
        <p className="project-date">{props.date}</p>
        <button>
          <Link to="" style={{ color: "#0080ff" }}>
            View <img src={RightArrow} alt="right arrow" />
          </Link>
        </button>
      </div>
    </div>
  </div>
);
