/* eslint-disable react/prop-types */
// import "./ClientProfile.scss";
// import { useState } from "react";
// import "./ClientProfile.scss";
import { projectContent, clientProfileInfo } from "../../data/Datasets";
import AdvertSection from "../components/AdvertCard";
import ProjectsCategory from "../components/ProjectCategory";
import TextBoxCard from "../components/TextBoxCard";
import TextBoxCardMultipleItems from "../components/TextBoxCardMultipleItems";

// import GetStartedSection from "../../components/getStarted/GetStartedSection";

const ClientProfile = () => {
  return (
    <div className="Client-profile w-full ">
      <div className="Client-profile-container">
        <h1 className="text-[24px] text-main-color font-[600] mb-[20px] ">
          Work Profile(s)
        </h1>
        <div className=" flex flex-row gap-[20px] ">
          <div className=" flex flex-col gap-[20px] ">
            {/* <ClientCreateWorkProfile /> */}
            <ClientProfileContent />
            <ClientCreateWorkProfile />
          </div>
          <AdvertSection />
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;

const ClientCreateWorkProfile = () => {
  return (
    <div className="Client-create-work-profile">
      {/* <GetStartedSection /> */}
    </div>
  );
};

const ClientProfileContent = () => {
  return (
    <div className="Client-profile-content flex flex-col gap-[20px] ">
      <ClientProfileInformation />
      <ProjectsCategory
        heading="Favourite Projects"
        projectContent={projectContent}
      />
      <ProjectsCategory
        heading="Proof of Work"
        projectContent={projectContent}
      />
      <ProjectsCategory
        heading="Portfolio Projects"
        projectContent={projectContent}
      />
    </div>
  );
};

const ClientProfileInformation = () => {
  return (
    <div className="Client-profile-information flex-3 ">
      <div className="Client-profile-information-container flex gap-[10px] flex-col ">
        <h2 className="  text-[20px] font-[600] text-primary-text-color-black  ">
          About Your Work
        </h2>
        <div className=" flex md:flex-row flex-wrap gap-[20px] justify-between  ">
          <div className="relative flex-col flex w-[100%] rounded-[10px] md:w-[250px] overflow-hidden object-fill ">
            <img
              src={ClientProfileInfo[0].picture}
              alt="profile image"
              className="profile-image  "
            />
            <p className=" absolute text-primary-text-color-white bottom-[0px] bg-[#0a0a0c7e] p-[5px] leading-5 ">
              You can only change your profile picture once in a year(or 6
              months)
            </p>
          </div>
          <div className="gap-[10px] flex-col lg:w-[350px] flex-auto flex ">
            <h2 className="text-[20px] font-[600] text-primary-text-color-black">
              Company Information
            </h2>
            <div className=" flex flex-col gap-[10px] ">
              <TextBoxCard title="Name" content={ClientProfileInfo[0].name} />
              <TextBoxCard
                title="Work Field"
                content={ClientProfileInfo[0].workField}
              />

              <TextBoxCardMultipleItems
                title="Location(s)"
                content={ClientProfileInfo[0].location}
              />
            </div>
          </div>
          <div className=" gap-[10px] flex-auto lg:w-[350px] flex-col flex">
            <h2 className="text-[20px] font-[600] text-primary-text-color-black">
              Skill Description
            </h2>
            <div className="flex flex-col gap-[10px] ">
              <TextBoxCardMultipleItems
                title="Skill Offered"
                content={ClientProfileInfo[0].skills}
              />
              <TextBoxCard
                title="What you Offer"
                content={ClientProfileInfo[0].description}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
