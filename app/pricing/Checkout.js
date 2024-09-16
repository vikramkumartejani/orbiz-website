"use client";
import React, { useState } from "react";
import {
  IoIosCheckmarkCircleOutline,
  IoIosCloseCircleOutline,
} from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

const checkoutData = [
  {
    label: "Credit and debit cards",
    icons: [
      <IoIosCheckmarkCircleOutline
        color="#40C4AA"
        size={24}
        key="checkmark1"
      />,
      <IoIosCheckmarkCircleOutline
        color="#40C4AA"
        size={24}
        key="checkmark2"
      />,
    ],
  },
  {
    label: "International card payments",
    icons: [
      <IoIosCheckmarkCircleOutline
        color="#40C4AA"
        size={24}
        key="checkmark3"
      />,
      <IoIosCheckmarkCircleOutline
        color="#40C4AA"
        size={24}
        key="checkmark4"
      />,
    ],
  },
  {
    label: "Links",
    icons: [
      <IoIosCheckmarkCircleOutline
        color="#40C4AA"
        size={24}
        key="checkmark5"
      />,
      <IoIosCheckmarkCircleOutline
        color="#40C4AA"
        size={24}
        key="checkmark6"
      />,
    ],
  },
  {
    label: "Links",
    icons: [
      <IoIosCheckmarkCircleOutline
        color="#40C4AA"
        size={24}
        key="checkmark7"
      />,
      <IoIosCheckmarkCircleOutline
        color="#40C4AA"
        size={24}
        key="checkmark8"
      />,
    ],
  },
  {
    label: "Settle and pay out in additional currencies",
    icons: [
      <IoIosCheckmarkCircleOutline
        color="#40C4AA"
        size={24}
        key="checkmark9"
      />,
      <IoIosCheckmarkCircleOutline
        color="#40C4AA"
        size={24}
        key="checkmark10"
      />,
    ],
  },
  {
    label: "3D Secure authentication",
    icons: [
      <IoIosCheckmarkCircleOutline
        color="#40C4AA"
        size={24}
        key="checkmark11"
      />,
      <IoIosCheckmarkCircleOutline
        color="#40C4AA"
        size={24}
        key="checkmark12"
      />,
    ],
  },
  {
    label: "Card account updater",
    icons: [
      <IoIosCloseCircleOutline color="#DF1C41" size={24} key="close1" />,
      <IoIosCheckmarkCircleOutline
        color="#40C4AA"
        size={24}
        key="checkmark13"
      />,
    ],
  },
  {
    label: "Adaptive Acceptance",
    icons: [
      <IoIosCloseCircleOutline color="#DF1C41" size={24} key="close2" />,
      <IoIosCheckmarkCircleOutline
        color="#40C4AA"
        size={24}
        key="checkmark14"
      />,
    ],
  },
  {
    label: "Network tokens",
    icons: [
      <IoIosCloseCircleOutline color="#DF1C41" size={24} key="close3" />,
      <IoIosCheckmarkCircleOutline
        color="#40C4AA"
        size={24}
        key="checkmark15"
      />,
    ],
  },
  {
    label: "Disputes",
    icons: [
      <IoIosCheckmarkCircleOutline
        color="#40C4AA"
        size={24}
        key="checkmark16"
      />,
      <IoIosCheckmarkCircleOutline
        color="#40C4AA"
        size={24}
        key="checkmark17"
      />,
    ],
  },
];

const Checkout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div data-aos="fade-up" className="max-w-[1200px] mx-auto">
      {/* Header Section */}
      <div
        className="flex justify-between border-b border-b-borderColor py-[16px] gap-1 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3>Checkout</h3>
        {/* Toggle Arrow based on dropdown state */}
        <span
          className={`${
            isOpen ? "rotate-[180deg]" : ""
          } transition-all duration-300 ease-in-out`}
        >
          <MdKeyboardArrowDown size={20} />
        </span>
      </div>

      {/* Dropdown Content - Conditionally rendered with transitions */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {checkoutData.map((item, index) => (
          <div
            key={index}
            className="grid md:grid-cols-3 grid-cols-[2fr_1fr_1fr] border-b border-b-borderColor py-[16px] gap-1"
          >
            <p className="sm:text-[16px] text-[14px] text-secondaryText">
              {item.label}
            </p>
            {/* Displaying icons dynamically from the array */}
            {item.icons.map((icon, i) => (
              <span key={i} className="min-h-[20px] min-w-[20px] ms-[20px]">
                {icon}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checkout;
