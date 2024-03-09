/* eslint-disable react/prop-types */
import { Routes, Route, Link } from "react-router-dom";
import menuIcon from "../assets/icons/hamburger-menu.svg";
import cancelIcon from "../assets/icons/cancel-icon.svg";

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
import {
  sidebarContentBottomClient,
  sidebarContentTopClient,
} from "../data/Datasets";
import { useState } from "react";
import LogOut from "../authentication/LogOut";

export const ClientPage = () => {
  const [activateMenuState, setActivateMenuState] = useState(false);

  const handleClick = () => {
    setActivateMenuState(true);
    console.log("this is working");
  };
  const handleCancel = () => {
    setActivateMenuState(false);
    console.log("this is working");
  };

  return (
    <div className="flex flex-col flex-auto gap-[40px] w-screen min-h-screen duration-500 ">
      <div className=" flex gap-[10px] justify-between  px-[20px] pt-[20px] ">
        <div className="Client-hamburger-menu flex lg:hidden ">
          <img
            src={menuIcon}
            alt="hamburger-menu-icon"
            className="hamburger-menu-icon -scale-100 "
            onClick={handleClick}
          />
        </div>
        <ClientTopbar />
      </div>
      <div className="flex duration-[600ms] flex-auto w-full overflow-hidden ">
        <div className=" flex-row gap-[20px] px-[20px] w-full flex duration-[500ms] flex-auto ">
          <ClientSidebar onClick={activateMenuState === true ? true : false} />
          <div
            className={
              activateMenuState !== false
                ? " fixed z-[1000] pl-[6px] bg-transparent-bg-blur backdrop-blur-[40px] rounded-[10px] justify-center h-screen top-0 w-screen right-0 pb-[40px] pt-[30px] duration-[600ms] md:px-[40px] lg:hidden "
                : " fixed z-[1000] -translate-x-[100vw] -left-[100vw] pl-[6px] duration-[600ms] rounded-[10px] justify-center  h-screen lg:hidden  "
            }
          >
            <div className=" justify-between mr-[6px] flex-col flex rounded-[10px] h-full lg:px-0 px-[20px]  ">
              <div className="Client-hamburger-menu flex lg:hidden mr-auto ">
                <img
                  src={cancelIcon}
                  alt="servv logo"
                  className=" w-[30px] "
                  onClick={handleCancel}
                />
              </div>
              <div className=" flex flex-col pt-[10px] gap-[10px] ">
                {sidebarContentTopClient.map((content, index) => (
                  <ClientSidebarButton
                    key={index}
                    icon={content.icon}
                    title={content.title}
                    link={content.link}
                    onClick={handleCancel}
                  />
                ))}
              </div>

              <div className=" flex flex-col pb-[10px] gap-[10px] ">
                {sidebarContentBottomClient.map((content, index) => (
                  <ClientSidebarButton
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
            <Route path={"/"} Component={ClientDashboard} />
            <Route path="/clientDashboard" exact Component={ClientDashboard} />
            <Route path="/clientProfile" exact Component={ClientProfile} />
            <Route path="/clientProjects/*" exact Component={ClientProjects} />
            <Route path="/clientPayments" exact Component={ClientPayments} />
            <Route path="/clientHistory" exact Component={ClientHistory} />
            <Route path="/clientSupport" exact Component={ClientSupport} />
            <Route path="/clientSettings/*" exact Component={ClientSettings} />
            <Route path="/logout" exact Component={LogOut} />
          </Routes>
        </div>
      </div>
      <FooterDashboard />
    </div>
  );
};

const ClientSidebarButton = (props) => {
  return (
    <Link to={props.link}>
      <div
        onClick={props.onClick}
        className=" lg:hover:bg-pale-blue-grey lg:shadow-none bg-primary-bg-color-white shadow-3xl flex gap-[10px] lg:py-[12px] py-[15px] px-[16px] items-center rounded-[8px]  "
      >
        <img
          src={props.icon}
          alt="sidebar icon"
          className="Client-sidebar-icon"
        />
        <p className=" text-[14px] font-[400] lg:hidden leading-[27px] text-primary-text-color-black ">
          {props.title}
        </p>
      </div>
    </Link>
  );
};
