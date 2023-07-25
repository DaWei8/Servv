/* eslint-disable react/prop-types */
import CheckMark from "../../assets/icons/check-mark.svg";
import { discoverCards } from "../../data/Datasets";

const DiscoverSection = () => (
  <section className="discover__artisans-section">
    <div className="discover-header_support">
      <h1 className="discover-header section-header">
        Discover the Best Artisans Near You with Servv
      </h1>
      <p className="discover-support section-header">
        Our platform connects you with experienced professionals who are
        passionate about delivering exceptional results for every project.
      </p>
    </div>
    <div className="discover-points-grid">
      {discoverCards.map((card, index) => (
        <DiscoverCard key={index} description={card} />
      ))}
    </div>
    <div className="discover-closing-text">
      <p>
        Say goodbye to endless searches and connect with reliable and talented
        artisans with Serv.
      </p>
      <p>Sign up today and experience the difference!</p>
    </div>
    <button className="discover-sign-up">Sign Up</button>
  </section>
);

export default DiscoverSection;

const DiscoverCard = (props) => (
  <div className="discover-card">
    <div className="check-icon-container">
      <img src={CheckMark} alt="check mark" />
    </div>
    <p className="ds-card-description">{props.description}</p>
  </div>
);
