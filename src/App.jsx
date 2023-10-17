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
import Login from "./authentication/log-in/Login";
import SignUp from "./authentication/sign-up/SignUp";
import AuthPage from "./authentication/AuthPage";

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
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={SignUp} />
          <Route path="/authPage/*" Component={AuthPage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
