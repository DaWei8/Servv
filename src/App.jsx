import "./App.css";
// import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/home/homePage";
import AboutPage from "./pages/about/About";
import ForPage from "./pages/for-you/ForPage";
import SupportPage from "./pages/support/SupportPage";
import MarketPage from "./marketplace/MarketPage";
import AuthPage from "./authentication/AuthPage";

// import ArtisanDashboard from "./artisan-dashboard/ArtisanPage";
import { ArtisanPage } from "./artisan-dashboard/ArtisanPage";
// import { ClientPage } from "./client-dashboard/ClientPage";

const App = () => {

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" exact Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
          <Route path="/marketplace" Component={MarketPage} />
          <Route path="/for" Component={ForPage} />
          <Route path="/support" Component={SupportPage} />

          <Route path="/authPage/*" Component={AuthPage}/>
          <Route path="/artisanPage/*" Component={ArtisanPage}/>
          {/* <Route path="/clientPage/*" Component={ClientPage}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

