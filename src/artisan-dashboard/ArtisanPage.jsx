import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./ArtisanPage.scss";
import ArtisanTopbar from "./navbar/ArtisanTopbar";
import ArtisanDashboard from "./overview-dashboard/ArtisanDashboard";
import ArtisanProfile from "./profile/ArtisanProfile";
import ArtisanProjects from "./projects/ArtisanProjects";
import ArtisanPayments from "./payments/ArtisanPayments";
import ArtisanHistory from "./history/ArtisanHistory";
import ArtisanSupport from "./support/ArtisanSupport";
import ArtisanSettings from "./settings/ArtisanSettings";

export const ArtisanPage = () => {
  return (
    <div className="artisan-page">
      <div className="artisan-page-container">
        <ArtisanTopbar />
        <BrowserRouter>
          <Routes>
            <Route path="/dashboard" exact Component={ArtisanDashboard} />
            <Route path="/profile" exact Component={ArtisanProfile} />
            <Route path="/projects" exact Component={ArtisanProjects} />
            <Route path="/payments" exact Component={ArtisanPayments} />
            <Route path="/history" exact Component={ArtisanHistory} />
            <Route path="/support" exact Component={ArtisanSupport} />
            <Route path="/settings" exact Component={ArtisanSettings} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};
