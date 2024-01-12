/* eslint-disable react/prop-types */
import { useState } from "react";
import { faqQuestionsAndAnswers } from "../../data/Datasets";
import FaqPlus from "../../assets/icons/faq-plus.svg";
import FaqMinus from "../../assets/icons/faq-minus.svg";

const FAQSection = () => (
  <section className=" max-w-[1240px] mx-auto flex flex-col gap-[64px] py-[80px] ">
    <div className="faq-header_support  text-center gap-[21px] flex flex-col ">
      <h1 className=" md:text-[40px] gap-[10px] font-semibold text-[28px] ">
        Frequently asked questions
      </h1>
      <p className=" tracking-[6px] uppercase gap-[10px]  text-[10px] md:text-[14px] ">
        For all you need to know
      </p>
    </div>
    <div className=" w-full md:w-[768px] flex flex-col gap-[20px] px-[16px] justify-center items-center ">
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
    <div className=" relative flex md:w-full w-[80vw]  pb-[20px] border-b-[2px] border-l-0 border-r-0 border-t-0  border-solid border-pale-blue-grey duration-[400ms] ">
      <div className="flex flex-col flex-auto gap-[8px] ">
        <div className=" md:text-[18px] text-[16px] font-[600]">
          <p className=" " >{props.question}</p>
        </div>
        <div
          className=" font-light "
          style={
            showFAQ !== "show" ? { display: "none" } : { display: "block" }
          }
        >
         <p className=" " > {props.answer}</p>
        </div>
      </div>

      <div className="faq_item-button">
        <div
          value="hide"
          className=" absolute right-0 top-0 bottom-0 duration-[400ms] "
          onClick={() => handleFaqSelection("hide")}
          style={
            showFAQ !== "show" ? { display: "none" } : { display: "block" }
          }
        >
          <img src={FaqMinus} alt="faq button minus " />
        </div>

        <div
          value="show"
          className=" absolute right-0 top-0 bottom-0 duration-[400ms]  "
          onClick={() => handleFaqSelection("show")}
          style={
            showFAQ !== "show" ? { display: "block" } : { display: "none" }
          }
        >
          <img src={FaqPlus} alt="faq button plus" />
        </div>
      </div>
    </div>
  );
};
