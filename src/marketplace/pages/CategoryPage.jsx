import { useState } from "react";
import MarketPlaceHero2 from "../components/MarketPlaceHero2";
// import { Link } from "react-router-dom";
import CategoryServiceSection from "../components/CategoryServicesSection";
// import SkillServiceSection from "../components/SkillServiceSection";
import Breadcrumbs from "../components/Breadcrumbs";

export default function CategoryPage() {
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
      <MarketPlaceHero2 />
      <div className=" flex flex-col pt-[40px] gap-[20px]  ">
        <div className=" flex flex-auto justify-center w-full ">
          <Breadcrumbs heading={"Home services"} childLink={"Skill Category Title"} />
        </div>
        <CategoryServiceSection />
      </div>
    </div>
  );
}
