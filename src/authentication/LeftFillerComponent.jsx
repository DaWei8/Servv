import logo from "../assets/images/company-logo.png";
import backgroundImg from "../assets/icons/bg-logo.png";
import QuoteMark from "../assets/icons/quote.svg";

export default function LeftFillerComponent() {
  return (
    <div className="relative overflow-x-hidden text-primary-text-color-white login-left hidden lg:flex flex-col bg-primary-bg-color-blue py-[96px] px-[34px] w-fit rounded-[10px] max-h-[90vh]">
      <div className="login-company-logo max-w-[400px] flex flex-col gap-[25px]">
        {/* <Link to="../signup"> */}
        <img
          className="company-logo w-[120px]  "
          src={logo}
          alt="company logo"
        />
        {/* </Link> */}
        <p className="leading-[200%] ">
          At Servv, we believe in the power of connecting people with skilled
          artisans right in their local communities.
        </p>
      </div>
      <img
        className="absolute flex self-center justify-self max-w-[500px] -rotate-[30deg]"
        src={backgroundImg}
        alt="background image"
      />
      <div className="mt-[100px]">
        <AuthTestimonialCard />
      </div>
    </div>
  );
}

const AuthTestimonialCard = () => (
  <div className=" backdrop-blur-[10px] max-w-[400px] bg-transparent-bg-blur px-[25px] rounded-[15px] py-[35px] ">
    <div className="testimonial-name-and-title mb-[10px] ">
      <h2 className="person-name text-[24px] font-semibold ">Idowu Taiwo</h2>
      <p className="person-title">Mobile Car Detailing</p>
      <img
        className=" md:w-[48px] w-[38px] absolute right-[25px] top-[45px] "
        src={QuoteMark}
        alt="quote mark"
      />
    </div>
    <div className="person-testimony text-[14px] ">
      Serv has been the best thing to happen to me this year. I have gone from
      loan to loan. Now i have cleared all debts and I can now take care of my
      family.
    </div>
  </div>
);
