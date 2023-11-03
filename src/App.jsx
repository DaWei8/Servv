import "./App.css";
// import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import NavBar from "./components/navBar/NavBar";
import HomePage from "./pages/home/homePage";
// import Footer from "./components/footer/Footer";
import AboutPage from "./pages/about/About";
import ForPage from "./pages/for-you/ForPage";
import SupportPage from "./pages/support/SupportPage";
import MarketPage from "./marketplace/MarketPage";
import AuthPage from "./authentication/AuthPage";

// import ArtisanDashboard from "./artisan-dashboard/ArtisanPage";
import { ArtisanPage } from "./artisan-dashboard/ArtisanPage";
import { ClientPage } from "./client-dashboard/ClientPage";

const App = () => {
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:8000/message")
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data.message));
  // }, []);

  return (
    <div className="App">
      {/* <h1>{message}</h1> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" exact Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
          <Route path="/marketplace" Component={MarketPage} />
          <Route path="/for" Component={ForPage} />
          <Route path="/support" Component={SupportPage} />

          <Route path="/authPage/*" Component={AuthPage}/>
          <Route path="/artisanPage/*" Component={ArtisanPage}/>
          <Route path="/clientPage/*" Component={ClientPage}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

