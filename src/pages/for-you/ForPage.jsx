/* eslint-disable react/prop-types */
import "./ForPage.scss";
import ArtisanAgencyImage from "../../assets/images/for-artisan-agency.png";
import CardIcon from "../../assets/icons/fav-icon.svg";
import GetStartedSection from "../../components/getStarted/GetStartedSection";

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
    <div className="for-page">
      <ForHeroSection />
      <ForCustomerSection />
      <ForArtisanSection />
      <ForAgencySection />
      <GetStartedSection />
    </div>
  );
};

export default ForPage;

const ForHeroSection = () => (
  <div className="for-hero-section">
    <div className="for-hero-text">
      <h1>Tailored to your Specific Business Needs</h1>
      <p>
        At Serv, we believe in the power of connecting people with skilled
        artisans right in their local communities. We are an innovative online
        marketplace that bridges the gap between clients seeking reliable
        services and talented artisans eager to showcase their expertise. Our
        mission is to create a seamless platform that simplifies the process of
        finding the perfect artisan for any task or project.
      </p>
      <div className="for-hero-cta-buttons">
        <button className="for-sign-up">Sign up</button>
        <button className="for-log-up">Log in</button>
      </div>
    </div>
    <div className="for-hero-image">
      <img src={ArtisanAgencyImage} alt="Artisan agency" />
    </div>
  </div>
);

const ForCustomerSection = () => (
  <div className="for-subject-section">
    <div className="for-subject-header">
      <h1 className="for-subject-header-head">For Customers</h1>
      <p className="for-subject-header-support">What you get</p>
    </div>
    <div className="for-subject-cards">
      {ForSubjectCards.map((card, index) => (
        <ForSubjectCard key={index} image={card.image} title={card.title} />
      ))}
    </div>
    <p className="for-subject-closing-text">
      Serv was born out of a passion for empowering both clients and artisans,
      providing them with a user-friendly platform to connect and collaborate.
      Our journey began with a vision to transform the way people access local
      services, making it easier than ever to find and hire skilled
      professionals.
    </p>
  </div>
);
const ForArtisanSection = () => (
  <div className="for-subject-section">
    <div className="for-subject-header">
      <h1 className="for-subject-header-head">For Artisan</h1>
      <p className="for-subject-header-support">What you get</p>
    </div>
    <div className="for-subject-cards">
      {ForSubjectCards.map((card, index) => (
        <ForSubjectCard key={index} image={card.image} title={card.title} />
      ))}
    </div>
    <p className="for-subject-closing-text">
      Serv was born out of a passion for empowering both clients and artisans,
      providing them with a user-friendly platform to connect and collaborate.
      Our journey began with a vision to transform the way people access local
      services, making it easier than ever to find and hire skilled
      professionals.
    </p>
  </div>
);
const ForAgencySection = () => (
  <div className="for-subject-section">
    <div className="for-subject-header">
      <h1 className="for-subject-header-head">For Agency</h1>
      <p className="for-subject-header-support">What you get</p>
    </div>
    <div className="for-subject-cards">
      {ForSubjectCards.map((card, index) => (
        <ForSubjectCard key={index} image={card.image} title={card.title} />
      ))}
    </div>
    <p className="for-subject-closing-text">
      Serv was born out of a passion for empowering both clients and artisans,
      providing them with a user-friendly platform to connect and collaborate.
      Our journey began with a vision to transform the way people access local
      services, making it easier than ever to find and hire skilled
      professionals.
    </p>
  </div>
);

const ForSubjectCard = (props) => (
  <div className="for-subject-card">
    <img src={props.image} alt="" />
    <p className="for-subject-card-title">{props.title} </p>
  </div>
);
