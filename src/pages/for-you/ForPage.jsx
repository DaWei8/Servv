/* eslint-disable react/prop-types */
import "./ForPage.scss";
import ArtisanAgencyImage from "../../assets/images/for-artisan-agency.png";
import CardIcon from "../../assets/icons/fav-icon.svg";
import GetStartedSection from "../../components/getStarted/GetStartedSection";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navBar/NavBar";

const ForSubjectCards = [
  {
    title: "Inception",
    image: CardIcon,
  },
  {
    title: "Establishment",
    image: CardIcon,
  },
  {
    title: "Growth",
    image: CardIcon,
  },
  {
    title: "Scaling",
    image: CardIcon,
  },
];

const ForPage = () => {
  return (
    <div className=" flex flex-col w-screen items-center ">
      <NavBar />
      <ForHeroSection />
      <ForCustomerSection />
      <ForArtisanSection />
      <ForAgencySection />
      <GetStartedSection />
      <Footer />
    </div>
  );
};

export default ForPage;

const ForHeroSection = () => (
  <div className=" md:px-0 px-[20px] container max-w-[1024px] mx-auto flex md:flex-row flex-col gap-[40px] justify-between mt-[50px] py-[96px] ">
    <div className=" flex flex-col md:w-[55%] gap-[20px] ">
      <h1 className=" text-[48px] font-semibold ">
        Tailored to your Specific Business Needs
      </h1>
      <p>
        At Serv, we believe in the power of connecting people with skilled
        artisans right in their local communities. We are an innovative online
        marketplace that bridges the gap between clients seeking reliable
        services and talented artisans eager to showcase their expertise. Our
        mission is to create a seamless platform that simplifies the process of
        finding the perfect artisan for any task or project.
      </p>
      <div className=" flex flex-row gap-[20px] ">
        <button className="primary-button-blue h-[50px] ">Sign up</button>
        <button
          className=" border-button-blue
         h-[50px] "
        >
          Log in
        </button>
      </div>
    </div>
    <div className=" flex flex-auto justify-center items-center ">
      <img src={ArtisanAgencyImage} alt="Artisan agency" />
    </div>
  </div>
);

const ForCustomerSection = () => (
  <div className=" md:px-0 px-[20px] flex max-w-[1024px] flex-col gap-[40px] my-[60px]  ">
    <div className="flex flex-col items-center">
      <h1 className="md:text-[40px] text-[32px]  font-semibold">
        For Customers
      </h1>
      <p className="text-[10px] md:text-[14px] uppercase tracking-[6px]">
        What you get
      </p>
    </div>
    <div className="flex flex-wrap justify-center gap-[20px] ">
      {ForSubjectCards.map((card, index) => (
        <ForSubjectCard key={index} image={card.image} title={card.title} />
      ))}
    </div>
    <p className=" leading-[200%] md:text-center ">
      Serv was born out of a passion for empowering both clients and artisans,
      providing them with a user-friendly platform to connect and collaborate.
      Our journey began with a vision to transform the way people access local
      services, making it easier than ever to find and hire skilled
      professionals.
    </p>
  </div>
);
const ForArtisanSection = () => (
  <div className=" md:px-0 px-[20px] flex max-w-[1024px] flex-col gap-[40px] my-[60px]  ">
    <div className="flex flex-col items-center">
      <h1 className="md:text-[40px] text-[32px]  font-semibold">For Artisan</h1>
      <p className="text-[10px] md:text-[14px] uppercase tracking-[6px]">What you get</p>
    </div>
    <div className="flex flex-wrap justify-center gap-[20px] ">
      {ForSubjectCards.map((card, index) => (
        <ForSubjectCard key={index} image={card.image} title={card.title} />
      ))}
    </div>
    <p className="leading-[200%] md:text-center ">
      Serv was born out of a passion for empowering both clients and artisans,
      providing them with a user-friendly platform to connect and collaborate.
      Our journey began with a vision to transform the way people access local
      services, making it easier than ever to find and hire skilled
      professionals.
    </p>
  </div>
);
const ForAgencySection = () => (
  <div className=" md:px-0 px-[20px] flex max-w-[1024px]  flex-col gap-[40px] my-[60px]  ">
    <div className="flex flex-col items-center">
      <h1 className="md:text-[40px] text-[32px]  font-semibold">For Agency</h1>
      <p className="text-[10px] md:text-[14px] uppercase tracking-[6px]">What you get</p>
    </div>
    <div className=" flex flex-wrap justify-center gap-[20px] ">
      {ForSubjectCards.map((card, index) => (
        <ForSubjectCard key={index} image={card.image} title={card.title} />
      ))}
    </div>
    <p className="leading-[200%] md:text-center ">
      Serv was born out of a passion for empowering both clients and artisans,
      providing them with a user-friendly platform to connect and collaborate.
      Our journey began with a vision to transform the way people access local
      services, making it easier than ever to find and hire skilled
      professionals.
    </p>
  </div>
);

const ForSubjectCard = (props) => (
  <div className=" bg-[#B5BBC81A] w-[150px] gap-[10px] rounded-[20px] flex-col px-[20px] py-[20px] flex items-center justify-center ">
    <img className="p-[10px] " src={props.image} alt="" />
    <p className=" font-semibold ">{props.title} </p>
  </div>
);
