/* eslint-disable react/prop-types */
import Footer from "../components/footer/Footer";
import NavBar from "../components/navBar/NavBar";
import { Route, Routes } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import MarketHomePage from "./pages/MarketHomePage";
import WorkerSkillViewPage from "./pages/WorkerSkillViewPage";

const MarketPage = () => {
  return (
    <div className="mx-auto w-screen flex flex-col content-center items-center  ">
      <NavBar />

      <div className=" mb-[80px] w-[100%] "> 
        <Routes>
          <Route path="/" Component={MarketHomePage} />
          <Route path="category" Component={CategoryPage} />
          <Route
            path="category/workerskillpage"
            Component={WorkerSkillViewPage}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default MarketPage;
