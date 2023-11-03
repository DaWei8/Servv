/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import "./ClientSidebar.scss";
import { sidebarContentTop, sidebarContentBottom } from "../../data/Datasets";

const ClientSidebar = () => {
  return (
    <div className="artisan-sidebar">
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
