/* eslint-disable react/prop-types */
import "./ArtisanProfile.scss";
import { Link } from "react-router-dom";
// import { useState } from "react";
import "./ArtisanProfile.scss";
import { projectContent } from "../../data/Datasets";
import RightArrow from "../../assets/icons/arrow-right-alt-rounded.svg";
import StarIcon from "../../assets/icons/star.svg";
import addIcon from "../../assets/icons/add.svg";
import GetStartedSection from "../../components/getStarted/GetStartedSection";

const ArtisanProfile = () => {
  return (
    <div className="artisan-profile">
      <div className="artisan-profile-container">
        <h1 className="artisan-profile-heading">Work Profile(s)</h1>
        {/* <ArtisanCreateWorkProfile /> */}
        <ArtisanProfileContent />
      </div>
    </div>
  );
};

export default ArtisanProfile;

const ArtisanCreateWorkProfile = () => {
  return (
    <div className="artisan-create-work-profile">
      <GetStartedSection />
    </div>
  );
};

const FavoriteProjects = () => (
  <div className="favorite-projects">
    <div className="favorite-projects-container">
      <h2 className="heading">Favorite Projects</h2>
      <p className="supporting-text">
        (These Projects will be shown first to clients checking your profile)
      </p>
      <div className="favorite-projects-collection">
        <div className="favorite-projects-collection-cards">
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
        <ProfileButtonType buttonLink="/" buttonContent="Add Project" />
      </div>
    </div>
  </div>
);

const PortfolioProjects = () => (
  <div className="portfolio-projects">
    <div className="portfolio-projects-container">
      <h2 className="heading">Portfolio (or CV)</h2>
      <div className="portfolio-projects-collection">
        <div className="portfolio-projects-collection-cards">
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
        <ProfileButtonType buttonLink="/" buttonContent="Add Project" />
      </div>
    </div>
  </div>
);

const ProofofWork = () => (
  <div className="proof-projects">
    <div className="proof-projects-container">
      <h2 className="heading">Proof of Work</h2>
      <div className="proof-projects-collection">
        <div className="proof-projects-collection-cards">
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
        <ProfileButtonType buttonLink="/" buttonContent="Add Proof" />
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

const ProfileButtonType = (props) => {
  return (
    <Link to={props.buttonLink}>
      <div className="profile-button-type">
        <img src={addIcon} alt="add icon" />
        <p className="profile-button-text">{props.buttonContent}</p>
      </div>
    </Link>
  );
};

const ArtisanProfileContent = () => {
  return (
    <div className="artisan-profile-content">
      <FavoriteProjects />
      <ProofofWork />
      <PortfolioProjects />
    </div>
  );
};
