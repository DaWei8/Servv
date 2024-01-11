import searchIcon from "../../assets/icons/search-icon-black.svg";
// import "./ArtisanSearchBar.scss";

const ArtisanSearchBar = () => (
  <div className=" flex flex-auto relative lg:min-w-[300px] items-center justify-center h-[50px] " >
    <input
      type="text"
      placeholder="Search"
      className=" bg-[#B4CCFC1A] text-primary-text-color-black rounded-[5px] items-center justify-center flex-auto py-[10px] px-[15px] flex mb-[10px] "
    ></input>
    <img
      src={searchIcon}
      className=" w-[20px] h-[20px] absolute right-[10px] top-[10px] flex self-center  "
      alt="artisan-search Icon"
    />
  </div>
);

export default ArtisanSearchBar;
