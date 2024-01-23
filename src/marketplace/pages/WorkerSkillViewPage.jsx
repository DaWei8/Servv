import { serviceContent } from "../../data/Datasets";
import Breadcrumbs from "../components/Breadcrumbs";
import MProjectCard from "../components/MProjectCard";
import MarketPageProjectSection2 from "../components/MarketPageProjectSection2";
import MarketPlaceHero2 from "../components/MarketPlaceHero2";
import skillImage from "../../assets/images/project-picture-frame.png";
import StarRating from "../../components/starRating";
import { useState } from "react";

export default function WorkerSkillViewPage() {
  const [navSelection, setNavSelection] = useState({
    aboutService: true,
    aboutArtisan: false,
    artisanReview: false,
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
      <div className=" flex flex-col pt-[40px] gap-[20px] ">
        <div className=" flex flex-auto justify-center w-full ">
          <Breadcrumbs
            heading={"Home services"}
            childLink={"Skill Category Title"}
            grandChildLink={"Worker Skill Page"}
          />
        </div>
        <div className=" flex flex-row gap-[20px] max-w-[1134px] mx-auto ">
          <div className=" p-[10px] flex flex-col gap-[12px] max-w-[40%] bg-primary-bg-color-white rounded-[10px] shadow-3xl ">
            <img
              className=" w-full max-h-[280px] flex flex-auto "
              src={skillImage}
              alt=""
            />
            <div className=" flex flex-row justify-between ">
              <div className=" flex flex-col gap-[5px] ">
                <p className=" text-[20px] font-[600] ">Mobile car detailing</p>
                <p className=" text-[16px] ">Mobile Shine</p>
                <div className=" rounded-[10px] flex items-center gap-[5px] bg-default-green px-[8px] w-fit ">
                  <div className=" w-[10px] h-[10px] rounded-[10px] bg-primary-button-color-white "></div>
                  <p className=" text-[12px] ">Active</p>
                </div>
              </div>
              <div className=" flex flex-col pl-[10px] pr-[5px] items-end ">
                <StarRating />
                <p className=" text-[12px] ">
                  <span className=" text-[18px] ">4.8/</span>5.0 rating
                </p>
                <p className=" text-[12px] ">19 jobs</p>
              </div>
            </div>
            <div className=" flex flex-col gap-[10px] w-full border-t-2 border-t-primary-button-color-blue border-solid border-x-0 border-b-0 pt-[10px] ">
              <h2 className=" text-[20px] font-[600] ">Overview</h2>
              <p className=" text-[14px] leading-[200%] ">
                At Mobile Shine, we&lsquo;re not just a car detailing service; we`&lsquo;re
                your vehicle&lsquo;s personal spa on wheels, bringing a refreshing and
                rejuvenating experience to your doorstep. Our mission is to
                transform your car into a sparkling masterpiece, ensuring it
                radiates that new car feel, no matter its age.
              </p>
            </div>
          </div>
          <div className=" flex-3 flex flex-auto max-w-[60%] ">
          <div className=" flex flex-auto mx-auto ">
          <div className=" flex gap-[50px] items-center ">
            <div
              className=" nav-link h-[50px] flex flex-col justify-center items-center "
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
              className=" nav-link h-[50px] justify-center flex flex-col items-center  "
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
              className=" nav-link h-[50px] justify-center flex flex-col items-center  "
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
              className=" nav-link h-[50px] justify-center flex flex-col items-center  "
              onClick={rareServiceSelection}
            >
              <p>Rare Services</p>
              {navSelection.rareServices == true ? (
                <div className=" w-[60px] h-[4px] rounded-[10px] mt-[8px] bg-primary-bg-color-blue " />
              ) : (
                <div className=" hidden "></div>
              )}
            </div>
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
        <MarketPageProjectSection2
          categoryTitle={"Recent Works"}
          projectList={serviceContent.map((content, index) => (
            <MProjectCard
              key={index}
              rating={content.rating}
              description={content.description}
              title={content.title}
              image={content.displayImage}
              artisanName={content.artisanName}
              profileImage={content.profileImage}
              price={content.price}
            />
          ))}
        />
      </div>
    </div>
  );
}
