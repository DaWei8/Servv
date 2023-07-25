/* eslint-disable react/prop-types */
import { useState } from "react";
import { faqQuestionsAndAnswers } from "../../data/Datasets";
import FaqPlus from "../../assets/icons/faq-plus.svg";
import FaqMinus from "../../assets/icons/faq-minus.svg";


const FAQSection = () => (
  <section className="faq-section">
    <div className="faq-header_support ">
      <h1 className="faq-header section-header">Frequently asked questions</h1>
      <p className="faq-support section-h-support">For all you need to know</p>
    </div>
    <div className="faq-list">
      {faqQuestionsAndAnswers.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  </section>
);


export default FAQSection;

const FAQItem = (props) => {
  const [showFAQ, setShowFAQ] = useState(null);

  const handleFaqSelection = (FaqId) => {
    setShowFAQ(FaqId);
  };

  return (
    <div className="faq_item">
      <div className="faq_item-QnA">
        <div className="faq_item-question">{props.question}</div>
        <div
          className="faq_item-answer"
          style={
            showFAQ !== "show" ? { display: "none" } : { display: "block" }
          }
        >
          {props.answer}
        </div>
      </div>

      <div className="faq_item-button">
        <button
          value="hide"
          onClick={() => handleFaqSelection("hide")}
          style={
            showFAQ !== "show" ? { display: "none" } : { display: "block" }
          }
        >
          <img src={FaqMinus} alt="faq button minus" />
        </button>

        <button
          value="show"
          onClick={() => handleFaqSelection("show")}
          style={
            showFAQ !== "show" ? { display: "block" } : { display: "none" }
          }
        >
          <img src={FaqPlus} alt="faq button plus" />
        </button>
      </div>
    </div>
  );
};
