/* eslint-disable react/prop-types */
import "./ArtisanProfile.scss";
import { Link } from "react-router-dom";
// import { useState } from "react";
import "./ArtisanProfile.scss";
import { projectContent, artisanProfileInfo } from "../../data/Datasets";
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
        <ArtisanCreateWorkProfile />
      </div>
    </div>
  );
};

export default ArtisanProfile;

const ArtisanCreateWorkProfile = () => {
  return (
    <div className="artisan-create-work-profile">
      {/* <GetStartedSection /> */}
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
    <Link className="profile-button-type" to={props.buttonLink}>
      {/* <div className=""> */}
      <div className="add-button-icon">
        <img src={addIcon} alt="add icon" />
      </div>
      <p className="profile-button-text">{props.buttonContent}</p>
      {/* </div> */}
    </Link>
  );
};

const ArtisanProfileContent = () => {
  return (
    <div className="artisan-profile-content">
      <ArtisanProfileInformation />
      <FavoriteProjects />
      <ProofofWork />
      <PortfolioProjects />
    </div>
  );
};

const ArtisanProfileInformation = () => {
  return (
    <div className="artisan-profile-information">
      <div className="artisan-profile-information-container">
        <h2 className="heading">About Your Work</h2>
        <div className="artisan-profile-information-content">
          <div className="artisan-profile-picture-section">
            <img
              src={artisanProfileInfo[0].picture}
              alt="profile image"
              className="profile-image"
            />
            <p>
              You can only change your profile picture once in a year(or 6
              months)
            </p>
          </div>
          <div className="artisan-profile-company-section">
            <h2 className="artisan-profile-company-section-heading">
              Company Information
            </h2>
            <div className="artisan-profile-company-section-content">
              <TextBoxCard title="Name" content={artisanProfileInfo[0].name} />
              <TextBoxCard
                title="Work Field"
                content={artisanProfileInfo[0].workField}
              />

              <TextBoxCardMultipleItems
                title="Location(s)"
                content={artisanProfileInfo[0].location}
              />
            </div>
          </div>
          <div className="artisan-profile-skill-section">
            <h2 className="artisan-profile-skill-section-heading">
              Skill Description
            </h2>
            <div className="artisan-profile-skill-section-content">
            <TextBoxCardMultipleItems
                title="Skill Offered"
                content={artisanProfileInfo[0].skills}
              />
              <TextBoxCard
                title="What you Offer"
                content={artisanProfileInfo[0].description}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// const ArtisanProfileInformation = (props) => {
//   return (
//     <div className="artisan-profile-information">
//       <div className="artisan-profile-information-container">
//         <h2 className="heading">About You</h2>
//         <div className="artisan-profile-information-content">
//           <div className="artisan-profile-picture-section">
//             <img
//               src={props.picture}
//               alt="profile image"
//               className="profile-image"
//             />
//             <p>
//               You can only change your profile picture once in a year(or 6
//               months)
//             </p>
//           </div>
//           <div className="artisan-profile-company-section">
//             <h2 className="artisan-profile-company-section-heading">
//               Company Information
//             </h2>
//             <div className="artisan-profile-company-section-content">
//               <TextBoxCard title="Name" content={props.name} />
//               <TextBoxCard title="Work Field" content={props.work} />
//               <TextBoxCard title="Location(s)" content={props.location} />
//             </div>
//           </div>
//           <div className="artisan-profile-skill-section">
//             <h2 className="artisan-profile-skill-section-heading">
//               Skill Description
//             </h2>
//             <div className="artisan-profile-skill-section-content">
//               <TextBoxCard title="Skill Offered" content={props.skill} />
//               <TextBoxCard title="What you Offer" content={props.description} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const TextBoxCard = (props) => {
  return (
    <div className="text-box-card">
      <h3 className="text-box-card-heading">{props.title}</h3>
      <p className="text-box-card-content">{props.content}</p>
    </div>
  );
};

const TextBoxCardMultipleItems = (props) => {
  return (
    <div className="text-box-card-multiple">
      <h3 className="text-box-card-multiple-heading">{props.title}</h3>
      <div className="text-box-card-multiple-content">
        {props.content.map((content, index) => (
          <div className="text-box-card-multiple" key={index}>
            <p>{content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
