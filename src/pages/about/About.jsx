/* eslint-disable react/prop-types */
import GetStartedSection from "../../components/getStarted/GetStartedSection";
import "./About.scss";
import AboutImage from "../../assets/images/about-image.png";
import WhyChooseImage from "../../assets/images/online-meeting-between-the-team.png";
import CardIcon from "../../assets/icons/fav-icon.svg";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navBar/NavBar";

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
    <div className="about-section">

      <NavBar />
      <AboutHeroSection />
      <AboutOurJourney />
      <AboutOurVision />
      <AboutWhyChoose />
      <AboutOurCommitment />
      <GetStartedSection />
      <Footer />
    </div>
  );
};

export default AboutPage;

const AboutWhyChooseCard = (props) => (
  <div className="about-why-choose-card">
    <img src={props.image} alt="" />
    <div className="about-why-choose-text">
      <h3 className="about-why-choose-card-title">{props.title} </h3>
      <p>{props.description}</p>
    </div>
  </div>  
);

const AboutOurJourneyRoadmapCard = (props) => (
  <div className="about-our-journey-roadmap-card">
    <img src={props.image} alt="" />
    <p className="about-our-journey-roadmap-card-title">{props.title} </p>
  </div>
);

const AboutOurVisionCard = (props) => (
  <div className="about-our-vision-card">
    <img src={props.image} alt="" />
    <p className="about-our-vision-card-title">{props.title} </p>
  </div>
);

const AboutOurCommitmentCard = (props) => (
  <div className="about-our-commitment-card">
    <img src={props.image} alt="" />
    <p className="about-our-commitment-card-title">{props.title} </p>
  </div>
);

const AboutHeroSection = () => (
  <section className="about-hero-section">
    <div className="about-hero-section-text">
      <h1 className="about-hero-header">About Servv</h1>
      <p className="about-hero-subheader">~ Your Trusted Artisan Marketplace</p>
      <p className="about-hero-support">
        At Serv, we believe in the power of connecting people with skilled
        artisans right in their local communities. We are an innovative online
        marketplace that bridges the gap between clients seeking reliable
        services and talented artisans eager to showcase their expertise. Our
        mission is to create a seamless platform that simplifies the process of
        finding the perfect artisan for any task or project.
      </p>
    </div>
    <div className="about-hero-section-image">
      <img src={AboutImage} alt="A man smiling while using the website" />
    </div>
  </section>
);

const AboutOurJourney = () => (
  <section className="about-our-journey-section">
    <div className="about-our-journey-head">
      <h1 className="about-our-journey-header">Our Journey</h1>
      <p className="about-our-journey-support">How we got here</p>
    </div>
    <div className="about-our-journey-roadmap">
      {AboutRoadmapCards.map((card, index) => (
        <AboutOurJourneyRoadmapCard
          key={index}
          title={card.title}
          image={card.image}
        />
      ))}
    </div>
    <p className="about-our-journey-support">
      Serv was born out of a passion for empowering both clients and artisans,
      providing them with a user-friendly platform to connect and collaborate.
      Our journey began with a vision to transform the way people access local
      services, making it easier than ever to find and hire skilled
      professionals.
    </p>
  </section>
);

const AboutOurVision = () => (
  <section className="about-our-vision-section">
    <div className="about-our-vision-head">
      <h1 className="about-our-vision-header">Our Vision</h1>
      <p className="about-our-vision-support">Where we are headed</p>
    </div>
    <div className="about-our-vision-roadmap">
      {AboutVisionCards.map((card, index) => (
        <AboutOurVisionCard key={index} title={card.title} image={card.image} />
      ))}
    </div>
    <p className="about-our-vision-support">
      Our vision is to create a thriving ecosystem where clients can summon
      services like a genie from a lamp, and artisans can showcase their talents
      to a broader audience. We aspire to be the go-to destination for anyone
      seeking top-notch local services, and we are committed to promoting and
      supporting the growth of artisans in their respective communities.
    </p>
  </section>
);

const AboutWhyChoose = () => (
  <section className="about-why-choose-section">
    <div className="about-why-choose-header">
      <h1 className="about-why-choose-header-text">Why Choose Serv?</h1>
      <p className="about-why-choose-support-text">For all you need to know</p>
    </div>
    <div className="about-why-choose-cards">
      

      {AboutWhyChooseCards.map((card, index) => (
        <AboutWhyChooseCard
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
          data={card}
        />
      ))}
    </div>
  </section>
);

const AboutOurCommitment = () => (
  <section className="about-our-commitment-section">
    <div className="about-our-commitment-head">
      <h1 className="about-our-commitment-header">
        Our Commitment to Excellence
      </h1>
    </div>
    <div className="about-our-commitment-roadmap">
      {AboutCommitmentCards.map((card, index) => (
        <AboutOurCommitmentCard
          key={index}
          title={card.title}
          image={card.image}
        />
      ))}
    </div>
    <p className="about-our-commitment-closing">
      Our dedicated team of designers, developers, and customer support
      professionals work tirelessly to ensure that your experience with us is
      nothing short of exceptional. We continuously seek feedback from our users
      to improve and evolve the platform, making it even more user-friendly and
      efficient.
    </p>
    <button type="button">Get In Touch</button>
  </section>
);
