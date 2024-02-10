/* eslint-disable react/prop-types */

import RecentTransactions from "../components/RecentTransactions";
import searchIcon from "../../assets/icons/search-icon.svg";
import DashboardBalance from "./DashboardBalance";
import AdvertSection from "../components/AdvertCard";
import { projectContent } from "../../data/Datasets";
import ProjectCard from "../components/ProjectCard";

const ClientDashboard = () => {
  return (
    <div className="flex flex-col flex-auto w-screen ">
      <h1 className=" text-[24px] text-main-color font-[600] mb-[20px] ">
        Dashboard
      </h1>
      <SearchBar />
      <div className="flex flex-row gap-[20px] md:mt-0 mt-[10px] h-full  ">
        <div className=" flex flex-col gap-[20px]  ">
          <DashboardBalance />
          <Projects title="Recent Projects" />
          <RecentTransactions />
        </div>
        <AdvertSection />
      </div>
    </div>
  );
};

export default ClientDashboard;

const SearchBar = () => (
  <div className=" flex md:hidden relative h-[50px]  ">
    <input
      type="text"
      placeholder="Search"
      className=" bg-[#B4CCFC1A] text-primary-text-color-black rounded-[5px] w-full py-[10px] px-[15px] flex "
    ></input>
    <img
      src={searchIcon}
      onClick={null}
      className=" w-[20px] h-[20px] absolute right-[10px] top-[15px] flex self-center  "
      alt="Client-search Icon"
    />
  </div>
);

const Projects = (props) => (
  <div className="_projects">
    <div className=" flex flex-col gap-[20px] ">
      <h2 className=" text-[20px] font-[600] p-[10px] rounded-[8px] text-primary-text-color-black  ">
        {props.title}
      </h2>
      <div className="_projects-collection">
        <div className=" flex flex-wrap gap-[20px] md:justify-normal justify-center items-center ">
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
