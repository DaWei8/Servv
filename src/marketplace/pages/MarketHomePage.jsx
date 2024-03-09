import { Link } from "react-router-dom";
import SkillServiceSection from "../components/SkillServiceSection";
import MarketPlaceHero from "../components/MarketPlaceHero";
import { useState } from "react";

const MarketHomePage = () => {
  const [navSelection, setNavSelection] = useState({
    homeServices: true,
    localShops: false,
    localServices: false,
    rareServices: false,
  });
  const homeSelection = () =>
    setNavSelection({
      homeServices: true,
      localShops: false,
      localServices: false,
      rareServices: false,
    });
  const localShopsSelection = () =>
    setNavSelection({
      homeServices: false,
      localShops: true,
      localServices: false,
      rareServices: false,
    });
  const localServicesSelection = () =>
    setNavSelection({
      homeServices: false,
      localShops: false,
      localServices: true,
      rareServices: false,
    });
  const rareServiceSelection = () =>
    setNavSelection({
      homeServices: false,
      localShops: false,
      localServices: false,
      rareServices: true,
    });

  return (
    <div className=" flex flex-col flex-auto w-[100%] items-center  ">
      <MarketPlaceHero />
      <div className=" flex flex-col pt-[60px] gap-[20px] px-[20px] ">
        <div className=" flex flex-auto mx-auto ">
          <div className=" flex gap-[20px] items-center justify-center flex-auto flex-wrap ">
            <div
              className=" nav-link h-fit justify-start flex flex-col items-center  "
              onClick={homeSelection}
            >
              <p className="text-[12px]">Home Services</p>
              {navSelection.homeServices == true ? (
                <UnderLine />
              ) : (
                <div className=" hidden "></div>
              )}
            </div>
            <div
              className=" nav-link h-fit justify-start flex flex-col items-center  "
              onClick={localShopsSelection}
            >
              <p className="text-[12px]">Local Shops</p>
              {navSelection.localShops == true ? (
                <UnderLine />
              ) : (
                <div className=" hidden "></div>
              )}
            </div>
            <div
              className=" nav-link h-fit justify-start flex flex-col items-center  "
              onClick={localServicesSelection}
            >
              <p className="text-[12px]">Local Services</p>
              {navSelection.localServices == true ? (
                <UnderLine />
              ) : (
                <div className=" hidden "></div>
              )}
            </div>
            <div
              className=" nav-link h-fit justify-start flex flex-col items-center  "
              onClick={rareServiceSelection}
            >
              <p className="text-[12px]">Rare Services</p>
              {navSelection.rareServices == true ? (
                <UnderLine />
              ) : (
                <div className=" hidden "></div>
              )}
            </div>
            <Link
              to="/clientPage/clientProjects/newproject"
              className=" bg-primary-bg-color-blue px-[10px] h-[42px] rounded-[4px] flex items-center justify-center   "
            >
              <div className=" text-[12px] text-primary-text-color-white ">
                Create job request
              </div>
            </Link>
          </div>
        </div>
        <div className=" flex w-[100%] " >
          {navSelection.homeServices == true ? (
            <SkillServiceSection title="Home Services" />
          ) : navSelection.localServices == true ? (
            <SkillServiceSection title="Local Services" />
          ) : navSelection.localShops == true ? (
            <SkillServiceSection title="Local Shops" />
          ) : navSelection.rareServices == true ? (
            <SkillServiceSection title="Rare Services" />
          ) : (
            <SkillServiceSection />
          )}
        </div>
      </div>
    </div>
  );
};

export default MarketHomePage;

const UnderLine = () => {
  return (
    <div className=" w-[30px] h-[3px] rounded-[10px] mt-[4px] bg-primary-bg-color-blue " />
  );
};
