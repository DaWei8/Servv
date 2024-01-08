/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import "./ArtisanSidebar.scss";
import { sidebarContentTop, sidebarContentBottom } from "../../data/Datasets";

const ArtisanSidebar = () => {
  
  return (
    <div className="artisan-sidebar rounded-[8px] flex justify-center items-center h-[86vh]  ">
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

export default ArtisanSidebar;

const ArtisanSidebarButton = (props) => {
  return (
    <Link to={props.link}>
      <div className=" hover:bg-pale-blue-grey flex gap-[10px] py-[12px] px-[16px] rounded-[8px]  ">
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
