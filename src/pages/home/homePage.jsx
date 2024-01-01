/* eslint-disable react/prop-types */
// import "./HomePage.css";
// import "./home-mobile.css";

import SearchBar from "../../components/searchBar/SearchBar";
import TestimonialSection from "./Testimonial";
import PopularServicesSection from "./PopularServicesSection";
import DiscoverSection from "./DiscoverSection";
import FAQSection from "./FAQSection";
import WhatForSection from "./WhatForSection";
import GetInTouchSection from "./GetInTouch";
import GetStartedSection from "../../components/getStarted/GetStartedSection";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navBar/NavBar";

const HomePage = () => (
  <div className=" mx-auto w-screen flex flex-col content-center items-center ">
    <NavBar />

    <HeroSection />

    <PopularServicesSection />

    <DiscoverSection />

    <WhatForSection />

    <TestimonialSection />

    <GetStartedSection />

    <FAQSection />

    <GetInTouchSection />

    <Footer />
  </div>
);

export default HomePage;

const HeroSection = () => (
  <section className=" w-screen md:w-auto flex flex-col mx-auto text-center items-center mt-[150px] md:px-[0px] px-[16px] ">
    <h1 className="hero-header text-[48px] leading-normal md:text-[64px] mb-[10px] font-[600] text-main-color ">
      The Artisan Marketplace
    </h1>
    <p className="hero-support mb-[50px] ">Find local artisans near you</p>
    <SearchBar />
  </section>
);
