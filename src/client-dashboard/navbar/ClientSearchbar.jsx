import "./ClientTopbar.scss";
import searchIcon from "../../assets/icons/search-icon.svg";


const ClientSearchBar = () => (
    <div className="search__bar">
      <div className="search__bar-container">
        <input type="text" placeholder="Search..." />
        <div className="search-button">
          <img src={searchIcon} alt="Search Icon" />
        </div>
      </div>
    </div>
  );

  export default ClientSearchBar;