import { serviceContent } from "../../data/Datasets";
import Breadcrumbs from "../components/Breadcrumbs";
import MProjectCard from "../components/MProjectCard";
import MarketPageProjectSection2 from "../components/MarketPageProjectSection2";
import MarketPlaceHero2 from "../components/MarketPlaceHero2";
import skillImage from "../../assets/images/project-picture-frame.png";
import StarRating from "../../components/starRating";

export default function WorkerSkillViewPage() {
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
          <div className=" p-[10px] gap-[10px] flex-2 max-w-[40%] ">
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
            <div className=" flex flex-col gap-[10px] w-full ">
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
          <div className=" flex-3 flex flex-auto max-w-[60%] "></div>
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
