/* eslint-disable react/prop-types */
import CheckMark from "../../assets/icons/check-mark.svg";
import { whatForServiceCard } from "../../data/Datasets";

const WhatForSection = () => (
  <section className="whatfor-section">
    <div className="whatfor-header_support">
      <h1 className="whatfor-header section-header">Who are we for?</h1>
      <p className="whatfor-support section-h-support">
        For Businesses, For Individuals
      </p>
    </div>
    <div className="whatfor-grid">
      {whatForServiceCard.map((card, index) => (
        <WhatforServiceCard
          key={index}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
    <div className="whatfor-closing-text">
      <p>
        Say goodbye to endless searches and connect with reliable and talented
        artisans with Serv.
      </p>
      <p>Sign up today and experience the difference!</p>
    </div>
    <button className="whatfor-sign-up">Sign Up</button>
  </section>
);

export default WhatForSection;

const WhatforServiceCard = (props) => (
  <div className="whatfor-card" style={{ background: props.color }}>
    <div className="check-icon-container">
      <img src={CheckMark} alt="check mark" />
    </div>
    <h2 className="wf-card-title">{props.title}</h2>
    <p className="wf-card-description">{props.description}</p>
  </div>
);
