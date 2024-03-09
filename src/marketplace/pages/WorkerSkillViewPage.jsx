import { serviceContent } from "../../data/Datasets";
import Breadcrumbs from "../components/Breadcrumbs";
import MProjectCard from "../components/MProjectCard";
import MarketPageProjectSection2 from "../components/MarketPageProjectSection2";
import MarketPlaceHero2 from "../components/MarketPlaceHero2";

import { useState } from "react";
import AboutService from "../components/AboutService";
import AboutArtisan from "../components/AboutArtisan";
import ArtisanReviews from "../components/ArtisanReviews";
import WorkerServiceOverviewCard from "../components/WorkerServiceOverviewCard";

export default function WorkerSkillViewPage() {
  const [navSelection, setNavSelection] = useState({
    aboutService: true,
    aboutArtisan: false,
    artisanReview: false,
  });
  const aboutServiceSelection = () =>
    setNavSelection({
      aboutService: true,
      aboutArtisan: false,
      artisanReview: false,
    });
  const aboutArtisanSelection = () =>
    setNavSelection({
      aboutService: false,
      aboutArtisan: true,
      artisanReview: false,
    });
  const artisanReviewSelection = () =>
    setNavSelection({
      aboutService: false,
      aboutArtisan: false,
      artisanReview: true,
    });

  return (
    <div className=" flex flex-col flex-auto w-auto ">
      <MarketPlaceHero2 />
      <div className=" flex flex-col pt-[40px] gap-[20px] max-w-[1134px] mx-auto ">
        <div className=" flex flex-auto justify-center w-full px-[20px] ">
          <Breadcrumbs
            heading={"Home services"}
            childLink={"Skill Category Title"}
            grandChildLink={"Worker Skill Page"}
          />
        </div>
        <div className=" flex flex-row flex-1 lg:flex-nowrap flex-wrap gap-[20px]  mx-auto  px-[20px]  ">
          <div className=" flex lg:max-w-[400px] ">
            <WorkerServiceOverviewCard />
          </div>
          <div className=" flex-col gap-[20px] flex flex-auto  ">
            <div className=" flex ">
              <div className=" rounded-[8px] flex gap-[50px] items-center h-[50px] bg-pale-blue-grey w-full px-[10px] ">
                <div
                  className=" nav-link h-[50px] flex flex-col justify-center items-center "
                  onClick={aboutServiceSelection}
                >
                  {navSelection.aboutService == true ? (
                    <p className=" text-[12px] md:text-[14px] font-[600] text-primary-button-color-blue ">
                      About Service
                    </p>
                  ) : (
                    <p className=" text-[12px] md:text-[14px] ">
                      About Service
                    </p>
                  )}
                </div>
                <div
                  className=" nav-link h-[50px] justify-center flex flex-col items-center  "
                  onClick={aboutArtisanSelection}
                >
                  {navSelection.aboutArtisan == true ? (
                    <p className=" text-[12px] md:text-[14px] text-primary-button-color-blue ">
                      About Artisan
                    </p>
                  ) : (
                    <p className=" text-[12px] md:text-[14px] ">
                      About Artisan
                    </p>
                  )}
                </div>
                <div
                  className=" nav-link h-[50px] justify-center flex flex-col items-center  "
                  onClick={artisanReviewSelection}
                >
                  {navSelection.artisanReview == true ? (
                    <p className=" text-[12px] md:text-[14px] text-primary-button-color-blue ">
                      Review
                    </p>
                  ) : (
                    <p className="text-[12px] md:text-[14px] ">Review</p>
                  )}
                </div>
              </div>
            </div>
            <div className=" flex flex-auto ">
              {navSelection.aboutService == true ? (
                <AboutService />
              ) : navSelection.aboutArtisan == true ? (
                <AboutArtisan />
              ) : navSelection.artisanReview == true ? (
                <ArtisanReviews />
              ) : (
                <AboutService />
              )}
            </div>
          </div>
        </div>
        <div className=" px-[20px] ">
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
    </div>
  );
}
