import { Routes, Route } from "react-router-dom";

import "./ClientPage.scss";
import ClientTopbar from "./navbar/ClientTopbar";
import ClientDashboard from "./overview-dashboard/ClientDashboard";
import ClientProfile from "./profile/ClientProfile";
import ClientProjects from "./projects/ClientProjects";
import ClientPayments from "./payments/ClientPayments";
import ClientHistory from "./history/ClientHistory";
import ClientSupport from "./support/ClientSupport";
import ClientSettings from "./settings/ClientSettings";
import { FooterDashboard } from "../components/footer/FooterDashboard";
import ClientSidebar from "./navbar/ClientSidebar";

export const ClientPage = () => {
  return (
    <div className="artisan-page">
      <div className="artisan-page-container">
        <div className="desktop-visible">
          <ClientTopbar />
        </div>
        <div className="artisan-mobile-top">
          <ClientSidebar />
          <ClientTopbar />
        </div>
        <div className="artisan-page-content">
          <div className="desktop-visible">
            <ClientSidebar />
          </div>
          <Routes>
            <Route path="/" exact Component={ClientDashboard} />
            <Route path="/clientDashboard" exact Component={ClientDashboard} />
            <Route path="/clientProfile" exact Component={ClientProfile} />
            <Route path="/clientProjects" exact Component={ClientProjects} />
            <Route path="/clientPayments" exact Component={ClientPayments} />
            <Route path="/clientHistory" exact Component={ClientHistory} />
            <Route path="/clientSupport" exact Component={ClientSupport} />
            <Route path="/clientSettings/*" exact Component={ClientSettings} />
          </Routes>
        </div>
        <FooterDashboard />
      </div>
    </div>
    // pushing for david
  );
};
