import { Link } from "react-router-dom";

import "./ArtisanSidebar.scss";
import { sidebarContentTop, sidebarContentBottom } from "../../data/Datasets";

const ArtisanSidebar = () => {
  return (
    <div className="artisan-sidebar">
      <div className="artisan-sidebar-container">
        <div className="artisan-sidebar-container-top">
          {sidebarContentTop.map((content, index) => (
            <ArtisanSidebarButton
              key={index}
              icon={content[index].icon}
              title={content[index].title}
              link={content[index].link}
            />
          ))}
        </div>

        <div className="artisan-sidebar-container-bottom">
        {sidebarContentBottom.map((content, index) => (
            <ArtisanSidebarButton
              key={index}
              icon={content[index].icon}
              title={content[index].title}
              link={content[index].link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtisanSidebar;

const ArtisanSidebarButton = (icon, title, link) => {
  return (
    <Link to={link}>
      <div className="artisan-sidebar-button">
        <img src={icon} alt="sidebar icon" className="artisan-sidebar-icon" />
        <p className="artisan-sidebar-paragraph">{title}</p>
      </div>
    </Link>
  );
};
