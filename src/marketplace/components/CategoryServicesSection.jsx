/* eslint-disable react/prop-types */
import { serviceContent } from "../../data/Datasets";
import MProjectCard from "./MProjectCard";
import MarketPageCategorySection from "./MarketPageCategorySection";

const CategoryServiceSection = (props) => {
  return (
    <div className=" w-full items-center flex flex-col gap-[0px] ">
      <MarketPageCategorySection
        categoryTitle={props.title}
        exploreLink={"../category"}
        bgSettings={
          " flex flex-col gap-[5px] w-full items-center pt-[20px] pb-[40px] "
        }
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
      <MarketPageCategorySection
        categoryTitle={props.title}
        exploreLink={"../category"}
        bgSettings={
          " flex flex-col gap-[5px] w-full items-center pt-[20px] pb-[40px]"
        }
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
      <MarketPageCategorySection
        categoryTitle={props.title}
        exploreLink={"../category"}
        bgSettings={
          " flex flex-col gap-[5px] w-full items-center pt-[10px] pb-[10px] "
        }
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
      <MarketPageCategorySection
        categoryTitle={props.title}
        exploreLink={"./category"}
        bgSettings={
          " flex flex-col gap-[5px] w-full items-center pt-[20px] pb-[40px]"
        }
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
  );
};

export default CategoryServiceSection;
