/* eslint-disable react/prop-types */
import "./ForPage.css";
import ArtisanImage from "../../assets/images/artisan--for-page.png";
import AgencyImage from "../../assets/images/agency--for-page.png";



// const ForCards = [
//   {
//     title: "Inception",
//     image: "",
//   },
//   {
//     title: "Establishment",
//     image: "",
//   },
//   {
//     title: "Growth",
//     image: "",
//   },
//   {
//     title: "Scaling",
//     image: "",
//   },
// ];

const ForPage = () => {
  return (
    <div className="for-page">
      <div className="for-hero-section">
        <div className="for-hero-text">
          <h1>Tailored to your Specific Business Needs</h1>
          <p>
            At Serv, we believe in the power of connecting people with skilled
            artisans right in their local communities. We are an innovative
            online marketplace that bridges the gap between clients seeking
            reliable services and talented artisans eager to showcase their
            expertise. Our mission is to create a seamless platform that
            simplifies the process of finding the perfect artisan for any task
            or project.
          </p>
          <div className="for-hero-cta-buttons">
            <button className="for-sign-up">Sign up</button>
            <button className="for-log-up">Log in</button>
          </div>
        </div>
        <div className="for-hero-image">
          <ArtisanImage />
          <AgencyImage />
        </div>
      </div>

      <ForSectionTemplate
        header="Our Journey"
        support="How we got here"
        // cardsDetails={ForCards}
        closingText="Serv was born out of a passion for empowering both clients and artisans, providing them with a user-friendly platform to connect and collaborate. Our journey began with a vision to transform the way people access local services, making it easier than ever to find and hire skilled professionals."
      />

    </div>
  );
};

export default ForPage;

const ForSectionTemplate = (props) => (
  <section className="for-page-section">
    <div className="for-page-head">
      <h1 className="for-page-header">{props.header}</h1>
      <p className="for-page-support">{props.support}</p>
    </div>
    {/* <div className="for-page-cards">
      {props.cardsDetails.map((card, index) => (
        <ForCard key={index} title={card.title} image={card.image} />
      ))}
    </div> */}
    <p className="for-page-support">{props.closingText}</p>
  </section>
);

// const ForCard = (props) => (
//   <div className="for-page-card">
//     <img src={props.image} alt="card illustration" />
//     <p className="for-page-card-title">{props.title} </p>
//   </div>
// );
