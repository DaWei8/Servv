import { useState } from "react";
import "./Dropdown.css";
import arrowDown from "../../assets/icons/arrowDown.svg";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    "Nigeria",
    "United States of America",
    "United Kingdom",
    "All",
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        <div className="dropdown-placeholder">
          {selectedOption ? selectedOption : "Location"}
        </div>
        <img src={arrowDown} alt="dropdown arrow" />
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li
              key={option}
              className="dropdown-item"
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
