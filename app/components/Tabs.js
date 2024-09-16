"use client";
import Image from "next/image";
import { useState } from "react";

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

export default function Tabs({ onSelectCategory, requestApp }) {
  const [selected, setSelected] = useState("All Categories");

  const handleClick = (category) => {
    setSelected(category.name);
    onSelectCategory(category.name);
  };

  return (
    <div className="min-w-[220px] md:block hidden">
      <h1 className="text-heading text-[24px] leading-[31.4px] font-medium mb-8">
        Categories
      </h1>
      <ul className="border-l-2 border-borderColor">
        {categories.map((category) => (
          <li
            key={category.name}
            className={`pl-4 flex items-center cursor-pointer py-1   ${
              selected === category.name
                ? "border-l-2 border-blue-600 text-btn ml-[-1px]"
                : "text-secondaryText ml-[1px]"
            }`}
            onClick={() => handleClick(category)}
          >
            <div className="flex items-center gap-3">
              <Image
                src={category.image}
                alt={category.name}
                width={20}
                height={20}
              />
              <h3 className="text-[16px] leading-[25.6px] font-normal">
                {category.name}
              </h3>
            </div>
          </li>
        ))}
      </ul>
      {requestApp && (
        <>
          <div className="py-8">
            <div className=" border-dashed border border-borderColor"></div>
          </div>
          <div data-aos="fade-up">
            <h1 className="text-heading text-[16px] leading-[25px] font-medium mb-1">
              Request App
            </h1>
            <p className="text-secondaryText text-[14px] font-normal leading-[21px] max-w-[200px]">
              Can’t find what you’re looking for? Let us know.
            </p>
            <button className="text-heading text-[14px] leading-[21px] scale-105 hover:scale-100 transition-all duration-300 font-semibold border border-borderColor bg-[#FFFFFF] w-[120px] h-[40px] rounded-[1000px] mt-4">
              Request App
            </button>
          </div>
        </>
      )}
    </div>
  );
}
