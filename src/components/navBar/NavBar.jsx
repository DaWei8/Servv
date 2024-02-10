import logo from "../../assets/icons/servv-logo-dk.svg";
import hamburger from "../../assets/icons/hamburger-menu.svg";
import hCancel from "../../assets/icons/cancel-icon.svg";

import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [clickState, setClickState] = useState(true);

  const [authState, setAuthState] = useState(false);

  const handleMenuClick = () => {
    return setClickState(false);
  };
  const handleCancelClick = () => {
    return setClickState(true);
  };
  return (
    <div className=" w-screen max-w-[1440px]  px-[16px] md:pt-[20px] pt-[10px] pb-[5px] sticky top-0 bg-transparent-bg-blur backdrop-blur-[20px] z-10 rounded-b-[20px] shadow-3xl ">
      <div className=" mx-auto flex items-center w-full justify-between ">
        <div className="logo__container hidden md:flex 2xl:w-[180px] ">
          <Link to="/">
            <img className=" h-[55px] " src={logo} alt="Servv Logo" />
          </Link>
        </div>
        <div className="logo__container flex md:hidden ">
          <Link to="/">
            <img className=" h-[55px] " src={logo} alt="Servv Logo" />
          </Link>
        </div>

        <ul className="navbar__menu items-center lg:flex gap-[40px] hidden ">
          <li>
            <Link to="/">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <p>About</p>
            </Link>
          </li>
          <li>
            <Link to="/marketplace">
              <p className=" text-[20px] font-[700] " >Marketplace</p>
            </Link>
          </li>
          <li>
            <Link to="/for">
              <p>For you</p>
            </Link>
          </li>
          <li>
            <Link to="/support">
              <p>Support</p>
            </Link>
          </li>
        </ul>
        <div className="">
          {authState ? (
            <Link to="/authPage" className="lg:flex hidden ">
              <button className=" relative bg-primary-button-color-blue rounded-[100px] h-[40px] text-primary-text-color-white flex items-center justify-center w-[40px]  ">
                <div className="profile__state inactive absolute rounded-[40px] w-[11px] h-[11px] bottom-[0px] right-[3px] bg-default-green "></div>
                D
              </button>
            </Link>
          ) : (
            <div
              className=" flex flex-row gap-[20px] flex-auto text-[14px] "
              onClick={() => setAuthState(true)}
            >
              <Link
                to="/authPage/signup"
                className="  h-[40px] max-w-[130px] hidden lg:flex items-center justify-center "
              >
                <p className=" text-main-color ">Sign Up</p>
              </Link>
              <Link
                to="/authPage"
                className=" border-button-blue h-[40px] max-w-[100px] hidden lg:flex items-center justify-center "
              >
                <p className="text-main-color">Login</p>
              </Link>
            </div>
          )}
        </div>

        <div onClick={handleMenuClick} className=" flex lg:hidden ">
          <img src={hamburger} alt="hamburger menu icon" />
        </div>
      </div>

      {/* mobile nav bar */}
      {clickState !== true ? (
        <div className=" lg:hidden  bg-[#ffffff] absolute flex-col p-[20px] top-0 right-0 z-[100] flex h-screen w-full pt-[10px] gap-[60px] ">
          <div className=" flex justify-between w-full h-fit ">
            <div className="flex items-center ">
              <div className=" flex md:hidden ">
                <img className=" h-[55px] px-0  " src={logo} alt="Servv Logo" />
              </div>
            </div>

            <button
              onClick={handleCancelClick}
              className="flex p-0  bg-transparent items-center justify-center "
            >
              <img src={hCancel} alt="close-menu" />
            </button>
          </div>

          <ul className="flex flex-col px-[10px] text-[#232E35] justify-between gap-[35px] text-[14px] ">
            <Link
              className=" mobile-nav-button text-[14px] p-[15px] rounded-[5px] bg-[#EDF5FF] "
              onClick={handleCancelClick}
              to="/"
            >
              <p>Home</p>
            </Link>
            <Link className=" mobile-nav-button text-[14px] p-[15px] rounded-[5px] bg-[#EDF5FF] " onClick={handleCancelClick} to="/about">
              <p>About</p>
            </Link>
            {/* <li><Link to="/marketplace">Marketplace</Link></li> */}
            <Link className=" mobile-nav-button text-[14px] p-[15px] rounded-[5px] bg-[#EDF5FF] " onClick={handleCancelClick} to="/for">
              <p>For you</p>
            </Link>

            <Link className=" mobile-nav-button text-[14px] p-[15px] rounded-[5px] bg-[#EDF5FF] " onClick={handleCancelClick} to="/support">
              <p>Support</p>
            </Link>

            <div className=" flex flex-col gap-[20px] ">
              {authState ? (
                <Link to="/authPage">
                  <button className=" relative rounded-[5px] h-[50px] bg-primary-button-color-blue text-primary-text-color-white flex items-center justify-center w-full  ">
                    <div className="profile__state inactive absolute rounded-[40px] w-[40px] h-[20px] bottom-1/2 top-4 right-[3px] bg-default-green "></div>
                    D
                  </button>
                </Link>
              ) : (
                <div
                  className=" flex flex-row gap-[20px] flex-auto "
                  onClick={() => setAuthState(true)}
                >
                  <Link
                    to="/authPage"
                    className=" border-button-blue h-[50px] flex items-center flex-auto justify-center "
                  >
                    Login
                  </Link>
                  <Link
                    to="/authPage/signup"
                    className=" border-button-blue h-[50px] flex items-center flex-auto justify-center "
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </ul>
        </div>
      ) : (
        <div className=" hidden "></div>
      )}
    </div>
  );
};

export default NavBar;
