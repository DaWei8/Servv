/* eslint-disable react/prop-types */
import "./ArtisanProfile.scss";
// import { useState } from "react";
import "./ArtisanProfile.scss";
import { projectContent, artisanProfileInfo } from "../../data/Datasets";
import ProjectsCategory from "../components/ProjectCategory";
import TextBoxCard from "../components/TextBoxCard";
import TextBoxCardMultipleItems from "../components/TextBoxCardMultipleItems";

// import GetStartedSection from "../../components/getStarted/GetStartedSection";

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


const ArtisanProfileContent = () => {
  return (
    <div className="artisan-profile-content">
      <ArtisanProfileInformation />
      <ProjectsCategory heading="Favourite Projects" projectContent={projectContent} />
      <ProjectsCategory heading="Proof of Work" projectContent={projectContent} />
      <ProjectsCategory heading="Portfolio Projects" projectContent={projectContent} />
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
