/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import CheckMark from "../../assets/icons/check-mark.svg";
import { whatForServiceCard } from "../../data/Datasets";


const WhatForSection = () => (
  <section className="py-[80px] px-[16px] container mx-auto flex flex-col gap-[24px] w-screen md:max-w-[1240px] ">
    <div className="flex flex-col md:gap-[20px] ">
      <h1 className="text-[28px] md:text-[40px] md:text-center font-semibold">
        Who are we for?
      </h1>
      <p className="tracking-[6px] gap-[10px] md:text-center md:text-[14px] text-[10px] uppercase">
        For Businesses, For Individuals
      </p>
    </div>
    <div className="flex flex-wrap gap-[20px] justify-center items-start ">
      {whatForServiceCard.map((card, index) => (
        <WhatforServiceCard
          key={index}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
    <div className="flex flex-col gap-[5px] leading-[27px]  md:text-center ">
      <p>
        Say goodbye to endless searches and connect with reliable and talented
        artisans with Serv.
      </p>
      <p>Sign up today and experience the difference!</p>
    </div>
    <Link className="mx-auto" to="../authPage/signup">
      <button className=" primary-button-blue h-[50px] ">Sign Up</button>
    </Link>
  </section>
);

export default WhatForSection;

const WhatforServiceCard = (props) => (
  <div
    className="flex flex-col md:p-[20px] px-[10px] h-[230px] md:h-auto shadow-3xl bg-[#b4ccfc10] py-[20px] w-[160px] md:min-w-[340px] gap-[10px] flex-auto md:max-w-[300px] bg-primary-bg-color-white rounded-[5px]"
    style={{ background: props.color }}
  >
    <div className="bg-primary-button-color-blue p-[10px] rounded-[10px] w-fit ">
      <img src={CheckMark} alt="check mark" />
    </div>
    <h2 className=" text-[18px] font-medium ">{props.title}</h2>
    <p className="wf-card-description leading-[27px] ">{props.description}</p>
  </div>
);
