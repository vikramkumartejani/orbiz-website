"use client";
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const categories = [
  { name: "All Categories", image: "/assets/icons/grid.svg" },
  { name: "Accounting", image: "/assets/icons/accounting.svg" },
  { name: "Business & Payments", image: "/assets/icons/pie-chart.svg" },
  { name: "Data & Analytics", image: "/assets/icons/database.svg" },
  { name: "Ecommerce", image: "/assets/icons/shopping-cart.svg" },
  { name: "Finance", image: "/assets/icons/finance.svg" },
  { name: "Marketing & Sales", image: "/assets/icons/shopping-bag.svg" },
  { name: "Productivity", image: "/assets/icons/smile.svg" },
  { name: "Support", image: "/assets/icons/help-circle.svg" },
  { name: "Text", image: "/assets/icons/clipboard.svg" },
];

export default function DropdownTabs({ onSelectCategory }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (category) => {
    setSelectedCategory(category.name);
    setIsOpen(false);
    onSelectCategory(category.name);
  };

  return (
    <div className="relative w-full block md:hidden">
      <div
        className="w-full h-[40px] border border-borderColor rounded-lg shadow-custom flex items-center justify-between px-3 cursor-pointer"
        onClick={toggleDropdown}
      >
        <h2 className="text-dropdownFilterText text-[16px] leading-[25px] font-normal">
          {selectedCategory}
        </h2>
        <IoIosArrowDown
          className={`text-dropdownFilterText text-[20px] transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      {isOpen && (
        <div className="py-3 absolute top-[100%] left-0 mt-2 w-full border border-borderColor rounded-lg bg-white shadow-custom z-10">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex items-center px-3 py-2 text-dropdownFilterText hover:bg-[#F0F0F0] cursor-pointer"
              onClick={() => handleOptionClick(category)}
            >
              <Image
                src={category.image}
                alt={category.name}
                width={20}
                height={20}
              />
              <h3 className="text-[16px] leading-[25.6px] font-normal ml-3">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
