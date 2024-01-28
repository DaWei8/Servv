/* eslint-disable react/prop-types */
import { Routes, Route, Link } from "react-router-dom";

// import "./ArtisanPage.scss";
import menuIcon from "../assets/icons/hamburger-menu.svg";
import cancelIcon from "../assets/icons/cancel-icon.svg";

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
import { sidebarContentTop, sidebarContentBottom } from "../data/Datasets";
import { useState } from "react";
import LogOut from "../authentication/LogOut";

export const ArtisanPage = () => {
  const [activateMenuState, setActivateMenuState] = useState(false);
// const [hideLogOut, setHideLogOut] = useState(true)
  const handleClick = () => {
    setActivateMenuState(true);
    console.log("this is working");
  };
  const handleCancel = () => {
    setActivateMenuState(false);
    console.log("this is working");
  };

  return (
    <div className="flex flex-col flex-auto w-screen gap-[40px] min-h-screen duration-500 ">
      <div className=" flex gap-[10px] justify-between  px-[20px] pt-[20px] ">
        <div className="artisan-hamburger-menu flex lg:hidden ">
          <img
            src={menuIcon}
            alt="hamburger-menu-icon"
            className="hamburger-menu-icon  "  
            onClick={handleClick}
          />
        </div>
        <ArtisanTopbar />
      </div>
      <div className="flex duration-[600ms] flex-auto overflow-hidden ">
        <div className=" flex-row gap-[20px] px-[20px] flex max-w-[1440px] duration-[500ms] flex-auto ">
          <ArtisanSidebar onClick={activateMenuState === true ? true : false} />
          <div
            className={
              activateMenuState !== false
                ? " fixed z-[1000] pl-[6px] bg-transparent-bg-blur backdrop-blur-[40px] rounded-[10px] justify-center h-screen top-0 w-screen right-0 pb-[40px] pt-[30px] duration-[600ms] md:px-[40px] lg:hidden "
                : " fixed z-[1000] -translate-x-[100vw] -left-[100vw] pl-[6px] duration-[600ms] rounded-[10px] justify-center  h-screen lg:hidden  "
            }
          >
            <div className=" justify-between mr-[6px] flex-col flex rounded-[10px] h-full lg:px-0 px-[20px]  ">
              <div className="artisan-hamburger-menu flex lg:hidden mr-auto ">
                <img
                  src={cancelIcon}
                  alt="servv logo"
                  className=" w-[30px] "
                  onClick={handleCancel}
                />
              </div>
              <div className=" flex flex-col pt-[10px] gap-[10px] ">
                {sidebarContentTop.map((content, index) => (
                  <ArtisanSidebarButton
                    key={index}
                    icon={content.icon}
                    title={content.title}
                    link={content.link}
                    onClick={handleCancel}
                    F
                  />
                ))}
              </div>

              <div className=" flex flex-col pb-[10px] gap-[10px] ">
                {sidebarContentBottom.map((content, index) => (
                  <ArtisanSidebarButton
                    key={index}
                    icon={content.icon}
                    title={content.title}
                    link={content.link}
                    onClick={handleCancel}
                  />
                ))}
              </div>
            </div>
          </div>
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
            <Route
              path="/artisanSettings/*"
              exact
              Component={ArtisanSettings}
            />
            <Route
              path="/logout"
              exact
              Component={LogOut}
            />
          </Routes>
        </div>
      </div>
      <FooterDashboard />
    </div>
  );
};

const ArtisanSidebarButton = (props) => {
  return (
    <Link to={props.link}>
      <div
        onClick={props.onClick}
        className=" lg:hover:bg-pale-blue-grey lg:shadow-none bg-primary-bg-color-white shadow-3xl flex gap-[10px] lg:py-[12px] py-[15px] px-[16px] items-center rounded-[8px]  "
      >
        <img
          src={props.icon}
          alt="sidebar icon"
          className="artisan-sidebar-icon"
        />
        <p className=" text-[14px] font-[400] lg:hidden leading-[27px] text-primary-text-color-black ">
          {props.title}
        </p>
      </div>
    </Link>
  );
};
