/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import React from "react";

import "./ClientSidebar.scss";

import { sidebarContentTop, sidebarContentBottom } from "../../data/Datasets";

const ClientSidebar = () => {
 

  return (
    <div className="client-sidebar">
     
        <div className="client-sidebar-container">
          <div className="client-sidebar-container-top">
            {sidebarContentTop.map((content, index) => (
              <ClientSidebarButton
                key={index}
                icon={content.icon}
                title={content.title}
                link={content.link}
              />
            ))}
          </div>

          <div className="client-sidebar-container-bottom">
            {sidebarContentBottom.map((content, index) => (
              <ClientSidebarButton
                key={index}
                icon={content.icon}
                title={content.title}
                link={content.link}
              />
            ))}
          </div>
        </div>
      
    </div>
  );
};

export default ClientSidebar;

const ClientSidebarButton = (props) => {
  return (
    <Link to={props.link}>
      <div className="client-sidebar-button">
        <img
          src={props.icon}
          alt="sidebar icon"
          className="client-sidebar-icon"
        />
        <p className="client-sidebar-paragraph">{props.title}</p>
      </div>
    </Link>
  );
};
