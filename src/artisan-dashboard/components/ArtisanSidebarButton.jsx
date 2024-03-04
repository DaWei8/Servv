/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

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
      
      export default  ArtisanSidebarButton