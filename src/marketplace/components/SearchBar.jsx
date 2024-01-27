import Dropdown from "../../components/Dropdown/Dropdown";
import searchIcon from "../../assets/icons/search-icon-black.svg";

const SearchBar = () => (
  <div className="flex gap-[6px] max-w-[600px] flex-row-reverse md:flex-row flex-auto w-full ">
    <div className="relative flex rounded-[5px] h-[50px] overflow-hidden flex-auto min-w-[150px] ">
      <input
        type="text"
        placeholder="Search..."
        className=" bg-pale-blue-grey flex flex-auto w-full h-[50px] px-[10px] "
      />
      <button className="flex items-center w-[50px] h-[50px] absolute right-0 ">
        <img src={searchIcon} alt="Search Icon" className="mx-auto  " />
      </button>
    </div>
    <Dropdown />
  </div>
);

export default SearchBar;
