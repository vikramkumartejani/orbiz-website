"use client";
import React, { useState } from "react";
import {
  IoIosCheckmarkCircleOutline,
  IoIosCloseCircleOutline,
} from "react-icons/io";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

// Data array to store all the payment information
const paymentData = [
  {
    label: "Credit and debit cards",
    icons: [
      <IoIosCheckmarkCircleOutline color="#40C4AA" size={24} />,
      <IoIosCheckmarkCircleOutline color="#40C4AA" size={24} />,
    ],
  },
  {
    label: "International card payments",
    icons: [
      <IoIosCheckmarkCircleOutline color="#40C4AA" size={24} />,
      <IoIosCheckmarkCircleOutline color="#40C4AA" size={24} />,
    ],
  },
  {
    label: "Links",
    icons: [
      <IoIosCheckmarkCircleOutline color="#40C4AA" size={24} />,
      <IoIosCheckmarkCircleOutline color="#40C4AA" size={24} />,
    ],
  },
  {
    label: "Links",
    icons: [
      <IoIosCheckmarkCircleOutline color="#40C4AA" size={24} />,
      <IoIosCheckmarkCircleOutline color="#40C4AA" size={24} />,
    ],
  },
  {
    label: "Settle and pay out in additional currencies",
    icons: [
      <IoIosCheckmarkCircleOutline color="#40C4AA" size={24} />,
      <IoIosCheckmarkCircleOutline color="#40C4AA" size={24} />,
    ],
  },
  {
    label: "3D Secure authentication",
    icons: [
      <IoIosCheckmarkCircleOutline color="#40C4AA" size={24} />,
      <IoIosCheckmarkCircleOutline color="#40C4AA" size={24} />,
    ],
  },
  {
    label: "Card account updater",
    icons: [
      <IoIosCloseCircleOutline color="#DF1C41" size={24} />,
      <IoIosCheckmarkCircleOutline color="#40C4AA" size={24} />,
    ],
  },
  {
    label: "Adaptive Acceptance",
    icons: [
      <IoIosCloseCircleOutline color="#DF1C41" size={24} />,
      <IoIosCheckmarkCircleOutline color="#40C4AA" size={24} />,
    ],
  },
  {
    label: "Network tokens",
    icons: [
      <IoIosCloseCircleOutline color="#DF1C41" size={24} />,
      <IoIosCheckmarkCircleOutline color="#40C4AA" size={24} />,
    ],
  },
  {
    label: "Disputes",
    icons: [
      <IoIosCheckmarkCircleOutline color="#40C4AA" size={24} />,
      <IoIosCheckmarkCircleOutline color="#40C4AA" size={24} />,
    ],
  },
];

const PaymentDropdown = () => {
  // State to control the dropdown visibility
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div data-aos="fade-up" className="max-w-[1200px] mx-auto">
      {/* Header Section */}
      <div
        className="flex justify-between border-b border-b-[#DFE1E7] py-[16px] gap-1 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3>Payments</h3>
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
        {paymentData.map((item, index) => (
          <div
            key={index}
            className="grid md:grid-cols-3 grid-cols-[2fr_1fr_1fr] border-b border-b-[#DFE1E7] py-[16px] gap-1"
          >
            <p className="sm:text-[16px] text-[14px] text-[#666D80]">
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

export default PaymentDropdown;
