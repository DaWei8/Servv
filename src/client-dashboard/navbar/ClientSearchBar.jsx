import searchIcon from "../../assets/icons/search-icon.svg";
// import "./ClientSearchBar.scss";

const ClientSearchBar = () => (
  <div className=" flex flex-auto relative lg:min-w-[300px] items-center justify-center h-[50px] " >
    <input
      type="text"
      placeholder="Search"
      className=" bg-[#B4CCFC1A] text-primary-text-color-black rounded-[5px] items-center justify-center flex-auto py-[10px] px-[15px] flex mb-[10px] "
    ></input>
    <img
      src={searchIcon}
      className=" w-[20px] h-[20px] absolute right-[10px] top-[10px] flex self-center  "
      alt="Client-search Icon"
    />
  </div>
);

export default ClientSearchBar;
