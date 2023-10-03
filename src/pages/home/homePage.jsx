/* eslint-disable react/prop-types */
import "./HomePage.css";
import "./home-mobile.css";

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
  <div className="home-page">
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
  <section className="hero-section">
      <h1 className="hero-header">The Artisan Marketplace</h1>
      <p className="hero-support">Find local artisans near you</p>
      <SearchBar />
    </section>
)