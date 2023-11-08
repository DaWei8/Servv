/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import "./ClientSidebar.scss";
import dashboardHamburger from "../../assets/icons/hamburger-menu.svg";
import { sidebarContentTop, sidebarContentBottom } from "../../data/Datasets";

const ClientSidebar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    function handleWindowResize() {
      setIsSmallScreen(window.innerWidth <= 700);
    }

    // Initial check
    handleWindowResize();

    // Add a listener to handle window resizing
    window.addEventListener("resize", handleWindowResize);

    return () => {
      // Remove the event listener 
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="artisan-sidebar">
      {isSmallScreen ? (
        <div className="ham-icon"><img
          src={dashboardHamburger}
          alt="dashboard icon"
          className="hamburger-icon"
        /> </div>
      ) : (
        <div className="artisan-sidebar-container">
          <div className="artisan-sidebar-container-top">
            {sidebarContentTop.map((content, index) => (
              <ArtisanSidebarButton
                key={index}
                icon={content.icon}
                title={content.title}
                link={content.link}
              />
            ))}
          </div>

          <div className="artisan-sidebar-container-bottom">
            {sidebarContentBottom.map((content, index) => (
              <ArtisanSidebarButton
                key={index}
                icon={content.icon}
                title={content.title}
                link={content.link}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientSidebar;

const ArtisanSidebarButton = (props) => {
  return (
    <Link to={props.link}>
      <div className="artisan-sidebar-button">
        <img
          src={props.icon}
          alt="sidebar icon"
          className="artisan-sidebar-icon"
        />
        <p className="artisan-sidebar-paragraph">{props.title}</p>
      </div>
    </Link>
  );
};
