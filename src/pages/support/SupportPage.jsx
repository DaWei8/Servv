// import "./SupportPage.scss";
import AboutImage from "../../assets/images/about-image.png";
import FAQSection from "../home/FAQSection";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navBar/NavBar";

const SupportPage = () => {
  return (
    <div className="flex flex-col w-screen items-center ">
      <NavBar />
      <SupportHeroSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default SupportPage;

const SupportHeroSection = () => (
  <section className=" md:px-0 px-[20px] container max-w-[1024px] mx-auto flex md:flex-row flex-col gap-[40px] justify-between mt-[50px] py-[96px] ">
    <div className=" flex flex-col md:w-[55%] gap-[20px] ">
      <h1 className=" text-[48px] font-semibold ">
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
      <button className="primary-button-blue h-[50px] " >Get In Touch</button>
    </div>
    <div className="support-hero-section-image">
      <img src={AboutImage} alt="A man smiling while using the website" />
    </div>
  </section>
);
