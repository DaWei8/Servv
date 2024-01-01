import logo from "../../assets/icons/servv-logo-dk.svg";
import hamburger from "../../assets/icons/hamburger-menu.svg";
import hCancel from "../../assets/icons/cancel-icon.svg";

// import "./NavBar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [clickState, setClickState] = useState(true);

  const handleMenuClick = () => {
    return setClickState(false);
  };
  const handleCancelClick = () => {
    return setClickState(true);
  };
  return (
    <div className=" w-screen px-[16px] md:pt-[20px] pt-[10px] pb-[5px] fixed right-0 left-0 top-0 bg-transparent-bg-blur backdrop-blur-[20px] z-10 ">
      <div className=" container mx-auto flex items-center w-full justify-between ">
        <div className="logo__container hidden md:flex ">
          <Link to="/">
            <img className=" h-[55px] " src={logo} alt="Servv Logo" />
          </Link>
        </div>
        <div className="logo__container flex md:hidden ">
          <Link to="/">
            <img className=" h-[55px] " src={logo} alt="Servv Logo" />
          </Link>
        </div>

        <ul className="navbar__menu items-center md:flex gap-[40px] hidden ">
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
          {/* <li><Link to="/marketplace">Marketplace</Link></li> */}
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
        <div className="profile__button md:flex hidden  ">
          <Link to="/authPage">
            <button className=" relative bg-primary-button-color-blue rounded-[100px] h-[40px] text-primary-text-color-white flex items-center justify-center w-[40px]  ">
              <div className="profile__state inactive absolute rounded-[40px] w-[11px] h-[11px] bottom-[0px] right-[3px] bg-default-green "></div>
              D
            </button>
          </Link>
        </div>

        <div onClick={handleMenuClick} className=" flex md:hidden ">
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
            <li className="text-[14px] p-[15px] rounded-[5px] bg-[#EDF5FF] ">
              <Link onClick={handleCancelClick} to="/">
                <p>Home</p>
              </Link>
            </li>
            <li className="text-[14px] p-[15px] rounded-[5px] bg-[#EDF5FF] ">
              <Link onClick={handleCancelClick} to="/about">
                <p>About</p>
              </Link>
            </li>
            {/* <li><Link to="/marketplace">Marketplace</Link></li> */}
            <li className="text-[14px] p-[15px] rounded-[5px] bg-[#EDF5FF] ">
              <Link onClick={handleCancelClick} to="/for">
                <p>For you</p>
              </Link>
            </li>
            <li className="text-[14px] p-[15px] rounded-[5px] bg-[#EDF5FF] ">
              <Link onClick={handleCancelClick} to="/support">
                <p>Support</p>
              </Link>
            </li>
            <div className="profile__button  ">
              <Link to="/authPage">
                <button className=" relative rounded-[5px] h-[40px] bg-primary-button-color-blue text-primary-text-color-white flex items-center justify-center w-full  ">
                  <div className="profile__state inactive absolute rounded-[40px] w-[11px] h-[11px] bottom-1/2 top-1/2 right-[3px] bg-default-green "></div>
                  D
                </button>
              </Link>
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
