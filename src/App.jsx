import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/home/homePage";
import AboutPage from "./pages/about/About";
import ForPage from "./pages/for-you/ForPage";
import SupportPage from "./pages/support/SupportPage";
import MarketPage from "./marketplace/MarketPage";
import AuthPage from "./authentication/AuthPage";

// import ArtisanDashboard from "./artisan-dashboard/ArtisanPage";
import { ArtisanPage } from "./artisan-dashboard/ArtisanPage";
import { ClientPage } from "./client-dashboard/ClientPage";
import ProtectedRoute from "./authentication/ProtectedRoute";
import { useState } from "react";


const App = () => {
  const [isAuth, setAuth] = useState(false);
  const [hideLogin, setHideLogin] = useState(false);

  return (
    <div className="App relative flex flex-row items-center justify-center w-screen content-center duration-500 ">
      <div className="bg-primary-bg-color-white ">
        <BrowserRouter>
          <Routes>
            <Route path="/" exact Component={HomePage} />
            <Route path="/about" Component={AboutPage} />
            <Route path="/marketplace/*" Component={MarketPage} />
            <Route path="/for" Component={ForPage} />
            <Route path="/support" Component={SupportPage} />
            <Route path="/authPage/*" Component={AuthPage} />

            {/* <Route path="/artisanPage/*" Component={ArtisanPage} /> */}
            {/* <Route path="/clientPage/*" Component={ClientPage} /> */}

            <Route
              path="/artisanPage/*"
              element={
                <ProtectedRoute isAuthenticated={isAuth}>
                  <ArtisanPage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/clientPage/*"
              element={
                <ProtectedRoute isAuthenticated={isAuth}>
                  <ClientPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
