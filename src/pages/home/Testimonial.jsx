/* eslint-disable react/prop-types */
import {  testimonialsCard,} from "../../data/Datasets";
import QuoteMark from "../../assets/icons/quote.svg";
import PrevArrow from "../../assets/icons/prev-arrow.svg";
import NextArrow from "../../assets/icons/next-arrow.svg";

const TestimonialSection = () => (
    <section className="testimonials-section">
      <div className="testimonials-header_support">
        <h1 className="testimonials-header section-header">
          Testimonials
        </h1>
        <p className="testimonials-support section-h-support">Hear from our Customers</p>
      </div>

        <div className="testimonials-container">
          <div className="testimonials-carousel">
            {testimonialsCard.map((card, index) => (
                <TestimonialCard
                  key={index}
                  picture={card.picture}
                  name={card.name}
                  title={card.title}
                  description={card.description}
                />
            ))}
          </div>
           
          <div className="testimonials-nav">
            <button>
              <img className="swiper-button-next" src={PrevArrow}></img>
            </button>
            <button>
              <img className="swiper-button-prev" src={NextArrow}></img>
            </button>
          </div>
        </div>

    </section>
)

export default TestimonialSection;


const TestimonialCard = (props) => (
    <div className="testimonial-card">
      <img
        className="testimonial-image"
        src={props.picture}
        alt="pixels of the testifier"
      />
      <div className="testimonial-content">
        <img className="quote-mark" src={QuoteMark} alt="quote mark" />
        <div className="testimonial-person">
          <h2 className="testimonial-name">{props.name}</h2>
          <p className="testimonial-title">{props.title}</p>
          <p className="testimonial-description">{props.description}</p>
        </div>
      </div>
    </div>
  );