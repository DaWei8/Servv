import backgroundImg from "../../assets/icons/bg-logo.png";
import SearchBar from "./SearchBar"

const MarketPlaceHero = () => {
  return (
    <div className="flex relative flex-col bg-primary-bg-color-blue pt-[100px] justify-center items-center pb-[40px] gap-[50px] text-primary-text-color-white overflow-hidden ">
      <div className=" absolute -z-1 ">
        <img
          className="flex self-center justify-self w-[1800px] -rotate-[30deg]"
          src={backgroundImg}
          alt="background image"
        />
      </div>
      <div className=" flex flex-col gap-[10px] items-center ">
        <h1 className=" text-[48px] font-[600] ">
          Nigeria’s No.1 Artisan Marketplace
        </h1>
        <p className=" text-[14px] ">Find any local artisan near you</p>
      </div>
      <div className=" text-primary-text-color-black flex w-full items-center justify-center ">
        <SearchBar />
      </div>
    </div>
  );
};

export default MarketPlaceHero;
