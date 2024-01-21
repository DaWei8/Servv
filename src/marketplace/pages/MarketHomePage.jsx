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
            <p className=" nav-link py-[20px] " onClick={homeSelection}>
              Home Services
            </p>
            <p className=" nav-link py-[20px] " onClick={localShopsSelection}>
              Local Shops
            </p>
            <p
              className=" nav-link py-[20px] "
              onClick={localServicesSelection}
            >
              Local Services
            </p>
            <p className=" nav-link py-[20px] " onClick={rareServiceSelection}>
              Rare Services
            </p>
            <Link
              to="/artisanPage"
              className=" bg-primary-bg-color-blue px-[20px] h-[50px] rounded-[4px] flex items-center justify-center   "
            >
              <p className=" text-primary-text-color-white ">
                Create job request
              </p>
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
