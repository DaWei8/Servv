// import "./ClientTopbar.scss";

import { Link } from "react-router-dom";
import servvLogo from "../../assets/icons/servv-logo-dk.svg";
// import menuIcon from "../../assets/icons/hamburger-menu.svg";
import chatIcon from "../../assets/icons/messages-3.svg";
import ClientSearchBar from "./ClientSearchBar";
import Notifications from "../components/Notifications";
import { useState } from "react";
// import { useAuth } from "../../authentication/context/AuthContext";

const ClientTopbar = () => {
  // const { userName } = useAuth();
  const [notificationShowState, setShowNotificationState] = useState(false);

  const showNotifications = () => {
    setShowNotificationState(!notificationShowState);
  };

  return (
    <div className="relative flex items-center justify-between w-auto flex-auto lg:rounded-[10px] lg:px-[20px] h-fit lg:shadow-3xl ">
      {/* <div className="Client-hamburger-menu">
          <img
            src={menuIcon}
            alt="servv logo"
            className="hamburger-menu-icon"
          />
        </div> */}

      <div className="Client-company-logo hidden lg:flex ">
        <Link to="./ClientDashboard">
          <img
            src={servvLogo}
            alt="servv logo"
            className="servv-logo h-[55px] "
          />
        </Link>
      </div>
      <div className=" flex gap-[10px] ml-auto ">
        <div className="Client-topbar-search hidden md:flex ">
          <ClientSearchBar />
        </div>
        <div className="Client-notifications" onClick={showNotifications}>
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
        
      </div>
    </div>
  );
};

export default ClientTopbar;
