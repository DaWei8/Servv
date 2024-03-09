import backgroundImg from "../../assets/icons/bg-logo.png";
import SearchBar from "./SearchBar"

const MarketPlaceHero = () => {
  return (
    <div className="flex w-[100%] relative flex-col bg-primary-bg-color-blue pt-[100px] justify-center items-center pb-[40px] gap-[50px] text-primary-text-color-white overflow-hidden ">
      <div className=" absolute -z-2 ">
        <img
          className="flex self-center justify-self w-[1800px] -rotate-[30deg]"
          src={backgroundImg}
          alt="background image"
        />
      </div>
      <div className=" flex flex-col gap-[10px] items-center ">
        <h1 className=" md:text-[48px] text-[42px] text-center font-[600] px-[20px] ">
          Nigeria’s No.1 Artisan Marketplace
        </h1>
        <p className=" text-[14px] ">Find any local artisan near you</p>
      </div>
      <div className=" text-primary-text-color-black px-[20px] flex w-full items-center justify-center ">
        <SearchBar />
      </div>
    </div>
  );
};

export default MarketPlaceHero;
