// import "./ArtisanTopbar.scss";

import { Link } from "react-router-dom";
import servvLogo from "../../assets/icons/servv-logo-dk.svg";
// import menuIcon from "../../assets/icons/hamburger-menu.svg";
import chatIcon from "../../assets/icons/messages-3.svg";
import ArtisanSearchBar from "./ArtisanSearchBar";
import Notifications from "../components/Notifications";
import { useState } from "react";

const ArtisanTopbar = () => {
  const [notificationShowState, setShowNotificationState] = useState(false);

  const showNotifications = () => {
    setShowNotificationState(!notificationShowState);
  };

  return (
    <div className="relative flex items-center justify-between w-auto flex-auto lg:rounded-[10px] lg:px-[20px] h-fit lg:shadow-md ">
      {/* <div className="artisan-hamburger-menu">
          <img
            src={menuIcon}
            alt="servv logo"
            className="hamburger-menu-icon"
          />
        </div> */}

      <div className="artisan-company-logo hidden lg:flex ">
        <Link to="./artisanDashboard">
          <img
            src={servvLogo}
            alt="servv logo"
            className="servv-logo h-[60px] "
          />
        </Link>
      </div>
      <div className=" flex gap-[10px] ml-auto ">
        <div className="artisan-topbar-search hidden md:flex ">
          <ArtisanSearchBar />
        </div>
        <div className="artisan-notifications" onClick={showNotifications}>
          <img
            src={chatIcon}
            className={
              notificationShowState !== false
                ? " bg-blue-200 duration-500 rounded-[5px] p-[10px] w-[40px] h-[40px] "
                : "bg-pale-blue-grey rounded-[5px] p-[10px] w-[40px] h-[40px] "
            }
          />
        </div>
        <div
          className={
            notificationShowState !== false
              ? "absolute top-[60px] md:right-[48px] z-[100] right-0 "
              : "hidden"
          }
        >
          <Notifications />
        </div>
        <Link
          to="/artisanProfile"
          className=" bg-primary-button-color-blue rounded-[50%] relative p-[10px] w-[40px] text-center h-[40px] items-center justify-center "
        >
          <div className=" absolute w-[10px] h-[10px] rounded-[50%] bg-default-green -bottom-0 right-1 "></div>
          <p className="text-primary-button-color-white text-[20px] leading-[100%] ">
            D
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ArtisanTopbar;
