/* eslint-disable react/prop-types */
import { popularServicesCards } from "../../data/Datasets";

const PopularServicesSection = () => (
  <section className="popular__services-section">
    <div className="popular__services-header_support">
      <h1 className="popular__services-header section-header">
        Popular Services, Delivered Fast with Serv
      </h1>
      <p className="popular__services-support section-header">
        For Businesses, For Individuals
      </p>
    </div>
    <div className="popular__services-grid">
      {popularServicesCards.map((card, index) => (
        <PopularServiceCard
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
          color={card.color}
          data={card}
        />
      ))}
    </div>
  </section>
);

export default PopularServicesSection;

const PopularServiceCard = (props) => {
  return (
    <div className="popular-service-card" style={{ background: props.color }}>
      <img className="ps-card-icon" alt="service icon" src={props.icon} />
      <h2 className="ps-card-title">{props.title}</h2>
      <p className="ps-card-description">{props.description}</p>
    </div>
  );
};
