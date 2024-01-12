import { useState } from "react";
// import "./Dropdown.css";
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
    <div className="dropdown flex flex-col bg-pale-blue-grey rounded-[5px] gap-[10px] shadow-2xl  ">
      <button className="dropdown-toggle flex-auto justify-between flex p-[10px] items-center gap-[10px] " onClick={toggleDropdown}>
        <div className="dropdown-placeholder">
          <p className=" w-[80px] truncate " >{selectedOption ? selectedOption : "Location"}</p>
        </div>
        <img src={arrowDown} alt="dropdown arrow" />
      </button>
      {isOpen && (
        <ul className="dropdown-menu p-[10px] flex flex-col gap-[10px]  ">
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
