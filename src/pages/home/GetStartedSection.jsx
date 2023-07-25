import { useState } from "react";
import CustomerAvatar from "../../assets/images/customer-avatar.png";
import WorkerAvatar from "../../assets/images/worker-avatar.png";

const GetStartedSection = () => (
  <section className="get_started-section">
    <div className="get_started-header_support">
      <h1 className="get_started-header section-header">
        Ready to get Started?
      </h1>
      <p className="get_started-support section-h-support">
        Choose how you want to start
      </p>
    </div>
    <CardRadioField />
    <div className="get_started-ctas-container">
      <p className="get_started-cta-text">
        You are not sure yet? Open an account now
      </p>
      <div className="get_started-cta-buttons">
        <button className="get_started-sign-up primary-button">Sign Up</button>
        <button className="get_started-log-in secondary-button">Log in</button>
      </div>
    </div>
  </section>
);

export default GetStartedSection;

const CardRadioField = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardChange = (cardId) => {
    setSelectedCard(cardId);
  };

  return (
    <div className="get_started-cards">
      <label>
        <div
          className={
            selectedCard === "customer"
              ? "get-started-selected-card"
              : "get-started-card"
          }
        >
          <img src={CustomerAvatar} alt="customer avatar" />
          <h3>Customer</h3>
          <input
            type="radio"
            name="cardSelection"
            value="customer"
            checked={selectedCard === "customer"}
            onChange={() => handleCardChange("customer")}
          />
        </div>
      </label>

      <label>
        <div
          className={
            selectedCard === "worker"
              ? "get-started-selected-card"
              : "get-started-card"
          }
        >
          <img src={WorkerAvatar} alt="worker avatar" />
          <h3>Worker</h3>
          <input
            type="radio"
            name="cardSelection"
            value="worker"
            checked={selectedCard === "worker"}
            onChange={() => handleCardChange("worker")}
          />
        </div>
      </label>
    </div>
  );
};
