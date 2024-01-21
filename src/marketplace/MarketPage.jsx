/* eslint-disable react/prop-types */
import Footer from "../components/footer/Footer";
import NavBar from "../components/navBar/NavBar";
import { Route, Routes } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import MarketHomePage from "./pages/MarketHomePage";

const MarketPage = () => {
  return (
    <div className=" flex flex-col justify-between mx-0 w-[100%] mt-[80px] overflow-hidden ">
      <NavBar />
      <div className=" " >
      <Routes>
        <Route path="/" Component={MarketHomePage} />
        <Route path="category" Component={MarketHomePage} />
        <Route path="category" Component={CategoryPage} />
        <Route path="category" Component={CategoryPage} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default MarketPage;
