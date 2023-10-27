import { Routes, Route } from "react-router-dom";

import "./ArtisanPage.scss";
import ArtisanTopbar from "./navbar/ArtisanTopbar";
import ArtisanDashboard from "./overview-dashboard/ArtisanDashboard";
import ArtisanProfile from "./profile/ArtisanProfile";
import ArtisanProjects from "./projects/ArtisanProjects";
import ArtisanPayments from "./payments/ArtisanPayments";
import ArtisanHistory from "./history/ArtisanHistory";
import ArtisanSupport from "./support/ArtisanSupport";
import ArtisanSettings from "./settings/ArtisanSettings";
import { FooterDashboard } from "../components/footer/FooterDashboard";
import ArtisanSidebar from "./navbar/ArtisanSidebar";

export const ArtisanPage = () => {
  return (
    <div className="artisan-page">
      <div className="artisan-page-container">
        <ArtisanTopbar />
        <div className="artisan-page-content">
          <ArtisanSidebar />
          <Routes>
            <Route path="/" exact Component={ArtisanDashboard} />
            <Route
              path="/artisanDashboard"
              exact
              Component={ArtisanDashboard}
            />
            <Route path="/artisanProfile" exact Component={ArtisanProfile} />
            <Route path="/artisanProjects" exact Component={ArtisanProjects} />
            <Route path="/artisanPayments" exact Component={ArtisanPayments} />
            <Route path="/artisanHistory" exact Component={ArtisanHistory} />
            <Route path="/artisanSupport" exact Component={ArtisanSupport} />
            <Route path="/artisanSettings" exact Component={ArtisanSettings} />
          </Routes>
        </div>
        <FooterDashboard />
      </div>
    </div>
  );
};
