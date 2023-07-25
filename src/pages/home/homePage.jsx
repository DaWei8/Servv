/* eslint-disable react/prop-types */
import "./HomePage.css";
import "./home-mobile.css";

import SearchBar from "../../components/searchBar/SearchBar";
import TestimonialSection from "./Testimonial";
import PopularServicesSection from "./PopularServicesSection";
import DiscoverSection from "./DiscoverSection";
import GetStartedSection from "./GetStartedSection";
import FAQSection from "./FAQSection";
import WhatForSection from "./WhatForSection";
import GetInTouchSection from "./GetInTouch";


const HomePage = () => (
  <div className="home-page">

    <HeroSection />

    <PopularServicesSection />

    <DiscoverSection />
    
    <WhatForSection />

    <TestimonialSection />

    <GetStartedSection />

    <FAQSection />

   <GetInTouchSection />

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