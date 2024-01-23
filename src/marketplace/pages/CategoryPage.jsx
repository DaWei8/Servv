import MarketPlaceHero2 from "../components/MarketPlaceHero2";
import CategoryServiceSection from "../components/CategoryServicesSection";
import Breadcrumbs from "../components/Breadcrumbs";

export default function CategoryPage() {
  return (
    <div className=" flex flex-col flex-auto w-auto ">
      <MarketPlaceHero2 />
      <div className=" flex flex-col pt-[40px] gap-[20px]  ">
        <div className=" flex flex-auto justify-center w-full ">
          <Breadcrumbs
            heading={"Home services"}
            childLink={"Skill Category Title"}
          />
        </div>
        <CategoryServiceSection />
      </div>
    </div>
  );
}
