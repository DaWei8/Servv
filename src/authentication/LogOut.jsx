import { Link } from "react-router-dom";
import logoutIcon from "../assets/icons/logout-icon.svg";
// import { useState } from "react";

export default function LogOut() {
  return (
    <div className=" w-screen h-full flex pt-[200px] justify-center bg-transparent-bg-blur backdrop-blur-3xl absolute right-0">
      <div className=" max-w-[600px] h-fit bg-primary-bg-color-white rounded-[10px] flex flex-col py-[60px] px-[80px] shadow-3xl h- ">
        <div className=" flex flex-col items-center gap-[35px] ">
          <div className=" flex flex-col gap-[16px] ">
            <h2 className=" text-[32px] font-[600] text-center ">Log Out</h2>
            <p className=" leading-[160%] text-[14px] text-center ">
              Are you sure you want to log out of your Servv account?
            </p>
          </div>
          <img src={logoutIcon} alt="log out icon" />
          <div className=" flex flex-row flex-auto gap-[15px] ">
            <Link to={"..//"}>
              <button className=" h-[50px] border-button-blue ">Log out</button>
            </Link>
            <Link to={"../artisanDashboard"} >
              <button className=" h-[50px] primary-button-blue ">Cancel</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
