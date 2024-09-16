import React from "react";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SubscribeSection = () => {
  return (
    <div className="md:w-auto w-full">
      <div className="p-[24px] bg-[#F0F0FF] rounded md:w-auto w-full">
        <h2 className="text-[20px] font-[500] text-heading leading-[28px] mb-[8px]">
          Never miss new content
        </h2>
        <p className="text-secondaryText text-[16px] font-[400] leading-[25.6px] mb-[24px]">
          Subscribe to keep up with the latest strategic finance content.
        </p>

        <div className="flex flex-col gap-[12px]">
          <input
            type="email"
            placeholder="Email"
            className="px-[12px] py-[11px] rounded-[10px] border border-borderColor"
          />
          <button className="bg-btn text-white font-bold py-[11.5px] w-full font-[600] text-[16px] leading-[24.8px] rounded-full hover:bg-[#5F69F2]">
            Subscribe
          </button>
        </div>
      </div>
      <div className="mt-[32px] flex items-center gap-[16px]">
        <p className="text-[16px] font-[400] leading-[25.6px] text-secondaryText">
          Share:
        </p>
        <div className="flex gap-[12px]">
          <a
            href="#"
            className="text-dropdownFilterText flex items-center justify-center bg-[#ECEFF3] w-[32px] h-[32px] rounded-full"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            className="text-dropdownFilterText flex items-center justify-center bg-[#ECEFF3] w-[32px] h-[32px] rounded-full"
          >
            <FaXTwitter />
          </a>
          <a
            href="#"
            className="text-dropdownFilterText flex items-center justify-center bg-[#ECEFF3] w-[32px] h-[32px] rounded-full"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
