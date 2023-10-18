import { Link } from "react-router-dom";
import dashboardIcon from "../../assets/icons/dashboard-icon.svg";
import profileIcon from "../../assets/icons/user-tick.svg";
import projectsIcon from "../../assets/icons/folder-open.svg";
import paymentsIcon from "../../assets/icons/moneys.svg";
import historyIcon from "../../assets/icons/clock.svg";
import supportIcon from "../../assets/icons/message-question.svg";
import settingsIcon from "../../assets/icons/setting-2.svg";
import logoutIcon from "../../assets/icons/logout.svg";


const SidebarContent = [
{
  "dashboard" : {
  "icon" : ,
  "title" : "Dashboard",
  "link" : "/Dashboard"
  }
},
{
  "dashboard" : {
  "icon" : ,
  "title" : "Dashboard",
  "link" : "/Dashboard"
}
},
{
  "dashboard" : {
  "icon" : ,
  "title" : "Dashboard",
  "link" : "/Dashboard"
}
},
{
  "dashboard" : {
  "icon" : ,
  "title" : "Dashboard",
  "link" : "/Dashboard"
}
},
{
  "dashboard" : {
  "icon" : ,
  "title" : "Dashboard",
  "link" : "/Dashboard"
}
},
{
  "dashboard" : {
  "icon" : ,
  "title" : "Dashboard",
  "link" : "/Dashboard"
}
},
{
  "dashboard" : {
  "icon" : ,
  "title" : "Dashboard",
  "link" : "/Dashboard"
}
},
{
  "dashboard" : {
  "icon" : ,
  "title" : "Dashboard",
  "link" : "/Dashboard"
}
},
]

const ArtisanSidebar = () => {
  return (
    <div className="artisan-sidebar">
      <div className="artisan-sidebar-container">
        <div className="artisan-sidebar-container-top">
          
          <div className="artisan-sidebar-button">
            <img src={dashboardIcon} alt="sidebar icon" className="artisan-sidebar-icon" />
            <p className="artisan-sidebar-paragraph"></p>
          </div>

          <div className="artisan-sidebar-button">
            <img src={profileIcon} alt="sidebar icon" className="artisan-sidebar-icon" />
            <p className="artisan-sidebar-paragraph"></p>
          </div>

          <div className="artisan-sidebar-button">
            <img src={projectsIcon} alt="sidebar icon" className="artisan-sidebar-icon" />
            <p className="artisan-sidebar-paragraph"></p>
          </div>

          <div className="artisan-sidebar-button">
            <img src={paymentsIcon} alt="sidebar icon" className="artisan-sidebar-icon" />
            <p className="artisan-sidebar-paragraph"></p>
          </div>

          <div className="artisan-sidebar-button">
            <img src={historyIcon} alt="sidebar icon" className="artisan-sidebar-icon" />
            <p className="artisan-sidebar-paragraph"></p>
          </div>

          <div className="artisan-sidebar-button">
            <img src={supportIcon} alt="sidebar icon" className="artisan-sidebar-icon" />
            <p className="artisan-sidebar-paragraph"></p>
          </div>


        </div>


        <div className="artisan-sidebar-container-bottom">

          <div className="artisan-sidebar-button">
            <img src={settingsIcon} alt="sidebar icon" className="artisan-sidebar-icon" />
            <p className="artisan-sidebar-paragraph"></p>
          </div>

          <div className="artisan-sidebar-button">
            <img src={logoutIcon} alt="sidebar icon" className="artisan-sidebar-icon" />
            <p className="artisan-sidebar-paragraph"></p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ArtisanSidebar;

// const ArtisanSidebarButton = (icons, title, link) => {
//   return (
//     <Link to={link} >
//       <div className="artisan-sidebar-button">
//         <img src={icons} alt="sidebar icon" className="artisan-sidebar-icon" />
//         <p className="artisan-sidebar-paragraph">{title}</p>
//       </div>
//     </Link>
//   );
// };
