import searchIcon from "../../assets/icons/search-icon.svg";
import "./ArtisanSearchBar.scss";


const ArtisanSearchBar = () => (
        <div className="artisan-search__bar">
          <div className="artisan-search__bar-container">
            <input type="text" placeholder="Search" />
            <div className="artisan-search-button">
              <img src={searchIcon} alt="artisan-search Icon" />
            </div>
          </div>
        </div>
      );

      

      export default ArtisanSearchBar;