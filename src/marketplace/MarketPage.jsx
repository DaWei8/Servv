/* eslint-disable react/prop-types */
import Footer from "../components/footer/Footer";
import NavBar from "../components/navBar/NavBar";
import searchIcon from "../assets/icons/search-icon.svg";
import "./MarketPage.scss";
import Dropdown from "../components/Dropdown/Dropdown";
import { Link } from "react-router-dom";
import { projectContent } from "../data/Datasets";
import MProjectCard from "./components/MProjectCard";

const MarketPage = () => {
  return (
    <div className=" flex flex-col mt-[80px] max-w-[100vw] ">
      <NavBar />
      <div className="flex flex-col bg-primary-bg-color-blue pt-[100px] justify-center items-center pb-[40px] gap-[50px] text-primary-text-color-white ">
        <div className=" flex flex-col gap-[10px] items-center ">
          <h1 className=" text-[48px] font-[600] ">
            Nigeria’s No.1 Artisan Marketplace
          </h1>
          <p className=" text-[14px] ">Find any local artisan near you</p>
        </div>
        <div className=" text-primary-text-color-black flex flex-auto ">
          <SearchBar />
        </div>
      </div>
      <div className=" flex flex-col pt-[60px] gap-[20px] hidden ">
        <div className=" flex flex-auto mx-auto ">
          <MarketplaceSearchBar />
        </div>
        <div className=" container mx-auto flex flex-col gap-[20px] h-[200px] ">
          <MarketPageProjectSection
            categoryTitle={"Skill Category Title"}
            projectList={projectContent.map((index, content) => {
              <MProjectCard
                key={index}
                rating={content.rating}
                description={content.description}
                title={content.title}
                image={content.image}
                date={content.date}
              />;
            })}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MarketPage;

const SearchBar = () => (
  <div className="flex gap-[6px] max-w-[600px] flex-row-reverse md:flex-row flex-auto w-full ">
    <div className="relative flex rounded-[5px] h-[50px] overflow-hidden flex-auto min-w-[150px] ">
      <input
        type="text"
        placeholder="Search..."
        className=" bg-pale-blue-grey flex flex-auto w-full h-[50px] px-[10px] "
      />
      <button className="flex items-center w-[50px] h-[50px] absolute right-0 ">
        <img src={searchIcon} alt="Search Icon" className="mx-auto  " />
      </button>
    </div>
    <Dropdown />
  </div>
);

const MarketplaceSearchBar = () => (
  <div className=" flex gap-[100px] ">
    <p className=" pb-[20px] ">Home Services</p>
    <p className=" pb-[20px] ">Local Shops</p>
    <p className=" pb-[20px] ">Local Services</p>
    <p className=" pb-[20px] ">Rare Services</p>
    <Link
      to="/artisanPage"
      className=" bg-primary-bg-color-blue px-[20px] rounded-[4px] flex items-center justify-center   "
    >
      <p className=" text-primary-text-color-white ">Create job request</p>
    </Link>
  </div>
);

const MarketPageProjectSection = (props) => {
  return (
    <div className=" flex flex-col gao-[20px] ">
      <div className=" flex justify-between items-center ">
        <h2 className=" text-[24px] font-[500] ">{props.categoryTitle}</h2>
        <Link>
          <p>Explore Category</p>
        </Link>
      </div>
      <div className=" pt-[20px] pb-[40px] flex ">{props.projectList}</div>
    </div>
  );
};
