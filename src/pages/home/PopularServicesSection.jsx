/* eslint-disable react/prop-types */
import { popularServicesCards } from "../../data/Datasets";

const PopularServicesSection = () => (
  <section className="py-[80px] px-[16px] container mx-auto flex flex-col gap-[24px] w-screen md:max-w-[1240px] ">
    <div className="flex flex-col md:gap-[20px]">
      <h2 className="text-[28px] md:text-[40px] md:text-center font-semibold leading-[35px] ">
        Popular Services, Delivered Fast with Servv
      </h2>
      <p className=" tracking-[6px] gap-[10px] md:text-center md:text-[14px] text-[10px] uppercase ">
        For Businesses, For Individuals
      </p>
    </div>
    <div className="flex flex-wrap gap-[20px] justify-center items-start ">
      {popularServicesCards.map((card, index) => (
        <PopularServiceCard
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
          color={card.color}
          data={card}
        />
      ))}
    </div>
  </section>
);

export default PopularServicesSection;

const PopularServiceCard = (props) => {
  return (
    <div className=" md:h-[250px] flex-auto w-[160px] min-w-[130px] h-[160px] md:max-w-[330px] md:w-[300px] rounded-[10px] md:p-[20px] px-[10px] py-[20px]  gap-[10px] flex flex-col " style={{ background: props.color }}>
      <img className="w-[50px] p-[10px] rounded-[50px] bg-primary-bg-color-white "  alt="service icon" src={props.icon} />
      <h2 className=" text-[16px] md:text-[18px] font-semibold ">{props.title}</h2>
      <p className="hidden md:flex ">{props.description}</p>
    </div>
  );
};
