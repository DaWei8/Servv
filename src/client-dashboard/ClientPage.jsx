import { Routes, Route } from "react-router-dom";

<<<<<<< HEAD
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
            <Route path="/artisanSettings/*" exact Component={ArtisanSettings} />
=======
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
        <ClientTopbar />
        <div className="artisan-page-content">
          <ClientSidebar />
          <Routes>
            <Route path="/" exact Component={ClientDashboard} />
            <Route
              path="/clientDashboard"
              exact
              Component={ClientDashboard}
            />
            <Route path="/clientProfile" exact Component={ClientProfile} />
            <Route path="/clientProjects" exact Component={ClientProjects} />
            <Route path="/clientPayments" exact Component={ClientPayments} />
            <Route path="/clientHistory" exact Component={ClientHistory} />
            <Route path="/clientSupport" exact Component={ClientSupport} />
            <Route path="/clientSettings/*" exact Component={ClientSettings} />
>>>>>>> bd3929f2b30fba8339106efd140d99f819c1a193
          </Routes>
        </div>
        <FooterDashboard />
      </div>
    </div>
  );
};
