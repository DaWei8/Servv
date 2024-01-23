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
    <div className=" flex flex-col flex-auto w-auto ">
      <MarketPlaceHero />
      <div className=" flex flex-col pt-[60px] gap-[20px] ">
        <div className=" flex flex-auto mx-auto ">
          <div className=" flex gap-[50px] items-center ">
            <div
              className=" nav-link h-[50px] flex flex-col items-center "
              onClick={homeSelection}
            >
              <p>Home Services</p>
              {navSelection.homeServices == true ? (
                <div className=" w-[60px] h-[4px] rounded-[10px] mt-[8px] bg-primary-bg-color-blue " />
              ) : (
                <div className=" hidden "></div>
              )}
            </div>
            <div
              className=" nav-link h-[50px]  flex flex-col items-center  "
              onClick={localShopsSelection}
            >
              <p>Local Shops</p>
              {navSelection.localShops == true ? (
                <div className=" w-[60px] h-[4px] rounded-[10px] mt-[8px] bg-primary-bg-color-blue " />
              ) : (
                <div className=" hidden "></div>
              )}
            </div>
            <div
              className=" nav-link h-[50px] flex flex-col items-center  "
              onClick={localServicesSelection}
            >
              <p>Local Services</p>
              {navSelection.localServices == true ? (
                <div className=" w-[60px] h-[4px] rounded-[10px] mt-[8px] bg-primary-bg-color-blue " />
              ) : (
                <div className=" hidden "></div>
              )}
            </div>
            <div
              className=" nav-link h-[50px]  flex flex-col items-center  "
              onClick={rareServiceSelection}
            >
              <p>Rare Services</p>
              {navSelection.rareServices == true ? (
                <div className=" w-[60px] h-[4px] rounded-[10px] mt-[8px] bg-primary-bg-color-blue " />
              ) : (
                <div className=" hidden "></div>
              )}
            </div>
            <Link
              to="/artisanPage"
              className=" bg-primary-bg-color-blue px-[20px] h-[50px] rounded-[4px] flex items-center justify-center   "
            >
              <div className=" text-primary-text-color-white ">
                Create job request
              </div>
            </Link>
          </div>
        </div>
        {navSelection.homeServices == true ? (
          <SkillServiceSection title="Home Services Category Title" />
        ) : navSelection.localServices == true ? (
          <SkillServiceSection title="Local Services Category Title" />
        ) : navSelection.localShops == true ? (
          <SkillServiceSection title="Local Shops Category Title" />
        ) : navSelection.rareServices == true ? (
          <SkillServiceSection title="Rare Services Category Title" />
        ) : (
          <SkillServiceSection />
        )}
      </div>
    </div>
  );
};

export default MarketHomePage;
