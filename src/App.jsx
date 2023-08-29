import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/navBar/NavBar";
import HomePage from "./pages/home/homePage";
import Footer from "./components/footer/Footer";
import AboutPage from "./pages/about/About";
import ForPage from "./pages/for-you/ForPage";
import SupportPage from "./pages/support/SupportPage";

const App = () => (
  <div className="App">
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" exact Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/for" Component={ForPage} />
        <Route path="/support" Component={SupportPage} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>
);

export default App;
