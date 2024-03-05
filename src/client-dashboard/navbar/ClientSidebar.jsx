/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


import {sidebarContentTopClient, sidebarContentBottomClient } from "../../data/Datasets";

const ClientSidebar = () => {
  return (
    <div
      className={
        " hidden pl-[6px] sticky lg:py-[10px] max-h-[100%] lg:rounded-[10px] bg-primary-bg-color-white shadow-3xl justify-center lg:flex lg:left-[20px] lg:top-[0px] duration-[500ms] "
      }
    >
      <div className=" justify-between mr-[6px] flex-col flex rounded-[10px] h-full lg:px-0 px-[20px] group  duration-[500ms]  ">
        <div className=" flex flex-col gap-[10px] ">
          {sidebarContentTopClient.map((content, index) => (
            <ClientSidebarButton
              key={index}
              icon={content.icon}
              title={content.title}
              link={content.link}
            />
          ))}
        </div>

        <div className=" flex flex-col  gap-[10px] ">
          {sidebarContentBottomClient.map((content, index) => (
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
    <Link to={props.link} className=" w-fit " >
      <div className=" hover:bg-pale-blue-grey lg:shadow-none w-[170px] bg-primary-bg-color-white shadow-3xl flex gap-[10px] lg:py-[12px] py-[15px] px-[16px] items-center rounded-[8px] duration-500 ">
        <img
          src={props.icon}
          alt="sidebar icon"
          className=" min-w-[20px] max-w-[20px] "
        />
        <p className=" text-[14px] font-[400] flex leading-[27px] text-primary-text-color-black ">
          {props.title}
        </p>
      </div>
    </Link>
  );
};
