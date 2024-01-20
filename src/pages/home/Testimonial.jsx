/* eslint-disable react/prop-types */
import { testimonialsCard } from "../../data/Datasets";
import QuoteMark from "../../assets/icons/quote.svg";
import PrevArrow from "../../assets/icons/prev-arrow.svg";
import NextArrow from "../../assets/icons/next-arrow.svg";

const TestimonialSection = () => (
  <section className="  py-[80px] px-[16px] container mx-auto flex flex-col gap-[24px] w-screen md:max-w-[1240px] ">
    <div className="flex flex-col md:gap-[20px]">
      <h2 className=" text-[28px] md:text-[40px] md:text-center font-semibold ">
        Testimonials
      </h2>
      <p className=" tracking-[6px] text-[10px] gap-[10px] md:text-[14px] md:text-center  uppercase">
        Hear from our Customers
      </p>
    </div>

    <div className=" flex flex-col gap-[40px]  overflow-x-hidden inset-7 ">
      <div className="flex flex-row gap-[15px] py-[50px] scroll-auto slide-show ">
        {testimonialsCard.map((card, index) => (
          <TestimonialCard
            key={index}
            picture={card.picture}
            name={card.name}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>

      <div className=" flex-row flex-auto mx-auto hidden ">
        <button>
          <img className="swiper-button-next" src={PrevArrow}></img>
        </button>
        <button>
          <img className="swiper-button-prev" src={NextArrow}></img>
        </button>
      </div>
    </div>
  </section>
);

export default TestimonialSection;

const TestimonialCard = (props) => (
  <div className=" flex md:w-[600px] md:min-w-[600px] gap-[20px] bg-primary-bg-color-white min-w-full px-[16px] py-[32px] relative shadow-3xl rounded-[10px] md:ml-[0px] ">
    <img
      className=" md:left-0 md:w-[250px] object-cover md:h-[250px] hidden md:flex w-[54px] h-[54px] md:rounded-[10px] rounded-[25px] "
      src={props.picture}
      alt="pixels of the testifier"
    />
    <div className=" flex p-[20px] ">
      <img className=" md:w-[60px] w-[38px] absolute right-[16px] " src={QuoteMark} alt="quote mark" />
      <div className=" flex flex-col ">
      <img
      className=" left-[16px] absolute w-[54px] h-[54px] md:hidden rounded-[25px] "
      src={props.picture}
      alt="pixels of the testifier"
    />
        <h2 className=" text-[24px] font-[600] pl-[70px] md:pl-0 ">{props.name}</h2>
        <p className=" text-[12px] md:pl-0 pl-[70px] pb-[10px]  ">{props.title}</p>
        <p className=" text-[16px] ">{props.description}</p>
      </div>
    </div>
  </div>
);
