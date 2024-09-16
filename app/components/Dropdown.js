import { useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Dropdown = ({ options, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(placeholder);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div
        className="md:w-[170px] w-full h-[40px] border border-borderColor rounded-lg shadow-custom flex items-center justify-between px-3 cursor-pointer"
        onClick={toggleDropdown}
      >
        <h2 className="text-dropdownFilterText text-[16px] leading-[25px] font-normal">
          {selectedOption}
        </h2>
        <IoIosArrowDown
          className={`text-dropdownFilterText text-[20px] transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      {isOpen && (
        <div className="absolute top-[100%] left-0 mt-2 w-full border border-borderColor rounded-lg bg-white shadow-custom z-10">
          {options.map((option, index) => (
            <div
              key={index}
              className="px-3 py-2 text-dropdownFilterText hover:bg-[#F0F0F0] cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
