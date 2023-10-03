import "./SupportPage.scss";
import AboutImage from "../../assets/images/about-image.png";
import FAQSection from "../home/FAQSection";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navBar/NavBar";

const SupportPage = () => {
  return (
    <div className="support-page">
      <NavBar />
      <SupportHeroSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default SupportPage;

const SupportHeroSection = () => (
  <section className="support-hero-section">
    <div className="support-hero-section-text">
      <h1 className="support-hero-header">
        Have Questions?
        <br />
        Need Assistance?
      </h1>
      <p className="support-hero-support">
        At Serv, we believe in the power of connecting people with skilled
        artisans right in their local communities. We are an innovative online
        marketplace that bridges the gap between clients seeking reliable
        services and talented artisans eager to showcase their expertise. Our
        mission is to create a seamless platform that simplifies the process of
        finding the perfect artisan for any task or project.
      </p>
      <button>Get In Touch</button>
    </div>
    <div className="support-hero-section-image">
      <img src={AboutImage} alt="A man smiling while using the website" />
    </div>
  </section>
);
