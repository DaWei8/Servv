import Dropdown from "../Dropdown/Dropdown";
import "./SearchBar.css";

import searchIcon from "../../assets/icons/search-icon.svg";

const SearchBar = () => (
  <div className="search__bar">
    <div className="search__bar-container">
      <input type="text" placeholder="Search..." />
      <div className="search-button">
        <img src={searchIcon} alt="Search Icon" />
      </div>
    </div>
    <Dropdown />
  </div>
);

export default SearchBar;
