/* eslint-disable react/prop-types */
import GetStartedSection from "../../components/getStarted/GetStartedSection";
// import "./About.scss";
import AboutImage from "../../assets/images/about-image.png";
import WhyChooseImage from "../../assets/images/online-meeting-between-the-team.png";
import CardIcon from "../../assets/icons/fav-icon.svg";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navBar/NavBar";
import FAQSection from "../home/FAQSection";
import GetInTouchSection from "../home/GetInTouch";

const AboutRoadmapCards = [
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

const AboutCommitmentCards = [
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

const AboutVisionCards = [
  {
    title: "Empowering Local Artisans",
    image: CardIcon,
  },
  {
    title: "Bridging Communities",
    image: CardIcon,
  },
  {
    title: "Transforming Lives",
    image: CardIcon,
  },
];

const AboutWhyChooseCards = [
  {
    title: "Connecting Communities",
    description:
      "We believe in the strength of local communities and aim to foster connections between clients and artisans in the same neighborhood or city. By choosing Serv, you are supporting local businesses and contributing to the growth of your community.",
    image: WhyChooseImage,
  },
  {
    title: "Reliable Artisans",
    description:
      "Every artisan on Serv undergoes a rigorous vetting process to ensure that they possess the necessary skills and qualifications. You can trust that the services you receive are from experienced professionals dedicated to delivering high-quality work.",
    image: WhyChooseImage,
  },
  {
    title: "User-Friendly Platform",
    description:
      "Our user-centric design makes it effortless to navigate and use our platform. With a few simple clicks, you can find the perfect artisan for your specific needs.",
    image: WhyChooseImage,
  },
  {
    title: "Secure Transactions",
    description:
      "We prioritize the security of our users' transactions. Our payment system is reliable and ensures a seamless and safe exchange of funds between clients and artisans.",
    image: WhyChooseImage,
  },
  {
    title: "Diverse Services",
    description:
      "From home repairs and renovations to creative services and tutoring, Serv offers a wide range of service categories to cater to diverse needs and preferences.",
    image: WhyChooseImage,
  },
];

const AboutPage = () => {
  return (
    <div className=" mx-auto w-screen md:px-[0px] flex flex-col content-center items-center ">
      <NavBar />
      <AboutHeroSection />
      <AboutOurJourney />
      <AboutOurVision />
      <AboutWhyChoose />
      <AboutOurCommitment />
      <GetStartedSection />
      <FAQSection />
      <GetInTouchSection />
      <Footer />
    </div>
  );
};

export default AboutPage;

const AboutWhyChooseCard = (props) => (
  <div className=" container md:bg-transparent rounded-[10px] bg-[#B5BBC81A] md:p-0 p-[20px] flex flex-col md:flex-row justify-center gap-[24px] max-w-[1024px] ">
    <img
      className=" max-w-[300px] hidden md:flex md:flex-auto md:self-center  "
      src={props.image}
      alt="why choose card image"
    />
    <div className=" justify-center flex flex-col gap-[10px] md:w-[55%] ">
      <h3 className=" text-[24px] font-semibold ">{props.title} </h3>
      <p>{props.description}</p>
    </div>
  </div>
);
const AboutWhyChooseCardReverse = (props) => (
  <div className=" container md:bg-transparent rounded-[10px] bg-[#B5BBC81A] md:p-0 p-[20px] flex flex-col  md:flex-row-reverse justify-center gap-[24px] max-w-[1024px] md:pl-[40px] ">
    <img
      className=" max-w-[300px] hidden md:flex md:flex-auto md:self-center "
      src={props.image}
      alt=""
    />
    <div className=" justify-center flex flex-col gap-[10px] md:w-[55%] ">
      <h3 className=" text-[24px] font-semibold ">{props.title} </h3>
      <p>{props.description}</p>
    </div>
  </div>
);

const AboutOurJourneyRoadmapCard = (props) => (
  <div className=" bg-[#B5BBC81A] w-[150px] gap-[10px] rounded-[20px] flex-col px-[20px] py-[20px] flex items-center justify-center ">
    <img className="p-[10px] " src={props.image} alt="" />
    <p className=" font-semibold ">{props.title} </p>
  </div>
);

const AboutOurVisionCard = (props) => (
  <div className="bg-[#B5BBC81A] w-[250px] gap-[10px] rounded-[20px] flex-col px-[20px] py-[40px] flex items-center justify-center">
    <img src={props.image} alt="" />
    <p className="about-our-vision-card-title">{props.title} </p>
  </div>
);

const AboutOurCommitmentCard = (props) => (
  <div className="bg-[#B5BBC81A] md:w-[200px] w-[150px] gap-[10px] rounded-[20px] flex-col px-[20px] py-[20px] flex items-center justify-center">
    <img src={props.image} alt="" />
    <p className="about-our-vision-card-title">{props.title} </p>
  </div>
);

const AboutHeroSection = () => (
  <section className=" container max-w-[1024px] gap-[40px] px-[20px] mx-auto -screen mt-[150px] flex flex-col flex-auto md:flex-row md:justify-between ">
    <div className=" flex flex-col lg:w-[60%] md:w-[45%] justify-center ">
      <h1 className="text-[48px] font-[600] text-main-color  ">About Servv</h1>
      <p className="md:text-[24px] text-[20px] mb-[20px] ">
        ~ Your Trusted Artisan Marketplace
      </p>
      <p className=" leading-[200%] ">
        At Serv, we believe in the power of connecting people with skilled
        artisans right in their local communities. We are an innovative online
        marketplace that bridges the gap between clients seeking reliable
        services and talented artisans eager to showcase their expertise. Our
        mission is to create a seamless platform that simplifies the process of
        finding the perfect artisan for any task or project.
      </p>
    </div>
    <div className="  md:w-[45%] flex justify-center ">
      <img
        className=" flex-auto flex object-cover "
        src={AboutImage}
        alt="A man smiling while using the website"
      />
    </div>
  </section>
);

const AboutOurJourney = () => (
  <section className="flex max-w-[1024px] px-[20px] flex-col gap-[40px] my-[60px]  ">
    <div className="flex flex-col items-center ">
      <h1 className=" md:text-[40px] text-[32px]  font-semibold ">Our Journey</h1>
      <p className=" text-[10px] md:text-[14px] uppercase tracking-[6px] ">How we got here</p>
    </div>
    <div className=" flex flex-wrap gap-[30px] justify-center ">
      {AboutRoadmapCards.map((card, index) => (
        <AboutOurJourneyRoadmapCard
          key={index}
          title={card.title}
          image={card.image}
        />
      ))}
    </div>
    <p className=" text-left md:text-center ">
      Serv was born out of a passion for empowering both clients and artisans,
      providing them with a user-friendly platform to connect and collaborate.
      Our journey began with a vision to transform the way people access local
      services, making it easier than ever to find and hire skilled
      professionals.
    </p>
  </section>
);

const AboutOurVision = () => (
  <section className="flex max-w-[1024px] px-[20px] flex-col gap-[40px] my-[60px] ">
    <div className="flex flex-col items-center">
      <h1 className="md:text-[40px] text-[32px]  font-semibold">Our Vision</h1>
      <p className="uppercase text-[10px] md:text-[14px] tracking-[6px]">Where we are headed</p>
    </div>
    <div className=" flex flex-wrap gap-[30px] justify-center">
      {AboutVisionCards.map((card, index) => (
        <AboutOurVisionCard key={index} title={card.title} image={card.image} />
      ))}
    </div>
    <p className="text-left md:text-center">
      Our vision is to create a thriving ecosystem where clients can summon
      services like a genie from a lamp, and artisans can showcase their talents
      to a broader audience. We aspire to be the go-to destination for anyone
      seeking top-notch local services, and we are committed to promoting and
      supporting the growth of artisans in their respective communities.
    </p>
  </section>
);

const AboutWhyChoose = () => (
  <section className=" my-[60px] max-w-[1024px] px-[20px] flex items-center flex-col gap-[40px] ">
    <div className="flex flex-col items-center ">
      <h1 className="md:text-[40px] text-[32px]  font-semibold">Why Choose Serv?</h1>
      <p className="uppercase text-[10px] md:text-[14px] tracking-[6px]">For all you need to know</p>
    </div>
    <div className=" flex flex-col gap-[40px] ">
      {AboutWhyChooseCards.map((card, index) =>
        index % 2 !== 0 ? (
          <AboutWhyChooseCardReverse
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            data={card}
          />
        ) : (
          <AboutWhyChooseCard
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            data={card}
          />
        )
      )}
    </div>
  </section>
);

const AboutOurCommitment = () => (
  <section className=" flex max-w-[1024px] flex-col px-[20px] gap-[40px] my-[60px] items-center ">
    <div className="flex flex-col items-center">
      <h1 className="md:text-[40px] text-[32px] text-center font-semibold">
        Our Commitment to Excellence
      </h1>
      <p className="uppercase text-[10px] md:text-[14px] tracking-[6px]">Success is our only option</p>
    </div>
    <div className=" flex flex-row flex-wrap gap-[30px] justify-center ">
      {AboutCommitmentCards.map((card, index) => (
        <AboutOurCommitmentCard
          key={index}
          title={card.title}
          image={card.image}
        />
      ))}
    </div>
    <p className="text-left md:text-center">
      Our dedicated team of designers, developers, and customer support
      professionals work tirelessly to ensure that your experience with us is
      nothing short of exceptional. We continuously seek feedback from our users
      to improve and evolve the platform, making it even more user-friendly and
      efficient.
    </p>
    <button className="primary-button-blue h-[50px] " type="button">
      Get In Touch
    </button>
  </section>
);
