/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import CheckMark from "../../assets/icons/check-mark.svg";
import { discoverCards } from "../../data/Datasets";

const DiscoverSection = () => (
  <section className=" flex flex-col w-full gap-[24px] items-center bg-primary-bg-color-blue py-[80px] md:px-0 px-[20px] ">
    <div className="flex flex-col flex-auto md:gap-[20px] text-left md:text-center items-center text-primary-text-color-white ">
      <h1 className=" text-[28px] md:text-[40px] font-semibold leading-[35px] ">
        Discover the Best Artisans Near You with Servv
      </h1>
      <p className=" w-full leading-[27px] ">
        Our platform connects you with experienced professionals who are
        passionate about delivering exceptional results for every project.
      </p>
    </div>
    <div className=" mx-auto w-full max-w-[1024px] flex gap-[30px] flex-wrap justify-center ">
      {discoverCards.map((card, index) => (
        <DiscoverCard key={index} description={card} />
      ))}
    </div>
    <div className=" flex flex-col gap-[5px] leading-[27px] text-primary-bg-color-white md:text-center ">
      <p>
        Say goodbye to endless searches and connect with reliable and talented
        artisans with Serv.
      </p>
      <p>Sign up today and experience the difference!</p>
    </div>
    <Link to="../authPage/signup" >
      <button className=" primary-button h-[50px] ">Sign Up</button>
    </Link>
  </section>
);

export default DiscoverSection;

const DiscoverCard = (props) => (
  <div className=" flex flex-col md:p-[20px] px-[10px] py-[20px] w-[160px] md:min-w-[340px] gap-[10px] flex-auto md:max-w-[300px] bg-primary-bg-color-white rounded-[10px] ">
    <div className=" bg-primary-button-color-blue p-[10px] rounded-[10px] w-fit   ">
      <img src={CheckMark} alt="check mark" />
    </div>
    <p className=" text-[14px] leading-[27px] ">{props.description}</p>
  </div>
);
